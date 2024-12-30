'use client';
import { useEffect, useRef, useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addTripDetails, totalDistance, updateDropCity, updatePickupCity } from "../../store/TripSlice";
import { useRouter } from 'next/navigation';


export default function Home() {
  const [tripType, setTripType] = useState('One Way');
  const [formData, setFormData] = useState({
    from: '',
    to: '',
    date: '',
    time: '',
    dateend: '',
    timeend: '',
    name: '',
    phone: '',
    email: '',
    selectPackage: '4', // Default package for rental
    pickup: "",
    drop: ""
  });
  const dispatch = useDispatch();
  const router = useRouter();
  const pickupRef = useRef(null);
  const dropRef = useRef(null);
  const [loading, setLoading] = useState(false);


  const handleSelectChange = (e) => {
    setTripType(e.target.value);
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const diff = new Date(formData.dateend).getTime() - new Date(formData.date).getTime();
    const day = diff / (1000 * 3600 * 24);

    const id = "AIM" + new Date().getTime();
    localStorage.setItem("bookid", id);

    const visitor = {
      bookid: id,
      name: formData.name,
      email: formData.email,
      phone: formData.phone,
      trip: tripType,
      pickup_location: formData.pickup,
      drop_location: formData.drop,
      date: formData.date,
      time: formData.time,
      dateend: formData.dateend,
      timeend: formData.timeend,
      oneway_distance: "",
      round_distance: "",
      hours: formData.selectPackage
    }

    // Initialize DirectionsService
    const destinationService = new window.google.maps.DirectionsService();

    const request = {
      origin: formData.from,
      destination: formData.to,
      travelMode: window.google.maps.TravelMode.DRIVING, // Change this based on your travel mode
    };

    // Use promise to handle asynchronous Google Maps API call
    const calculateDistance = new Promise((resolve, reject) => {
      destinationService.route(request, (result, status) => {
        if (status === window.google.maps.DirectionsStatus.OK) {
          if (result && result.routes[0].legs[0].distance) {
            const distance = result.routes[0].legs[0].distance.value / 1000;
            tripType == "One Way" ? visitor.oneway_distance = distance : tripType == "Round" ? visitor.round_distance = distance : "";
          }
          resolve();  // Resolve the promise after the distance is calculated
        } else {
          reject(new Error('Failed to get route'));
        }
      });
    });

    // Perform the route calculation and post the visitor data in parallel
    try {
      await Promise.all([calculateDistance, axios.post("/api/visit", visitor)]);

      // Store the trip data and navigate after both actions are complete
      localStorage.setItem("trip", JSON.stringify(visitor));
      router.push('/Booking');
    } catch (error) {
      console.error("Error during route calculation or API post:", error);
    }
    finally {
      setLoading(false);
    }
  };



  const handlePlaceChanged = (field) => {
    const place = field.getPlace();
    console.log(place)
    if (place && place.formatted_address) {
      const geocoder = new window.google.maps.Geocoder();

      geocoder.geocode({ address: place.formatted_address }, (result, status) => {
        if (result && result.length > 0) {
          setFormData((prevData) => ({
            ...prevData,
            [field === pickupRef.current ? 'pickup' : 'drop']: place.formatted_address,
            [field === pickupRef.current ? 'from' : 'to']: place.formatted_address,
          }));
        }
      })

    }

  }

  return (
    <div className="flex flex-col items-center">
      {/* Header Section */}
      <header className="w-full p-5 bg-yellow-500 text-white text-center">
        <h1 className="text-xl font-bold">Book A Cab Now</h1>
      </header>

      {/* Booking Form and Promo Section */}
      <div className="flex justify-between w-full max-w-screen-xl p-5 space-x-4">
        {/* Left side: Carousel/Promo Section */}
        <div className="w-2/3">
          <div id="carouselExampleIndicators" className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner">
              <div className="carousel-item active">
                <div className="bg-transparent text-center py-12 px-8">
                  <h2 className="text-2xl font-bold text-black mb-4">15% off on One Way & Round Trips</h2>
                  <div className="flex justify-center">
                    <span className="border border-white px-4 py-2 text-white bg-black">AIMNEW15</span>
                    <button className="ml-4 px-4 py-2 bg-white text-black rounded">Copy</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right side: Booking Form */}
        <div className="w-1/3 p-4 bg-gray-100 rounded-lg" id="booking-form">
          <LoadScript googleMapsApiKey="AIzaSyCelDo4I5cPQ72TfCTQW-arhPZ7ALNcp8w" libraries={['places']}>
            <form onSubmit={handleSubmit} className="space-y-4">
              <h2 className="text-center text-2xl font-semibold">BOOK A CAB NOW</h2>

              {/* Trip Type Selection */}
              <div className="space-y-2">
                <h4 className="text-left text-sm">Trip Type</h4>
                <select
                  className="w-full p-2 bg-yellow-300"
                  name="trip"
                  value={tripType}
                  onChange={handleSelectChange}
                  required
                >
                  <option value="One Way">One Way Trip</option>
                  <option value="Round">Round Trip</option>
                  <option value="Rental">Rental</option>
                </select>
              </div>

              {/* One Way Trip Inputs */}
              {tripType === 'One Way' && (
                <div>
                  <Autocomplete onLoad={ref => pickupRef.current = ref} onPlaceChanged={() => handlePlaceChanged(pickupRef.current)}>
                    <input
                      id='pickup-location'
                      className="w-full p-2 mb-2"
                      name="from"
                      type="text"
                      placeholder="PickUp Location"
                      value={formData.from}
                      onChange={handleChange}
                      required
                    />
                  </Autocomplete>
                  <Autocomplete onLoad={ref => dropRef.current = ref} onPlaceChanged={() => handlePlaceChanged(dropRef.current)}>
                    <input
                      id="drop-location"
                      className="w-full p-2 mb-2"
                      name="to"
                      type="text"
                      placeholder="Drop Location"
                      value={formData.to}
                      onChange={handleChange}
                      required
                    />
                  </Autocomplete>
                  <h5 className="text-left text-sm mt-4">Choose Date and Time</h5>
                  <input
                    className="w-1/2 p-2 mb-2"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-1/2 p-2 mb-2"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                </div>
              )}

              {/* Round Trip Inputs */}
              {tripType === 'Round' && (
                <div>
                  {/* Pickup and Drop Locations for Round Trip */}
                  <Autocomplete onLoad={ref => pickupRef.current = ref} onPlaceChanged={() => handlePlaceChanged(pickupRef.current)}>
                    <input
                      id='pickup-location'
                      className="w-full p-2 mb-2"
                      name="from"
                      type="text"
                      placeholder="PickUp Location"
                      value={formData.from}
                      onChange={handleChange}
                      required
                    />
                  </Autocomplete>
                  <Autocomplete onLoad={ref => dropRef.current = ref} onPlaceChanged={() => handlePlaceChanged(dropRef.current)}>
                    <input
                      id="drop-location"
                      className="w-full p-2 mb-2"
                      name="to"
                      type="text"
                      placeholder="Drop Location"
                      value={formData.to}
                      onChange={handleChange}
                      required
                    />
                  </Autocomplete>

                  {/* Choose Date and Time for Round Trip */}
                  <h5 className="text-left text-sm mt-4">Choose Date and Time</h5>
                  <input
                    className="w-1/2 p-2 mb-2"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-1/2 p-2 mb-2"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />

                  {/* Return Date and Time */}
                  <h5 className="text-left text-sm mt-4">Return Date and Time</h5>
                  <input
                    className="w-1/2 p-2 mb-2"
                    name="dateend"
                    type="date"
                    value={formData.dateend}
                    onChange={handleChange}
                  />
                  <input
                    className="w-1/2 p-2 mb-2"
                    name="timeend"
                    type="time"
                    value={formData.timeend}
                    onChange={handleChange}
                  />
                </div>
              )}

              {/* Rental Package Selection */}
              {tripType === 'Rental' && (
                <div>
                  {/* Pickup and Drop Locations for Round Trip */}
                  <Autocomplete onLoad={ref => pickupRef.current = ref} onPlaceChanged={() => handlePlaceChanged(pickupRef.current)}>
                    <input
                      id='pickup-location'
                      className="w-full p-2 mb-2"
                      name="from"
                      type="text"
                      placeholder="PickUp Location"
                      value={formData.from}
                      onChange={handleChange}
                      required
                    />
                  </Autocomplete>
                  <Autocomplete onLoad={ref => dropRef.current = ref} onPlaceChanged={() => handlePlaceChanged(dropRef.current)}>
                    <input
                      id="drop-location"
                      className="w-full p-2 mb-2"
                      name="to"
                      type="text"
                      placeholder="Drop Location"
                      value={formData.to}
                      onChange={handleChange}
                      required
                    />
                  </Autocomplete>
                  {/* Choose Date and Time for Round Trip */}
                  <h5 className="text-left text-sm mt-4">Choose Date and Time</h5>
                  <input
                    className="w-1/2 p-2 mb-2"
                    name="date"
                    type="date"
                    value={formData.date}
                    onChange={handleChange}
                    required
                  />
                  <input
                    className="w-1/2 p-2 mb-2"
                    name="time"
                    type="time"
                    value={formData.time}
                    onChange={handleChange}
                    required
                  />
                  <h5 className="text-left text-sm">Choose Package</h5>
                  <select
                    className="w-full p-2 bg-yellow-300"
                    name="selectPackage"
                    value={formData.selectPackage}
                    onChange={handleChange}
                  >
                    <option value="4">4Hrs 40Kms</option>
                    <option value="6">6Hrs 60Kms</option>
                    <option value="8">8Hrs 80Kms</option>
                  </select>
                </div>
              )}

              {/* Personal Details Inputs */}
              <div>
                <input
                  className="w-full p-2 mb-2"
                  name="name"
                  type="text"
                  placeholder="Your Name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full p-2 mb-2"
                  name="phone"
                  type="tel"
                  placeholder="Your Phone Number"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                />
                <input
                  className="w-full p-2 mb-2"
                  name="email"
                  type="email"
                  placeholder="Your Email ID"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>



              <button
                className="relative px-6 py-3 text-white bg-yellow-300 rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
                disabled={loading} // Disable button when loading
              >
                {loading ? (
                  // Spinner shown when loading
                  <div role="status">
                    <svg aria-hidden="true" class="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M100 50.5908C100 78.2051 77.6142 100.591 50 100.591C22.3858 100.591 0 78.2051 0 50.5908C0 22.9766 22.3858 0.59082 50 0.59082C77.6142 0.59082 100 22.9766 100 50.5908ZM9.08144 50.5908C9.08144 73.1895 27.4013 91.5094 50 91.5094C72.5987 91.5094 90.9186 73.1895 90.9186 50.5908C90.9186 27.9921 72.5987 9.67226 50 9.67226C27.4013 9.67226 9.08144 27.9921 9.08144 50.5908Z" fill="currentColor" />
                      <path d="M93.9676 39.0409C96.393 38.4038 97.8624 35.9116 97.0079 33.5539C95.2932 28.8227 92.871 24.3692 89.8167 20.348C85.8452 15.1192 80.8826 10.7238 75.2124 7.41289C69.5422 4.10194 63.2754 1.94025 56.7698 1.05124C51.7666 0.367541 46.6976 0.446843 41.7345 1.27873C39.2613 1.69328 37.813 4.19778 38.4501 6.62326C39.0873 9.04874 41.5694 10.4717 44.0505 10.1071C47.8511 9.54855 51.7191 9.52689 55.5402 10.0491C60.8642 10.7766 65.9928 12.5457 70.6331 15.2552C75.2735 17.9648 79.3347 21.5619 82.5849 25.841C84.9175 28.9121 86.7997 32.2913 88.1811 35.8758C89.083 38.2158 91.5421 39.6781 93.9676 39.0409Z" fill="currentFill" />
                    </svg>
                    <span>Loading...</span>
                  </div>
                ) : (

                  <span>Book Now</span> // Text when not loading
                )}
              </button>


            </form>
          </LoadScript>
        </div>
      </div>

      {/* Offer Section */}
      <section className="text-center mt-10">
        <div className="container mx-auto w-full max-w-screen-xl">
          <div className="bg-light p-1">
            <div className="flex justify-between">
              <div className="w-1/2 p-5 flex justify-center">
                <iframe
                  width="300"
                  height="250"
                  src="https://www.youtube.com/embed/gdr4h2QZuFg"
                  title="Hurry Up !! ..Book Your Cab & Get Flat 15% Discount. Aim Cab Pvt Ltd -Car rental service in Pune"
                  frameBorder="0"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="mx-auto"
                ></iframe>
              </div>

              <div className="w-1/2 p-3">
                <h4 className="text-center bg-yellow-500 text-white rounded p-2">
                  15% on All First Ride
                </h4>
                <h5 className="mt-4">Get flat 15% Off on all rides using website</h5>
                <h5>All Credit/Debit Cards</h5>
                <h5>UPI Payments</h5>
                <h5>
                  Use Coupon Code:{" "}
                  <span className="text-white bg-yellow-500 rounded p-2">
                    AIMNEW15
                  </span>
                </h5>
              </div>
            </div>
          </div>
        </div>
      </section>

      <br></br>
      <br></br>

      {/* About Section */}
      <section className="about_section layout_padding" id="about">
        <div className="container-fluid">
          <div className="flex flex-wrap">
            {/* Left Column - About Details */}
            <div className="lg:w-5/12 md:w-5/12 lg:ml-8 md:ml-8 mb-8">
              <div className="detail-box">
                <h2 className="text-4xl font-semibold mb-4">About AIMCAB</h2>
                <p className="text-justify mb-4">
                  Aimcab is a well-established cab and car rental service provider company in India that specializes
                  in rendering long- and short-term car rental service solutions. Our service attributes assure each
                  client's safety, comfort, and reliable service. We grant with a professional team of drivers, who
                  believe in authorizing safe, reliable, and easily accessible cab services in India.
                </p>
                <p className="text-justify mb-4">
                  Our journey begins in 2001 inspired by a system of translucence in pricing and deals with an idea to
                  make it a reality. Since then, with a large variety of important consumers, our cab services have grown
                  rapidly. Aimcab is always available to ensure a hassle-free and memorable ride. While booking a cab on
                  AIM CAB, you do not need to worry about car routes, car hygiene, or pricing. You can choose from a wide
                  variety of options such as sedans and SUVs. You can also connect with the 24/7 customer support service
                  of AIM CAB and ride with the safest and most trusted travel partners. AIM CAB is one of the leading
                  online cab booking platforms in India. We connect people from over 1000+ cities in India with comfortable
                  cab rides.
                </p>
                <a href="#" className="inline-block mt-4 bg-yellow-500 text-white px-6 py-2 rounded-md">BOOK NOW</a>
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="lg:w-6/12 md:w-6/12 mb-8">
              <div className="img-box">
                <img
                  src="/images/slider-2.png"
                  alt="slider-2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="service_section layout_padding" id="service">
        <div className="container mx-auto">
          <div className="heading_container text-center mb-10">
            <h2 className="text-4xl font-bold">
              Our <br />
              Services
            </h2>
          </div>
          <div className="service_container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
            {/* Luxury Cars */}
            <div className="box bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="img-box mb-4">
                <img src="/images/lexi.png" alt="Taxi" height="90" width="90" />
              </div>
              <div className="detail-box">
                <h5 className="text-xl font-semibold mb-2">Luxury Cars</h5>
                <p className="text-gray-600 mb-4">Available All type Luxury Cars</p>
                <a
                  href="#LuxuryCarsBooking.tsx"
                  className="text-blue-500 underline"
                  title="Book Now"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Corporate */}
            <div className="box bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="img-box mb-4">
                <img src="/images/s6.png" alt="S6" height="100" width="80" />
              </div>
              <div className="detail-box">
                <h5 className="text-xl font-semibold mb-2">Corporate</h5>
                <p className="text-gray-600 mb-4">All type of Cab for Corporation</p>
                <a href="tel:9130030054" className="text-blue-500 underline" title="Call Us">
                  Call Us
                </a>
              </div>
            </div>

            {/* Daily Pickup & Drop */}
            <div className="box bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="img-box mb-4">
                <img src="/images/s7.png" alt="S7" height="100" width="100" />
              </div>
              <div className="detail-box">
                <h5 className="text-xl font-semibold mb-2">Daily Pickup & Drop</h5>
                <p className="text-gray-600 mb-4">Daily Cab Service</p>
                <a href="tel:9130030054" className="text-blue-500 underline" title="Call Us">
                  Call Us
                </a>
              </div>
            </div>

            {/* Out Station Cab */}
            <div className="box bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="img-box mb-4">
                <img src="/images/out.png" alt="Out" width="100" height="100" />
              </div>
              <div className="detail-box">
                <h5 className="text-xl font-semibold mb-2">Out Station Cab</h5>
                <p className="text-gray-600 mb-4">All type of Cab for Outstation trip</p>
                <a
                  href="https://aimcabbooking.com/#booking-form"
                  className="text-blue-500 underline"
                  title="Fill the Form"
                >
                  Book Now
                </a>
              </div>
            </div>

            {/* Airport Transport */}
            <div className="box bg-white p-6 rounded-lg shadow-lg text-center">
              <div className="img-box mb-4">
                <img src="/images/airy.png" alt="Airy" height="100" width="100" />
              </div>
              <div className="detail-box">
                <h5 className="text-xl font-semibold mb-2">Airport Transport</h5>
                <p className="text-gray-600 mb-4">Airport Pickup & Drop Service</p>
                <a href="tel:9130030054" className="text-blue-500 underline" title="Call Us">
                  Call Us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="contact_section py-12 bg-gray-200" id="contact">
        <div className="container mx-auto text-center mb-10">
          <h2 className="text-4xl font-bold">Any Problems? Any Questions?</h2>
        </div>
        <div className="container-fluid flex flex-wrap justify-center">
          {/* Contact Form */}
          <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6">
            <div className="contact_form p-6 bg-white shadow-lg rounded-lg">
              <h4 className="text-2xl font-semibold mb-6">Get In Touch</h4>
              <form action="index.php" method="POST">
                <input
                  type="text"
                  name="full_name"
                  placeholder="Full Name"
                  className="w-full p-3 mb-4 border border-gray-300 rounded"
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email ID"
                  className="w-full p-3 mb-4 border border-gray-300 rounded"
                  required
                />
                <input
                  type="text"
                  name="phone"
                  placeholder="Phone Number"
                  className="w-full p-3 mb-4 border border-gray-300 rounded"
                  required
                />
                <textarea
                  name="message"
                  className="w-full p-3 mb-4 border border-gray-300 rounded"
                  style={{ height: '150px' }}
                  placeholder="Message"
                  rows={5}
                  required
                ></textarea>
                <button
                  type="submit"
                  name="message_submit"
                  value="submit"
                  className="w-full py-3 bg-yellow-400 text-white font-semibold rounded"
                >
                  Send
                </button>
              </form>
            </div>
          </div>

          {/* Contact Image */}
          <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6">
            <div className="img-box">
              <img
                src="/images/slider-2.png"
                alt="Contact"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="why_section layout_padding py-12">
        <div className="container mx-auto">
          <div className="heading_container text-center mb-10">
            <h2 className="text-4xl font-bold">
              Why <br />
              Choose Us
            </h2>
          </div>
          <div className="row grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {/* Best Drivers */}
            <div className="box bg-white p-6 rounded-lg shadow-md text-center">
              <div className="img-box mb-4">
                <img
                  src="/images/delivery-man-white.png"
                  alt="delivery-man-white"
                  className="img-1 w-8 h-8"
                />
                <img
                  src="/images/delivery-man-black.png"
                  alt="delivery-man-black"
                  className="img-2 w-12 h-12"
                />
              </div>
              <div className="detail-box">
                <h5 className="text-xl font-semibold mb-2">Best Drivers</h5>
                <h6 className="text-gray-600">
                  We have the best well-trained registered drivers to make your journey safe and secure.
                </h6>
              </div>
            </div>

            {/* Safe and Secure */}
            <div className="box bg-white p-6 rounded-lg shadow-md text-center">
              <div className="img-box mb-4">
                <img
                  src="/images/shield-white.png"
                  alt="shield-white"
                  className="img-1 w-8 h-8"
                />
                <img
                  src="/images/shield-black.png"
                  alt="shield-black"
                  className="img-2 w-8 h-8"
                />
              </div>
              <div className="detail-box">
                <h5 className="text-xl font-semibold mb-2">Safe and Secure</h5>
                <h6 className="text-gray-600">
                  We are continuously working on providing the best safe and secure trips to our customers.
                </h6>
              </div>
            </div>

            {/* 24x7 Support */}
            <div className="box bg-white p-6 rounded-lg shadow-md text-center">
              <div className="img-box mb-4">
                <img
                  src="/images/repairing-service-white.png"
                  alt="repairing-service-white"
                  className="img-1 w-8 h-8"
                />
                <img
                  src="/images/repairing-service-black.png"
                  alt="repairing-service-black"
                  className="img-2 w-8 h-8"
                />
              </div>
              <div className="detail-box">
                <h5 className="text-xl font-semibold mb-2">24x7 Support</h5>
                <h6 className="text-gray-600">
                  We are available 24/7 to assist you at all times while using our service.
                </h6>
              </div>
            </div>

            {/* Happy Clients */}
            <div className="box bg-white p-6 rounded-lg shadow-md text-center">
              <div className="img-box mb-4">
                <img
                  src="/images/c-w.png"
                  alt="c-w"
                  className="img-1 w-8 h-8"
                />
                <img
                  src="/images/clients-black.png"
                  alt="clients-black"
                  className="img-2 w-8 h-8"
                />
              </div>
              <div className="detail-box">
                <h5 className="text-xl font-semibold mb-2">Happy Clients</h5>
                <h6 className="text-gray-600">
                  Everything starts with Customer's Happiness in Our Service. Hope you Enjoy It.
                </h6>
              </div>
            </div>
          </div>
        </div>
      </section>


    </div>
  );
}

'use client';
import { useEffect, useRef, useState } from 'react';
import { LoadScript, Autocomplete } from '@react-google-maps/api';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { addTripDetails, totalDistance, updateDropCity, updatePickupCity } from "../../store/TripSlice";
import { useRouter } from 'next/navigation';
import 'animate.css';


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

      {/* Booking Form and Promo Section */}
      <div className="flex justify-between w-full max-w-screen-xl p-5 space-x-4">
        {/* Left side: Carousel/Promo Section */}
        <div className="w-2/3">
          <div id="carouselExampleIndicators" className="carousel slide">
            <ol className="carousel-indicators">
              <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
              <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
            </ol>
            <div className="carousel-inner relative overflow-hidden">
  <div className="carousel-item active">
  <div className="bg-cover bg-fixed bg-center text-center min-h-[80vh] py-16 px-8" style={{ backgroundImage: 'url("/images/s.png")' }}>

      <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay to improve text visibility */}
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 animate__animated animate__fadeIn animate__delay-1s">
        15% off on One Way & Round Trips
      </h2>

      <div className="flex justify-center items-center gap-4">
        <span className="border border-white px-6 py-3 text-white bg-black font-semibold text-lg rounded-md animate__animated animate__fadeInUp animate__delay-1s">
          AIMNEW15
        </span>

        <button
          className="px-6 py-3 bg-yellow-400 text-black font-semibold rounded-md transform transition duration-300 ease-in-out hover:bg-yellow-500 animate__animated animate__fadeInUp animate__delay-2s"
          onClick={() => navigator.clipboard.writeText("AIMNEW15")}
        >
          Copy
        </button>
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



      <br></br>
      <br></br>

      {/* About Section */}
      <section className="about_section layout_padding py-16 bg-gradient-to-r from-yellow-400 to-yellow-600" id="about">
  <div className="container-fluid px-6 md:px-12">
    <div className="flex flex-wrap">
      
      {/* Left Column - About Details */}
      <div className="lg:w-5/12 md:w-5/12 lg:ml-8 md:ml-8 mb-8 fade-in-left">
        <div className="detail-box bg-white p-8 rounded-lg shadow-lg transform hover:scale-105 transition-transform duration-300">
          <h2 className="text-4xl font-bold text-gray-800 mb-4">About AIMCAB</h2>
          <p className="text-justify text-gray-700 mb-4 leading-relaxed">
            Aimcab is a well-established cab and car rental service provider in India, specializing in long- and short-term car rental services. Our services guarantee safety, comfort, and reliability, with a professional team of drivers committed to providing accessible and safe cab services.
          </p>
          <p className="text-justify text-gray-700 mb-6 leading-relaxed">
            Since its inception in 2001, Aimcab has been built on transparency in pricing and an unwavering commitment to quality. With a rapidly growing customer base, Aimcab continues to provide hassle-free, reliable rides. Our diverse vehicle options, including sedans and SUVs, ensure that our customers enjoy a comfortable experience every time.
          </p>
          <p className="text-justify text-gray-700 mb-6 leading-relaxed">
            Whether you're booking a cab for a short trip or a long journey, Aimcab ensures your ride is easy, affordable, and safe. We are one of India's top online cab booking platforms, connecting passengers across 1000+ cities with trustworthy travel options.
          </p>
          <a
            href="#"
            className="inline-block mt-6 bg-yellow-600 text-white px-6 py-2 rounded-md text-lg font-semibold transform hover:scale-110 transition-all duration-300"
          >
            Book Now
          </a>
        </div>
      </div>
      {/* Right Column - Image */}
      <div className="lg:w-6/12 md:w-6/12 mb-8 fade-in-right">
  <div className="img-box relative">
    <img
      src="/images/slider-2.png"
      alt="slider-2"
      className="w-full h-full object-cover rounded-lg shadow-xl transform hover:scale-105 transition-all duration-300 mt-48" // Shift the image further down with mt-24 (6rem)
    />
    <div className="absolute top-0 left-0 w-full h-full bg-black opacity-25 rounded-lg"></div>
  </div>
</div>

    </div>
  </div>
</section>
<br></br>
<br></br>


<section className="service_section layout_padding py-16 bg-gray-50" id="service">
      <div className="container mx-auto">
        <div className="heading_container text-center mb-10">
          <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-10 animate__animated animate__fadeInUp">
            Our <br /> Services
          </h2>
        </div>
        <div className="service_container grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-6">
          
          {/* Luxury Cars */}
          <div className="box bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:translate-y-[-10px] hover:shadow-xl hover:duration-300 animate__animated animate__fadeInUp">
            <div className="img-box mb-6">
              <img src="/images/lexi.png" alt="Taxi" height="90" width="90" className="transition-transform transform hover:scale-110" />
            </div>
            <div className="detail-box">
              <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500">Luxury Cars</h5>
              <p className="text-gray-600 mb-4">Available All type Luxury Cars</p>
              <a href="#LuxuryCarsBooking.tsx" className="text-blue-500 underline hover:text-blue-700">Book Now</a>
            </div>
          </div>

          {/* Corporate */}
          <div className="box bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:translate-y-[-10px] hover:shadow-xl hover:duration-300 animate__animated animate__fadeInUp">
            <div className="img-box mb-6">
              <img src="/images/s6.png" alt="S6" height="100" width="80" className="transition-transform transform hover:scale-110" />
            </div>
            <div className="detail-box">
              <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500">Corporate</h5>
              <p className="text-gray-600 mb-4">All type of Cab for Corporation</p>
              <a href="tel:9130030054" className="text-blue-500 underline hover:text-blue-700">Call Us</a>
            </div>
          </div>

          {/* Daily Pickup & Drop */}
          <div className="box bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:translate-y-[-10px] hover:shadow-xl hover:duration-300 animate__animated animate__fadeInUp">
            <div className="img-box mb-6">
              <img src="/images/s7.png" alt="S7" height="100" width="100" className="transition-transform transform hover:scale-110" />
            </div>
            <div className="detail-box">
              <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500">Daily Pickup & Drop</h5>
              <p className="text-gray-600 mb-4">Daily Cab Service</p>
              <a href="tel:9130030054" className="text-blue-500 underline hover:text-blue-700">Call Us</a>
            </div>
          </div>

          {/* Out Station Cab */}
          <div className="box bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:translate-y-[-10px] hover:shadow-xl hover:duration-300 animate__animated animate__fadeInUp">
            <div className="img-box mb-6">
              <img src="/images/out.png" alt="Out" width="100" height="100" className="transition-transform transform hover:scale-110" />
            </div>
            <div className="detail-box">
              <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500">Out Station Cab</h5>
              <p className="text-gray-600 mb-4">All type of Cab for Outstation trip</p>
              <a href="https://aimcabbooking.com/#booking-form" className="text-blue-500 underline hover:text-blue-700">Book Now</a>
            </div>
          </div>

          {/* Airport Transport */}
          <div className="box bg-white p-8 rounded-lg shadow-lg text-center transform transition-all hover:translate-y-[-10px] hover:shadow-xl hover:duration-300 animate__animated animate__fadeInUp">
            <div className="img-box mb-6">
              <img src="/images/airy.png" alt="Airy" height="100" width="100" className="transition-transform transform hover:scale-110" />
            </div>
            <div className="detail-box">
              <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500">Airport Transport</h5>
              <p className="text-gray-600 mb-4">Airport Pickup & Drop Service</p>
              <a href="tel:9130030054" className="text-blue-500 underline hover:text-blue-700">Call Us</a>
            </div>
          </div>

        </div>
      </div>
    </section>

      {/* Contact Section */}
      <section className="contact_section py-16 bg-gray-200" id="contact">
      <div className="container mx-auto text-center mb-10">
        <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-10 animate__animated animate__fadeInUp">
          Any Problems? Any Questions?
        </h2>
      </div>
      <div className="container-fluid flex flex-wrap justify-center">

        {/* Contact Form */}
        <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6 animate__animated animate__fadeInUp">
          <div className="contact_form p-8 bg-white shadow-lg rounded-lg hover:shadow-2xl transition-all duration-300 ease-in-out">
            <h4 className="text-2xl font-semibold text-gray-800 mb-6">Get In Touch</h4>
            <form action="index.php" method="POST">
              <input
                type="text"
                name="full_name"
                placeholder="Full Name"
                className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="email"
                name="email"
                placeholder="Email ID"
                className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
              />
              <input
                type="text"
                name="phone"
                placeholder="Phone Number"
                className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                required
              />
              <textarea
                name="message"
                className="w-full p-4 mb-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-yellow-400"
                style={{ height: '150px' }}
                placeholder="Message"
                rows={5}
                required
              ></textarea>
              <button
                type="submit"
                name="message_submit"
                value="submit"
                className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300"
              >
                Send
              </button>
            </form>
          </div>
        </div>

        {/* Contact Image */}
        <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6 animate__animated animate__fadeInRight">
          <div className="img-box">
            <img
              src="/images/slider-2.png"
              alt="Contact"
              className="w-full h-full object-cover rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300 ease-in-out"
            />
          </div>
        </div>
        
      </div>
    </section>

      {/* Why Choose Us Section */}
      <section className="why_section py-16 bg-gray-100" id="why-choose-us">
  <div className="container mx-auto text-center mb-12">
    <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-10 animate__animated animate__fadeInUp">
      Why <br />
      Choose Us
    </h2>
  </div>

  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 animate__animated animate__fadeInUp">
    {/* Best Drivers */}
    <div className="box bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="img-box mb-4">
        <img
          src="/images/delivery-man-white.png"
          alt="Best Drivers"
          className="img-1 w-12 h-12 mx-auto mb-2"
        />
        <img
          src="/images/delivery-man-black.png"
          alt="Best Drivers"
          className="img-2 w-16 h-16 mx-auto"
        />
      </div>
      <div className="detail-box">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">Best Drivers</h5>
        <p className="text-gray-600">
          We have the best well-trained registered drivers to make your journey safe and secure.
        </p>
      </div>
    </div>

    {/* Safe and Secure */}
    <div className="box bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="img-box mb-4">
        <img
          src="/images/shield-white.png"
          alt="Safe and Secure"
          className="img-1 w-12 h-12 mx-auto mb-2"
        />
        <img
          src="/images/shield-black.png"
          alt="Safe and Secure"
          className="img-2 w-16 h-16 mx-auto"
        />
      </div>
      <div className="detail-box">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">Safe and Secure</h5>
        <p className="text-gray-600">
          We are continuously working on providing the best safe and secure trips to our customers.
        </p>
      </div>
    </div>

    {/* 24x7 Support */}
    <div className="box bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="img-box mb-4">
        <img
          src="/images/repairing-service-white.png"
          alt="24x7 Support"
          className="img-1 w-12 h-12 mx-auto mb-2"
        />
        <img
          src="/images/repairing-service-black.png"
          alt="24x7 Support"
          className="img-2 w-16 h-16 mx-auto"
        />
      </div>
      <div className="detail-box">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">24x7 Support</h5>
        <p className="text-gray-600">
          We are available 24/7 to assist you at all times while using our service.
        </p>
      </div>
    </div>

    {/* Happy Clients */}
    <div className="box bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-all duration-300 ease-in-out transform hover:scale-105">
      <div className="img-box mb-4">
        <img
          src="/images/c-w.png"
          alt="Happy Clients"
          className="img-1 w-12 h-12 mx-auto mb-2"
        />
        <img
          src="/images/clients-black.png"
          alt="Happy Clients"
          className="img-2 w-16 h-16 mx-auto"
        />
      </div>
      <div className="detail-box">
        <h5 className="text-xl font-semibold text-gray-800 mb-2">Happy Clients</h5>
        <p className="text-gray-600">
          Everything starts with Customer's Happiness in Our Service. Hope you Enjoy It.
        </p>
      </div>
    </div>
  </div>
</section>
    </div>
  );
}

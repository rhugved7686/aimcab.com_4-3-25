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
      <div className="relative w-full max-w-screen-xl flex p-0 m-0">
  {/* Left side: Carousel/Promo Section */}
  <div className="w-1/2 lg:w-1/2">  {/* Adjusted to 1/2 for full screen on smaller screens */}
    <div id="carouselExampleIndicators" className="carousel slide">
      <ol className="carousel-indicators">
        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
      </ol>
      <div className="carousel-inner relative overflow-hidden">
        <div className="carousel-item active">
          <div
            className="bg-cover bg-fixed bg-center text-center min-h-[100vh] py-16 px-8"
            style={{ backgroundImage: 'url("/images/car.jpg")' }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay to improve text visibility */}
            <br /><br /><br /><br /><br /><br />
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
  <div
    className="w-1/2 lg:w-1/2 p-4 rounded-lg backdrop-blur-lg bg-white/30 relative"
    style={{
      backgroundImage: 'url("/images/car.jpg")', 
      backgroundSize: 'cover', 
      backgroundPosition: 'center',
      backgroundAttachment: 'fixed', // Ensures the background stays fixed when scrolling
      minHeight: '100vh' // Ensures the background covers the full height
    }}
  >
    <div className="absolute inset-0 bg-black opacity-50"></div> {/* Dark overlay for booking form */}
    
    <LoadScript googleMapsApiKey="AIzaSyCelDo4I5cPQ72TfCTQW-arhPZ7ALNcp8w" libraries={['places']}>
      <form onSubmit={handleSubmit} className="space-y-4 relative z-10">
        <h2 className="text-center text-2xl font-semibold">BOOK A CAB NOW</h2>

        {/* Trip Type Selection */}
        <div className="flex space-x-4 mb-4">
          <div className="w-1/3">
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
        </div>

        {/* One Way Trip Inputs */}
        {tripType === 'One Way' && (
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
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
            </div>
            <div className="w-1/2">
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
            </div>
          </div>
        )}

        {/* Round Trip Inputs */}
        {tripType === 'Round' && (
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
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
            </div>
            <div className="w-1/2">
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
            </div>
          </div>
        )}

        {/* Date and Time Inputs for Both Trip Types */}
        <div className="flex space-x-4 mb-4">
          <div className="w-1/2">
            <h5 className="text-left text-sm">Choose Date</h5>
            <input
              className="w-full p-2 mb-2"
              name="date"
              type="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/2">
            <h5 className="text-left text-sm">Choose Time</h5>
            <input
              className="w-full p-2 mb-2"
              name="time"
              type="time"
              value={formData.time}
              onChange={handleChange}
              required
            />
          </div>
        </div>

        {/* Return Date and Time (For Round Trip) */}
        {tripType === 'Round' && (
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
              <h5 className="text-left text-sm">Return Date</h5>
              <input
                className="w-full p-2 mb-2"
                name="dateend"
                type="date"
                value={formData.dateend}
                onChange={handleChange}
              />
            </div>
            <div className="w-1/2">
              <h5 className="text-left text-sm">Return Time</h5>
              <input
                className="w-full p-2 mb-2"
                name="timeend"
                type="time"
                value={formData.timeend}
                onChange={handleChange}
              />
            </div>
          </div>
        )}

        {/* Rental Package Selection */}
        {tripType === 'Rental' && (
          <div className="flex space-x-4 mb-4">
            <div className="w-1/2">
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
          </div>
        )}

        {/* Personal Details Inputs */}
        <div className="flex space-x-4 mb-4">
          <div className="w-1/3">
            <input
              className="w-full p-2 mb-2"
              name="name"
              type="text"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/3">
            <input
              className="w-full p-2 mb-2"
              name="phone"
              type="tel"
              placeholder="Your Phone Number"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <div className="w-1/3">
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
        </div>

        {/* Submit Button */}
        <button
          className="relative px-6 py-3 text-white bg-yellow-300 rounded-lg disabled:bg-blue-300 disabled:cursor-not-allowed"
          disabled={loading} // Disable button when loading
        >
          {loading ? (
            <div role="status">
              <svg aria-hidden="true" className="w-8 h-8 text-gray-200 animate-spin dark:text-gray-600 fill-white" viewBox="0 0 100 101" fill="none" xmlns="http://www.w3.org/2000/svg">
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
      <section 
  className="about_section layout_padding py-16 bg-cover bg-center" 
  id="about" 
  style={{ 
    backgroundImage: "url('/images/t.png')", 
    backgroundAttachment: 'fixed' 
  }}
>
  <div className="container-fluid px-6 md:px-12">
    <div className="flex flex-wrap gap-8 justify-between items-center">

      {/* Left Column - About Details */}
      <div className="lg:w-5/12 md:w-5/12 mb-8 animate__animated animate__fadeInLeft">
  <div className="detail-box bg-yellow-200 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300">
    <h2 className="text-4xl font-bold text-gray-800 mb-4">About Aimcab</h2>
    <p className="text-justify text-gray-700 mb-4 leading-relaxed">
      At Aimcab, we pride ourselves on providing a seamless, reliable, and safe travel experience. Serving thousands of happy customers across India, we specialize in both short-term and long-term car rentals, airport transfers, and more. Our service is committed to your convenience and safety, every mile of the way.
    </p>
    <p className="text-justify text-gray-700 mb-4 leading-relaxed">
      We started our journey in 2001 with a vision to make transportation more accessible and hassle-free. Today, we operate in over 1000 cities across India, connecting customers with trustworthy, professional drivers and top-notch vehicles. Our goal is to deliver an experience that is comfortable, stress-free, and most importantly, safe.
    </p>
    <p className="text-justify text-gray-700 mb-4 leading-relaxed">
      Whether you're going on a business trip, family vacation, or a simple airport transfer, Aimcab offers a wide range of vehicles to cater to all your travel needs. With a fleet of well-maintained cars, including sedans and SUVs, we ensure that every ride is a smooth and enjoyable experience.
    </p>
    <p className="text-justify text-gray-700 mb-6 leading-relaxed">
      Our transparent pricing, real-time booking system, and exceptional customer support make Aimcab the preferred choice for travelers across the country.
    </p>
    <a
      href="/"
      className="inline-block mt-6 bg-yellow-600 text-white px-6 py-2 rounded-md text-lg font-semibold transform hover:scale-110 transition-all duration-300"
    >
      Book Now
    </a>
  </div>
</div>



      {/* Right Column - Additional Services and Benefits */}
      <div className="lg:w-6/12 md:w-6/12 mb-8 animate__animated animate__fadeInRight flex justify-center">
  <div className="info-box bg-yellow-200 p-8 rounded-lg shadow-xl transform hover:scale-105 transition-transform duration-300 w-full max-w-md">
    <h3 className="text-2xl font-semibold text-gray-800 mb-6">Why Choose Aimcab?</h3>
    <ul className="list-disc list-inside text-gray-700 mb-6">
      <li className="mb-2">Affordable rates with no hidden fees.</li>
      <li className="mb-2">Multiple vehicle options for every need: sedans, SUVs, luxury cars.</li>
      <li className="mb-2">24/7 customer support to ensure your journey is hassle-free.</li>
      <li className="mb-2">Easy and fast online booking with instant confirmations.</li>
      <li className="mb-2">A wide network of experienced, professional drivers.</li>
      <li className="mb-2">Well-maintained cars that prioritize your safety and comfort.</li>
      <li className="mb-2">Track your ride in real-time with our intuitive mobile app.</li>
    </ul>

    {/* Center the Explore More button */}
    <div className="flex justify-center mt-6">
      <a
        href="/#service"
        className="inline-block bg-yellow-600 text-white px-6 py-2 rounded-md text-lg font-semibold transform hover:scale-110 transition-all duration-300"
      >
        Explore More
      </a>
    </div>
  </div>
</div>


    </div>
  </div>
</section>
<br></br>
<br></br>


<section className="service_section layout_padding py-16 px-8 bg-gradient-to-r from-yellow-400 to-orange-400" id="service">
  <div className="container mx-auto">
    <div className="heading_container text-center mb-12">
      <h2 className="text-4xl font-bold text-gray-800 leading-tight mb-6 animate__animated animate__fadeInUp">
        Our <span className="text-gray-800">Services</span>
      </h2>

      <p className="text-xl text-white opacity-80 mb-10 animate__animated animate__fadeInUp animate__delay-1s">
        Explore our wide range of services to make your travel easy and comfortable.
      </p>
    </div>
    <div className="service_container grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8">
      
      {/* Luxury Cars */}
      <div className="box bg-white p-8 rounded-lg shadow-xl text-center transform transition-all hover:translate-y-[-12px] hover:shadow-2xl hover:duration-300 animate__animated animate__fadeInUp animate__delay-1s">
        <div className="img-box mb-6">
          <img src="/images/lexi.png" alt="Luxury Cars" height="90" width="90" className="transition-transform transform hover:scale-110" />
        </div>
        <div className="detail-box">
          <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors">Luxury Cars</h5>
          <p className="text-gray-600 mb-4">Travel in style with our luxury car options.</p>
          <a href="#LuxuryCarsBooking" className="text-blue-500 underline hover:text-blue-700">Book Now</a>
        </div>
      </div>

      {/* Corporate */}
      <div className="box bg-white p-8 rounded-lg shadow-xl text-center transform transition-all hover:translate-y-[-12px] hover:shadow-2xl hover:duration-300 animate__animated animate__fadeInUp animate__delay-1s">
        <div className="img-box mb-6">
          <img src="/images/s6.png" alt="Corporate Service" height="100" width="80" className="transition-transform transform hover:scale-110" />
        </div>
        <div className="detail-box">
          <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors">Corporate</h5>
          <p className="text-gray-600 mb-4">Professional cabs for business and corporate needs.</p>
          <a href="tel:9130030054" className="text-blue-500 underline hover:text-blue-700">Call Us</a>
        </div>
      </div>

      {/* Daily Pickup & Drop */}
      <div className="box bg-white p-8 rounded-lg shadow-xl text-center transform transition-all hover:translate-y-[-12px] hover:shadow-2xl hover:duration-300 animate__animated animate__fadeInUp animate__delay-2s">
        <div className="img-box mb-6">
          <img src="/images/s7.png" alt="Daily Pickup & Drop" height="100" width="100" className="transition-transform transform hover:scale-110" />
        </div>
        <div className="detail-box">
          <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors">Daily Pickup & Drop</h5>
          <p className="text-gray-600 mb-4">Reliable daily commute for work or personal travel.</p>
          <a href="tel:9130030054" className="text-blue-500 underline hover:text-blue-700">Call Us</a>
        </div>
      </div>

      {/* Out Station Cab */}
      <div className="box bg-white p-8 rounded-lg shadow-xl text-center transform transition-all hover:translate-y-[-12px] hover:shadow-2xl hover:duration-300 animate__animated animate__fadeInUp animate__delay-3s">
        <div className="img-box mb-6">
          <img src="/images/out.png" alt="Out Station" width="100" height="100" className="transition-transform transform hover:scale-110" />
        </div>
        <div className="detail-box">
          <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors">Out Station Cab</h5>
          <p className="text-gray-600 mb-4">Book a cab for long-distance, out-of-town trips.</p>
          <a href="https://aimcabbooking.com/#booking-form" className="text-blue-500 underline hover:text-blue-700">Book Now</a>
        </div>
      </div>

      {/* Airport Transport */}
      <div className="box bg-white p-8 rounded-lg shadow-xl text-center transform transition-all hover:translate-y-[-12px] hover:shadow-2xl hover:duration-300 animate__animated animate__fadeInUp animate__delay-4s">
        <div className="img-box mb-6">
          <img src="/images/airy.png" alt="Airport Transport" height="100" width="100" className="transition-transform transform hover:scale-110" />
        </div>
        <div className="detail-box">
          <h5 className="text-xl font-semibold text-gray-800 mb-3 hover:text-blue-500 transition-colors">Airport Transport</h5>
          <p className="text-gray-600 mb-4">Reliable airport pickup and drop services.</p>
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
      Need a Ride? Book Your Cab Now!
    </h2>
  </div>

  <div className="container-fluid flex flex-wrap justify-center">

    {/* Left Side: Cab Booking Info */}
    <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6 animate__animated animate__fadeInUp">
      <div className="p-8">
        <h4 className="text-2xl font-semibold text-gray-800 mb-6">Easy and Convenient Cab Booking</h4>
        <p className="text-lg text-gray-600 mb-6">
          Our cab booking service is designed to make your travel smooth and hassle-free. Whether you are going to the airport, heading to a business meeting, or need a ride for a long trip, we have you covered with comfortable and reliable cars.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li className="mb-2">Choose from a variety of vehicles for every need.</li>
          <li className="mb-2">Book instantly with just a few clicks.</li>
          <li className="mb-2">24/7 support for a seamless experience.</li>
          <li className="mb-2">Affordable prices with no hidden charges.</li>
          <li className="mb-2">Pre-book your ride for peace of mind.</li>
          <li className="mb-2">Real-time tracking for your cab.</li>
          <li className="mb-2">Convenient online payments and cash options.</li>
          <li className="mb-2">Ride in comfort with air-conditioned vehicles.</li>
          <li className="mb-2">Wide service area coverage across cities and towns.</li>
          <li className="mb-2">Safety protocols to ensure your well-being throughout the ride.</li>
          <li className="mb-2">Fast and easy booking process with no hassle.</li>
          <li className="mb-2">Our drivers are well-trained and professional.</li>
          <li className="mb-2">Exclusive discounts and offers for loyal customers.</li>
          <li className="mb-2">Option to schedule a ride for family, friends, or colleagues.</li>
          <li className="mb-2">Environmental-friendly vehicles with lower emissions for sustainable travel.</li>
        </ul>
        <a
          href="/"
          className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 text-center block"
        >
          Book Your Cab Now
        </a>
      </div>
    </div>

    {/* Right Side: Additional Cab Booking Services */}
    <div className="w-full lg:w-5/12 md:w-5/12 mb-8 px-6 animate__animated animate__fadeInRight">
      <div className="p-8 mb-6">
        <h4 className="text-2xl font-semibold text-gray-800 mb-6">Outstation Cabs</h4>
        <p className="text-lg text-gray-600 mb-6">
          Planning a trip outside the city? Book an outstation cab with us for a comfortable journey. Whether it's a weekend getaway or a business trip, we ensure your travel is convenient and safe.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li className="mb-2">Long-distance travel made easy and affordable.</li>
          <li className="mb-2">Well-maintained cars for a comfortable ride.</li>
          <li className="mb-2">Flexible booking options and pricing.</li>
        </ul>
        <a
          href="/"
          className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 text-center block"
        >
          Book Outstation Cab
        </a>
      </div>
      <br></br>
      <div className="p-8">
        <h4 className="text-2xl font-semibold text-gray-800 mb-6">Airport Transfers</h4>
        <p className="text-lg text-gray-600 mb-6">
          Need a ride to or from the airport? Our airport transfer service offers you a hassle-free, timely, and comfortable ride. Whether it's a pickup or drop-off, we've got your travel needs covered.
        </p>
        <ul className="list-disc list-inside text-gray-600 mb-6">
          <li className="mb-2">Reliable and timely airport pickups and drops.</li>
          <li className="mb-2">Easy online booking for your convenience.</li>
          <li className="mb-2">Affordable and transparent pricing.</li>
        </ul>
        <a
          href="/"
          className="w-full py-3 bg-yellow-500 text-white font-semibold rounded-lg hover:bg-yellow-400 transition-colors duration-300 text-center block"
        >
          Book Airport Transfer
        </a>
      </div>
    </div>
  </div>
</section>


      {/* Ready To Experience */}
      <section className="cta-section bg-gradient-to-r bg-yellow-500">
  <div className="max-w-8xl mx-auto text-center mb-12"> {/* Increased width here */}
    <br></br>
    <br></br>
    {/* Heading */}
    <h2 className="text-4xl font-bold text-white mb-6 animate__animated animate__fadeInUp animate__delay-1s">
      Ready to Experience a Hassle-Free Ride?
    </h2>
    {/* Subheading */}
    <p className="text-xl text-center text-gray-200 mb-8 animate__animated animate__fadeInUp animate__delay-1.5s">
      Book your ride with Aimcab today! Whether it's a business trip, airport transfer, or a city ride, we provide reliable and comfortable transportation. Our experienced drivers ensure your journey is smooth, safe, and hassle-free.
    </p>
    {/* Book Now Button */}
    <div className="text-center mb-12 animate__animated animate__fadeInUp animate__delay-2s">
      <a
        href="/"
        className="inline-block bg-orange-600 text-white px-8 py-3 rounded-full text-xl font-semibold transform hover:scale-105 transition-all duration-300"
      >
        Book Your Ride Now
      </a>
    </div>
    {/* Testimonial Box */}
    <div className="testimonial-box relative bg-[url('/images/jpeg-logo.jpg')] bg-cover bg-center py-14 px-6 text-center rounded-lg shadow-2xl mb-12 animate__animated animate__fadeInUp animate__delay-2.5s">
  {/* Overlay for blur and greyish effect */}
  <div className="absolute inset-0 bg-black opacity-60 blur-sm"></div>

  <h3 className="text-3xl font-bold text-black mb-4">
    What Our Customers Say
  </h3>
  <p className="text-black text-lg italic mb-6">
    "Aimcab made my travel experience so smooth and stress-free. The driver was friendly, and the car was spotless. Highly recommend!"
  </p>
  <p className="text-black text-sm">- Sarah J., Happy Traveler</p>
</div>


    {/* Contact Us Section */}
    <div className="text-center animate__animated animate__fadeInUp animate__delay-3s">
      <h3 className="text-xl text-white mb-4">
        Have Questions? We're Here to Help!
      </h3>
      <p className="text-gray-300 mb-6">
        Our dedicated customer service team is available 24/7 to assist you with any queries or special requests. Reach out to us anytime!
      </p>
      <a
        href="/Contact"
        className="inline-block bg-blue-600 text-white px-8 py-3 rounded-full text-lg font-semibold transform hover:scale-105 transition-all duration-300"
      >
        Contact Us
      </a>
    </div>
  </div>
</section>



    </div>
  );
}

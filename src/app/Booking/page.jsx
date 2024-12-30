'use client';
import { useEffect, useMemo, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTripPrice } from '../../store/TripSlice';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function Home() {
  const [cars, setCars] = useState([]);
  const route = useRouter();
  const [loading, setLoading] = useState(true);

  useEffect(() => {

    const getVisitor = async () => {
      try {
        setLoading(true);
        const res = JSON.parse(localStorage.getItem("trip"));
        console.log(res);
        const trip = res;
        const data = await axios.post("/api/prices", { pickup: trip.pickup_location, drop: trip.drop_location, tripType: trip.trip });
        console.log(data);

        if (data.data.data == undefined) {
          route.push("/RouteNotFound");
        }

        const tripType = trip.trip;
        const distance = tripType == "One Way" ? +trip.oneway_distance : +trip.round_distance;
        const diff = new Date(trip.dateend).getTime() - new Date(trip.date).getTime();
        const days = diff / (1000 * 3600 * 24) + 1;

        const fetchedCars = [
          {
            id: 1,
            name: 'Hatchback',
            model: 'Hatchback',
            description: 'Compact, efficient, and stylish. Our hatchback cars offer the perfect blend of practicality and fun for city driving.',
            price: calculateCarPrice('hatchback', tripType, days, distance, data.data.data),
            image: '/images/ertiga.png',
            facilities: [
              { name: 'Snacks', icon: '/images/snacks.png' },
              { name: 'Water Bottle', icon: '/images/water.jpg' },
              { name: 'Newspaper', icon: '/images/news.jpg' }
            ]
          },
          {
            id: 2,
            name: 'Sedan',
            model: 'Sedan',
            description: 'Elegant and spacious, our sedans provide a smooth and comfortable ride for every journey.',
            price: calculateCarPrice('sedan', tripType, days, distance, data.data.data),
            image: '/images/innova.png',
            facilities: [
              { name: 'Snacks', icon: '/images/snacks.png' },
              { name: 'Water Bottle', icon: '/images/water.jpg' },
              { name: 'Newspaper', icon: '/images/news.jpg' }
            ]
          },
          {
            id: 3,
            name: 'SUV',
            model: 'SUV',
            description: 'Rugged and versatile, our SUVs are perfect for both urban roads and adventurous terrains.',
            price: calculateCarPrice('suv', tripType, days, distance, data.data.data),
            image: '/images/luxury.png',
            facilities: [
              { name: 'Snacks', icon: '/images/snacks.png' },
              { name: 'Water Bottle', icon: '/images/water.jpg' },
              { name: 'Newspaper', icon: '/images/news.jpg' }
            ]
          },
          {
            id: 4,
            name: 'MUV',
            model: 'MUV',
            description: 'MUVs offer spacious interiors and powerful performance for both city and off-road travels.',
            price: calculateCarPrice('suvplus', tripType, days, distance, data.data.data),
            image: '/images/maruti.png',
            facilities: [
              { name: 'Snacks', icon: '/images/snacks.png' },
              { name: 'Water Bottle', icon: '/images/water.jpg' },
              { name: 'Newspaper', icon: '/images/news.jpg' }
            ]
          },
        ]
        setCars(fetchedCars);

        setLoading(false);

      } catch (error) {
        console.log(error);
        // route.push("/PageNotFound");

      }




    }
    getVisitor();
  }, []);


  useEffect(()=>{
    const fetchedCars = [
      {
        id: 1,
        name: 'Hatchback',
        model: 'Hatchback',
        description: 'Compact, efficient, and stylish. Our hatchback cars offer the perfect blend of practicality and fun for city driving.',
        price: 1,
        image: '/images/ertiga.png',
        facilities: [
          { name: 'Snacks', icon: '/images/snacks.png' },
          { name: 'Water Bottle', icon: '/images/water.jpg' },
          { name: 'Newspaper', icon: '/images/news.jpg' }
        ]
      },
      {
        id: 2,
        name: 'Sedan',
        model: 'Sedan',
        description: 'Elegant and spacious, our sedans provide a smooth and comfortable ride for every journey.',
        price: 1,
        image: '/images/innova.png',
        facilities: [
          { name: 'Snacks', icon: '/images/snacks.png' },
          { name: 'Water Bottle', icon: '/images/water.jpg' },
          { name: 'Newspaper', icon: '/images/news.jpg' }
        ]
      },
      {
        id: 3,
        name: 'SUV',
        model: 'SUV',
        description: 'Rugged and versatile, our SUVs are perfect for both urban roads and adventurous terrains.',
        price: 1,
        image: '/images/luxury.png',
        facilities: [
          { name: 'Snacks', icon: '/images/snacks.png' },
          { name: 'Water Bottle', icon: '/images/water.jpg' },
          { name: 'Newspaper', icon: '/images/news.jpg' }
        ]
      },
      {
        id: 4,
        name: 'MUV',
        model: 'MUV',
        description: 'MUVs offer spacious interiors and powerful performance for both city and off-road travels.',
        price: 1,
        image: '/images/maruti.png',
        facilities: [
          { name: 'Snacks', icon: '/images/snacks.png' },
          { name: 'Water Bottle', icon: '/images/water.jpg' },
          { name: 'Newspaper', icon: '/images/news.jpg' }
        ]
      },
    ]
    setCars(fetchedCars);
  },[])

  const calculateCarPrice = (carType, tripType, days, distance, prices) => {
    if (!prices || !prices[carType]) {
      console.warn(`Price for ${carType} is not available. Using default price.`);
      return 0; // Default price if no trip type matched or price is unavailable
    }

    if (tripType === "One Way") {

      return prices[carType] * Math.floor(distance);
    } else if (tripType === "Round") {
      return distance <= 300
        ? (days * 300) * prices[carType]
        : (days * 300) + ((distance - 300) * prices[carType]);
    }
    return prices[carType] || 0; // Default price if no trip type matched
  };

  const handleBookNow = async (car) => {
    const trip = localStorage.getItem("trip");
    const data = {
      name: trip.name,
      user_pickup: trip.pickup_location,
      user_drop: trip.drop_location,
      date: trip.date,
      time: trip.time,
      phone: trip.phone,
      email: trip.email,
      user_trip_type: trip.trip,
      distance: trip.trip == "One Way" ? trip.oneway_distance : trip.trip == "Round" ? trip.round_distance : 0,
      baseAmount: car.price,  // Default value from the model definition
      dateend: trip.trip == "Round" ? trip.dateend : null,
      timeend: trip.trip == "Round" ? trip.timeend : null,
      status: 0,
      bookingtype: "website",
      from_location: trip.pickup_location,
      return_date: trip.dateend,
      start_date: trip.date,
      to_location: trip.drop_location,
      trip_type: trip.trip,
      base_amount: car.price,
      bookid: trip.bookid,
      booking_id: trip.bookid
    }


    const res = await axios.post("/api/booking", data);
    route.push("/ThankYou");
  }

  return (
    <div>
      {/* Header */}
      <header className="bg-[#CDC7C7] w-full">
        <nav className="bg-[#CDC7C7] mb-0">
          <ul className="flex space-x-4 p-4">
            <a href="/HomePae" g>Home</a>
            <li>About</li>
            <li className="relative">
              <button className="dropdown">Services</button>
              <ul className="dropdown-menu absolute left-0 hidden bg-white border border-gray-200">
                <li><a href="#">Service 1</a></li>
                <li className="submenu">
                  <a href="#">Service 2</a>
                  <ul className="submenu-left bg-white">
                    <li><a href="#">Sub Service 1</a></li>
                    <li><a href="#">Sub Service 2</a></li>
                  </ul>
                </li>
              </ul>
            </li>
          </ul>
        </nav>
      </header>

      {/* Main Content */}
      <main className="bg-[#F8F9FA]">

        {/* Hero Section */}
        <section className="text-center py-16 bg-gradient-to-r from-[#faa499] to-[#f7dd85]">
          <h1 className="text-4xl font-bold">Welcome to Our Car Rental Service</h1>
          <p className="text-xl mt-4">Explore the best cars available for your trips.</p>
        </section>


        {

          loading == false ?
            <section className="py-16 px-4">
              <h2 className="text-3xl font-semibold text-center">Our Cars</h2>
              <p className="text-lg text-center mt-4">Choose from a variety of cars based on your preferences.</p>

              {/* Horizontal Scroll Container */}
              <div className="mt-8 overflow-x-auto flex space-x-8 pb-8">
                {cars.map((car) => (
                  car.price > 0 ?
                    <div key={car.id} className="card p-6 bg-white shadow-lg rounded-lg w-80">
                      <Image src={car.image} alt={car.name} width={320} height={240} loading='lazy' className="w-90 h-30 object-cover rounded-lg" /> {/* Updated to reduce image width */}
                      <h3 className="text-2xl mt-4">{car.name}</h3>
                      <p className="mt-4 text-lg">{car.description}</p>

                      {/* Facilities Section */}
                      <div className={car.id === 3 ? "mt-[70px]" : car.id === 4 ? "mt-[50px]" : "mt-4"}>
                        {/* Apply different margins for SUV (id=3) and MUV (id=4) */}
                        <h4 className="text-lg font-semibold">Facilities:</h4>
                        <ul className="mt-2">
                          {car.facilities.map((facility, index) => (
                            <li key={index} className="flex items-center mt-2">
                              <img src={facility.icon} alt={facility.name} className="w-8 h-8 mr-2" />
                              <p>{facility.name}</p>
                            </li>
                          ))}
                        </ul>
                      </div>


                      <div className="mt-4 flex justify-between items-center">
                        <p className="text-xl font-semibold">Rs. {car.price}/-</p>
                        <button onClick={() => handleBookNow(car)} className="px-6 py-2 bg-gradient-to-r from-[#faa499] to-[#ffc55c] rounded-lg">
                          Book Now
                        </button>
                      </div>
                    </div>
                    :
                    <></>
                ))}
              </div>
            </section>

            :
            <>
              <div className="flex items-center justify-center min-h-screen bg-gray-100">
                <div className="text-xl font-semibold text-gray-600">
                  Loading
                  <span className="animate-pulse">.</span>
                  <span className="animate-pulse animation-delay-200">.</span>
                  <span className="animate-pulse animation-delay-400">.</span>
                </div>
              </div>
            </>
        }

        {/* Booking Section */}
        <section className="bg-[#f7dd85] py-16 text-center">
          <h2 className="text-3xl font-semibold">Book Your Car</h2>
          <p className="mt-4 text-lg">Book your preferred car today and make your journey comfortable!</p>
          <div className="mt-6">
            <button className="px-6 py-3 bg-gradient-to-r from-[#faa499] to-[#ffc55c] rounded-lg text-white text-xl">
              Book Now
            </button>
          </div>
        </section>

        {/* Footer */}
        <footer className="bg-black text-[#FFC107] py-12">
          <div className="footer text-center">
            <h5 className="text-white text-2xl">Quick Links</h5>
            <div className="footerconatiner text-left mt-6">
              <ul className="no-bullets mt-4">
                <li className="py-2">Home</li>
                <li className="py-2">About</li>
                <li className="py-2">Services</li>
                <li className="py-2">Contact</li>
              </ul>
            </div>
          </div>
        </footer>

      </main>
    </div>
  );
}

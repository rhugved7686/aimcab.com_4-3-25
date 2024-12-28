'use client';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getTripPrice } from '../../store/TripSlice';
import axios from 'axios';

export default function Home() {
  const [cars, setCars] = useState([]);
  const state = useSelector(state => state.trip);
  const [trip, setTrip] = useState({});

  // useEffect(()=>{

  //   if(state.trip){
  //     const getPrice = async ({pickup, drop, tripType})=>{
  //       const data = await axios.post("/api/prices", {pickup, drop, tripType});
  //       console.log(data.data.data);
  //       const fetchedCars = [
  //         {
  //           id: 1,
  //           name: 'Hatchback',
  //           model: 'Hatchback',
  //           description: 'Compact, efficient, and stylish. Our hatchback cars offer the perfect blend of practicality and fun for city driving.',
  //           price: tripType == "One Way" ? data.data.data.hatchback * Math.floor(state.trip.distance) : tripType == "Round" ? (state.distance <=300 ? (state.trip.days * 300) * data.data.data.hatchback : state.trip.days * 300 + ((state.distance - 300) * data.data.data.hatchback)): data.data.data.hatchback,
  //           image: '/images/ertiga.png',
  //           facilities: [
  //             { name: 'Snacks', icon: '/images/snacks.png' },
  //             { name: 'Water Bottle', icon: '/images/water.jpg' },
  //             { name: 'Newspaper', icon: '/images/news.jpg' }
  //           ]
  //         },
  //         {
  //           id: 2,
  //           name: 'Sedan',
  //           model: 'Sedan',
  //           description: 'Elegant and spacious, our sedans provide a smooth and comfortable ride for every journey.',
  //           price: tripType == "One Way" ? data.data.data.sedan * Math.floor(state.trip.distance) : tripType == "Round" ? (state.distance <=300 ? (state.trip.days * 300) * data.data.data.sedan : state.trip.days * 300 + ((state.distance - 300) * data.data.data.sedan)): data.data.data.sedan,
  //           image: '/images/innova.png',
  //           facilities: [
  //             { name: 'Snacks', icon: '/images/snacks.png' },
  //             { name: 'Water Bottle', icon: '/images/water.jpg' },
  //             { name: 'Newspaper', icon: '/images/news.jpg' }
  //           ]
  //         },
  //         {
  //           id: 3,
  //           name: 'SUV',
  //           model: 'SUV',
  //           description: 'Rugged and versatile, our SUVs are perfect for both urban roads and adventurous terrains.',
  //           price: tripType == "One Way" ? data.data.data.suv * Math.floor(state.trip.distance) : tripType == "Round" ? (state.distance <=300 ? (state.trip.days * 300) * data.data.data.suv : state.trip.days * 300 + ((state.distance - 300) * data.data.data.suv)): data.data.data.suv,
  //           image: '/images/luxury.png',
  //           facilities: [
  //             { name: 'Snacks', icon: '/images/snacks.png' },
  //             { name: 'Water Bottle', icon: '/images/water.jpg' },
  //             { name: 'Newspaper', icon: '/images/news.jpg' }
  //           ]
  //         },
  //         {
  //           id: 4,
  //           name: 'MUV',
  //           model: 'MUV',
  //           description: 'MUVs offer spacious interiors and powerful performance for both city and off-road travels.',
  //           price: tripType == "One Way" ? data.data.data.suvplus * Math.floor(state.trip.distance) : tripType == "Round" ? (state.distance <=300 ? (state.trip.days * 300) * data.data.data.suvplus : state.trip.days * 300 + ((state.distance - 300) * data.data.data.suvplus)): data.data.data.suvplus,
  //           image: '/images/maruti.png',
  //           facilities: [
  //             { name: 'Snacks', icon: '/images/snacks.png' },
  //             { name: 'Water Bottle', icon: '/images/water.jpg' },
  //             { name: 'Newspaper', icon: '/images/news.jpg' }
  //           ]
  //         },
  //         // Add more cars as needed
  //       ];
  //       setCars(fetchedCars)
  //     }
  //     getPrice({pickup: state.trip.pickup, drop: state.trip.drop, tripType: state.trip.user_trip_type});
  //   }
  // },[state])


  useEffect(() => {
    console.log("++++++")
    const getVisitor = async () => {
      const bookid = localStorage.getItem("bookid");
      const res = await axios.get(`/api/visit/${bookid}`);
      console.log(res);

      const data = await axios.post("/api/prices", { pickup: res.data.data.pickup_location, drop : res.data.data.drop_location, tripType : res.data.data.trip });
      console.log(data.data.data);
      const tripType = res.data.data.trip;
      const fetchedCars = [
        {
          id: 1,
          name: 'Hatchback',
          model: 'Hatchback',
          description: 'Compact, efficient, and stylish. Our hatchback cars offer the perfect blend of practicality and fun for city driving.',
          price: tripType == "One Way" ? data.data.data.hatchback * Math.floor(state.trip.distance) : tripType == "Round" ? (state.distance <= 300 ? (state.trip.days * 300) * data.data.data.hatchback : state.trip.days * 300 + ((state.distance - 300) * data.data.data.hatchback)) : data.data.data.hatchback,
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
          price: tripType == "One Way" ? data.data.data.sedan * Math.floor(state.trip.distance) : tripType == "Round" ? (state.distance <= 300 ? (state.trip.days * 300) * data.data.data.sedan : state.trip.days * 300 + ((state.distance - 300) * data.data.data.sedan)) : data.data.data.sedan,
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
          price: tripType == "One Way" ? data.data.data.suv * Math.floor(state.trip.distance) : tripType == "Round" ? (state.distance <= 300 ? (state.trip.days * 300) * data.data.data.suv : state.trip.days * 300 + ((state.distance - 300) * data.data.data.suv)) : data.data.data.suv,
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
          price: tripType == "One Way" ? data.data.data.suvplus * Math.floor(state.trip.distance) : tripType == "Round" ? (state.distance <= 300 ? (state.trip.days * 300) * data.data.data.suvplus : state.trip.days * 300 + ((state.distance - 300) * data.data.data.suvplus)) : data.data.data.suvplus,
          image: '/images/maruti.png',
          facilities: [
            { name: 'Snacks', icon: '/images/snacks.png' },
            { name: 'Water Bottle', icon: '/images/water.jpg' },
            { name: 'Newspaper', icon: '/images/news.jpg' }
          ]
        },
      ]
      if (res.data.data) {
        setTrip(res.data.data);
        setCars(fetchedCars);
      }
    }
    getVisitor();
  }, []);

  const handleBookNow = async (car) => {
    const data = {
      name: state.trip.name,
      user_pickup: state.trip.pickup,
      user_drop: state.trip.drop,
      date: state.trip.date,
      time: state.trip.time,
      phone: state.trip.phone,
      email: state.trip.email,
      user_trip_type: state.trip.user_trip_type,
      distance: state.trip.distance,
      baseAmount: car.price,  // Default value from the model definition
      dateend: null,
      timeend: null,
      status: 0,
      bookingtype: "website",
      from_location: state.trip.pickup,
      return_date: "",
      start_date: state.trip.time,
      to_location: state.trip.drop,
      trip_type: state.trip.user_trip_type,
      base_amount: car.price,
    }


    const res = await axios.post("/api/booking", data);
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

        {/* Car Listings */}
        <section className="py-16 px-4">
          <h2 className="text-3xl font-semibold text-center">Our Cars</h2>
          <p className="text-lg text-center mt-4">Choose from a variety of cars based on your preferences.</p>

          {/* Horizontal Scroll Container */}
          <div className="mt-8 overflow-x-auto flex space-x-8 pb-8">
            {cars.map((car) => (
              <div key={car.id} className="card p-6 bg-white shadow-lg rounded-lg w-80">
                <img src={car.image} alt={car.name} className="w-90 h-30 object-cover rounded-lg" /> {/* Updated to reduce image width */}
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
            ))}
          </div>
        </section>

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

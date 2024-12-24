'use client';
import { useEffect, useState } from 'react';

export default function Home() {
  const [cars, setCars] = useState([]);

  useEffect(() => {
    // Example car data; you can replace this with an API call
    const fetchedCars = [
      {
        id: 1,
        name: 'Maruti Ertiga',
        model: 'SUV',
        description: 'For 6 + 1, CNG/Diesel, USB Charging, Music System, Air Conditioning.',
        price: 5000,
        image: '/images/ertiga.png',
      },
      {
        id: 2,
        name: 'Innova Crysta',
        model: 'MUV',
        description: 'For 6 + 1, CNG/Diesel, USB Charging, Music System, Air Conditioning.',
        price: 7000,
        image: '/images/innova.png',
      },
      {
        id: 3,
        name: 'Luxury',
        model: 'Sedan',
        description: 'Comfortable and spacious with advanced features.',
        price: 4000,
        image: '/images/luxury.png',
      },
      {
        id: 4,
        name: 'Maruti',
        model: 'SUV',
        description: 'Luxury 7-seater SUV with top-notch features.',
        price: 12000,
        image: '/images/maruti.png',
      },
      // Add more cars as needed
    ];

    setCars(fetchedCars);
  }, []);

  return (
    <div>
      {/* Header */}
      <header className="bg-[#CDC7C7] w-full">
        <nav className="bg-[#CDC7C7] mb-0">
          <ul className="flex space-x-4 p-4">
            <li>Home</li>
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

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {cars.map((car) => (
              <div key={car.id} className="card p-6 bg-white shadow-lg rounded-lg">
                <img src={car.image} alt={car.name} className="w-full h-56 object-cover rounded-lg" />
                <h3 className="text-2xl mt-4">{car.name}</h3>
                <p className="mt-4 text-lg">{car.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  <p className="text-xl font-semibold">Rs. {car.price}/-</p>
                  <button className="px-6 py-2 bg-gradient-to-r from-[#faa499] to-[#ffc55c] rounded-lg">
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

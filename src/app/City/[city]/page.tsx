'use client';
import { useParams, useRouter } from 'next/navigation';
import Image from 'next/image';

export default function City() {
  const router = useRouter(); // Initialize the router
  const { city } = useParams();
  const handleBookNowClick = () => {
    router.push('/'); // Navigates to the index page
  };
  // Ensure city is always a string and not undefined or an array
const formattedCity = city ? String(city).replace(/([a-z])([A-Z])/g, "$1 $2") : "Unknown City";

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-500 text-white py-4 text-center">
        <h1 className="text-3xl sm:text-4xl font-bold">{`AIMCAB - ${formattedCity} Route`}</h1>
        <p className="mt-2 text-lg sm:text-xl">Book your cab for a smooth journey from {formattedCity}</p>
      </header>

      {/* Route Information Section */}
      <section className="mt-8 px-4 sm:px-6 lg:px-8">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700">{formattedCity} - A Comfortable Journey</h2>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl sm:text-2xl font-semibold text-green-500 mt-4">Route Highlights</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Scenic views of the Western Ghats</li>
            <li>Comfortable highway drive with excellent roads</li>
            <li>Multiple stop options for refreshments and breaks</li>
          </ul>
        </div>
      </section>

      {/* Available Vehicles Section */}
      <section className="mt-16">
        <h2 className="text-2xl sm:text-3xl font-semibold text-center text-gray-700">Available Cars</h2>
        <div className="mt-8 flex flex-wrap justify-center space-x-6 py-8 px-4 sm:px-6 lg:px-8">
          {/* Car Cards */}
          {['hatchback.png', 'sedan.jpg', 'suv.jpg', 'muv.png'].map((carImage, index) => (
            <div key={index} className="flex-none w-60 sm:w-72 lg:w-80 bg-white rounded-lg shadow-lg mb-6">
              <Image
                src={`/images/${carImage}`}
                alt={`Car ${index + 1}`}
                width={400}
                height={250}
                className="rounded-lg"
              />
              <p className="text-center mt-2 text-gray-600">{['Hatchback', 'Sedan', 'SUV', 'MUV'][index]}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Booking Section */}
      <section className="mt-16 bg-green-500 text-white py-8 px-4 text-center rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-3xl font-semibold">Book Your Ride Now!</h2>
        <p className="mt-2 text-lg sm:text-xl">Select your preferred vehicle and get ready for an unforgettable ride from {city}.</p>
        <button 
          onClick={handleBookNowClick} // Handle click to navigate to index
          className="mt-4 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100 transition"
        >
          Book Now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-500 text-white py-4 text-center mt-16">
        <p className="text-sm sm:text-base">&copy; 2024 AIMCAB - Your trusted cab service for {city}</p>
      </footer>
    </div>
  );
}

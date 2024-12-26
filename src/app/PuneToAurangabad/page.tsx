'use client';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

export default function PuneToAurangabadRoute() {
  const router = useRouter(); // Initialize the router

  const handleBookNowClick = () => {
    router.push('/HomePage'); // Navigates to the index page
  };

  return (
    <div className="min-h-screen bg-gray-100">
      {/* Header Section */}
      <header className="bg-green-500 text-white py-4 text-center">
        <h1 className="text-3xl font-bold">AIMCAB - Pune to Aurangabad Route</h1>
        <p className="mt-2 text-lg">Book your cab for a comfortable journey from Pune to Aurangabad</p>
      </header>

      {/* Route Information Section */}
      <section className="mt-8 px-4">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Pune to Aurangabad - A Journey of Heritage and Culture</h2>
        <div className="mt-6 bg-white p-6 rounded-lg shadow-lg">
          <h3 className="text-xl font-semibold text-green-500">Distance & Duration</h3>
          <p className="text-gray-600 mt-2">The distance between Pune and Aurangabad is approximately 230 kilometers. The journey typically takes around 4.5 to 5 hours, depending on traffic conditions.</p>

          <h3 className="text-xl font-semibold text-green-500 mt-4">Route Highlights</h3>
          <ul className="list-disc list-inside text-gray-600 mt-2">
            <li>Visit to the iconic Ellora Caves</li>
            <li>Historical attractions like Bibi Ka Maqbara</li>
            <li>Scenic drive through the Deccan Plateau</li>
            <li>Multiple stop options for refreshments and breaks</li>
          </ul>
        </div>
      </section>

      {/* Available Vehicles Section */}
      <section className="mt-16">
        <h2 className="text-2xl font-semibold text-center text-gray-700">Available Cars</h2>
        <div className="flex overflow-x-auto space-x-6 py-8 px-4">
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/car5.jpg" // Replace with your image path
              alt="Car 1"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">Hatchback</p>
          </div>

          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/car1.jpeg" // Replace with your image path
              alt="Car 1"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <br />
            <p className="text-center mt-2 text-gray-600">Sedan</p>
          </div>
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/suv.jpg" // Replace with your image path
              alt="Car 2"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">SUV</p>
          </div>
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/muv.png" // Replace with your image path
              alt="Car 4"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <br />
            <p className="text-center mt-2 text-gray-600">MUV</p>
          </div>
          <div className="flex-none w-60 bg-white rounded-lg shadow-lg">
            <Image
              src="/images/car2.jpg" // Replace with your image path
              alt="Car 3"
              width={400}
              height={250}
              className="rounded-lg"
            />
            <p className="text-center mt-2 text-gray-600">Luxury</p>
          </div>
        </div>
      </section>

      {/* Booking Section */}
      <section className="mt-16 bg-green-500 text-white py-8 px-4 text-center rounded-lg shadow-lg">
        <h2 className="text-2xl font-semibold">Book Your Ride Now!</h2>
        <p className="mt-2">Select your preferred vehicle and get ready for a cultural exploration of Aurangabad.</p>
        <button
          onClick={handleBookNowClick} // Handle click to navigate to index
          className="mt-4 px-6 py-3 bg-white text-green-500 font-semibold rounded-lg shadow-md hover:bg-green-100 transition"
        >
          Book Now
        </button>
      </section>

      {/* Footer Section */}
      <footer className="bg-green-500 text-white py-4 text-center mt-16">
        <p>&copy; 2024 AIMCAB - Your trusted cab service for Pune to Aurangabad</p>
      </footer>
    </div>
  );
}

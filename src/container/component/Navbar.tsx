'use client'; // This line tells Next.js that this component uses client-side features like React hooks.

import { useState } from 'react';

export default function Navbar() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-gray-900 text-white sticky top-0 z-50 shadow-lg transition-all duration-200 ease-in-out">
      <div className="max-w-screen-xl mx-auto px-6 py-4 flex items-center justify-between">
        {/* Logo with fast animation */}
        <a href="#" className="flex items-center text-2xl font-semibold text-yellow-500 hover:text-yellow-400 transition-transform duration-300 ease-in-out transform hover:scale-105">
          <img
            src="https://aimcabbooking.com/images/logo-png.png"
            alt="AIMCAB Logo"
            className="w-12 h-12 transform transition-transform duration-300 ease-in-out hover:rotate-12 hover:scale-105 animate__animated animate__fadeIn"
          />
          <span className="ml-3">AIMCAB</span>
        </a>

        {/* Navbar links for large screens */}
        <div className="hidden md:flex space-x-8 items-center">
          <a href="tel:9130030054" className="text-white text-lg hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-0.2s">
            <i className="fas fa-phone-alt fa-lg"></i> Call Us
          </a>
          <a href="#home" className="text-white text-lg hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-0.4s">
            Home
          </a>
          <a href="#about" className="text-white text-lg hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-0.6s">
            About
          </a>
          <a href="#service" className="text-white text-lg hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-0.8s">
            Services
          </a>
          <a href="#contact" className="text-white text-lg hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
            Contact
          </a>
          <a href="/user" className="text-white text-lg hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1.2s">
            <img
              src="images/admin.jpg"
              alt="User Avatar"
              className="rounded-full w-10 h-10 border-2 border-yellow-500 transform transition-all duration-200 hover:scale-105"
            />
          </a>
        </div>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-white focus:outline-none animate__animated animate__fadeIn animate__delay-1.4s"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white mb-1"></span>
          <span className="block w-6 h-0.5 bg-white"></span>
        </button>
      </div>

      {/* Mobile menu with fast slide-in animation */}
      <div
        className={`md:hidden bg-gray-900 ${isMenuOpen ? 'block' : 'hidden'} transition-transform duration-300 ease-in-out transform ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'} animate__animated animate__fadeInRight`}
      >
        <div className="flex flex-col items-center py-6 space-y-4">
          <a href="tel:9130030054" className="text-white text-xl hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-0.2s">
            <i className="fas fa-phone-alt fa-lg"></i> Call Us
          </a>
          <a href="#home" className="text-white text-xl hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-0.4s">
            Home
          </a>
          <a href="#about" className="text-white text-xl hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-0.6s">
            About
          </a>
          <a href="#service" className="text-white text-xl hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-0.8s">
            Services
          </a>
          <a href="#contact" className="text-white text-xl hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1s">
            Contact
          </a>
          <a href="/user" className="text-white text-xl hover:text-yellow-400 transition-all duration-200 transform hover:scale-105 animate__animated animate__fadeIn animate__delay-1.2s">
            <img
              src="images/admin.jpg"
              alt="User Avatar"
              className="rounded-full w-12 h-12 border-2 border-yellow-500 transform transition-all duration-200 hover:scale-105"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

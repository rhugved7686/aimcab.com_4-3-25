// src/app/Pages/navbar.js

'use client'; // This line tells Next.js that this component uses client-side features like React hooks.

import { useState } from 'react';

export default function Navbar() {
  // State for mobile menu toggle
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className="bg-dark sticky top-0 z-50">
      <div className="max-w-screen-xl mx-auto px-4 py-3">
        {/* Navbar for large screens */}
        <div className="flex items-center justify-between">
          <a href="#" className="flex items-center text-white font-bold text-2xl">
            <img
              src="https://aimcabbooking.com/images/logo-png.png"
              alt="AIMCAB Logo"
              className="w-12 h-12"
            />
            <span className="ml-3">AIMCAB</span>
          </a>

          {/* Navbar links for large screens */}
          <div className="hidden md:flex space-x-6 items-center">
            <a href="tel:9130030054" className="text-white">
              <i className="fas fa-phone-alt fa-lg"></i>
            </a>
            <a href="#" className="text-white">Home</a>
            <a href="#about" className="text-white">About</a>
            <a href="#service" className="text-white">Services</a>
            <a href="#contact" className="text-white">Contact</a>
            <a href="/user" className="text-white">
              <img
                src="images/admin.jpg"
                alt="User Avatar"
                className="rounded-full w-9 h-9"
              />
            </a>
          </div>

          {/* Mobile menu toggle */}
          <button
            className="md:hidden text-white focus:outline-none"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <span className="navbar-toggler-icon block w-6 h-1 bg-white mb-2"></span>
            <span className="navbar-toggler-icon block w-6 h-1 bg-white mb-2"></span>
            <span className="navbar-toggler-icon block w-6 h-1 bg-white"></span>
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden bg-dark ${isMenuOpen ? 'block' : 'hidden'}`}
      >
        <div className="flex flex-col items-center py-4">
          <a href="tel:9130030054" className="text-white py-2">
            <i className="fas fa-phone-alt fa-lg"></i>
          </a>
          <a href="/pages" className="text-white py-2">Home</a>
          <a href="#about" className="text-white py-2">About</a>
          <a href="#service" className="text-white py-2">Services</a>
          <a href="#contact" className="text-white py-2">Contact</a>
          <a href="/user" className="text-white py-2">
            <img
              src="images/admin.jpg"
              alt="User Avatar"
              className="rounded-full w-9 h-9"
            />
          </a>
        </div>
      </div>
    </nav>
  );
}

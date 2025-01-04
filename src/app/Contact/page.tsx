'use client';
import 'animate.css';


export default function Contact() {
  return (
    <div className="bg-gray-100 py-16">
      {/* Main container */}
      <div className="container mx-auto px-4">
        <h1 className="text-4xl font-extrabold text-center text-gray-800 mb-8 animate__animated animate__fadeIn animate__fast">
          Contact Us - AimCab
        </h1>

        {/* Contact Form Section */}
        <div className="lg:flex lg:space-x-12 animate__animated animate__fadeIn animate__fast">
          {/* Left Section: Contact Info */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 animate__animated animate__fadeIn animate__fast">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4">Get in Touch</h2>
            <p className="text-lg text-gray-600 mb-6">
              Have a question or need assistance? Reach out to us through the form or via the contact information below.
            </p>
            <div className="space-y-6">
              {/* Email */}
              <div className="flex items-center text-lg text-gray-600 hover:text-yellow-500 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M22 12h-8M10 12H2m0 0l4-4m-4 4l4 4m12-4l-4 4m4-4l-4-4"
                  />
                </svg>
                <span>Email: <a href="mailto:aimcabhelp@gmail.com" className="text-yellow-500">aimcabhelp@gmail.com</a></span>
              </div>

              {/* Phone */}
              <div className="flex items-center text-lg text-gray-600 hover:text-yellow-500 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 6.75V18c0 .414.336.75.75.75h16.5a.75.75 0 00.75-.75V6.75c0-.414-.336-.75-.75-.75H3a.75.75 0 00-.75.75z"
                  />
                </svg>
                <span>Phone: <a href="tel:+919130030054" className="text-yellow-500">+91 9130030054</a></span>
              </div>

              {/* Address */}
              <div className="flex items-center text-lg text-gray-600 hover:text-yellow-500 transition-colors duration-300">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-6 h-6 mr-3 text-yellow-500"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  strokeWidth="2"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M12 2c5.523 0 10 4.477 10 10s-4.477 10-10 10S2 17.523 2 12 6.477 2 12 2z"
                  />
                </svg>
                <span>Address: City Vista, Kharadi, Pune</span>
              </div>
            </div>
          </div>

          {/* Right Section: Contact Form */}
          <div className="lg:w-1/2">
            <h2 className="text-3xl font-semibold text-gray-700 mb-4 animate__animated animate__fadeIn animate__fast">
              Send Us a Message
            </h2>
            <form
              action="/api/contact"
              method="POST"
              className="bg-white shadow-lg p-8 rounded-lg space-y-6 hover:shadow-2xl transition-all duration-300 animate__animated animate__fadeIn animate__fast"
            >
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="flex flex-col">
                  <label htmlFor="name" className="text-gray-600">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    required
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-gray-600">Email Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    required
                    className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                    placeholder="Enter your email"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="message" className="text-gray-600">Message</label>
                <textarea
                  name="message"
                  id="message"
                  required
                  rows="4"
                  className="mt-2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-yellow-500 transition-all duration-300"
                  placeholder="Enter your message"
                ></textarea>
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  className="bg-yellow-500 text-white py-2 px-6 rounded-lg hover:bg-yellow-600 transition-all duration-300"
                >
                  Send Message
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

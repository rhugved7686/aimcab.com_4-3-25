'use client';

export default function Footer() {
  return (
    <div className="bg-black text-yellow-400 py-12 sm:py-16">
      {/* Footer content area */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Add footer columns here if needed */}
        </div>
      </div>

      {/* Popular Cities Section */}
      <div className="container mx-auto px-4 text-center text-white mb-8">
        <b>Popular Cities:</b>
        <div className="flex flex-wrap justify-center mt-2">
          <a href="/Pune" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">Pune</a>
          <a href="/Mumbai/" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">Mumbai</a>
          {/* Add other cities here */}
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 my-8" />

      {/* Quick Links Section */}
      <div className="container mx-auto px-4 text-center text-white mb-8">
        <b>QUICK LINKS:</b>
        <div className="mt-2 flex flex-wrap justify-center">
          <a href="/" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">HOME</a>
          <a href="/" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">UPDATES</a>
          <a href="/#about" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">ABOUT</a>
          <a href="/#service" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">SERVICES</a>
          <a href="/Contact" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">CONTACT US</a>
          <a href="/career" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">CAREER</a>
          <a href="/FAQ" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">FAQ's</a>
          <a href="/PrivacyPolicy" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">PRIVACY POLICY</a>
          <a href="/TermsConditions" className="text-yellow-400 hover:text-white mx-2 mb-2 sm:mb-0">TERMS & CONDITIONS</a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 my-8" />

      {/* Designed by Section */}
      <div className="container mx-auto px-4 text-center text-white mb-8">
      <h4>Designed by <a href="https://cobaztech.com" target="_blank" className="text-yellow-400 hover:text-white">Cobaztech</a></h4>

      </div>

      {/* Social Media Section */}
      <div className="container mx-auto px-4 text-center sm:text-right mt-6">
        <span className="flex justify-center sm:justify-end flex-wrap">
          <a href="https://wa.me/9130030054" target="_blank" className="mx-2">
            <img className="w-8 h-8 inline-block mb-2" src="images/whatsapp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.facebook.com/Aimcab" target="_blank" className="mx-2">
            <img className="w-8 h-8 inline-block mb-2" src="images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/@AimCab" target="_blank" className="mx-2">
            <img className="w-8 h-8 inline-block mb-2" src="images/youtube.png" alt="YouTube" />
          </a>
          <a href="https://twitter.com/aim_cab" target="_blank" className="mx-2">
            <img className="w-8 h-8 inline-block mb-2" src="images/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/aim-cab-77356b208/" target="_blank" className="mx-2">
            <img className="w-8 h-8 inline-block mb-2" src="images/linked-in.png" alt="LinkedIn" />
          </a>
          <a href="https://join.skype.com/invite/sRT2FTyb7d1H" target="_blank" className="mx-2">
            <img className="w-8 h-8 inline-block mb-2" src="images/skype.png" alt="Skype" />
          </a>
          <a href="https://www.instagram.com/aimcabs/" target="_blank" className="mx-2">
            <img className="w-8 h-8 inline-block mb-2" src="images/instagram.png" alt="Instagram" />
          </a>
        </span>
      </div>
    </div>
  );
}

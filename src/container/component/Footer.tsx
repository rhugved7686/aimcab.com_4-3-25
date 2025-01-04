'use client';

export default function Footer() {
  return (
    <div className="bg-black text-yellow-400 py-12">
      {/* Footer content area started */}
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
        </div>
      </div>

      {/* Popular Cities Section */}
      <div className="container mx-auto px-4">
        <div className="text-center text-white">
          <b>Popular Cities:</b>
          <div className="flex flex-wrap justify-center mt-2">
            <a href="/Pune" className="text-yellow-400 hover:text-white mx-2">Pune</a>
            <a href="/Mumbai/" className="text-yellow-400 hover:text-white mx-2">Mumbai</a>





            {/* Add other cities here */}
          </div>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 my-8" />

      {/* Quick Links Section */}
      <div className="container mx-auto px-4 text-center text-white">
        <b>QUICK LINKS:</b>
        <div className="mt-2">
          <a href="/" className="text-yellow-400 hover:text-white mx-2">HOME</a>
          <a href="/" className="text-yellow-400 hover:text-white mx-2">UPDATES</a>
          <a href="/#about" className="text-yellow-400 hover:text-white mx-2">ABOUT</a>
          <a href="/#service" className="text-yellow-400 hover:text-white mx-2">SERVICES</a>
          <a href="/Contact" className="text-yellow-400 hover:text-white mx-2">CONTACT US</a>
          <a href="/career" className="text-yellow-400 hover:text-white mx-2">CAREER</a>
          <a href="/FAQ" className="text-yellow-400 hover:text-white mx-2">FAQ's</a>
          <a href="/PrivacyPolicy" className="text-yellow-400 hover:text-white mx-2">PRIVACY POLICY</a>
          <a href="/TermsConditions" className="text-yellow-400 hover:text-white mx-2">TERMS & CONDITIONS</a>
        </div>
      </div>

      {/* Divider */}
      <hr className="border-gray-500 my-8" />

      {/* Designed by Section */}
      <div className="container mx-auto px-4 text-center text-white">
        <h4>Designed by Cobaztech</h4>
      </div>

      {/* Social Media Section */}
      <div className="container mx-auto px-4 text-right mt-6">
        <span>
          <a href="https://wa.me/9130030054" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/whstapp.png" alt="WhatsApp" />
          </a>
          <a href="https://www.facebook.com/Aimcab" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/facebook.png" alt="Facebook" />
          </a>
          <a href="https://www.youtube.com/@AimCab" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/youtube.png" alt="YouTube" />
          </a>
          <a href="https://twitter.com/aim_cab" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/twitter.png" alt="Twitter" />
          </a>
          <a href="https://www.linkedin.com/in/aim-cab-77356b208/" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/linked-in.png" alt="LinkedIn" />
          </a>
          <a href="https://join.skype.com/invite/sRT2FTyb7d1H" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/skype.png" alt="Skype" />
          </a>
          <a href="https://www.instagram.com/aimcabs/" target="_blank">
            <img className="w-8 h-8 inline-block mx-2" src="https://www.aimcabbooking.com/images/linstagram.png" alt="Instagram" />
          </a>
        </span>
      </div>
    </div>
  );
}

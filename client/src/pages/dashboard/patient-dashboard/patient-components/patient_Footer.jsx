import React from 'react';
import { Link } from 'react-router-dom';
import { FaInstagram, FaTwitter, FaFacebookF } from 'react-icons/fa';

const Patient_Footer = () => {
  return (
    <footer className="bg-slate-900 text-white py-8">
      <div className="max-w-6xl mx-40 px-5 flex flex-col md:flex-row justify-between items-start md:items-center">
        
        {/* Left - Contact Info */}
        <div className="mb-6 md:mb-0">
          <h3 className="text-xl font-bold mb-2"><Link to="/patient/patient-home" className="hover:text-blue-600">Relife Health Care</Link> </h3>
          <p>Diamond Harbour</p>
          <p>Kolkata, WB - 743368</p>
          <p>📞 +91 33 2551 7800</p>
        </div>

        {/* Middle - Social Icons */}
        <div className="mb-6 md:mb-0 flex space-x-6 text-lg">
          <a
            href="https://www.instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-pink-500 transition"
            aria-label="Instagram"
          >
            <FaInstagram />
          </a>
          <a
            href="https://www.twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-400 transition"
            aria-label="Twitter"
          >
            <FaTwitter />
          </a>
          <a
            href="https://www.facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-blue-600 transition"
            aria-label="Facebook"
          >
            <FaFacebookF />
          </a>
        </div>

        {/* Right - Quick Links */}
        <div>
          <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
          <ul className="space-y-1 text-sm">
            <li><Link to="/patient/patient-home" className="hover:text-blue-600">Home</Link></li>
            <li><Link to="/patient/patient-services" className="hover:text-blue-600">Services</Link></li>
            <li><Link to="/patient/patient-aboutus" className="hover:text-blue-600">About Us</Link></li>
            <li><Link to="/patient/patient-exploreus" className="hover:text-blue-600">Explore Us</Link></li>
            <li><Link to="/patient/patient-Contact" className="hover:text-blue-600">Contact Us</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom */}
      <div className="text-center text-sm mt-6 border-t border-gray-700 pt-4">
        &copy; 2025 Relife Hospital. All rights reserved.
      </div>
    </footer>
  );
};

export default Patient_Footer;

import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-gray-900 via-gray-800 to-gray-900 text-white py-10 text-center shadow-lg">
      {/* Social Links */}
      <div className="flex flex-col md:flex-row justify-center items-center gap-6 mb-6">
        <a 
          href="https://github.com/EngrJosimuddin42" 
          target="_blank" 
          className="hover:text-blue-500 transition transform hover:-translate-y-1"
        >
          GitHub
        </a>
        <a 
          href="https://www.linkedin.com/in/engrjosimuddin/" 
          target="_blank" 
          className="hover:text-green-500 transition transform hover:-translate-y-1"
        >
          LinkedIn
        </a>
        <a 
          href="mailto:josimcse@gmail.com" 
          className="hover:text-yellow-400 transition transform hover:-translate-y-1"
        >
          Email
        </a>
         <a 
          href="https://www.facebook.com/Engr.Josimuddin42" 
          target="_blank" 
          className="hover:text-blue-600 transition transform hover:-translate-y-1"
        >
          Facebook
        </a>


        </div>

      {/* Footer Text */}
      <p className="text-gray-400 text-sm">
        © 2025 Engr. Josimuddin. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

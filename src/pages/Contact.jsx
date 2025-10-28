import React from "react";

const Contact = () => {
  return (
   <section id="contact" className="py-24 px-6 bg-gradient-to-r from-pink-50 via-pink-100 to-pink-50 text-center">

      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-8 text-gray-800">
          Get in Touch
        </h2>
        <p className="text-gray-600 text-lg mb-12 leading-relaxed">
          I'm always open to discussing new projects, creative ideas, or opportunities to contribute. 
          Feel free to reach out through email, phone, or connect on LinkedIn, GitHub & Facebook.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <a 
            href="mailto:josimcse@gmail.com" 
            className="flex items-center justify-center px-6 py-4 bg-blue-500 text-white rounded-lg shadow hover:bg-blue-600 transition font-medium"
          >
            Email
          </a>

          <a 
            href="tel:+8801518380199" 
            className="flex items-center justify-center px-6 py-4 bg-yellow-500 text-white rounded-lg shadow hover:bg-yellow-600 transition font-medium"
          >
            Mobile
          </a>

          <a 
            href="https://www.linkedin.com/in/engrjosimuddin/" 
            target="_blank" 
            className="flex items-center justify-center px-6 py-4 bg-green-500 text-white rounded-lg shadow hover:bg-green-600 transition font-medium"
          >
            LinkedIn
          </a>

          <a 
            href="https://github.com/EngrJosimuddin42" 
            target="_blank" 
            className="flex items-center justify-center px-6 py-4 bg-gray-800 text-white rounded-lg shadow hover:bg-gray-900 transition font-medium"
          >
            GitHub
          </a>

          <a 
            href="https://www.facebook.com/Engr.Josimuddin42" 
            target="_blank" 
            className="flex items-center justify-center px-6 py-4 bg-blue-700 text-white rounded-lg shadow hover:bg-blue-800 transition font-medium"
          >
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

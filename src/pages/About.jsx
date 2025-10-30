import React from "react";

const About = () => {
  return (
    <section
      id="about"
      className="py-24 px-6 bg-gradient-to-r from-gray-50 via-gray-100 to-gray-50"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 text-gray-800">
          About Me
        </h2>
        <p className="text-gray-600 text-lg md:text-xl mb-10 leading-relaxed">  
          I am a passionate <span className="font-semibold text-green-600">Flutter Developer </span>  
           & Designer with a <span className="font-semibold text-purple-600">BSc in CSE</span>.  
          I have completed <span className="font-semibold text-yellow-600">7  projects </span>   
          that showcase my skills in mobile & web app development. My goal is to build
          user-friendly and high-performance applications.
        </p>

        <div className="flex flex-wrap justify-center gap-4 mb-6">
          <span className="px-5 py-2 bg-blue-100 text-blue-800 rounded-lg font-medium shadow-md">
            Flutter
          </span>
          <span className="px-5 py-2 bg-green-100 text-green-800 rounded-lg font-medium shadow-md">
            React
          </span>
          <span className="px-5 py-2 bg-purple-100 text-purple-800 rounded-lg font-medium shadow-md">
            Tailwind CSS
          </span>
          <span className="px-5 py-2 bg-yellow-100 text-yellow-800 rounded-lg font-medium shadow-md">
            Firebase
          </span>
        </div>

        {/* Download Resume Button */}
        <a
          href="/portfolio/resume.pdf"
           download="Josimuddin_Resume.pdf"
          className="inline-block px-6 py-3 bg-blue-600 text-white rounded-lg shadow-lg hover:bg-blue-700 transition transform hover:-translate-y-1"
        >
          Download Resume
        </a>
      </div>
    </section>
  );
};

export default About;

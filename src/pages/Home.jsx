import React from "react";
import profilePic from "../assets/profile.jpg";

const Home = () => {
  const disclaimer = " Welcome! This is my live demo portfolio showcasing projects, designs, and coding skills — enjoy exploring! ";

  return (
    <section id="home" className="relative h-screen flex flex-col items-center bg-gradient-to-b from-blue-50 via-blue-100 to-blue-200 text-center px-4">
      {/* Marquee message */}
      <div className="absolute top-[70px] left-0 w-full overflow-hidden pointer-events-none z-10">
        <div className="flex animate-marquee whitespace-nowrap py-2">
          {[...Array(6)].map((_, i) => {
            const colors = [
              "from-blue-500 via-blue-600 to-blue-700",
              "from-green-400 via-green-500 to-green-600",
              "from-purple-500 via-pink-500 to-red-500",
              "from-yellow-400 via-orange-400 to-red-400"
            ];
            const colorClass = colors[i % colors.length];
            return (
              <span
                key={i}
                className={`inline-block mr-16 text-transparent bg-clip-text bg-gradient-to-r ${colorClass} font-semibold text-base md:text-lg`}
              >
                {disclaimer}
              </span>
            );
          })}
        </div>
      </div>

      {/* Spacer */}
      <div className="mt-24 md:mt-28"></div>

      {/* Profile */}
      <img src={profilePic} alt="Engr. Josimuddin" className="w-40 h-40 md:w-48 md:h-48 rounded-full border-4 border-blue-500 shadow-xl mb-6 animate-fadeIn" />

      {/* Name */}
      <h1 className="text-4xl md:text-6xl font-extrabold mb-4 text-gray-900 animate-fadeIn">
        Hi, I'm <span className="text-blue-600">Engr. Josimuddin</span>
      </h1>

      {/* Role */}
      <p className="text-lg md:text-2xl text-gray-700 mb-6 animate-fadeIn delay-200">
        Flutter Developer & Designer | BSc in CSE
      </p>

      {/* Social Links */}
      <div className="flex gap-4 animate-fadeIn delay-400">
        <a href="https://github.com/EngrJosimuddin42" target="_blank" rel="noreferrer" className="px-6 py-3 bg-blue-500 text-white rounded-lg shadow-lg hover:bg-blue-600 transform hover:-translate-y-1 transition-all">
          GitHub
        </a>

        <a href="https://www.linkedin.com/in/engrjosimuddin/" target="_blank" rel="noreferrer" className="px-6 py-3 bg-green-500 text-white rounded-lg shadow-lg hover:bg-green-600 transform hover:-translate-y-1 transition-all">
          LinkedIn
        </a>
      </div>

      {/* Tailwind keyframes */}
      <style jsx>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(8px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.6s ease forwards;
        }

        @keyframes marquee {
          0% { transform: translateX(100%); }
          100% { transform: translateX(-100%); }
        }
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
      `}</style>
    </section>
  );
};

export default Home;

import React from "react";
import { GraduationCap } from "lucide-react"; // npm install lucide-react

const Education = () => {
  const educationList = [
    {
      degree: "BSc in Computer Science & Engineering",
      institution: "Dhaka University of Engineering & Technology (DUET), Gazipur",
      year: "2015 - 2024",
      gpa: "2.59",
    },
    {
      degree: "Diploma in Engineering (Computer Technology)",
      institution: "Rajshahi Polytechnic Institute (RPI), Rajshahi",
      year: "2009 - 2013",
      gpa: "3.78",
    },
    {
      degree: "Secondary School Certificate (SSC)",
      institution: "Pirpur Dhakil Madrasha (PDM), Chapainawabganj",
      year: "2006 - 2008",
      gpa: "4.75",
    },
  ];

  return (
<section id="education" className="py-24 px-6 bg-gradient-to-r from-yellow-50 via-yellow-100 to-yellow-50">

          <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center text-gray-800">
          Academic Background
        </h2>

        <div className="relative border-l-4 border-blue-500 pl-6 space-y-10">
          {educationList.map((edu, idx) => (
            <div
              key={idx}
              className="relative bg-white shadow-lg rounded-xl p-6 transition transform hover:-translate-y-1 hover:shadow-2xl duration-300"
            >
              {/* Icon */}
              <span className="absolute -left-8 top-6 bg-blue-500 text-white p-2 rounded-full shadow-md">
                <GraduationCap size={20} />
              </span>

              {/* Degree */}
              <h3 className="text-2xl font-semibold text-gray-800 mb-1">
                {edu.degree}
              </h3>

              {/* Institution */}
              <p className="text-gray-600 font-medium mb-1">{edu.institution}</p>

              {/* Year & GPA */}
              <div className="flex flex-wrap justify-between text-gray-500 text-sm">
                <p>{edu.year}</p>
                <p className="text-gray-700 font-semibold">
                  GPA/CGPA: {edu.gpa}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

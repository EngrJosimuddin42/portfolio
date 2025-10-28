import React from "react";

const ProjectCard = ({ name, description, link }) => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transform hover:-translate-y-2 transition-all duration-300">
      <h3 className="text-xl font-bold mb-3 text-gray-800">{name}</h3>
      <p className="text-gray-600 mb-5">{description}</p>
      <a
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 bg-blue-500 text-white font-medium rounded-lg hover:bg-blue-600 transition"
      >
        View on GitHub
      </a>
    </div>
  );
};

export default ProjectCard;

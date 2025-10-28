import React from "react";
import ProjectCard from "../components/ProjectCard";

const projects = [
  { 
    name: "Flutter E-Commerce App", 
    description: "A complete e-commerce mobile application built with Flutter and Firebase.", 
    link: "https://github.com/EngrJosimuddin42" 
  },
  { 
    name: "Portfolio Website", 
    description: "Personal portfolio website using React, Tailwind CSS, and Vite.", 
    link: "https://github.com/EngrJosimuddin42" 
  },
  { 
    name: "Quiz App", 
    description: "MCQ quiz app built with Flutter and Cloud Firestore backend.", 
    link: "https://github.com/EngrJosimuddin42" 
  },
  { 
    name: "Work Hub", 
    description: "A productivity app for task & project management built with Flutter.", 
    link: "https://github.com/EngrJosimuddin42" 
  },
  { 
    name: "Dual Dictionary", 
    description: "A bilingual dictionary app built with Flutter.", 
    link: "https://github.com/EngrJosimuddin42" 
  },
  { 
    name: "Task Manager", 
    description: "A task management app for Android built with Flutter and SQLite.", 
    link: "https://github.com/EngrJosimuddin42" 
  },
{ 
  name: "Todo App", 
  description: "A simple and efficient to-do list app built with Flutter.", 
  link: "https://github.com/EngrJosimuddin42" 
},

];

const Projects = () => {
  return (
<section id="projects" className="py-24 px-6 bg-gradient-to-r from-green-50 via-green-100 to-green-50 text-center">
      <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
        My Projects
      </h2>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {projects.map((project, idx) => (
          <ProjectCard key={idx} {...project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;

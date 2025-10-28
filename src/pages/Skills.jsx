import React from "react";
import SkillBadge from "../components/SkillBadge";

const Skills = () => {
  const skills = [
    { name: "Flutter", color: "bg-blue-100 text-blue-800" },
    { name: "React", color: "bg-green-100 text-green-800" },
    { name: "Tailwind CSS", color: "bg-purple-100 text-purple-800" },
    { name: "Firebase", color: "bg-yellow-100 text-yellow-800" },
    { name: "UI/UX Design", color: "bg-pink-100 text-pink-800" },
    { name: "JavaScript", color: "bg-orange-100 text-orange-800" },
    { name: "Git & GitHub", color: "bg-gray-200 text-gray-800" },
    { name: "Node.js", color: "bg-green-200 text-green-900" },
    { name: "HTML & CSS", color: "bg-red-100 text-red-800" },
    { name: "REST APIs", color: "bg-indigo-100 text-indigo-800" },
    { name: "SQL & NoSQL", color: "bg-teal-100 text-teal-800" },
  ];

  return (
    <section id="skills" className="py-24 px-6 bg-gradient-to-r from-purple-50 via-purple-100 to-purple-50">

      <div className="max-w-5xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-12 text-gray-800">
          My Skills
        </h2>

        <div className="flex flex-wrap justify-center gap-4">
          {skills.map((skill, index) => (
            <SkillBadge key={index} skill={skill.name} color={skill.color} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

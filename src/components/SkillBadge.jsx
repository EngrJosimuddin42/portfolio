import React from "react";

const SkillBadge = ({ skill, color }) => {
  return (
    <span
      className={`px-5 py-3 rounded-lg font-medium shadow-md ${color} transform transition duration-300 hover:scale-105`}
    >
      {skill}
    </span>
  );
};

export default SkillBadge;

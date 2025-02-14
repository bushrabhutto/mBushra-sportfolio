import React from "react";
import { FaHtml5, FaCss3Alt, FaJs, FaReact } from "react-icons/fa"; // React Icons
import { SiTailwindcss, SiNextdotjs } from "react-icons/si"; // React Icons

const Skills = () => {
  const skills = [
    {
      name: "HTML5",
      icon: <FaHtml5 className="text-orange-600 w-12 h-12" />,
    },
    {
      name: "CSS3",
      icon: <FaCss3Alt className="text-blue-600 w-12 h-12" />,
    },
    {
      name: "JavaScript",
      icon: <FaJs className="text-yellow-500 w-12 h-12" />,
    },
    {
      name: "React.js",
      icon: <FaReact className="text-blue-400 w-12 h-12" />,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss className="text-blue-500 w-12 h-12" />,
    },
    {
      name: "Next.js",
      icon: <SiNextdotjs className="text-black w-12 h-12" />,
    },
  ];

  return (
    <div className="p-6 bg-gray-100">
      <h2 className="text-3xl font-bold text-center mb-8">My Skills</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 justify-items-center">
        {skills.map((skill, index) => (
          <div
            key={index}
            className="flex flex-col items-center space-y-2 hover:scale-105 transition transform"
          >
            {skill.icon}
            <p className="text-lg font-semibold text-gray-800">{skill.name}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;

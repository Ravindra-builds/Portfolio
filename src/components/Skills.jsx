import React from 'react';
import { FaJsSquare, FaReact, FaNodeJs, FaBootstrap, FaGitAlt, FaGithub, FaHtml5, FaCss3 } from "react-icons/fa";
import { SiExpress, SiTailwindcss, SiMongodb,SiMongoose, SiSocketdotio, SiVercel, SiJsonwebtokens, SiRender } from "react-icons/si";
import { GrMysql } from "react-icons/gr";
import { VscTerminalCmd } from "react-icons/vsc";
import { TbApi, TbBrandCpp } from "react-icons/tb";

const iconMap = {
  "JavaScript":       <FaJsSquare      size={20} className="text-yellow-400" />,
  "C":                <VscTerminalCmd  size={20} className="text-blue-300" />,
  "C++":              <TbBrandCpp      size={20} className="text-blue-400" />,
  "HTML5":            <FaHtml5         size={20} className="text-orange-500" />,
  "CSS3":             <FaCss3          size={20} className="text-blue-500" />,
  "Bootstrap":        <FaBootstrap     size={20} className="text-purple-500" />,
  "React.js":         <FaReact         size={20} className="text-sky-400" />,
  "Tailwind CSS":     <SiTailwindcss   size={20} className="text-cyan-400" />,
  "Node.js":          <FaNodeJs        size={20} className="text-green-500" />,
  "Express.js":       <SiExpress       size={20} className="text-zinc-300" />,
  "REST APIs":        <TbApi           size={20} className="text-pink-400" />,
  "MVC Architecture": <VscTerminalCmd  size={20} className="text-gray-400" />,
  "Auth":             <SiJsonwebtokens size={20} className="text-yellow-300" />,
  "JWT":              <SiJsonwebtokens size={20} className="text-yellow-400" />,
  "Socket.io":        <SiSocketdotio   size={20} className="text-white" />,
  "MySQL":            <GrMysql         size={20} className="text-cyan-600" />,
  "MongoDB":          <SiMongodb       size={20} className="text-emerald-400" />,
  "Mongoose":         <SiMongoose       size={20} className="text-emerald-600" />,
  "Git":              <FaGitAlt        size={20} className="text-orange-400" />,
  "GitHub":           <FaGithub        size={20} className="text-white" />,
  "Render":           <SiRender        size={20} className="text-indigo-400" />,
  "Vercel":           <SiVercel        size={20} className="text-white" />,
};

const Skills = () => {
  const skills = [
    { category: "Languages",         items: ["JavaScript", "C", "C++"] },
    { category: "Frontend",          items: ["HTML5", "CSS3", "Bootstrap", "React.js", "Tailwind CSS"] },
    { category: "Backend",           items: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "Auth", "JWT", "Socket.io"] },
    { category: "Databases",         items: ["MySQL", "MongoDB", "Mongoose"] },
    { category: "Tools & Platforms", items: ["Git", "GitHub", "Render", "Vercel"] },
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <div className="text-center mb-16 slideDown">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slideRight">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">The tools and technologies I use to build scalable applications.</p>
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="skillCard bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors duration-300"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2 inline-block">
                {skillGroup.category}
              </h3>

              <div className="flex flex-wrap gap-3">
                {skillGroup.items.map((item, idx) => (
                  <span
                    key={idx}
                    className="skillBadge flex items-center gap-1.5 px-3 py-1.5 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors cursor-default"
                    style={{ animationDelay: `${index * 0.1 + idx * 0.07}s` }}
                  >
                    <span className="skillIcon">{iconMap[item]}</span>
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Skills;
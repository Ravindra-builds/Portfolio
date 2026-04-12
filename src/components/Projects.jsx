import React from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa';
import convoxImg from "../assets/ConvoX-image.png";
import rentiqueImg from "../assets/Rentique-image.png";
import mausamImg from "../assets/Mausam-image.png";

const Projects = () => {
  const projects = [
    {
      title: "ConvoX-Real-Time Chat Application",
      description: "A real-time chat application with a modern UI, user authentication, and seamless messaging experience.",
      tech: ["React.js", "Node.js", "Socket.io", "MongoDB","Google Gemini API"],
      github: "https://github.com/Ravindra-builds/ConvoX",
      live: "https://convox-60nt.onrender.com",
      image: convoxImg
    },
    {
      title: "Rentique-Property Rental Platform",
      description: "A property rental platform that connects landlords and tenants with a user-friendly interface and comprehensive listing management.",
      tech: ["Express.js", "MVC", "Vanilla CSS", "MongoDB"],
      github: "https://github.com/Ravindra-builds/Rentique",
      live: "https://rentique-6l5t.onrender.com",
      image: rentiqueImg
    },
    {
      title: "Mausam-Weather Dashboard",
      description: "Real-time weather data visualization application that provides forecasts, humidity levels, and wind speeds for cities worldwide.",
      tech: ["JavaScript", "OpenWeather API", "React.js"],
      github: "https://github.com/Ravindra-builds/Mausam",
      live: "https://mausam-pp6q.onrender.com",
      image: mausamImg
    }
  ];

  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 slideDown">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slideRight">Featured Projects</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">Here are some of the projects I've built.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="slideUp bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-700 transition-all duration-300 hover:shadow-xl group"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="relative h-48 overflow-hidden">
                <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-20"></div>
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                />
              </div>

              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-2">{project.title}</h3>
                <p className="text-gray-400 text-sm mb-4 line-clamp-3">{project.description}</p>

                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, i) => (
                    <span key={i} className="text-xs px-2 py-1 bg-gray-800 text-blue-300 rounded border border-gray-700">
                      {tech}
                    </span>
                  ))}
                </div>

                <div className="flex justify-between items-center">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors"
                  >
                    <FaGithub size={16} />
                    Code
                  </a>
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 text-sm text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    Live Demo
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;
import React from 'react';

const Skills = () => {
  const skills = [
    {
      category: "Languages",
      items: ["JavaScript", "C", "C++"]
    },
    {
      category: "Frontend",
      items: ["HTML5", "CSS3", "Bootstrap", "React.js", "Tailwind CSS"]
    },
    {
      category: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "MVC Architecture", "Auth","JWT","Socket.io"]
    },
    {
      category: "Databases",
      items: ["MySQL", "MongoDB", "Mongoose"]
    },
    {
      category: "Tools & Platforms",
      items: ["Git", "GitHub", "Render", "Vercel"]
    }
  ];

  return (
    <section id="skills" className="py-20 bg-gray-900/50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Skills & Technologies</h2>
          <div className="w-20 h-1 bg-purple-600 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">The tools and technologies I use to build scalable applications.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {skills.map((skillGroup, index) => (
            <div 
              key={index} 
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-blue-500/50 transition-colors duration-300"
            >
              <h3 className="text-xl font-bold text-white mb-4 border-b border-gray-800 pb-2 inline-block">
                {skillGroup.category}
              </h3>
              <div className="flex flex-wrap gap-2">
                {skillGroup.items.map((item, idx) => (
                  <span 
                    key={idx} 
                    className="px-3 py-1 bg-gray-800 text-gray-300 text-sm rounded-full border border-gray-700 hover:bg-gray-700 hover:text-white transition-colors cursor-default"
                  >
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

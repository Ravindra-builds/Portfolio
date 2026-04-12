import React from 'react';
import { Cpu, Globe, Server } from 'lucide-react';

const Learning = () => {
  const learningGoals = [
    {
      title: "Basics of System Design",
      description: "Understanding how to design scalable systems, including concepts like load balancing, caching, and database sharding.",
      icon: <Cpu className="text-blue-400" size={32} />
    },
    {
      title: "Docker & Kubernetes",
      description: "Learning containerization and orchestration to deploy scalable applications with consistency across environments.",
      icon: <Server className="text-purple-400" size={32} />
    },
    {
      title: "Cloud Architecture",
      description: "Exploring AWS services to build serverless applications and understanding microservices architecture.",
      icon: <Globe className="text-green-400" size={32} />
    }
  ];

  return (
    <section id="focus" className="py-20 bg-gray-900/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="text-center mb-16 ">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slideRight">What I'm Learning</h2>
          <div className="w-20 h-1 bg-yellow-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400 slideLeft">Continuous learning is key to my growth as a developer.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningGoals.map((goal, index) => (
            <div
              key={index}
              className="slideUp bg-gray-900 p-8 rounded-xl border border-gray-800 hover:border-yellow-500/30 transition-all duration-300 hover:-translate-y-1"
              style={{ animationDelay: `${index * 0.15}s` }}
            >
              <div className="mb-6 p-4 bg-gray-800/50 rounded-full inline-block">
                {goal.icon}
              </div>
              <h3 className="text-xl font-bold text-white mb-3">{goal.title}</h3>
              <p className="text-gray-400 leading-relaxed">
                {goal.description}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Learning;
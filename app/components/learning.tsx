import React from "react";
import { Code2, Globe, Network } from "lucide-react";

const Learning = () => {
  const learningGoals = [
    {
      title: "DSA & Problem Solving",
      badge: "Upcoming Focus",
      description:
        "I'm going to start my DSA journey, that is the problem-solving journey — building deep intuition in algorithmic patterns, data structures, and optimal time-space complexity.",
      icon: <Code2 className="text-blue-500 dark:text-blue-400" size={30} />,
      gradient: "from-blue-500/10 to-indigo-500/5",
      borderColor: "hover:border-blue-500/40",
    },
    {
      title: "Cloud Architecture",
      badge: "In Progress",
      description:
        "Exploring AWS services to build serverless applications and understanding microservices architecture.",
      icon: <Globe className="text-emerald-500 dark:text-emerald-400" size={30} />,
      gradient: "from-emerald-500/10 to-teal-500/5",
      borderColor: "hover:border-emerald-500/40",
    },
    {
      title: "System Design",
      badge: "In Progress",
      description:
        "Understanding how to design scalable systems, including load balancing, caching, and database sharding.",
      icon: <Network className="text-purple-500 dark:text-purple-400" size={30} />,
      gradient: "from-purple-500/10 to-pink-500/5",
      borderColor: "hover:border-purple-500/40",
    },
  ];

  return (
    <section id="focus" className="py-20 bg-gray-50/70 dark:bg-gray-900/30 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slideDown">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/20">
            Growth & Roadmap
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
            What I am Learning
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-xl mx-auto leading-relaxed">
            Continuous learning and deepening engineering fundamentals are key to my growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {learningGoals.map((goal, index) => (
            <div
              key={goal.title}
              className={`slideUp bg-white dark:bg-gray-900 p-8 rounded-2xl border border-gray-200 dark:border-gray-800 ${goal.borderColor} transition-all duration-300 hover:-translate-y-1 hover:shadow-xl shadow-sm flex flex-col`}
              style={{ animationDelay: `${index * 0.12}s` }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="p-3.5 bg-gray-50 dark:bg-gray-800 rounded-xl inline-flex items-center justify-center border border-gray-200/60 dark:border-gray-700/60">
                  {goal.icon}
                </div>
                <span className="text-[11px] font-medium px-2.5 py-0.5 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                  {goal.badge}
                </span>
              </div>
              <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-3">
                {goal.title}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-auto">
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
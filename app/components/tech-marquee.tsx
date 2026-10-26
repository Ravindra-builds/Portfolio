"use client";

import React from "react";
import {
  FaReact,
  FaNodeJs,
  FaDocker,
  FaGithub,
} from "react-icons/fa";
import {
  SiTypescript,
  SiMongodb,
  SiPostgresql,
  SiTailwindcss,
  SiExpress,
  SiRedis,
  SiSocketdotio,
  SiPython,
} from "react-icons/si";
import { VscOpenai } from "react-icons/vsc";
import { TbBrandNextjs } from "react-icons/tb";
import { Sparkles, Bot, Layers } from "lucide-react";

interface TechItem {
  name: string;
  category: string;
  icon: React.ReactNode;
}

const techStack: TechItem[] = [
  {
    name: "Next.js 16",
    category: "Full Stack",
    icon: <TbBrandNextjs className="text-gray-900 dark:text-white" size={20} />,
  },
  {
    name: "React 19",
    category: "Frontend",
    icon: <FaReact className="text-sky-500" size={20} />,
  },
  {
    name: "TypeScript",
    category: "Language",
    icon: <SiTypescript className="text-blue-500" size={18} />,
  },
  {
    name: "OpenAI API",
    category: "AI / GenAI",
    icon: <VscOpenai className="text-emerald-600 dark:text-emerald-400" size={20} />,
  },
  {
    name: "Google Gemini",
    category: "AI / GenAI",
    icon: <Sparkles className="text-blue-500 dark:text-blue-400" size={20} />,
  },
  {
    name: "Vercel AI SDK",
    category: "AI Tooling",
    icon: <Bot className="text-teal-500" size={20} />,
  },
  {
    name: "Node.js",
    category: "Backend",
    icon: <FaNodeJs className="text-green-500" size={20} />,
  },
  {
    name: "PostgreSQL",
    category: "Database",
    icon: <SiPostgresql className="text-sky-600 dark:text-sky-400" size={20} />,
  },
  {
    name: "MongoDB",
    category: "Database",
    icon: <SiMongodb className="text-emerald-500" size={20} />,
  },
  {
    name: "Redis",
    category: "Caching & PubSub",
    icon: <SiRedis className="text-red-500" size={20} />,
  },
  {
    name: "Docker",
    category: "DevOps",
    icon: <FaDocker className="text-blue-500" size={20} />,
  },
  {
    name: "Socket.io",
    category: "Real-Time",
    icon: <SiSocketdotio className="text-gray-800 dark:text-gray-200" size={20} />,
  },
  {
    name: "Tailwind CSS v4",
    category: "Styling",
    icon: <SiTailwindcss className="text-cyan-500" size={20} />,
  },
  {
    name: "Qdrant Vector DB",
    category: "RAG & Vector",
    icon: <Layers className="text-purple-500" size={20} />,
  },
  {
    name: "Python",
    category: "Language",
    icon: <SiPython className="text-yellow-500" size={20} />,
  },
  {
    name: "Express.js",
    category: "Backend",
    icon: <SiExpress className="text-gray-700 dark:text-gray-300" size={20} />,
  },
  {
    name: "Git & GitHub",
    category: "Version Control",
    icon: <FaGithub className="text-gray-900 dark:text-white" size={20} />,
  },
];

const TechMarquee = () => {
  return (
    <div className="w-full py-8 border-y border-gray-200/60 dark:border-gray-800/60 bg-gray-50/50 dark:bg-black/30 backdrop-blur-sm overflow-hidden relative">
      {/* Gradient fade edges for seamless illusion */}
      <div className="absolute left-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-r from-white dark:from-black to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 sm:w-36 bg-gradient-to-l from-white dark:from-black to-transparent z-10 pointer-events-none" />

      {/* Infinite scrolling marquee track (duplicated for seamless loop) */}
      <div className="animate-marquee flex items-center gap-4 sm:gap-6">
        {[...techStack, ...techStack].map((item, index) => (
          <div
            key={`${item.name}-${index}`}
            className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/80 dark:bg-gray-900/80 border border-gray-200/80 dark:border-gray-800/80 shadow-xs hover:shadow-md hover:border-blue-500/40 dark:hover:border-blue-500/40 transition-all duration-200 hover:-translate-y-0.5 group shrink-0"
          >
            <span className="shrink-0 transition-transform duration-300 group-hover:scale-110">
              {item.icon}
            </span>
            <div className="flex flex-col text-left">
              <span className="text-xs sm:text-sm font-semibold text-gray-800 dark:text-gray-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors whitespace-nowrap">
                {item.name}
              </span>
              <span className="text-[10px] text-gray-600 dark:text-gray-400 font-medium whitespace-nowrap">
                {item.category}
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TechMarquee;
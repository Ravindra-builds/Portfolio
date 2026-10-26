"use client";

import React, { useState, useMemo } from "react";
import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  MessageSquare,
  BookOpen,
  Swords,
  MessagesSquare,
  Layers,
  Car,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

type ProjectCategory = "all" | "ai" | "fullstack" | "realtime";

interface Project {
  title: string;
  category: ("ai" | "fullstack" | "realtime")[];
  titleGradient: string;
  description: string;
  architecture?: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
  status?: "Live" | "In Development";
  icon: React.ReactNode;
  gradient: string;
}

const projects: Project[] = [
  {
    title: "SkillFarm",
    category: ["ai", "fullstack"],
    titleGradient: "group-hover:from-emerald-500 group-hover:to-teal-400 dark:group-hover:from-emerald-400 dark:group-hover:to-green-300",
    description:
      "An AI-powered engineering workspace with personalized learning paths, curated resources, specialized AI mentors, and guided projects to help learners turn knowledge into real-world skills.",
    architecture: "Multi-Agent Mentoring • Mem0 Memory • Tavily Research",
    tech: [
      "Next.js",
      "TypeScript",
      "Auth.js",
      "PostgreSQL",
      "Drizzle ORM",
      "OpenAI",
      "Gemini",
      "Mem0",
      "Tavily",
    ],
    github: "https://github.com/Ravindra-builds/SkillFarm",
    live: "https://skillfarm.in",
    status: "Live",
    icon: <Sparkles size={36} className="text-emerald-500" />,
    gradient: "from-emerald-600/30 to-green-500/20",
  },
  {
    title: "ChatMate",
    category: ["ai", "realtime"],
    titleGradient: "group-hover:from-blue-500 group-hover:to-cyan-400 dark:group-hover:from-blue-400 dark:group-hover:to-cyan-300",
    description:
      "A ChatGPT-style multi-LLM chat platform with real-time streaming, conversation branching, and tool calling across OpenAI and Gemini.",
    architecture: "Vercel AI SDK • Concurrent Streaming • Multi-Model Routing",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Vercel AI SDK",
      "OpenAI",
      "Gemini",
    ],
    github: "https://github.com/Ravindra-builds/Chat-mate",
    live: "https://chat-mate-jade-one.vercel.app/",
    status: "Live",
    icon: <MessageSquare size={36} className="text-blue-500" />,
    gradient: "from-blue-600/30 to-cyan-500/20",
  },
  {
    title: "ChaiBookLM",
    category: ["ai", "fullstack"],
    titleGradient: "group-hover:from-purple-500 group-hover:to-pink-400 dark:group-hover:from-purple-400 dark:group-hover:to-pink-300",
    description:
      "A full-stack RAG research assistant inspired by Google NotebookLM — upload sources, build a knowledge base, and query it conversationally.",
    architecture: "Vector RAG Pipeline • Qdrant Vector DB • Cloudflare R2",
    tech: ["Next.js 16", "Prisma", "Neon", "Qdrant", "Cloudflare R2", "Clerk"],
    github: "https://github.com/Ravindra-builds/ChaiBookLM",
    live: "https://chai-book-lm-orpin.vercel.app/",
    status: "In Development",
    icon: <BookOpen size={36} className="text-purple-500" />,
    gradient: "from-purple-600/30 to-pink-500/20",
  },
  {
    title: "MentorOS",
    category: ["ai", "fullstack"],
    titleGradient: "group-hover:from-amber-500 group-hover:to-orange-400 dark:group-hover:from-amber-400 dark:group-hover:to-orange-300",
    description:
      "An AI mentoring platform with dual mentor personas, YouTube tool integration, and multi-provider LLM routing with rate-limited access.",
    architecture: "YouTube Tool Calling • Persona Routing • Upstash Redis",
    tech: [
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
      "Redis",
      "OpenAI",
      "Gemini",
    ],
    github: "https://github.com/Ravindra-builds/Persona-ChaiCode",
    live: "https://persona-chaicode.onrender.com/",
    status: "Live",
    icon: <Sparkles size={36} className="text-amber-500" />,
    gradient: "from-amber-600/30 to-orange-500/20",
  },
  {
    title: "AI Arena",
    category: ["ai", "realtime"],
    titleGradient: "group-hover:from-red-500 group-hover:to-rose-400 dark:group-hover:from-red-400 dark:group-hover:to-rose-300",
    description:
      "A side-by-side LLM comparison tool with concurrent SSE streaming across providers and a structured judge-model scoring pipeline.",
    architecture: "Concurrent Multi-SSE • Judge Model Scoring • Redis Caching",
    tech: ["Vite", "React", "Express", "Clerk", "Redis", "SSE"],
    github: "https://github.com/Ravindra-builds/Ai-Arena",
    live: "https://ai-arena-dusky.vercel.app/",
    status: "Live",
    icon: <Swords size={36} className="text-red-500" />,
    gradient: "from-red-600/30 to-rose-500/20",
  },
  {
    title: "ConvoX",
    category: ["realtime", "fullstack"],
    titleGradient: "group-hover:from-emerald-500 group-hover:to-teal-400 dark:group-hover:from-emerald-400 dark:group-hover:to-teal-300",
    description:
      "A real-time chat application with a modern UI, JWT authentication, friend requests, and Redis-backed horizontal scalability.",
    architecture: "Socket.IO WebSockets • Redis Pub/Sub • Docker Containerized",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
    github: "https://github.com/Ravindra-builds/ConvoX",
    live: "https://convox-60nt.onrender.com",
    image: "/ConvoX-image.png",
    status: "Live",
    icon: <MessagesSquare size={36} className="text-emerald-500" />,
    gradient: "from-emerald-600/30 to-teal-500/20",
  },
  {
    title: "Rentique",
    category: ["fullstack"],
    titleGradient: "group-hover:from-indigo-500 group-hover:to-blue-400 dark:group-hover:from-indigo-400 dark:group-hover:to-blue-300",
    description:
      "A full-stack rental platform with item catalog management, secure booking checkout workflows, user reviews, and responsive UI.",
    architecture: "REST API • JWT Session Auth • Cloudinary Asset Storage",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/Ravindra-builds/Rentique",
    image: "/Rentique-image.png",
    status: "Live",
    icon: <Car size={36} className="text-indigo-500" />,
    gradient: "from-indigo-600/30 to-blue-500/20",
  },
];

const categoryTabs: { label: string; value: ProjectCategory; count?: number }[] = [
  { label: "All Projects", value: "all" },
  { label: "AI & GenAI", value: "ai" },
  { label: "Full-Stack", value: "fullstack" },
  { label: "Real-Time / Systems", value: "realtime" },
];

const Projects = () => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>("all");

  const filteredProjects = useMemo(() => {
    if (selectedCategory === "all") return projects;
    return projects.filter((p) => p.category.includes(selectedCategory));
  }, [selectedCategory]);

  return (
    <section id="projects" className="py-24 bg-white dark:bg-gray-950 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-12 slideDown">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/20">
            Portfolio Work
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-emerald-500 via-blue-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Production-ready AI products, autonomous agent tools, and full-stack systems built end to end.
          </p>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mt-8">
            {categoryTabs.map((tab) => {
              const isActive = selectedCategory === tab.value;
              return (
                <button
                  key={tab.value}
                  onClick={() => setSelectedCategory(tab.value)}
                  className={`px-4 py-2 rounded-full text-xs sm:text-sm font-medium transition-all duration-200 ${
                    isActive
                      ? "bg-blue-600 text-white shadow-md shadow-blue-500/25 scale-105"
                      : "bg-gray-100 dark:bg-gray-900 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white border border-gray-200 dark:border-gray-800"
                  }`}
                >
                  {tab.label}
                </button>
              );
            })}
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project, index) => {
            return (
              <div
                key={project.title}
                className="slideUp group relative bg-white dark:bg-gray-900/90 rounded-2xl overflow-hidden border border-gray-200 dark:border-gray-800 hover:border-gray-400 dark:hover:border-gray-600 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                {/* Status Badge */}
                <span
                  className={`absolute top-3.5 right-3.5 z-30 flex items-center gap-1.5 text-[11px] font-medium px-2.5 py-1 rounded-full border backdrop-blur-md ${
                    project.status === "Live"
                      ? "bg-emerald-500/15 text-emerald-700 dark:text-emerald-400 border-emerald-500/30"
                      : "bg-amber-500/15 text-amber-700 dark:text-amber-400 border-amber-500/30"
                  }`}
                >
                  <span
                    className={`w-1.5 h-1.5 rounded-full ${
                      project.status === "Live"
                        ? "bg-emerald-500 animate-pulse"
                        : "bg-amber-500 animate-pulse"
                    }`}
                  />
                  {project.status ?? "Live"}
                </span>

                {/* Media Area */}
                <div className="relative h-48 overflow-hidden bg-gray-100 dark:bg-gray-800/50">
                  {project.image ? (
                    <>
                      <div className="absolute inset-0 bg-gradient-to-t from-gray-950/80 via-transparent to-transparent z-10 opacity-70 group-hover:opacity-40 transition-opacity"></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </>
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient} relative`}
                    >
                      <div className="absolute inset-0 opacity-25 dark:opacity-15 [background-image:radial-gradient(circle_at_1px_1px,theme(colors.gray.900)_1px,transparent_0)] dark:[background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
                      <div className="relative z-10 p-5 rounded-2xl bg-white/60 dark:bg-gray-950/60 backdrop-blur-md border border-white/20 dark:border-white/10 group-hover:scale-110 transition-transform duration-500 shadow-md">
                        {project.icon}
                      </div>
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 text-gray-900 dark:text-white transition-all duration-300 ${project.titleGradient}`}
                  >
                    {project.title}
                  </h3>

                  <p className="text-gray-600 dark:text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  {/* Architecture Highlight Badge */}
                  {project.architecture && (
                    <div className="mb-4 px-2.5 py-1.5 rounded-lg bg-gray-50 dark:bg-gray-800/60 border border-gray-200/80 dark:border-gray-800 flex items-center gap-2">
                      <Layers size={13} className="text-blue-500 shrink-0" />
                      <span className="text-[11px] font-mono text-gray-600 dark:text-gray-300 truncate">
                        {project.architecture}
                      </span>
                    </div>
                  )}

                  {/* Tech stack tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6 mt-auto">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-[11px] px-2 py-0.5 bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 rounded-md border border-gray-200 dark:border-gray-700 font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Links */}
                  <div className="flex justify-between items-center pt-4 border-t border-gray-100 dark:border-gray-800">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-xs font-semibold text-gray-700 dark:text-gray-300 hover:text-black dark:hover:text-white transition-colors"
                      aria-label={`${project.title} source code on GitHub`}
                    >
                      <FaGithub size={15} />
                      Source Code
                    </a>

                    {project.live && (
                      <a
                        href={project.live}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 transition-colors"
                        aria-label={`${project.title} live deployment`}
                      >
                        Live Demo
                        <ExternalLink size={13} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
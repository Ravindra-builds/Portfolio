"use client";

import Image from "next/image";
import {
  ExternalLink,
  Sparkles,
  MessageSquare,
  BookOpen,
  Swords,
  MessagesSquare,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface Project {
  title: string;
  description: string;
  tech: string[];
  github: string;
  live?: string;
  image?: string;
  status?: "Live" | "In Development";
  icon: React.ReactNode;
  gradient: string;
  titleGradient: string;
}

const projects: Project[] = [
  {
    title: "ChatMate",
    titleGradient: "group-hover:from-blue-400 group-hover:to-cyan-300",
    description:
      "A ChatGPT-style multi-LLM chat platform with real-time streaming, conversation branching, and tool calling across OpenAI and Gemini.",
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
    icon: <MessageSquare size={40} className="text-blue-400" />,
    gradient: "from-blue-600/30 to-cyan-500/20",
  },
  {
    title: "ChaiBookLM",
    titleGradient: "group-hover:from-purple-400 group-hover:to-pink-300",
    description:
      "A full-stack RAG research assistant inspired by Google NotebookLM — upload sources, build a knowledge base, and query it conversationally.",
    tech: ["Next.js 16", "Prisma", "Neon", "Qdrant", "Cloudflare R2", "Clerk"],
    github: "https://github.com/Ravindra-builds/ChaiBookLM",
    live: "https://chai-book-lm-orpin.vercel.app/",
    status: "In Development",
    icon: <BookOpen size={40} className="text-purple-400" />,
    gradient: "from-purple-600/30 to-pink-500/20",
  },
  {
    title: "MentorOS",
    titleGradient: "group-hover:from-amber-400 group-hover:to-orange-300",
    description:
      "An AI mentoring platform with dual mentor personas, YouTube tool integration, and multi-provider LLM routing with rate-limited access.",
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
    icon: <Sparkles size={40} className="text-amber-400" />,
    gradient: "from-amber-600/30 to-orange-500/20",
  },
  {
    title: "AI Arena",
    titleGradient: "group-hover:from-red-400 group-hover:to-rose-300",
    description:
      "A side-by-side LLM comparison tool with concurrent SSE streaming across providers and a structured judge-model scoring pipeline.",
    tech: ["Vite", "React", "Express", "Clerk", "Redis", "SSE"],
    github: "https://github.com/Ravindra-builds/Ai-Arena",
    live: "https://ai-arena-dusky.vercel.app/",
    status: "Live",
    icon: <Swords size={40} className="text-red-400" />,
    gradient: "from-red-600/30 to-rose-500/20",
  },
  {
    title: "ConvoX — Real-Time Chat Application",
    titleGradient: "group-hover:from-emerald-400 group-hover:to-teal-300",
    description:
      "A real-time chat application with a modern UI, JWT auth, friend requests, and Redis-backed scalability.",
    tech: ["React.js", "Node.js", "Socket.io", "MongoDB", "Redis", "Docker"],
    github: "https://github.com/Ravindra-builds/ConvoX",
    live: "https://convox-60nt.onrender.com",
    image: "/ConvoX-image.png",
    status: "Live",
    icon: <MessagesSquare size={40} className="text-emerald-400" />,
    gradient: "from-emerald-600/30 to-teal-500/20",
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 slideDown">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4 slideRight">
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-green-500 mx-auto rounded-full"></div>
          <p className="mt-4 text-gray-400">
            AI products and full-stack apps I&apos;ve built end to end.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => {
            const primaryHref = project.live ?? project.github;

            return (
              <a
                key={project.title}
                href={primaryHref}
                target="_blank"
                rel="noopener noreferrer"
                className="slideUp group relative bg-gray-900 rounded-xl overflow-hidden border border-gray-800 hover:border-gray-600 transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl hover:shadow-blue-500/10 flex flex-col"
                style={{ animationDelay: `${index * 0.15}s` }}
              >
                {/* Status badge */}
                <span
                  className={`absolute top-3 right-3 z-30 text-xs font-medium px-2.5 py-1 rounded-full border backdrop-blur-sm ${
                    project.status === "Live"
                      ? "bg-green-500/15 text-green-400 border-green-500/30"
                      : "bg-yellow-500/15 text-yellow-400 border-yellow-500/30"
                  }`}
                >
                  {project.status}
                </span>

                {/* Media area: real image if present, gradient + icon otherwise */}
                <div className="relative h-44 overflow-hidden">
                  {project.image ? (
                    <>
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/20 transition-colors z-20"></div>
                      <Image
                        src={project.image}
                        alt={project.title}
                        fill
                        sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                        className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
                      />
                    </>
                  ) : (
                    <div
                      className={`w-full h-full flex items-center justify-center bg-gradient-to-br ${project.gradient} bg-gray-900 relative`}
                    >
                      <div className="absolute inset-0 opacity-20 [background-image:radial-gradient(circle_at_1px_1px,white_1px,transparent_0)] [background-size:16px_16px]" />
                      <div className="relative z-10 p-5 rounded-2xl bg-gray-950/40 border border-white/10 group-hover:scale-110 transition-transform duration-500">
                        {project.icon}
                      </div>
                    </div>
                  )}
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <h3
                    className={`text-xl font-bold mb-2 bg-gradient-to-r from-slate-100 to-slate-300 bg-clip-text text-transparent transition-all duration-300 ${project.titleGradient}`}
                  >
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4 line-clamp-3">
                    {project.description}
                  </p>

                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tech.map((tech) => (
                      <span
                        key={tech}
                        className="text-xs px-2 py-1 bg-gray-800 text-blue-300 rounded border border-gray-700"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  <div className="flex justify-between items-center mt-auto pt-4 border-t border-gray-800">
                    <span
                      onClick={(e) => {
                        e.preventDefault();
                        window.open(
                          project.github,
                          "_blank",
                          "noopener,noreferrer",
                        );
                      }}
                      className="flex items-center gap-2 text-sm text-gray-300 hover:text-white transition-colors cursor-pointer"
                    >
                      <FaGithub size={16} />
                      Code
                    </span>
                    {project.live && (
                      <span className="flex items-center gap-2 text-sm text-blue-400 group-hover:text-blue-300 transition-colors">
                        Live Demo
                        <ExternalLink size={16} />
                      </span>
                    )}
                  </div>
                </div>
              </a>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;

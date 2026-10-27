"use client";

import React, { useState, useRef } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  BookOpen,
  MessageSquare,
  Radio,
  Workflow,
  Home,
  ArrowUpRight,
  Trophy,
  Sparkles,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface ProjectItem {
  id: string;
  title: string;
  badge?: string;
  isHackathonWinner?: boolean;
  isFlagshipProduct?: boolean;
  tagline: string;
  description: string;
  tech: string[];
  live?: string;
  github: string;
  icon?: React.ReactNode;
  logo?: string;
}

const projects: ProjectItem[] = [
  {
    id: "skillfarm",
    title: "SkillFarm",
    badge: "Flagship Product #01 • Live in Production",
    isFlagshipProduct: true,
    tagline: "AI Engineering Workspace & Multi-Agent Mentorship System",
    description:
      "My first full-scale shipped product. SkillFarm is an AI workspace that helps software engineers turn concepts into real projects, featuring supervisor-led multi-agent mentoring, persistent semantic memory with Mem0, live web research, and PostgreSQL with Drizzle ORM.",
    tech: [
      "Next.js 16",
      "TypeScript",
      "PostgreSQL",
      "Drizzle ORM",
      "Auth.js",
      "Mem0 Memory",
      "Tavily API",
      "Google Gemini",
    ],
    live: "https://skillfarm.in",
    github: "https://github.com/Ravindra-builds/SkillFarm",
    logo: "/Skillfarm-logo.png",
  },
  {
    id: "p2shield",
    title: "P2Shield",
    badge: "1st Place Winner @ Martinovation",
    isHackathonWinner: true,
    tagline: "Autonomous LLM Privacy Firewall Proxy with Zero-Leak Inspection",
    description:
      "Built in 24 hours. Won 1st place among 52 teams at Martinovation 2026 (₹20,000 prize). P2Shield is an inline privacy proxy that screens prompts before they reach OpenAI or Gemini, detects API credentials and PII using regex and NER, and redacts sensitive data through a cryptographic token vault.",
    tech: [
      "TypeScript",
      "Node.js",
      "Next.js 16",
      "Gemini API",
      "OpenAI",
      "Regex & NER Engine",
    ],
    live: "https://p2shield-theta.vercel.app/",
    github: "https://github.com/Ravindra-builds/P2Shield",
    icon: <ShieldCheck size={24} className="text-amber-500" />,
  },
  {
    id: "chaibooklm",
    title: "ChaiBookLM",
    badge: "Vector RAG System",
    tagline: "Google NotebookLM-Inspired Knowledge Base & Research Assistant",
    description:
      "A full-stack contextual research assistant. Ingests PDFs, markdown files, and technical documentation, performs overlapping semantic chunking, and stores high-dimensional embeddings in Qdrant Vector Database for hybrid approximate nearest neighbors (HNSW) retrieval with Cloudflare R2 object storage.",
    tech: [
      "Next.js 16",
      "Qdrant Vector DB",
      "Prisma",
      "Neon Postgres",
      "Cloudflare R2",
      "Clerk",
    ],
    live: "https://chai-book-lm-orpin.vercel.app/",
    github: "https://github.com/Ravindra-builds/ChaiBookLM",
    icon: <BookOpen size={24} className="text-purple-500" />,
  },
  {
    id: "chatmate",
    title: "ChatMate",
    badge: "Real-Time Multi-LLM",
    tagline: "Multi-Model Chat Platform with SSE Streaming & Conversation Branching",
    description:
      "A ChatGPT-caliber multi-model web platform built with Next.js 16 and React 19. Features real-time server-sent events (SSE) token streaming, dynamic routing between OpenAI and Gemini, dynamic tool calling, and a branching tree UI that allows users to fork conversations at any message.",
    tech: [
      "Next.js 16",
      "React 19",
      "TypeScript",
      "Vercel AI SDK",
      "OpenAI",
      "Gemini",
    ],
    live: "https://chat-mate-jade-one.vercel.app/",
    github: "https://github.com/Ravindra-builds/Chat-mate",
    icon: <MessageSquare size={24} className="text-blue-500" />,
  },
  {
    id: "convox",
    title: "ConvoX",
    badge: "Real-Time WebSocket",
    tagline: "Distributed Real-Time Chat System with Redis Pub/Sub",
    description:
      "A full-duplex real-time messaging platform built with Socket.IO, Node.js, and React. Backed by Redis Pub/Sub for horizontal multi-server scaling, secure JWT authentication, and containerized deployment with Docker.",
    tech: [
      "React.js",
      "Node.js",
      "Socket.io",
      "MongoDB",
      "Redis",
      "Docker",
    ],
    live: "https://convox-60nt.onrender.com",
    github: "https://github.com/Ravindra-builds/ConvoX",
    icon: <Radio size={24} className="text-emerald-500" />,
  },
  {
    id: "mentor-os",
    title: "MentorOS",
    badge: "AI Tool Integration",
    tagline: "Dual-Persona Mentoring Platform with YouTube Tool Calling",
    description:
      "An AI mentoring workspace with selectable mentor personas (junior helper vs. senior software architect) and autonomous YouTube query tool calling to fetch video tutorials and code citations. Includes Upstash Redis rate limiting.",
    tech: [
      "Next.js",
      "PostgreSQL",
      "Drizzle ORM",
      "Clerk",
      "Redis",
      "OpenAI",
      "Gemini",
    ],
    live: "https://persona-chaicode.onrender.com/",
    github: "https://github.com/Ravindra-builds/Persona-ChaiCode",
    icon: <Workflow size={24} className="text-amber-500" />,
  },
  {
    id: "rentique",
    title: "Rentique",
    badge: "Full-Stack System",
    tagline: "End-to-End House & Property Rental Platform with Booking Lifecycle",
    description:
      "A complete full-stack house and property rental booking platform with dynamic listing catalog management, optimistic collision-free reservation booking, and Cloudinary media optimization.",
    tech: ["React.js", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    live: "https://rentique-6l5t.onrender.com/",
    github: "https://github.com/Ravindra-builds/Rentique",
    icon: <Home size={24} className="text-indigo-500" />,
  },
];

export default function Projects() {
  const [filter, setFilter] = useState<"all" | "ai" | "fullstack">("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  const filteredProjects = projects.filter((p) => {
    if (filter === "all") return true;
    if (filter === "ai")
      return (
        p.id === "skillfarm" ||
        p.id === "p2shield" ||
        p.id === "chaibooklm" ||
        p.id === "chatmate" ||
        p.id === "mentor-os"
      );
    if (filter === "fullstack")
      return p.id === "convox" || p.id === "rentique" || p.id === "skillfarm";
    return true;
  });

  // Reset scroll and index when filter changes directly via event handler
  const handleFilterChange = (newFilter: "all" | "ai" | "fullstack") => {
    setFilter(newFilter);
    setActiveIndex(0);
    if (trackRef.current) {
      trackRef.current.scrollTo({ left: 0, behavior: "smooth" });
    }
  };

  // Track active card on horizontal scroll
  const handleScroll = () => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.children[0] as HTMLElement;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 24; // width + gap
    const index = Math.round(scrollLeft / cardWidth);
    const clamped = Math.min(Math.max(0, index), filteredProjects.length - 1);
    if (clamped !== activeIndex) {
      setActiveIndex(clamped);
    }
  };

  const scrollToIndex = (index: number) => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const card = container.children[index] as HTMLElement;
    if (card) {
      const containerLeft = container.getBoundingClientRect().left;
      const cardLeft = card.getBoundingClientRect().left;
      const targetScroll =
        container.scrollLeft +
        (cardLeft - containerLeft) -
        (container.clientWidth - card.offsetWidth) / 2;
      container.scrollTo({ left: Math.max(0, targetScroll), behavior: "smooth" });
      setActiveIndex(index);
    }
  };

  const scrollPrev = () => {
    scrollToIndex(Math.max(0, activeIndex - 1));
  };

  const scrollNext = () => {
    scrollToIndex(Math.min(filteredProjects.length - 1, activeIndex + 1));
  };

  return (
    <section id="projects" className="py-20 md:py-28 border-t border-border/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
              02 / Work
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Featured{" "}
              <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 text-[1.12em] inline-block pr-2 mr-2">
                Projects
              </span>
              {" "}&amp; Systems.
            </h2>
          </div>

          {/* Filter Pills & Navigation Controls */}
          <div className="flex flex-wrap items-center gap-3">
            <div className="flex items-center gap-1.5 p-1 rounded-full bg-muted border border-border text-xs font-mono">
              <button
                onClick={() => handleFilterChange("all")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  filter === "all"
                    ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All ({projects.length})
              </button>
              <button
                onClick={() => handleFilterChange("ai")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  filter === "ai"
                    ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                AI &amp; LLMs
              </button>
              <button
                onClick={() => handleFilterChange("fullstack")}
                className={`px-3 py-1 rounded-full transition-colors ${
                  filter === "fullstack"
                    ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-semibold"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                Full-Stack
              </button>
            </div>

            {/* Prev / Next Arrows */}
            <div className="hidden sm:flex items-center gap-1.5">
              <button
                onClick={scrollPrev}
                disabled={activeIndex === 0}
                aria-label="Previous project"
                className="p-2 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                onClick={scrollNext}
                disabled={activeIndex === filteredProjects.length - 1}
                aria-label="Next project"
                className="p-2 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Horizontal Fluid Carousel Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 scroll-smooth"
        >
          {filteredProjects.map((project, idx) => (
            <div
              key={project.id}
              className={`w-[88vw] sm:w-[540px] md:w-[640px] shrink-0 snap-center p-6 sm:p-8 rounded-3xl bg-card border flex flex-col justify-between transition-all duration-300 hover:shadow-xl ${
                project.isFlagshipProduct
                  ? "border-2 border-amber-500/50 bg-gradient-to-b from-amber-500/[0.06] via-card to-card shadow-xl shadow-amber-500/5 hover:border-amber-500/70"
                  : project.isHackathonWinner
                  ? "border-amber-500/40 hover:border-amber-500/60 bg-gradient-to-b from-amber-500/[0.03] to-card"
                  : "border-border hover:border-amber-500/30"
              }`}
            >
              <div>
                {/* Card Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 mb-4">
                  <div className="flex items-center gap-3">
                    {project.logo ? (
                      <div className="relative w-12 h-12 rounded-2xl overflow-hidden border border-amber-500/40 bg-card shrink-0 p-1 shadow-sm">
                        <Image
                          src={project.logo}
                          alt={project.title}
                          fill
                          sizes="48px"
                          className="object-contain p-1"
                        />
                      </div>
                    ) : (
                      <div className="p-2.5 rounded-xl bg-muted border border-border">
                        {project.icon}
                      </div>
                    )}

                    <div>
                      <h3 className="text-xl sm:text-2xl font-bold text-foreground tracking-tight group-hover:text-amber-500 transition-colors">
                        {project.title}
                      </h3>
                      <p className="text-xs text-muted-foreground font-mono">
                        {project.tagline}
                      </p>
                    </div>
                  </div>

                  {project.badge && (
                    <span
                      className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-mono font-medium self-start sm:self-center shrink-0 ${
                        project.isFlagshipProduct
                          ? "bg-amber-500/20 text-amber-800 dark:text-amber-300 border border-amber-500/40 font-bold"
                          : project.isHackathonWinner
                          ? "bg-amber-500/15 text-amber-700 dark:text-amber-300 border border-amber-500/30 font-semibold"
                          : "bg-muted text-muted-foreground border border-border"
                      }`}
                    >
                      {project.isFlagshipProduct && <Sparkles size={12} className="text-amber-500" />}
                      {project.isHackathonWinner && !project.isFlagshipProduct && (
                        <Trophy size={12} className="text-amber-500" />
                      )}
                      <span>{project.badge}</span>
                    </span>
                  )}
                </div>

                {/* Description */}
                <p className="text-sm text-muted-foreground leading-relaxed my-4">
                  {project.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-1.5 my-5">
                  {project.tech.map((t) => (
                    <span
                      key={t}
                      className="text-xs font-mono px-2.5 py-1 rounded-lg bg-muted text-muted-foreground border border-border/60"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>

              {/* Footer Links: Live on far left, GitHub on far right */}
              <div className="flex items-center justify-between w-full pt-4 border-t border-border/60 text-xs sm:text-sm font-mono flex-wrap gap-2">
                {project.live ? (
                  <a
                    href={project.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-foreground hover:text-amber-500 transition-colors font-medium group/link"
                  >
                    <span>{project.isFlagshipProduct ? "Visit Live Product" : "Visit Live"}</span>
                    <ArrowUpRight size={14} className="group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                ) : (
                  <span className="text-muted-foreground/60 text-xs">
                    Offline Hackathon Prototype
                  </span>
                )}
                <a
                  href={project.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-medium ml-auto"
                >
                  <FaGithub size={15} />
                  <span>View Source Code</span>
                </a>
              </div>
            </div>
          ))}
        </div>

        {/* Dotted Visual Scroll Indicator & Navigation Bar */}
        <div className="flex items-center justify-between pt-6 mt-4">
          <span className="text-xs font-mono text-muted-foreground">
            {activeIndex + 1 < 10 ? `0${activeIndex + 1}` : activeIndex + 1} / {filteredProjects.length < 10 ? `0${filteredProjects.length}` : filteredProjects.length} Projects
          </span>

          {/* Interactive Dotted Track */}
          <div className="flex items-center gap-2">
            {filteredProjects.map((p, i) => (
              <button
                key={p.id}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to project ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? "w-7 sm:w-9 h-2 bg-amber-500 shadow-sm shadow-amber-500/40"
                    : "w-2 h-2 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              aria-label="Previous project"
              className="p-1.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={scrollNext}
              disabled={activeIndex === filteredProjects.length - 1}
              aria-label="Next project"
              className="p-1.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={14} />
            </button>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground">
            Swipe or use dots to glide
          </span>
        </div>
      </div>
    </section>
  );
}

"use client";

import React from "react";
import { Sparkles, Terminal, CheckCircle2, Milestone, Layers } from "lucide-react";

interface JourneyStage {
  stageNumber: string;
  year: string;
  title: string;
  subtitle: string;
  statusBadge: string;
  themeColor: "purple" | "amber" | "emerald";
  description: string;
  corePillars: { title: string; desc: string }[];
  tags: string[];
  icon: React.ReactNode;
}

const journeyStages: JourneyStage[] = [
  {
    stageNumber: "Stage 03",
    year: "2026",
    title: "Generative AI, Production RAG & Deep Networking",
    subtitle: "Autonomous Architectures, Multi-LLM Workspaces & DBMS",
    statusBadge: "Current Frontier",
    themeColor: "purple",
    description:
      "Dived deep into the Generative AI revolution — architecting production RAG pipelines, multi-LLM platforms, and agentic workflows, while reinforcing deep Database Management Systems (DBMS) and Computer Networking fundamentals.",
    corePillars: [
      {
        title: "Generative AI & Autonomous Agent Workspaces",
        desc: "Built flagship AI products (SkillFarm, ChatMate, MentorOS, AI Arena) leveraging OpenAI, Gemini, and the Vercel AI SDK.",
      },
      {
        title: "Production RAG & Vector Embeddings (ChaiBookLM)",
        desc: "Engineered high-recall vector retrieval assistants with Qdrant vector database, semantic chunking, and Cloudflare R2.",
      },
      {
        title: "Computer Networking & Protocols",
        desc: "Deep study of TCP/IP, HTTP/1.1 to HTTP/3, WebSockets, DNS resolution, SSL/TLS handshakes, and network routing.",
      },
      {
        title: "Database Management Systems (DBMS) & Data Integrity",
        desc: "Mastering ACID properties, advanced query planning, relational normalization, indexing strategies, and transaction locks.",
      },
    ],
    tags: ["Generative AI", "RAG Pipelines", "Qdrant Vector DB", "Computer Networking", "DBMS", "Vercel AI SDK"],
    icon: <Sparkles size={20} className="text-purple-400" />,
  },
  {
    stageNumber: "Stage 02",
    year: "2025",
    title: "Full-Stack MERN Mastery, Redis & Scaled Architecture",
    subtitle: "Web Engineering, High-Level System Design (HLD) & Caching",
    statusBadge: "Development Breakthrough",
    themeColor: "amber",
    description:
      "Transitioned into web engineering with HTML, CSS, and JavaScript, fully mastering the MERN stack by year's end. Advanced into database varieties, Redis in-memory caching, performance optimization, and High-Level System Design (HLD) for scale.",
    corePillars: [
      {
        title: "MERN Stack Mastery (Completed by End of 2025)",
        desc: "Mastered end-to-end full-stack web development building production applications with MongoDB, Express.js, React, and Node.js.",
      },
      {
        title: "Redis & In-Memory Distributed Architecture",
        desc: "Implemented Redis for ultra-low latency caching, pub/sub messaging, rate-limiting, and scalable user session stores.",
      },
      {
        title: "Diverse Database Paradigms (SQL & NoSQL)",
        desc: "Explored relational and non-relational database architectures, schema optimization, and querying across PostgreSQL and MongoDB.",
      },
      {
        title: "High-Level System Design (HLD) & Web Scale",
        desc: "Studied load balancers, CDN caching, horizontal vs. vertical scaling, latency reduction, and how modern websites handle traffic at scale.",
      },
    ],
    tags: ["MERN Stack", "React.js", "Node.js", "Redis", "High-Level System Design (HLD)", "Database Scaling"],
    icon: <Layers size={20} className="text-amber-400" />,
  },
  {
    stageNumber: "Stage 01",
    year: "2024",
    title: "Programming Foundations & Computer Core",
    subtitle: "C/C++, Computer Basics, Operating Systems & Java",
    statusBadge: "The Foundation",
    themeColor: "emerald",
    description:
      "Started my programming journey by learning foundational principles — mastering logic and memory management with C/C++, understanding hardware-software interaction through Operating Systems, and building OOP concepts with Java.",
    corePillars: [
      {
        title: "First Steps with C & C++ Programming",
        desc: "Learned what programming really is: memory allocation, pointers, procedural logic, and structured problem-solving from the ground up.",
      },
      {
        title: "Computer Basics & Architecture Fundamentals",
        desc: "Deepened knowledge in how computers execute instructions, CPU registers, memory hierarchies, and binary arithmetic.",
      },
      {
        title: "Operating Systems (OS) Principles",
        desc: "Studied process management, CPU scheduling, thread synchronization, deadlocks, virtual memory, and file system architecture.",
      },
      {
        title: "Object-Oriented Programming (OOP) with Java",
        desc: "Explored classes, inheritance, polymorphism, encapsulation, and building robust, maintainable modular software.",
      },
    ],
    tags: ["C / C++", "Operating Systems", "Computer Basics", "Java", "OOP Principles"],
    icon: <Terminal size={20} className="text-emerald-400" />,
  },
];

const Timeline = () => {
  return (
    <section id="journey" className="py-24 bg-white dark:bg-gray-950 transition-colors relative overflow-hidden">
      {/* Subtle ambient blur backdrops */}
      <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-purple-500/5 dark:bg-purple-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-1/3 right-1/4 w-[500px] h-[500px] bg-blue-500/5 dark:bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-20 slideDown">
          <div className="inline-flex items-center gap-2 mb-3.5 px-3.5 py-1 rounded-full border border-purple-200 dark:border-purple-500/20 bg-purple-50 dark:bg-purple-500/10">
            <Milestone size={14} className="text-purple-600 dark:text-purple-400" />
            <span className="text-xs font-semibold uppercase tracking-wider text-purple-600 dark:text-purple-400">
              Interactive Engineering Roadmap
            </span>
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mb-4 tracking-tight">
            My Journey & Evolution
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-purple-500 via-amber-500 to-emerald-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            The authentic story: from low-level C/C++ and OS basics (2024), to full-stack MERN & High-Level System Design (2025), to Generative AI engineering, RAG, and deep networking (2026).
          </p>
        </div>

        {/* Timeline Roadmap */}
        <div className="relative">
          {/* Center Glowing Spine (Desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-4 bottom-4 w-1 bg-gradient-to-b from-purple-500 via-amber-500 to-emerald-500 opacity-40 rounded-full" />

          {/* Left Line (Mobile) */}
          <div className="md:hidden absolute left-5 top-4 bottom-4 w-0.5 bg-gradient-to-b from-purple-500 via-amber-500 to-emerald-500 opacity-40" />

          <div className="space-y-16">
            {journeyStages.map((stage, index) => {
              const isEven = index % 2 === 0;

              return (
                <div
                  key={stage.year}
                  className={`relative flex flex-col md:flex-row items-center ${
                    isEven ? "md:flex-row-reverse" : ""
                  } gap-8 group slideUp`}
                >
                  {/* Central Node Beacon */}
                  <div className="absolute left-5 md:left-1/2 -translate-x-1/2 z-20">
                    <div
                      className={`w-10 h-10 rounded-full bg-white dark:bg-gray-900 border-2 flex items-center justify-center shadow-lg transition-transform duration-300 group-hover:scale-125 ${
                        stage.themeColor === "purple"
                          ? "border-purple-500 shadow-purple-500/25"
                          : stage.themeColor === "amber"
                          ? "border-amber-500 shadow-amber-500/25"
                          : "border-emerald-500 shadow-emerald-500/25"
                      }`}
                    >
                      {stage.icon}
                    </div>
                  </div>

                  {/* Card Container (Takes half width on desktop) */}
                  <div className="w-full md:w-[calc(50%-2.5rem)] pl-12 md:pl-0">
                    <div
                      className={`relative bg-white dark:bg-gray-900/90 rounded-2xl p-6 sm:p-8 border transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl overflow-hidden ${
                        stage.themeColor === "purple"
                          ? "border-purple-200/80 dark:border-purple-500/30 hover:border-purple-400 hover:shadow-purple-500/10"
                          : stage.themeColor === "amber"
                          ? "border-amber-200/80 dark:border-amber-500/30 hover:border-amber-400 hover:shadow-amber-500/10"
                          : "border-emerald-200/80 dark:border-emerald-500/30 hover:border-emerald-400 hover:shadow-emerald-500/10"
                      }`}
                    >
                      {/* Watermark Year in background */}
                      <span className="absolute -bottom-4 right-4 text-7xl sm:text-8xl font-black font-mono text-gray-100 dark:text-gray-800/40 select-none pointer-events-none">
                        {stage.year}
                      </span>

                      {/* Header Row: Stage, Year Badge & Status */}
                      <div className="flex flex-wrap items-center justify-between gap-2 mb-3 relative z-10">
                        <div className="flex items-center gap-2.5">
                          <span className="text-xs font-mono font-bold uppercase tracking-wider text-gray-400">
                            {stage.stageNumber}
                          </span>
                          <span
                            className={`text-sm font-bold font-mono px-2.5 py-0.5 rounded-full ${
                              stage.themeColor === "purple"
                                ? "bg-purple-50 dark:bg-purple-500/10 text-purple-700 dark:text-purple-300 border border-purple-200 dark:border-purple-500/20"
                                : stage.themeColor === "amber"
                                ? "bg-amber-50 dark:bg-amber-500/10 text-amber-700 dark:text-amber-300 border border-amber-200 dark:border-amber-500/20"
                                : "bg-emerald-50 dark:bg-emerald-500/10 text-emerald-700 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-500/20"
                            }`}
                          >
                            {stage.year}
                          </span>
                        </div>

                        <span className="text-[11px] font-semibold text-gray-500 dark:text-gray-400">
                          {stage.statusBadge}
                        </span>
                      </div>

                      {/* Title & Subtitle */}
                      <div className="relative z-10 mb-4">
                        <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white leading-snug">
                          {stage.title}
                        </h3>
                        <p className="text-xs sm:text-sm font-medium text-blue-600 dark:text-blue-400 mt-1">
                          {stage.subtitle}
                        </p>
                      </div>

                      {/* Description */}
                      <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-6 relative z-10">
                        {stage.description}
                      </p>

                      {/* Core Pillars / Accomplishments Bento List */}
                      <div className="space-y-2.5 mb-6 relative z-10">
                        {stage.corePillars.map((pillar, pIdx) => (
                          <div
                            key={pIdx}
                            className="p-2.5 rounded-xl bg-gray-50/80 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800 flex items-start gap-2.5"
                          >
                            <CheckCircle2
                              size={15}
                              className={`shrink-0 mt-0.5 ${
                                stage.themeColor === "purple"
                                  ? "text-purple-500"
                                  : stage.themeColor === "amber"
                                  ? "text-amber-500"
                                  : "text-emerald-500"
                              }`}
                            />
                            <div className="text-xs leading-relaxed">
                              <strong className="text-gray-900 dark:text-white font-semibold block">
                                {pillar.title}
                              </strong>
                              <span className="text-gray-600 dark:text-gray-400">
                                {pillar.desc}
                              </span>
                            </div>
                          </div>
                        ))}
                      </div>

                      {/* Tech Chips */}
                      <div className="flex flex-wrap gap-1.5 pt-4 border-t border-gray-100 dark:border-gray-800 relative z-10">
                        {stage.tags.map((tag) => (
                          <span
                            key={tag}
                            className="text-[11px] px-2.5 py-0.5 rounded-md bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 font-medium border border-gray-200/60 dark:border-gray-700/60"
                          >
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>

                  {/* Empty counterpart for balance on desktop */}
                  <div className="hidden md:block w-[calc(50%-2.5rem)]" />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Timeline;
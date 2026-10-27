"use client";

import React from "react";
import { motion } from "framer-motion";
import { Milestone, Sparkles, Layers, Terminal } from "lucide-react";

interface JourneyItem {
  year: string;
  stageNumber: string;
  badge: string;
  title: string;
  summary: string;
  highlights: string[];
  icon: React.ReactNode;
}

// In ASCENDING order: 2024 -> 2025 -> 2026
const journeyStages: JourneyItem[] = [
  {
    year: "2024",
    stageNumber: "Stage 01",
    badge: "The Foundation",
    title: "Computer Science Principles & Low-Level Foundations",
    summary:
      "Began my engineering journey grounded in foundational computer science — understanding memory allocation and pointers through C and C++, hardware-software interaction through Operating Systems, and object-oriented architecture with Java.",
    highlights: [
      "Learned pointers, memory allocation, and algorithmic problem-solving in C & C++",
      "Studied Operating Systems: process scheduling, thread synchronization, virtual memory, and file systems",
      "Object-oriented programming, data encapsulation, and design patterns with Java",
      "Core networking fundamentals: TCP/IP, OSI model, HTTP protocol, and DNS resolution",
    ],
    icon: <Terminal size={14} className="text-amber-500" />,
  },
  {
    year: "2025",
    stageNumber: "Stage 02",
    badge: "Full-Stack Breakthrough",
    title: "MERN Stack Mastery, Redis & High-Level System Design",
    summary:
      "Transitioned into web engineering and distributed architectures. Mastered the MERN stack (MongoDB, Express, React, Node.js), implemented Redis for in-memory caching and real-time Pub/Sub, and studied High-Level System Design (HLD) for scale.",
    highlights: [
      "Completed Full-Stack Web Development Internship at G TEC Computer Education",
      "Engineered ConvoX (Full-duplex WebSocket chat with Redis Pub/Sub horizontal scale)",
      "Built Rentique (Full-stack reservation platform with collision-free booking lifecycles)",
      "Studied load balancing, database indexing, horizontal scaling, and caching invalidation",
    ],
    icon: <Layers size={14} className="text-amber-500" />,
  },
  {
    year: "2026",
    stageNumber: "Stage 03",
    badge: "Present Frontier",
    title: "Generative AI, Production RAG & Autonomous Architectures",
    summary:
      "Deep specialization in production AI systems. Architecting multi-agent frameworks with long-term memory, vector retrieval pipelines with Qdrant, and concurrent low-latency streaming applications using Next.js 16 and React 19.",
    highlights: [
      "1st Place Winner @ Martinovation Hackathon 2026 (Built P2Shield, ₹20,000 prize, 52 teams)",
      "Shipped SkillFarm (Multi-agent workspace with Mem0 vector memory & Tavily research)",
      "Engineered ChaiBookLM (Vector RAG assistant using Qdrant Vector DB & Cloudflare R2)",
      "Advanced to Next.js 16 App Router, React 19, Vercel AI SDK, and Server Actions",
    ],
    icon: <Sparkles size={14} className="text-amber-500" />,
  },
];

export default function Timeline() {
  return (
    <section id="journey" className="py-20 md:py-28 border-t border-border/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="space-y-4 mb-16 text-left">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
            04 / Trajectory
          </span>
          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            The Engineering{" "}
            <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 text-[1.12em] inline-block pr-2">
              Trajectory
            </span>
            .
          </h2>
          <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
            Ascending timeline from foundational C/C++ memory management (2024), to full-stack systems &amp; Redis (2025), to Generative AI engineering and hackathon victories (2026).
          </p>
        </div>

        {/* Timeline Container with Left Spine & Consistent Right Cards */}
        <div className="relative">
          {/* Vertical Spine Line on the Left */}
          <div className="absolute left-4 sm:left-6 top-3 bottom-3 w-0.5 bg-border/80" />

          {/* Timeline Stages */}
          <div className="space-y-8 sm:space-y-10">
            {journeyStages.map((stage, index) => (
              <div key={stage.year} className="relative flex items-start">
                {/* Joint Circle Beacon — Perfectly Centered on the Left Line */}
                <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-6 w-6 h-6 rounded-full bg-background border-2 border-amber-500 flex items-center justify-center shadow-md shadow-amber-500/20 z-10 shrink-0">
                  <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                </div>

                {/* Stage Card Consistent on the Right Side */}
                <motion.div
                  initial={{ opacity: 0, y: 25 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{ duration: 0.45, delay: index * 0.1 }}
                  className="w-full pl-10 sm:pl-14"
                >
                  <div className="p-6 sm:p-7 rounded-3xl bg-card border border-border hover:border-amber-500/40 transition-all duration-300 shadow-sm hover:shadow-xl">
                    {/* Year & Badge */}
                    <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
                      <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30">
                        {stage.year} • {stage.stageNumber}
                      </span>
                      <span className="text-[11px] font-mono text-muted-foreground">
                        {stage.badge}
                      </span>
                    </div>

                    <h3 className="text-lg font-bold text-foreground mb-2.5">
                      {stage.title}
                    </h3>

                    <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed mb-4">
                      {stage.summary}
                    </p>

                    <ul className="space-y-1.5 text-xs text-foreground/80 font-mono">
                      {stage.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-amber-500 font-bold select-none">•</span>
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

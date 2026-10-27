"use client";

import React, { useRef } from "react";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
  MotionValue,
} from "framer-motion";
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
    title: "Computer Science Foundations & First Principles",
    summary:
      "Started my BCA journey at DSPMU and built my programming foundations. Focused on understanding how code works, solving problems with C and C++, and developing a stronger grasp of core computer science concepts.",
    highlights: [
      "Built programming fundamentals through C, C++, pointers, memory management, and problem-solving",
      "Developed an understanding of object-oriented programming and data structures",
      "Studied core concepts in operating systems, computer networks, and HTTP",
      "Started connecting academic concepts with practical software development",
    ],
    icon: <Terminal size={14} className="text-amber-500" />,
  },
  {
    year: "2025",
    stageNumber: "Stage 02",
    badge: "Full-Stack Engineering",
    title: "From Web Development to Building Complete Systems",
    summary:
      "Moved beyond individual technologies and started building applications with real backend logic, databases, authentication, and real-time communication. Gained practical development experience through my full-stack internship and projects.",
    highlights: [
      "Completed a Full-Stack Web Development Internship at G TEC Computer Education",
      "Built ConvoX, a real-time chat application using WebSockets and Redis Pub/Sub",
      "Developed Rentique, a full-stack house rental platform with booking and availability workflows",
      "Explored API design, database modeling, caching, authentication, and system design fundamentals",
    ],
    icon: <Layers size={14} className="text-amber-500" />,
  },
  {
    year: "2026",
    stageNumber: "Stage 03",
    badge: "Applied AI & Product Engineering",
    title: "Building AI Systems, Competing & Shipping Products",
    summary:
      "Shifted from building conventional web applications to engineering AI-powered products. Worked with LLM integrations, agent orchestration, conversational memory, retrieval, and streaming while learning to balance technical complexity with actual user needs.",
    highlights: [
      "Shipped SkillFarm v1, a free AI-powered learning workspace with specialized mentors and contextual learning workflows",
      "Started my hackathon journey as a team leader with Team TechKnights, winning 1st place and ₹20,000 at Martinovation 2026 with P2Shield, an LLM privacy firewall, among 52 competing teams",
      "Built ChatMate, a multi-LLM chat platform with streaming, conversation branching, and tool calling",
      "Led team development of PRAGATI for SIH 2026, focused on predictive infrastructure monitoring and project-delay analysis",
      "Explored retrieval-based AI applications through ChaiBookLM and RAG workflows for contextual AI responses",
    ],
    icon: <Sparkles size={14} className="text-amber-500" />,
  },
];

// Interactive Joint Circle Beacon that illuminates in golden color as the scroll reaches it
function MilestoneBeacon({
  index,
  smoothProgress,
}: {
  index: number;
  smoothProgress: MotionValue<number>;
}) {
  const threshold = index === 0 ? 0.05 : index === 1 ? 0.5 : 0.9;

  const isReached = useTransform(
    smoothProgress,
    [threshold - 0.06, threshold],
    [0, 1]
  );

  const scale = useTransform(
    smoothProgress,
    [threshold - 0.08, threshold, threshold + 0.08],
    [1, 1.25, 1.08]
  );

  const borderColor = useTransform(
    isReached,
    [0, 1],
    ["rgba(160, 160, 160, 0.35)", "rgba(245, 158, 11, 1)"]
  );

  const boxShadow = useTransform(
    isReached,
    [0, 1],
    ["0 0 0px transparent", "0 0 20px rgba(245, 158, 11, 0.6)"]
  );

  const dotBg = useTransform(
    isReached,
    [0, 1],
    ["rgba(160, 160, 160, 0.35)", "#f59e0b"]
  );

  const dotScale = useTransform(isReached, [0, 1], [0.75, 1.25]);

  return (
    <motion.div
      style={{
        scale,
        borderColor,
        boxShadow,
      }}
      className="absolute left-4 sm:left-6 -translate-x-1/2 top-6 w-6 h-6 rounded-full bg-card border-2 flex items-center justify-center z-20 shrink-0 transition-colors"
    >
      <motion.span
        style={{
          backgroundColor: dotBg,
          scale: dotScale,
        }}
        className="w-2.5 h-2.5 rounded-full"
      />
    </motion.div>
  );
}

// Stage card with scroll-linked golden accenting
function StageCard({
  stage,
  index,
  smoothProgress,
}: {
  stage: JourneyItem;
  index: number;
  smoothProgress: MotionValue<number>;
}) {
  const threshold = index === 0 ? 0.05 : index === 1 ? 0.5 : 0.9;
  const isReached = useTransform(
    smoothProgress,
    [threshold - 0.06, threshold],
    [0, 1]
  );

  const cardBorder = useTransform(
    isReached,
    [0, 1],
    ["rgba(160, 160, 160, 0.2)", "rgba(245, 158, 11, 0.45)"]
  );

  const cardShadow = useTransform(
    isReached,
    [0, 1],
    ["0 1px 3px rgba(0,0,0,0.02)", "0 8px 30px rgba(245, 158, 11, 0.08)"]
  );

  return (
    <motion.div
      initial={{ opacity: 0, y: 25 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45, delay: index * 0.1 }}
      className="w-full pl-10 sm:pl-14"
    >
      <motion.div
        style={{
          borderColor: cardBorder,
          boxShadow: cardShadow,
        }}
        className="p-6 sm:p-7 rounded-3xl bg-card border transition-all duration-300 hover:shadow-xl"
      >
        {/* Year & Badge */}
        <div className="flex flex-wrap items-center justify-between gap-2 mb-3">
          <span className="text-xs font-mono font-bold text-amber-700 dark:text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30">
            {stage.year} • {stage.stageNumber}
          </span>
          <span className="text-[11px] font-mono text-muted-foreground">
            {stage.badge}
          </span>
        </div>

        <h3 className="text-lg font-bold text-foreground mb-2.5 flex items-center gap-2">
          <span>{stage.title}</span>
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
      </motion.div>
    </motion.div>
  );
}

export default function Timeline() {
  const containerRef = useRef<HTMLDivElement>(null);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 70%", "end 75%"],
  });

  // Fluid spring physics for moving golden beam
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 260,
    damping: 32,
    restDelta: 0.001,
  });

  const laserPos = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <section
      id="journey"
      className="py-20 md:py-28 border-t border-border/50 relative overflow-hidden"
    >
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
            From learning the fundamentals to building products, leading teams,
            and shipping AI-powered solutions.
          </p>
        </div>

        {/* Timeline Container with Moving Golden Scroll Spine */}
        <div ref={containerRef} className="relative">
          {/* Vertical Spine Wrapper (runs from top circle to bottom circle) */}
          <div className="absolute left-4 sm:left-6 -translate-x-1/2 top-6 bottom-6 w-0.5 pointer-events-none">
            {/* Background static neutral spine */}
            <div className="w-full h-full bg-border/60" />

            {/* Dynamic Moving Golden Beam (drawn progressively down with scroll) */}
            <motion.div
              style={{ scaleY: smoothProgress, originY: 0 }}
              className="absolute inset-0 w-full bg-gradient-to-b from-amber-500 via-amber-400 to-amber-500 shadow-[0_0_12px_rgba(245,158,11,0.7)] z-10"
            />

            {/* Glowing Golden Laser Head traveling at the leading edge of the scroll */}
            <motion.div
              style={{ top: laserPos }}
              className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 w-3.5 h-3.5 rounded-full bg-amber-400 border-2 border-white dark:border-background shadow-[0_0_16px_#f59e0b,0_0_8px_#fbbf24] z-20 pointer-events-none"
            />
          </div>

          {/* Timeline Stages */}
          <div className="space-y-8 sm:space-y-10">
            {journeyStages.map((stage, index) => (
              <div key={stage.year} className="relative flex items-start">
                {/* Joint Circle Beacon — Highlights in golden color as the scroll beam touches it */}
                <MilestoneBeacon
                  index={index}
                  smoothProgress={smoothProgress}
                />

                {/* Stage Card Consistent on the Right Side */}
                <StageCard
                  stage={stage}
                  index={index}
                  smoothProgress={smoothProgress}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

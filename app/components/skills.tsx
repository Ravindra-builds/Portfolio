"use client";

import React, { useState, useRef, useMemo } from "react";
import {
  Sparkles,
  Bot,
  Layers,
  Wrench,
  Binary,
  Brain,
  Globe,
  Radio,
  Workflow,
  Boxes,
  Server,
  Network,
  ShieldCheck,
  Zap,
  Database,
  Cpu,
  Code2,
  Search,
  X,
  CheckCircle2,
  Flame,
  ChevronLeft,
  ChevronRight,
  Gauge,
  Terminal,
  Braces,
  Shapes,
} from "lucide-react";
import {
  SiTypescript,
  SiJavascript,
  SiPython,
  SiC,
  SiCplusplus,
  SiReact,
  SiNextdotjs,
  SiTailwindcss,
  SiHtml5,
  SiBootstrap,
  SiFramer,
  SiNodedotjs,
  SiExpress,
  SiScikitlearn,
  SiJsonwebtokens,
  SiSocketdotio,
  SiPostgresql,
  SiDrizzle,
  SiMongodb,
  SiMysql,
  SiRedis,
  SiUpstash,
  SiDocker,
  SiCloudflare,
  SiVercel,
  SiRender,
  SiRailway,
  SiGit,
  SiGithub,
  SiLinux,
  SiPostman,
} from "react-icons/si";
import { FaJava, FaCss3Alt } from "react-icons/fa6";
import { TbSql } from "react-icons/tb";
import { VscOpenai } from "react-icons/vsc";

export interface SkillItem {
  name: string;
  icon: React.ReactNode;
  highlight?: boolean;
}

export interface SkillCategory {
  id: string;
  category: string;
  subtitle: string;
  icon: React.ReactNode;
  isSpotlight?: boolean;
  spotlightBadge?: string;
  items: SkillItem[];
}

const skillCategories: SkillCategory[] = [
  {
    id: "ai",
    category: "AI & GenAI Systems",
    subtitle: "Production RAG, autonomous multi-agent systems & generative workflows",
    icon: <Sparkles size={20} className="text-amber-500" />,
    isSpotlight: true,
    spotlightBadge: "Flagship Focus • Production AI Architecture",
    items: [
      {
        name: "OpenAI API (GPT-4o)",
        icon: <VscOpenai size={17} className="text-emerald-500 dark:text-emerald-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "Google Gemini API",
        icon: <Sparkles size={17} className="text-blue-500 dark:text-blue-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "AI Agent Orchestration",
        icon: <Bot size={17} className="text-amber-500 dark:text-amber-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "RAG & Vector Pipelines",
        icon: <Layers size={17} className="text-purple-500 dark:text-purple-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "Conversational Memory (Mem0)",
        icon: <Brain size={17} className="text-pink-500 dark:text-pink-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "Multi-LLM Routing",
        icon: <Workflow size={17} className="text-amber-500 dark:text-amber-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "Tool Calling & Functions",
        icon: <Wrench size={17} className="text-orange-500 dark:text-orange-400 shrink-0" />,
      },
      {
        name: "Vector Embeddings & Semantic Search",
        icon: <Binary size={17} className="text-cyan-500 dark:text-cyan-400 shrink-0" />,
      },
      {
        name: "Basics of Machine Learning",
        icon: <SiScikitlearn size={17} className="text-[#F7931E] shrink-0" />,
        highlight: true,
      },
      {
        name: "Streaming AI Responses (SSE)",
        icon: <Radio size={17} className="text-emerald-400 shrink-0" />,
      },
      {
        name: "Vercel AI SDK",
        icon: <SiVercel size={15} className="text-foreground shrink-0" />,
        highlight: true,
      },
      {
        name: "Prompt Engineering & Evals",
        icon: <Workflow size={17} className="text-amber-400 shrink-0" />,
      },
    ],
  },
  {
    id: "frontend",
    category: "Frontend & Interfaces",
    subtitle: "Fluid, responsive, accessible & interactive digital client experiences",
    icon: <Layers size={20} className="text-sky-500" />,
    items: [
      {
        name: "React.js (React 19)",
        icon: <SiReact size={16} className="text-[#61DAFB] shrink-0" />,
        highlight: true,
      },
      {
        name: "Next.js 16 (App Router)",
        icon: <SiNextdotjs size={16} className="text-foreground shrink-0" />,
        highlight: true,
      },
      {
        name: "Tailwind CSS v4",
        icon: <SiTailwindcss size={16} className="text-[#38BDF8] shrink-0" />,
        highlight: true,
      },
      {
        name: "TypeScript",
        icon: <SiTypescript size={16} className="text-[#3178C6] shrink-0" />,
        highlight: true,
      },
      {
        name: "Framer Motion",
        icon: <SiFramer size={16} className="text-[#0055FF] dark:text-[#38BDF8] shrink-0" />,
      },
      {
        name: "HTML5 & Semantic Web",
        icon: <SiHtml5 size={16} className="text-[#E34F26] shrink-0" />,
      },
      {
        name: "CSS3 & Modern Layouts",
        icon: <FaCss3Alt size={16} className="text-[#1572B6] shrink-0" />,
      },
      {
        name: "Radix UI & Shadcn",
        icon: <Boxes size={16} className="text-amber-500 shrink-0" />,
      },
      {
        name: "Bootstrap",
        icon: <SiBootstrap size={16} className="text-[#7952B3] shrink-0" />,
      },
    ],
  },
  {
    id: "backend",
    category: "Backend & Distributed APIs",
    subtitle: "High-throughput server architectures, event loops & secure authentication",
    icon: <Server size={20} className="text-emerald-500" />,
    items: [
      {
        name: "Node.js",
        icon: <SiNodedotjs size={16} className="text-[#5FA04E] shrink-0" />,
        highlight: true,
      },
      {
        name: "Express.js",
        icon: <SiExpress size={16} className="text-foreground shrink-0" />,
      },
      {
        name: "REST API Architecture",
        icon: <Network size={16} className="text-sky-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "MVC Architecture",
        icon: <Layers size={16} className="text-amber-500 shrink-0" />,
        highlight: true,
      },
      {
        name: "WebSockets & Socket.IO",
        icon: <SiSocketdotio size={16} className="text-foreground shrink-0" />,
        highlight: true,
      },
      {
        name: "JWT & Session Auth",
        icon: <SiJsonwebtokens size={16} className="text-pink-500 shrink-0" />,
      },
      {
        name: "Rate Limiting & Throttling",
        icon: <Gauge size={16} className="text-rose-500 shrink-0" />,
        highlight: true,
      },
    ],
  },
  {
    id: "databases-cloud",
    category: "Databases & Cloud Infrastructure",
    subtitle: "ACID transactions, serverless caches, edge storage & containerization",
    icon: <Database size={20} className="text-indigo-500" />,
    items: [
      {
        name: "PostgreSQL",
        icon: <SiPostgresql size={16} className="text-[#4169E1] shrink-0" />,
        highlight: true,
      },
      {
        name: "MongoDB",
        icon: <SiMongodb size={16} className="text-[#47A248] shrink-0" />,
        highlight: true,
      },
      {
        name: "Redis (Cache & Pub/Sub)",
        icon: <SiRedis size={16} className="text-[#DC382D] shrink-0" />,
        highlight: true,
      },
      {
        name: "Upstash (Serverless Redis)",
        icon: <SiUpstash size={16} className="text-[#00E599] shrink-0" />,
        highlight: true,
      },
      {
        name: "Drizzle ORM",
        icon: <SiDrizzle size={16} className="text-[#C5F74F] shrink-0" />,
        highlight: true,
      },
      {
        name: "Mongoose ODM",
        icon: <Database size={16} className="text-rose-500 shrink-0" />,
      },
      {
        name: "MySQL",
        icon: <SiMysql size={16} className="text-[#4479A1] shrink-0" />,
      },
      {
        name: "Docker",
        icon: <SiDocker size={16} className="text-[#2496ED] shrink-0" />,
        highlight: true,
      },
      {
        name: "Cloudflare R2 Storage",
        icon: <SiCloudflare size={16} className="text-[#F38020] shrink-0" />,
      },
      {
        name: "Vercel",
        icon: <SiVercel size={15} className="text-foreground shrink-0" />,
      },
      {
        name: "Render",
        icon: <SiRender size={16} className="text-[#46E3B7] shrink-0" />,
      },
      {
        name: "Git & GitHub",
        icon: <SiGit size={16} className="text-[#F05032] shrink-0" />,
      },
    ],
  },
  {
    id: "core-cs",
    category: "CS, Networking & System Design",
    subtitle: "Algorithmic thinking, operating system internals, protocols & high-level architecture",
    icon: <Cpu size={20} className="text-amber-500" />,
    isSpotlight: true,
    spotlightBadge: "Engineering Rigor • Technical Interview Core",
    items: [
      {
        name: "System Design (HLD)",
        icon: <Workflow size={16} className="text-amber-500 shrink-0" />,
        highlight: true,
      },
      {
        name: "Operating Systems (OS)",
        icon: <Cpu size={16} className="text-emerald-500 shrink-0" />,
        highlight: true,
      },
      {
        name: "Computer Networks (TCP/IP & HTTP)",
        icon: <Globe size={16} className="text-sky-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "DBMS & ACID Transactions",
        icon: <Database size={16} className="text-indigo-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "Object-Oriented Programming (OOP)",
        icon: <Shapes size={16} className="text-purple-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "Data Structures & Algorithms (DSA)",
        icon: <Braces size={16} className="text-cyan-400 shrink-0" />,
        highlight: true,
      },
      {
        name: "Concurrency & Multi-Threading",
        icon: <Terminal size={16} className="text-amber-400 shrink-0" />,
      },
      {
        name: "API Rate Limiting & Security",
        icon: <ShieldCheck size={16} className="text-rose-400 shrink-0" />,
      },
    ],
  },
  {
    id: "languages",
    category: "Programming Languages",
    subtitle: "Type safety, memory models, object-oriented & functional syntax",
    icon: <Code2 size={20} className="text-amber-500" />,
    items: [
      {
        name: "TypeScript",
        icon: <SiTypescript size={16} className="text-[#3178C6] shrink-0" />,
        highlight: true,
      },
      {
        name: "JavaScript (ES6+)",
        icon: <SiJavascript size={16} className="text-[#F7DF1E] shrink-0" />,
        highlight: true,
      },
      {
        name: "Python",
        icon: <SiPython size={16} className="text-[#3776AB] shrink-0" />,
        highlight: true,
      },
      {
        name: "Java",
        icon: <FaJava size={16} className="text-[#EA2D2E] shrink-0" />,
      },
      {
        name: "C",
        icon: <SiC size={16} className="text-[#A8B9CC] shrink-0" />,
      },
      {
        name: "C++",
        icon: <SiCplusplus size={16} className="text-[#00599C] shrink-0" />,
      },
      {
        name: "SQL",
        icon: <TbSql size={17} className="text-[#00758F] dark:text-[#38BDF8] shrink-0" />,
      },
    ],
  },
];

export default function Skills() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [searchQuery, setSearchQuery] = useState<string>("");
  const trackRef = useRef<HTMLDivElement>(null);

  // Total count of unique skills
  const totalSkillsCount = useMemo(() => {
    return skillCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, []);

  // Filter skills per category if search is active
  const displayedCategories = useMemo(() => {
    const query = searchQuery.trim().toLowerCase();
    if (!query) return skillCategories;

    return skillCategories.map((cat) => {
      const matchingItems = cat.items.filter((item) =>
        item.name.toLowerCase().includes(query)
      );
      const categoryMatches =
        cat.category.toLowerCase().includes(query) ||
        cat.subtitle.toLowerCase().includes(query);

      return {
        ...cat,
        items: categoryMatches ? cat.items : matchingItems,
      };
    });
  }, [searchQuery]);

  const totalFilteredCount = useMemo(() => {
    return displayedCategories.reduce((acc, cat) => acc + cat.items.length, 0);
  }, [displayedCategories]);

  // Track active slide on horizontal scroll
  const handleScroll = () => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.children[0] as HTMLElement;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 24; // width + gap (24px)
    const index = Math.round(scrollLeft / cardWidth);
    const clamped = Math.min(Math.max(0, index), displayedCategories.length - 1);
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
    scrollToIndex(Math.min(displayedCategories.length - 1, activeIndex + 1));
  };

  return (
    <section id="stack" className="py-20 md:py-28 border-t border-border/50 relative overflow-hidden">
      {/* Ambient background glows */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-amber-500/[0.03] rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
                05 / Toolkit
              </span>
              <span className="text-xs font-mono text-muted-foreground flex items-center gap-1.5">
                <CheckCircle2 size={13} className="text-emerald-500" />
                {totalSkillsCount} Production Skills
              </span>
            </div>

            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Technical{" "}
              <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 text-[1.12em] inline-block pr-2 mr-2">
                Capabilities
              </span>
              {" "}&amp; Stack.
            </h2>

            <p className="text-sm sm:text-base text-muted-foreground leading-relaxed max-w-xl">
              Technologies, frameworks, and engineering fundamentals battle-tested across shipped AI products, hackathon championships, and scalable distributed backends.
            </p>
          </div>

          {/* Desktop Prev / Next Navigation Arrows */}
          <div className="hidden sm:flex items-center gap-2 self-end">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              aria-label="Previous skill category"
              className="p-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer hover:border-amber-500/50"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={activeIndex === displayedCategories.length - 1}
              aria-label="Next skill category"
              className="p-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer hover:border-amber-500/50"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Quick Jump Category Pills & Search */}
        <div className="space-y-3.5 mb-8">
          {/* Category Tabs: One-Click Jump to Corresponding Slide */}
          <div className="flex items-center gap-1.5 overflow-x-auto no-scrollbar pb-1">
            {displayedCategories.map((cat, idx) => (
              <button
                key={cat.id}
                type="button"
                onClick={() => scrollToIndex(idx)}
                className={`px-3 py-1.5 rounded-xl text-xs font-mono whitespace-nowrap transition-all cursor-pointer flex items-center gap-1.5 ${
                  activeIndex === idx
                    ? "bg-amber-500 text-stone-950 font-bold shadow-xs shadow-amber-500/20"
                    : "bg-muted/70 text-muted-foreground hover:text-foreground border border-border/60"
                }`}
              >
                <span>{cat.category.split(" ")[0]}</span>
                <span className="opacity-70 text-[10px]">({cat.items.length})</span>
              </button>
            ))}
          </div>

          {/* Search Box */}
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3.5 top-1/2 -translate-y-1/2 text-muted-foreground pointer-events-none"
            />
            <input
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search technologies or CS concepts... (e.g. Next.js, Redis, System Design, Docker)"
              className="w-full pl-10 pr-10 py-2.5 rounded-2xl bg-card border border-border/80 text-foreground placeholder:text-muted-foreground/60 text-xs sm:text-sm font-mono focus:outline-hidden focus:border-amber-500/60 focus:ring-1 focus:ring-amber-500/30 transition-all"
            />
            {searchQuery && (
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="absolute right-3.5 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground p-0.5 rounded-full cursor-pointer"
                aria-label="Clear search"
              >
                <X size={15} />
              </button>
            )}
          </div>

          {/* Search Count Feedback */}
          {searchQuery && (
            <div className="text-xs font-mono text-muted-foreground flex items-center justify-between px-1">
              <span>
                Found <strong className="text-amber-500">{totalFilteredCount}</strong> matching technologies
              </span>
              <button
                type="button"
                onClick={() => setSearchQuery("")}
                className="text-amber-500 hover:underline cursor-pointer"
              >
                Reset search
              </button>
            </div>
          )}
        </div>

        {/* Horizontal Snap Scroll Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-4 sm:gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 scroll-smooth items-start md:items-stretch"
        >
          {displayedCategories.map((group, idx) => (
            <div
              key={group.id}
              className={`w-[88vw] sm:w-[620px] md:w-[780px] lg:w-[880px] shrink-0 snap-center rounded-2xl sm:rounded-3xl bg-card/95 border transition-all duration-300 relative overflow-hidden flex flex-col md:flex-row items-stretch group/card hover:shadow-xl hover:border-amber-500/40 ${
                group.isSpotlight
                  ? "border-amber-500/40 bg-gradient-to-r from-amber-500/[0.04] via-card to-card"
                  : "border-border/80 hover:bg-muted/10"
              }`}
            >
              {/* Subtle leading amber indicator for spotlight card */}
              {group.isSpotlight && (
                <div className="hidden md:block absolute left-0 top-3 bottom-3 w-1 bg-gradient-to-b from-amber-500 via-amber-400 to-amber-600 rounded-r" />
              )}

              {/* Left Metadata Pane (Category Identity) */}
              <div className="w-full md:w-64 lg:w-72 shrink-0 p-4 sm:p-5 md:p-6 pb-3 sm:pb-4 md:pb-6 border-b md:border-b-0 md:border-r border-border/60 flex flex-col justify-between bg-muted/20 md:bg-transparent">
                <div>
                  {/* Top row in left pane: icon, index, skill count */}
                  <div className="flex items-center justify-between gap-2 mb-2.5 sm:mb-3">
                    <div className="flex items-center gap-2.5">
                      <div className="p-2 sm:p-2.5 rounded-xl bg-amber-500/10 border border-amber-500/20 text-amber-500 shrink-0">
                        {group.icon}
                      </div>
                      <span className="text-xs font-mono text-amber-500 font-semibold px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                        0{idx + 1}
                      </span>
                    </div>

                    <span className="text-[11px] font-mono text-muted-foreground px-2 py-0.5 rounded-full bg-muted border border-border/60">
                      {group.items.length} Skills
                    </span>
                  </div>

                  {/* Category Title */}
                  <h3 className="text-sm sm:text-base font-mono font-bold tracking-tight text-foreground group-hover/card:text-amber-500 transition-colors">
                    {group.category}
                  </h3>

                  {/* Subtitle / Architectural Role */}
                  <p className="text-xs text-muted-foreground mt-1 sm:mt-1.5 leading-relaxed">
                    {group.subtitle}
                  </p>
                </div>

                {/* Spotlight Pill at bottom of left pane */}
                {group.spotlightBadge && (
                  <div className="mt-3 sm:mt-4 pt-2.5 sm:pt-3 border-t border-border/40 hidden md:block">
                    <span className="inline-flex items-center gap-1.5 text-[10px] font-mono text-amber-600 dark:text-amber-400 font-medium">
                      <Flame size={12} className="text-amber-500 shrink-0" />
                      {group.spotlightBadge}
                    </span>
                  </div>
                )}
              </div>

              {/* Right Skills Grid Pane (Uniform Brand Pills with Authentic Icons) */}
              <div className="flex-1 p-4 sm:p-5 md:p-6 pt-3.5 sm:pt-4 md:pt-6 flex flex-wrap items-start content-start md:items-center md:content-center gap-1.5 sm:gap-2 md:gap-2.5 min-h-0 md:min-h-[140px]">
                {group.items.length > 0 ? (
                  group.items.map((item) => (
                    <div
                      key={item.name}
                      className={`group/chip inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1.5 sm:py-2 rounded-xl text-[11.5px] sm:text-xs font-mono border transition-all duration-200 cursor-default select-none ${
                        item.highlight
                          ? "bg-amber-500/[0.07] border-amber-500/35 text-foreground hover:border-amber-500 hover:bg-amber-500/[0.14] hover:-translate-y-0.5 shadow-2xs"
                          : "bg-muted/70 hover:bg-amber-500/[0.07] border-border/70 hover:border-amber-500/40 text-foreground/90 hover:text-foreground hover:-translate-y-0.5 shadow-2xs"
                      }`}
                    >
                      <span className="transition-transform duration-200 group-hover/chip:scale-115">
                        {item.icon}
                      </span>
                      <span className="whitespace-nowrap font-medium">
                        {item.name}
                      </span>
                    </div>
                  ))
                ) : (
                  <span className="text-xs font-mono text-muted-foreground italic">
                    No matching technologies in this category.
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Dotted Visual Scroll Indicator & Navigation Bar */}
        <div className="flex items-center justify-between pt-6 mt-4">
          <span className="text-xs font-mono text-muted-foreground">
            0{activeIndex + 1} / 0{displayedCategories.length} Categories &bull; {totalSkillsCount} Skills
          </span>

          {/* Interactive Dotted Track */}
          <div className="flex items-center gap-2">
            {displayedCategories.map((c, i) => (
              <button
                key={c.id}
                type="button"
                onClick={() => scrollToIndex(i)}
                aria-label={`Jump to category ${c.category}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? "w-7 sm:w-9 h-2 bg-amber-500 shadow-sm shadow-amber-500/40"
                    : "w-2 h-2 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          {/* Mobile Prev / Next Arrows */}
          <div className="flex sm:hidden items-center gap-1">
            <button
              type="button"
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              aria-label="Previous skill category"
              className="p-1.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              type="button"
              onClick={scrollNext}
              disabled={activeIndex === displayedCategories.length - 1}
              aria-label="Next skill category"
              className="p-1.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={14} />
            </button>
          </div>

          <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground">
            Click dots or swipe to explore stack
          </span>
        </div>
      </div>
    </section>
  );
}

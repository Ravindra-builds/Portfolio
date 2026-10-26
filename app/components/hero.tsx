"use client";

import { useEffect, useMemo, useState } from "react";
import { motion } from "framer-motion";
import { MoveRight, Download, Mail, Trophy } from "lucide-react";
import { Button } from "@/components/ui/button";

function Hero() {
  const [titleNumber, setTitleNumber] = useState(0);
  const titles = useMemo(
    () => [
      "Autonomous AI Agents",
      "Production RAG Systems",
      "Real-Time Web Apps",
      "Multi-LLM Platforms",
      "Full-Stack Systems",
    ],
    []
  );

  useEffect(() => {
    const timeoutId = setTimeout(() => {
      if (titleNumber === titles.length - 1) {
        setTitleNumber(0);
      } else {
        setTitleNumber(titleNumber + 1);
      }
    }, 2400);
    return () => clearTimeout(timeoutId);
  }, [titleNumber, titles]);

  return (
    <section
      id="hero"
      className="w-full pt-28 pb-14 bg-gradient-to-b from-white via-gray-50/50 to-white dark:from-black dark:via-gray-950 dark:to-black overflow-hidden relative"
    >
      {/* Soft atmospheric ambient glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-blue-500/15 via-indigo-500/10 to-purple-500/15 dark:from-blue-600/20 dark:via-indigo-500/15 dark:to-purple-600/20 rounded-full blur-[140px] -z-10 pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex gap-6 sm:gap-8 items-center justify-center flex-col text-center">
          {/* Top Pill / Badge */}
          <div className="slideDown flex flex-wrap items-center justify-center gap-2">
            <a
              href="#achievements"
              className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-amber-500/10 text-amber-800 dark:text-amber-300 border border-amber-500/20 hover:border-amber-500/40 transition-colors shadow-xs"
            >
              <Trophy size={13} className="text-amber-500" />
              <span>1st Place Winner @ Martinovation 2026</span>
              <MoveRight className="w-3.5 h-3.5 text-amber-500" />
            </a>

            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-medium bg-emerald-500/10 text-emerald-800 dark:text-emerald-300 border border-emerald-500/20 shadow-xs">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
              </span>
              <span>Available for Hire</span>
            </div>
          </div>

          {/* Dynamic Animated Headline */}
          <div className="flex gap-4 flex-col max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-6xl md:text-7xl lg:text-7xl font-extrabold tracking-tight text-center leading-[1.12] text-gray-900 dark:text-white">
              <span>Building Next-Gen</span>
              <span className="relative flex w-full justify-center overflow-hidden text-center h-[1.3em] my-1 sm:my-2">
                {titles.map((title, index) => (
                  <motion.span
                    key={index}
                    className="absolute font-extrabold bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent px-2"
                    initial={{ opacity: 0, y: "-100%" }}
                    transition={{ type: "spring", stiffness: 60, damping: 14 }}
                    animate={
                      titleNumber === index
                        ? {
                            y: 0,
                            opacity: 1,
                          }
                        : {
                            y: titleNumber > index ? -120 : 120,
                            opacity: 0,
                          }
                    }
                  >
                    {title}
                  </motion.span>
                ))}
              </span>
            </h1>

            {/* Narrative Subtitle */}
            <p className="text-base sm:text-lg md:text-xl leading-relaxed text-gray-600 dark:text-gray-400 max-w-2xl mx-auto text-center font-normal">
              Hi, I&apos;m <strong className="text-gray-900 dark:text-white font-semibold">Ravindra Yadav</strong> — an AI & Full-Stack Developer specializing in production RAG systems, multi-LLM platforms, and real-time distributed applications with React 19, Next.js 16, and Node.js.
            </p>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center gap-3.5 w-full sm:w-auto pt-2">
            <Button size="lg" className="gap-2 rounded-full px-7 shadow-lg shadow-blue-500/25 bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 text-white font-medium" asChild>
              <a href="#projects">
                <span>View My Work</span>
                <MoveRight className="w-4 h-4" />
              </a>
            </Button>

            <Button size="lg" variant="outline" className="gap-2 rounded-full px-7 border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-900 hover:bg-gray-100 dark:hover:bg-gray-800 text-gray-900 dark:text-white font-medium" asChild>
              <a href="/Resume.pdf" download="Ravindra_Yadav_Resume.pdf">
                <span>Download Resume</span>
                <Download className="w-4 h-4" />
              </a>
            </Button>

            <Button size="lg" variant="ghost" className="gap-2 rounded-full px-5 text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800" asChild>
              <a href="#contact">
                <Mail className="w-4 h-4 text-blue-500" />
                <span>Get In Touch</span>
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
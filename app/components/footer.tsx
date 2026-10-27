"use client";

import React from "react";
import Image from "next/image";
import { ArrowUp, Download } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative pt-16 pb-8 border-t border-border/50 bg-background overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Brand & Status Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-8 border-b border-border/40">
          <div className="flex items-center gap-3">
            <div className="relative w-8 h-8 sm:w-9 sm:h-9 rounded-full overflow-hidden shrink-0 border border-amber-500/25 shadow-xs">
              <Image
                src="/ry-logo.png"
                alt="Ravindra Yadav Logo"
                fill
                sizes="36px"
                className="object-contain"
              />
            </div>
            <div>
              <div className="font-bold text-base tracking-tight bg-gradient-to-r from-amber-600 via-amber-500 to-amber-600 dark:from-amber-300 dark:via-amber-400 dark:to-amber-200 bg-clip-text text-transparent flex items-center gap-2">
                <span>Ravindra Yadav</span>
              </div>
              <p className="text-xs text-muted-foreground font-mono">
                AI &amp; Full-Stack Systems Engineer • Ranchi, India
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs font-mono px-3 py-1.5 rounded-full bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 self-start sm:self-auto">
            <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse shrink-0" />
            <span>Available for engineering roles</span>
          </div>
        </div>

        {/* 3-4 Main Section Shortcuts in One Single Clean Row */}
        <div className="py-7 border-b border-border/40 flex flex-col sm:flex-row sm:items-center justify-between gap-5 text-xs sm:text-sm font-mono">
          <div className="flex flex-wrap items-center gap-4 sm:gap-8">
            <a
              href="#about"
              className="text-foreground/90 hover:text-amber-500 transition-colors font-medium flex items-center gap-1.5"
            >
              <span>About</span>
            </a>
            <a
              href="#projects"
              className="text-foreground/90 hover:text-amber-500 transition-colors font-medium flex items-center gap-1.5"
            >
              <span>Projects</span>
            </a>
            <a
              href="#achievements"
              className="text-foreground/90 hover:text-amber-500 transition-colors font-medium flex items-center gap-1.5"
            >
              <span>Honors</span>
            </a>
            <a
              href="#contact"
              className="text-foreground/90 hover:text-amber-500 transition-colors font-medium flex items-center gap-1.5"
            >
              <span>Contact</span>
            </a>
          </div>

          <div className="flex flex-wrap items-center gap-3 sm:gap-4 text-xs text-muted-foreground">
            <a
              href="https://github.com/Ravindra-builds"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <FaGithub size={14} />
              <span className="hidden sm:inline">GitHub</span>
            </a>
            <span>•</span>
            <a
              href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-foreground transition-colors flex items-center gap-1.5"
            >
              <FaLinkedin size={14} />
              <span className="hidden sm:inline">LinkedIn</span>
            </a>
            <span>•</span>
            <a
              href="/Resume.pdf"
              download="Ravindra_Yadav_Resume.pdf"
              className="text-amber-700 dark:text-amber-400 hover:underline flex items-center gap-1 font-semibold"
            >
              <Download size={13} />
              <span>Resume</span>
            </a>
          </div>
        </div>

        {/* Bottom Utility Info Bar */}
        <div className="pt-7 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
          <div className="flex items-center gap-2">
            <span>&copy; {new Date().getFullYear()} Ravindra Yadav.</span>
            <span>•</span>
            <span>Ranchi, India (IST)</span>
          </div>

          <div className="flex items-center gap-4">
            <span>Built with Next.js 16 &amp; Tailwind CSS v4</span>
            <button
              onClick={scrollToTop}
              aria-label="Back to top"
              className="p-2 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors flex items-center gap-1 cursor-pointer"
              title="Back to top"
            >
              <ArrowUp size={13} />
            </button>
          </div>
        </div>
      </div>

      {/* CodeRabbit-Style Watermark: Scattered, seamless, no borders, dark below 50% */}
      <div className="relative w-full select-none pointer-events-none mt-12 sm:mt-16 pb-2">
        {/* Desktop / Tablet Watermark: RAVINDRA YADAV */}
        <div className="hidden sm:block max-w-6xl mx-auto px-4">
          <svg
            viewBox="0 0 1500 160"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="RAVINDRA YADAV"
          >
            <defs>
              {/* Dark mode: warm amber stroke at top, removing opacity slowly and smoothly toward the bottom */}
              <linearGradient id="wm-stroke-dark-desktop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" stopOpacity="0.75" />
                <stop offset="25%" stopColor="#f59e0b" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.32" />
                <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.12" />
                <stop offset="90%" stopColor="#f59e0b" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
              </linearGradient>

              {/* Light mode: warm terracotta/amber stroke at top, removing opacity slowly */}
              <linearGradient id="wm-stroke-light-desktop" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="0.65" />
                <stop offset="25%" stopColor="#d97706" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#d97706" stopOpacity="0.25" />
                <stop offset="75%" stopColor="#d97706" stopOpacity="0.09" />
                <stop offset="90%" stopColor="#d97706" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Dark Mode Text */}
            <text
              x="50%"
              y="124"
              textAnchor="middle"
              className="hidden dark:block font-extrabold tracking-[-0.04em]"
              style={{
                fontSize: "128px",
                fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
                stroke: "url(#wm-stroke-dark-desktop)",
                strokeWidth: "1.5px",
                fill: "none",
              }}
            >
              RAVINDRA YADAV
            </text>

            {/* Light Mode Text */}
            <text
              x="50%"
              y="124"
              textAnchor="middle"
              className="block dark:hidden font-extrabold tracking-[-0.04em]"
              style={{
                fontSize: "128px",
                fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
                stroke: "url(#wm-stroke-light-desktop)",
                strokeWidth: "1.5px",
                fill: "none",
              }}
            >
              RAVINDRA YADAV
            </text>
          </svg>
        </div>

        {/* Mobile Watermark: RAVINDRA ONLY */}
        <div className="block sm:hidden max-w-sm mx-auto px-4">
          <svg
            viewBox="0 0 900 160"
            className="w-full h-auto"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-label="RAVINDRA"
          >
            <defs>
              {/* Dark mode mobile: slowly remove opacity toward the bottom */}
              <linearGradient id="wm-stroke-dark-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#fb923c" stopOpacity="0.75" />
                <stop offset="25%" stopColor="#f59e0b" stopOpacity="0.55" />
                <stop offset="50%" stopColor="#f59e0b" stopOpacity="0.32" />
                <stop offset="75%" stopColor="#f59e0b" stopOpacity="0.12" />
                <stop offset="90%" stopColor="#f59e0b" stopOpacity="0.04" />
                <stop offset="100%" stopColor="#f59e0b" stopOpacity="0.0" />
              </linearGradient>

              {/* Light mode mobile: slowly remove opacity toward the bottom */}
              <linearGradient id="wm-stroke-light-mobile" x1="0%" y1="0%" x2="0%" y2="100%">
                <stop offset="0%" stopColor="#ea580c" stopOpacity="0.65" />
                <stop offset="25%" stopColor="#d97706" stopOpacity="0.45" />
                <stop offset="50%" stopColor="#d97706" stopOpacity="0.25" />
                <stop offset="75%" stopColor="#d97706" stopOpacity="0.09" />
                <stop offset="90%" stopColor="#d97706" stopOpacity="0.03" />
                <stop offset="100%" stopColor="#d97706" stopOpacity="0.0" />
              </linearGradient>
            </defs>

            {/* Dark Mode Mobile Text */}
            <text
              x="50%"
              y="124"
              textAnchor="middle"
              className="hidden dark:block font-extrabold tracking-[-0.04em]"
              style={{
                fontSize: "140px",
                fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
                stroke: "url(#wm-stroke-dark-mobile)",
                strokeWidth: "1.5px",
                fill: "none",
              }}
            >
              RAVINDRA
            </text>

            {/* Light Mode Mobile Text */}
            <text
              x="50%"
              y="124"
              textAnchor="middle"
              className="block dark:hidden font-extrabold tracking-[-0.04em]"
              style={{
                fontSize: "140px",
                fontFamily: "var(--font-geist-sans), -apple-system, BlinkMacSystemFont, sans-serif",
                stroke: "url(#wm-stroke-light-mobile)",
                strokeWidth: "1.5px",
                fill: "none",
              }}
            >
              RAVINDRA
            </text>
          </svg>
        </div>
      </div>
    </footer>
  );
}

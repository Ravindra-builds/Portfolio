"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ArrowDown,
  Download,
  Copy,
  Check,
  Trophy,
  ArrowUpRight,
  MapPin,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export default function Hero() {
  const [copiedEmail, setCopiedEmail] = useState(false);
  const email = "yadavravindra7292@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 2000);
  };

  return (
    <section
      id="hero"
      className="relative pt-36 pb-20 md:pt-44 md:pb-28 overflow-hidden"
    >
        <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
          {/* Top Profile / Availability Badge - Always in same row on mobile & desktop */}
          <div className="flex items-center gap-3.5 sm:gap-6 mb-8">
            <div className="relative w-16 h-16 sm:w-24 sm:h-24 rounded-2xl overflow-hidden border-2 border-border shadow-md bg-muted shrink-0">
              <Image
                src="/ravindra-img.png"
                alt="Ravindra Yadav"
                fill
                sizes="(max-width: 640px) 64px, 96px"
                className="object-cover"
                priority
              />
            </div>

            <div className="space-y-1 sm:space-y-1.5 min-w-0">
              <div className="inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3 py-1 rounded-xl sm:rounded-full text-[11px] sm:text-xs font-medium bg-emerald-500/10 text-emerald-700 dark:text-emerald-400 border border-emerald-500/20 leading-tight">
                <span className="relative flex h-2 w-2 shrink-0">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500" />
                </span>
                <span>Available for engineering roles &amp; projects</span>
              </div>

              <div className="flex items-center gap-1.5 sm:gap-2 text-[10.5px] sm:text-xs text-muted-foreground font-mono">
                <MapPin size={11} className="text-muted-foreground shrink-0" />
                <span>Ranchi, India • Open to Remote Worldwide</span>
              </div>
            </div>
          </div>

          {/* Master Editorial Headline with Generous Spacing & Optical Scale */}
          <div className="space-y-6">
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold tracking-tight text-foreground leading-[1.14]">
              Hey, I&apos;m Ravindra. <br />
              <span className="text-muted-foreground font-normal">
                I build{" "}
                <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 text-[1.12em] inline-block pr-2 mr-2">
                  Generative AI
                </span>
                {" "}products and modern full-stack web applications.
              </span>
            </h1>

            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl leading-relaxed">
              Full-stack engineer working with{" "}
              <strong className="text-foreground font-medium">
                Next.js 16, React 19, TypeScript, Node.js, and Generative AI
              </strong>
              . I design systems that turn machine learning models into intuitive, practical web software.
            </p>

            {/* Martinovation Hackathon Proof Pill */}
            <a
              href="#achievements"
              className="inline-flex items-center gap-2.5 p-1.5 pr-4 rounded-full bg-amber-500/10 hover:bg-amber-500/15 border border-amber-500/25 text-amber-800 dark:text-amber-300 text-xs transition-colors group max-w-full"
            >
              <span className="p-1.5 rounded-full bg-amber-500/20 text-amber-500 shrink-0">
                <Trophy size={13} />
              </span>
              <span className="font-medium truncate sm:overflow-visible">
                1st Place Winner @ Martinovation Hackathon 2026
              </span>
              <ArrowUpRight
                size={13}
                className="text-amber-500 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform ml-auto shrink-0"
              />
            </a>

            {/* Action CTAs */}
            <div className="flex flex-wrap items-center gap-3 pt-3">
              <a
                href="#projects"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-foreground text-background text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity shadow-xs"
              >
                <span>View Projects</span>
                <ArrowDown size={14} />
              </a>

              <a
                href="/Resume.pdf"
                download="Ravindra_Yadav_Resume.pdf"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-border bg-card hover:bg-muted text-foreground text-xs sm:text-sm font-medium transition-colors"
              >
                <Download size={14} className="text-amber-500" />
                <span>Download Resume</span>
              </a>

              <button
                onClick={handleCopyEmail}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-border bg-card hover:bg-muted text-muted-foreground hover:text-foreground text-xs sm:text-sm font-medium transition-colors"
              >
                {copiedEmail ? <Check size={14} className="text-emerald-500" /> : <Copy size={14} />}
                <span>{copiedEmail ? "Copied!" : "Copy Email"}</span>
              </button>
            </div>

            {/* Social Links Row */}
            <div className="flex flex-wrap items-center gap-x-4 gap-y-2 pt-4 text-muted-foreground border-t border-border/50">
              <a
                href="https://github.com/Ravindra-builds"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <FaGithub size={15} />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <FaLinkedin size={15} />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href="https://x.com/YadavRavin7292"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <FaTwitter size={15} />
                <span>Twitter</span>
              </a>
              <span>•</span>
              <a
                href="https://rvindra.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1.5 text-xs font-mono"
              >
                <SiHashnode size={13} />
                <span>Articles</span>
              </a>
            </div>
          </div>
        </div>
      </section>
  );
}

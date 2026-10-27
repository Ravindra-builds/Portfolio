"use client";

import React, { useState } from "react";
import { Mail, MapPin, Copy, Check, ArrowUpRight } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "yadavravindra7292@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="py-20 md:py-28 border-t border-border/50">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8">
        <div className="space-y-4 mb-12">
          <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
            07 / Contact
          </span>
          <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-foreground leading-tight">
            Let&apos;s build something{" "}
            <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 text-[1.12em] inline-block pr-2 mr-2">
              extraordinary
            </span>
            {" "}together.
          </h2>
          <p className="text-base sm:text-lg text-muted-foreground leading-relaxed max-w-xl">
            I am currently open to full-time software engineering roles, AI system contracts, and technical collaborations.
          </p>
        </div>

        {/* Contact Plinth Card */}
        <div className="p-6 sm:p-10 rounded-3xl bg-card border border-border hover:border-amber-500/30 transition-all space-y-8 shadow-sm">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6">
            <div className="space-y-1">
              <span className="text-xs font-mono uppercase tracking-wider text-muted-foreground">
                Direct Email
              </span>
              <a
                href={`mailto:${email}`}
                className="text-lg sm:text-2xl font-bold font-mono text-foreground hover:text-amber-500 transition-colors block break-all"
              >
                {email}
              </a>
              <span className="text-xs font-mono text-muted-foreground block pt-1">
                Ranchi, Jharkhand, India • Open to Remote Worldwide
              </span>
            </div>

            <div className="flex flex-wrap items-center gap-3 shrink-0">
              <a
                href={`mailto:${email}`}
                className="px-6 py-3 rounded-full bg-foreground text-background text-xs sm:text-sm font-medium hover:opacity-90 transition-opacity"
              >
                Send Email
              </a>

              <button
                onClick={handleCopy}
                className="px-5 py-3 rounded-full border border-border bg-card hover:bg-muted text-foreground text-xs sm:text-sm font-medium transition-colors font-mono"
              >
                {copied ? "Copied!" : "Copy Address"}
              </button>
            </div>
          </div>

          <div className="pt-6 border-t border-border/60 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-muted-foreground">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
              <span>Available for Hire • Notice: Immediate</span>
            </div>

            <div className="flex items-center gap-3 sm:gap-4">
              <a
                href="https://github.com/Ravindra-builds"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1"
              >
                <FaGithub size={14} />
                <span>GitHub</span>
              </a>
              <span>•</span>
              <a
                href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1"
              >
                <FaLinkedin size={14} />
                <span>LinkedIn</span>
              </a>
              <span>•</span>
              <a
                href="https://x.com/YadavRavin7292"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1"
              >
                <FaTwitter size={14} />
                <span>Twitter</span>
              </a>
              <span>•</span>
              <a
                href="https://rvindra.hashnode.dev"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-foreground transition-colors flex items-center gap-1"
              >
                <SiHashnode size={13} />
                <span>Articles</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

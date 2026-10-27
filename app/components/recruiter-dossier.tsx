"use client";

import React, { useState, useEffect, useCallback } from "react";
import {
  X,
  Download,
  Copy,
  Check,
  Trophy,
  ExternalLink,
  Mail,
  MapPin,
  Sparkles,
  Terminal,
  Printer,
  ShieldCheck,
  Cpu,
} from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

interface RecruiterDossierProps {
  isOpen: boolean;
  onClose: () => void;
}

export function RecruiterDossier({ isOpen, onClose }: RecruiterDossierProps) {
  const [copied, setCopied] = useState(false);
  const email = "yadavravindra7292@gmail.com";

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      // Don't trigger if user is typing in an input or textarea
      if (
        e.target instanceof HTMLInputElement ||
        e.target instanceof HTMLTextAreaElement
      ) {
        return;
      }

      if (e.key.toLowerCase() === "d" && !e.metaKey && !e.ctrlKey) {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          window.dispatchEvent(new CustomEvent("open-recruiter-dossier"));
        }
      }

      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  }, [email]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 md:p-6 overflow-y-auto bg-black/70 backdrop-blur-md animate-in fade-in duration-200">
      <div
        className="relative w-full max-w-3xl max-h-[90vh] overflow-y-auto bg-[#0F1115] text-[#EDEDEC] border border-white/10 rounded-2xl shadow-2xl p-6 sm:p-8 space-y-6"
        role="dialog"
        aria-modal="true"
        aria-labelledby="dossier-title"
      >
        {/* Top Bar / Header */}
        <div className="flex items-start justify-between border-b border-white/10 pb-5">
          <div>
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full text-[11px] font-mono uppercase tracking-wider bg-amber-500/10 text-amber-300 border border-amber-500/25 mb-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
              Recruiter Quick Dossier • 60-Sec Executive Brief
            </div>
            <h2 id="dossier-title" className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white">
              Ravindra Yadav
            </h2>
            <p className="text-sm text-gray-400 font-mono mt-0.5">
              Full-Stack & Generative AI Systems Engineer • Ranchi, India (Open to Remote Worldwide)
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => window.print()}
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 text-xs font-mono rounded-lg border border-white/10 hover:bg-white/5 text-gray-300 transition-colors"
              title="Print Dossier"
            >
              <Printer size={13} />
              <span>Print</span>
            </button>
            <button
              onClick={onClose}
              className="p-2 rounded-lg border border-white/10 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              aria-label="Close dossier"
            >
              <X size={18} />
            </button>
          </div>
        </div>

        {/* Status & Availability Strip */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-xs font-mono bg-white/[0.03] p-3.5 rounded-xl border border-white/5">
          <div>
            <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Status</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-1.5 mt-0.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
              Available for Hire
            </span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Role Focus</span>
            <span className="text-gray-200 mt-0.5 block">AI Eng / Full-Stack</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Notice Period</span>
            <span className="text-gray-200 mt-0.5 block">Immediate</span>
          </div>
          <div>
            <span className="text-gray-500 block uppercase tracking-wider text-[10px]">Timezone</span>
            <span className="text-gray-200 mt-0.5 block">IST (UTC+5:30)</span>
          </div>
        </div>

        {/* Verified High-Signal Achievement */}
        <div className="p-4 rounded-xl bg-gradient-to-r from-amber-500/10 via-amber-500/5 to-transparent border border-amber-500/20">
          <div className="flex items-start gap-3">
            <div className="p-2 rounded-lg bg-amber-500/20 text-amber-300 shrink-0 mt-0.5">
              <Trophy size={18} />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h4 className="text-sm font-semibold text-white">
                  1st Place Winner — Martinovation 24h Hackathon 2026
                </h4>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-amber-500/20 text-amber-300">
                  ₹20,000 Prize • 52 Teams
                </span>
              </div>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Architected <strong>P2Shield</strong>, an autonomous LLM privacy firewall proxy that intercepts, redacts, and cryptographically controls sensitive data before it reaches external AI models.
              </p>
            </div>
          </div>
        </div>

        {/* Flagship Production Projects */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-3 flex items-center gap-2">
            <Cpu size={14} className="text-amber-400" />
            Flagship Engineering Systems
          </h3>
          <div className="space-y-2.5">
            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  SkillFarm
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-500/15 text-emerald-300 border border-emerald-500/20">
                    Live System
                  </span>
                </span>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <a
                    href="https://skillfarm.in"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline inline-flex items-center gap-1"
                  >
                    skillfarm.in <ExternalLink size={11} />
                  </a>
                  <a
                    href="https://github.com/Ravindra-builds/SkillFarm"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                AI workspace with personalized learning paths, specialized AI mentors, multi-agent supervisor pattern, Mem0 vector memory persistence, and Tavily deep research routing.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2 text-[10px] font-mono text-gray-400">
                <span className="px-2 py-0.5 rounded bg-white/5">Next.js 16</span>
                <span className="px-2 py-0.5 rounded bg-white/5">TypeScript</span>
                <span className="px-2 py-0.5 rounded bg-white/5">PostgreSQL + Drizzle</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Mem0 Memory</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Gemini & OpenAI</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  ChaiBookLM
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-purple-500/15 text-purple-300 border border-purple-500/20">
                    Vector RAG
                  </span>
                </span>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <a
                    href="https://chai-book-lm-orpin.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline inline-flex items-center gap-1"
                  >
                    Live Demo <ExternalLink size={11} />
                  </a>
                  <a
                    href="https://github.com/Ravindra-builds/ChaiBookLM"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Google NotebookLM-inspired knowledge engine. Multi-format document ingestion, semantic chunking pipeline, Qdrant vector database retrieval, and Cloudflare R2 object storage.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2 text-[10px] font-mono text-gray-400">
                <span className="px-2 py-0.5 rounded bg-white/5">Qdrant Vector DB</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Cloudflare R2</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Prisma</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Neon Postgres</span>
              </div>
            </div>

            <div className="p-3.5 rounded-xl bg-white/[0.02] border border-white/5 hover:border-white/10 transition-colors">
              <div className="flex items-baseline justify-between">
                <span className="text-sm font-bold text-white flex items-center gap-2">
                  ChatMate
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-blue-500/15 text-blue-300 border border-blue-500/20">
                    Real-Time Streaming
                  </span>
                </span>
                <div className="flex items-center gap-3 text-xs font-mono">
                  <a
                    href="https://chat-mate-jade-one.vercel.app/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-amber-400 hover:underline inline-flex items-center gap-1"
                  >
                    Live Demo <ExternalLink size={11} />
                  </a>
                  <a
                    href="https://github.com/Ravindra-builds/Chat-mate"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-400 hover:text-white"
                  >
                    GitHub
                  </a>
                </div>
              </div>
              <p className="text-xs text-gray-300 mt-1 leading-relaxed">
                Multi-LLM streaming platform with conversation branching, tool calling across OpenAI & Gemini, and zero-latency SSE delivery via Vercel AI SDK.
              </p>
              <div className="flex flex-wrap gap-1.5 mt-2 text-[10px] font-mono text-gray-400">
                <span className="px-2 py-0.5 rounded bg-white/5">Vercel AI SDK</span>
                <span className="px-2 py-0.5 rounded bg-white/5">React 19</span>
                <span className="px-2 py-0.5 rounded bg-white/5">Next.js 16</span>
              </div>
            </div>
          </div>
        </div>

        {/* Core Stack Matrix */}
        <div>
          <h3 className="text-xs font-mono uppercase tracking-widest text-gray-400 mb-2.5">
            Core Technical Matrix
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-2.5 text-xs font-mono">
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-amber-400 font-semibold block text-[11px] mb-1">AI & GenAI</span>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                Autonomous Agents, Vector RAG, Qdrant, Mem0, Vercel AI SDK, Tool Calling, OpenAI, Google Gemini.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-blue-400 font-semibold block text-[11px] mb-1">Backend & Systems</span>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                Node.js, TypeScript, PostgreSQL, Drizzle ORM, Prisma, MongoDB, Redis, REST & SSE, Cloudflare R2.
              </p>
            </div>
            <div className="p-3 rounded-lg bg-white/[0.02] border border-white/5">
              <span className="text-emerald-400 font-semibold block text-[11px] mb-1">Frontend & Core</span>
              <p className="text-gray-300 text-[11px] leading-relaxed">
                React 19, Next.js 16 (App Router), Tailwind CSS v4, Framer Motion, Radix UI primitives.
              </p>
            </div>
          </div>
        </div>

        {/* Footer Actions */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-3 pt-4 border-t border-white/10">
          <div className="flex items-center gap-2 w-full sm:w-auto">
            <a
              href="/Resume.pdf"
              download="Ravindra_Yadav_Resume.pdf"
              className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-amber-500 hover:bg-amber-400 text-black font-semibold text-xs transition-colors shadow-lg shadow-amber-500/20"
            >
              <Download size={14} />
              <span>Download Official Resume</span>
            </a>
            <button
              onClick={handleCopyEmail}
              className="inline-flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-xl border border-white/15 hover:bg-white/10 text-xs font-mono text-gray-200 transition-colors"
            >
              {copied ? <Check size={14} className="text-emerald-400" /> : <Copy size={14} />}
              <span>{copied ? "Copied!" : "Copy Email"}</span>
            </button>
          </div>

          <div className="flex items-center gap-3 text-gray-400 text-xs font-mono">
            <a
              href="mailto:yadavravindra7292@gmail.com"
              className="hover:text-white transition-colors"
            >
              {email}
            </a>
            <span>•</span>
            <span className="text-gray-500">Press Esc to close</span>
          </div>
        </div>
      </div>
    </div>
  );
}

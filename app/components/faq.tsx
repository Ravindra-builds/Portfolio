"use client";

import React, { useState } from "react";
import { ChevronDown, Sparkles, HelpCircle, ArrowUpRight } from "lucide-react";

export interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: "Client & Freelance" | "Engineering & Stack" | "Projects & Honors";
}

const faqs: FAQItem[] = [
  {
    id: "services-freelance",
    question: "What freelance services and technical solutions do you provide?",
    answer:
      "I build full-stack web applications and AI-powered products, from frontend interfaces to backend systems and AI integrations. My work includes Next.js applications, Node.js APIs, PostgreSQL-backed systems, RAG-based assistants, multi-LLM applications, real-time features, and privacy-focused AI tools. I can help turn an idea into a working product, from architecture and development to deployment.",
    category: "Client & Freelance",
  },
  {
    id: "fulltime-remote",
    question: "Are you open to internships, full-time roles, and remote opportunities?",
    answer:
      "Yes. I am open to relevant internships and entry-level opportunities in Full-Stack Development and AI Engineering, as well as selected freelance collaborations. I am based in Ranchi, India, and open to remote opportunities with suitable collaboration and scheduling arrangements.",
    category: "Client & Freelance",
  },
  {
    id: "skillfarm-explained",
    question: "What is SkillFarm and how does it work?",
    answer:
      "SkillFarm (skillfarm.in) is an AI-powered learning workspace that helps developers turn learning goals into practical projects. It creates personalized roadmaps with week-by-week tasks, curated learning resources, and guidance from six specialized AI mentors covering Frontend, Backend, AI, DevOps, Security, and System Design. Each learning journey leads toward building a final portfolio project. Its architecture combines specialized mentor routing, LLM integrations, personalized context, PostgreSQL, Drizzle ORM, and Redis.",
    category: "Projects & Honors",
  },
  {
    id: "martinovation-p2shield",
    question: "What did you build at Martinovation 2026?",
   answer:
    "As Team Lead, I led Team TechKnights in building P2Shield, which won 1st place among 52 teams at Martinovation 2026. P2Shield is a client-side LLM privacy firewall that identifies sensitive information in prompts, replaces it with context-preserving synthetic surrogates, and uses an AES-256-GCM-encrypted token vault for secure token mapping and bidirectional unmasking. It integrates with browser-based AI chats to help protect sensitive data before prompts reach external models.",
    category: "Projects & Honors",
  },
  {
    id: "production-ai-vs-wrapper",
    question: "What distinguishes your AI projects from simple API wrappers?",
    answer:
    "I focus on building complete workflows around AI capabilities rather than just connecting an API. For example, ChaiBookLM combines document and web content ingestion with chunking, embeddings, Qdrant vector retrieval, query rewriting, and source citations. ChatMate adds streaming, tool calling, and conversation branching, while SkillFarm uses specialized mentor routing and personalized learning context. The goal is to build useful workflows around AI capabilities, rather than simply adding another chat interface.",
    category: "Engineering & Stack",
  },
  {
    id: "onboarding-timeline",
    question: "How do you approach a new project or collaboration?",
    answer:
      "I start by understanding the problem, requirements, and expected outcome. Then I define the project scope, technical approach, deliverables, and milestones before estimating the timeline. I prefer clear communication, iterative development, and regular progress updates so the final product stays aligned with the original goals.",
    category: "Client & Freelance",
  },
];

export default function FAQ() {
  const [openId, setOpenId] = useState<string | null>("services-freelance");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section id="faq" className="py-20 md:py-28 border-t border-border/50 relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 relative z-10">
        {/* Section Header */}
        <div className="space-y-4 mb-12">
          <div className="flex items-center gap-2">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
              06 / Quick Answers
            </span>
            <span className="text-xs font-mono text-muted-foreground flex items-center gap-1">
              <HelpCircle size={13} className="text-amber-500" />
              Recruiter &amp; Client FAQ
            </span>
          </div>

          <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
            Frequently Answered{" "}
            <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 text-[1.12em] inline-block pr-2 mr-2">
              Questions
            </span>
            {" "}&amp; Hiring Details.
          </h2>

          <p className="text-base text-muted-foreground leading-relaxed max-w-2xl">
            Key details for technical recruiters, engineering leaders, and prospective freelance clients evaluating my systems, experience, and availability.
          </p>
        </div>

        {/* FAQ Accordion List */}
        <div className="space-y-3.5">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <div
                key={faq.id}
                className={`rounded-2xl sm:rounded-3xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? "bg-card border-amber-500/40 shadow-xs"
                    : "bg-card/70 border-border/80 hover:border-border hover:bg-card"
                }`}
              >
                <button
                  type="button"
                  onClick={() => toggleFAQ(faq.id)}
                  aria-expanded={isOpen}
                  className="w-full text-left p-5 sm:p-6 flex items-start justify-between gap-4 cursor-pointer select-none"
                >
                  <div className="flex items-start gap-3 sm:gap-4">
                    <span className="text-xs font-mono text-amber-500 font-semibold mt-0.5 shrink-0 px-2 py-0.5 rounded-md bg-amber-500/10 border border-amber-500/20">
                      0{idx + 1}
                    </span>
                    <span className="text-sm sm:text-base font-semibold text-foreground group-hover:text-amber-500 transition-colors">
                      {faq.question}
                    </span>
                  </div>

                  <span
                    className={`p-1.5 rounded-full border border-border/80 text-muted-foreground shrink-0 transition-transform duration-300 ${
                      isOpen ? "rotate-180 bg-amber-500/10 text-amber-500 border-amber-500/30" : "bg-muted"
                    }`}
                  >
                    <ChevronDown size={15} />
                  </span>
                </button>

                {isOpen && (
                  <div className="px-5 pb-5 sm:px-6 sm:pb-6 pt-0 text-sm text-muted-foreground leading-relaxed pl-12 sm:pl-16 border-t border-border/40 mt-1">
                    <p className="pt-3">{faq.answer}</p>
                    <div className="mt-3 flex items-center gap-2">
                      <span className="text-[10px] font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-2 py-0.5 rounded-md border border-amber-500/20">
                        {faq.category}
                      </span>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Action Prompt */}
        <div className="mt-8 p-6 rounded-3xl bg-card border border-border flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <h4 className="text-sm font-mono font-bold text-foreground">
              Have a custom project, contract, or full-time opening?
            </h4>
            <p className="text-xs text-muted-foreground">
              I reply to all direct engineering inquiries within 12 to 24 hours.
            </p>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-amber-500 text-stone-950 font-mono text-xs font-bold hover:bg-amber-400 transition-colors shrink-0 shadow-xs shadow-amber-500/20"
          >
            <span>Get in Touch</span>
            <ArrowUpRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}

"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import {
  Trophy,
  ExternalLink,
  Maximize2,
  X,
  ChevronLeft,
  ChevronRight,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub } from "react-icons/fa";

interface CertificateItem {
  id: string;
  title: string;
  issuer: string;
  date: string;
  badge: string;
  isWinner?: boolean;
  prize?: string;
  description: string;
  image: string;
  credentialUrl?: string;
  project?: {
    name: string;
    github: string;
    live?: string;
  };
}

const certificates: CertificateItem[] = [
  {
    id: "martinovation-2026",
    title: "1st Place Winner — Martinovation 2026",
    issuer: "Martinovation 24-Hour Hackathon",
    date: "October 2026",
    badge: "1st Place Winner",
    isWinner: true,
    prize: "₹20,000 Prize • 52 Teams",
    description:
      "Led my team in building P2Shield, an autonomous LLM privacy firewall proxy designed to detect and redact sensitive developer credentials, secrets, and client PII before queries reach external AI models. Won 1st place and ₹20,000 prize among 52 competing teams.",
    image: "/Martinovation_certificate.JPG.jpeg",
    project: {
      name: "P2Shield",
      github: "https://github.com/Ravindra-builds/P2Shield",
      live: "https://p2shield-theta.vercel.app/",
    },
  },
  {
    id: "genai-chaicode-2026",
    title: "GenAI with JavaScript 2026",
    issuer: "ChaiCode",
    date: "September 2026",
    badge: "Specialized Certification",
    description:
      "Completed ChaiCode's intensive GenAI with JavaScript course, mastering LLM integration, function calling, tool use, embeddings, and prompt engineering in JavaScript & TypeScript.",
    image: "/GenAI-Cohort.png",
    credentialUrl: "https://courses.chaicode.com/learn/certificate/14169589-270594",
  },
  {
    id: "gtec-internship-2025",
    title: "Full Stack Web Development Internship",
    issuer: "G TEC Computer Education",
    date: "Nov – Dec 2025",
    badge: "Internship Certificate",
    description:
      "Completed a hands-on Full-Stack Web Development internship. Engineered and presented Rentique, a house and property rental booking platform, demonstrating full CRUD workflows, database design, and responsive interfaces.",
    image: "/FullStack-internship.jpeg",
    project: {
      name: "Rentique",
      github: "https://github.com/Ravindra-builds/Rentique",
      live: "https://rentique-6l5t.onrender.com/",
    },
  },
];

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") setSelectedCert(null);
    };
    if (selectedCert) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [selectedCert]);

  const handleScroll = () => {
    if (!trackRef.current) return;
    const container = trackRef.current;
    const scrollLeft = container.scrollLeft;
    const firstCard = container.children[0] as HTMLElement;
    if (!firstCard) return;

    const cardWidth = firstCard.offsetWidth + 24;
    const index = Math.round(scrollLeft / cardWidth);
    const clamped = Math.min(Math.max(0, index), certificates.length - 1);
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
    scrollToIndex(Math.min(certificates.length - 1, activeIndex + 1));
  };

  return (
    <section id="achievements" className="py-20 md:py-28 border-t border-border/50 overflow-hidden">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 md:px-8">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-5 mb-10">
          <div className="space-y-4">
            <span className="text-xs font-mono uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-500/10 px-3 py-1 rounded-full border border-amber-500/25">
              03 / Recognition
            </span>
            <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-foreground">
              Verified{" "}
              <span className="font-serif italic font-normal text-amber-600 dark:text-amber-400 text-[1.12em] inline-block pr-2 mr-2">
                Honors
              </span>
              {" "}&amp; Certifications.
            </h2>
            <p className="text-sm text-muted-foreground leading-relaxed max-w-xl">
              Competitive hackathon achievements, verified technical credentials, and professional development milestones.
            </p>
          </div>

          {/* Prev / Next Arrows */}
          <div className="hidden sm:flex items-center gap-1.5 self-end">
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              aria-label="Previous certificate"
              className="p-2 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronLeft size={16} />
            </button>
            <button
              onClick={scrollNext}
              disabled={activeIndex === certificates.length - 1}
              aria-label="Next certificate"
              className="p-2 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed cursor-pointer"
            >
              <ChevronRight size={16} />
            </button>
          </div>
        </div>

        {/* Horizontal Scroll Track */}
        <div
          ref={trackRef}
          onScroll={handleScroll}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory no-scrollbar py-3 -mx-4 px-4 sm:-mx-6 sm:px-6 md:-mx-8 md:px-8 scroll-smooth"
        >
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className={`w-[88vw] sm:w-[580px] md:w-[720px] shrink-0 snap-center p-5 sm:p-7 rounded-3xl bg-card border flex flex-col md:flex-row items-start md:items-stretch gap-6 transition-all duration-300 hover:shadow-xl ${
                cert.isWinner
                  ? "border-amber-500/40 bg-gradient-to-r from-amber-500/[0.04] via-card to-card hover:border-amber-500/60"
                  : "border-border hover:border-border/80"
              }`}
            >
              {/* Image Preview on Left */}
              <div
                onClick={() => setSelectedCert(cert)}
                className="relative w-full md:w-72 h-48 sm:h-52 md:h-auto rounded-2xl overflow-hidden cursor-pointer bg-muted border border-border group/img shrink-0"
              >
                <Image
                  src={cert.image}
                  alt={cert.title}
                  fill
                  sizes="(max-width: 768px) 100vw, 320px"
                  className="object-cover group-hover/img:scale-103 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity flex items-center justify-center text-white text-xs font-mono gap-1.5">
                  <Maximize2 size={14} />
                  <span>Expand Certificate</span>
                </div>
              </div>

              {/* Details on Right */}
              <div className="flex-1 flex flex-col justify-between py-1">
                <div>
                  <div className="flex flex-wrap items-center justify-between gap-2 mb-2">
                    <span className="text-xs font-mono text-muted-foreground">
                      {cert.issuer} • {cert.date}
                    </span>
                    {cert.isWinner ? (
                      <span className="inline-flex items-center gap-1.5 text-xs font-mono font-semibold text-amber-700 dark:text-amber-300 px-2.5 py-0.5 rounded-full bg-amber-500/15 border border-amber-500/30">
                        <Trophy size={12} className="text-amber-500" />
                        {cert.prize}
                      </span>
                    ) : (
                      <span className="text-xs font-mono text-muted-foreground px-2 py-0.5 rounded-full bg-muted border border-border">
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  <h3 className="text-lg sm:text-xl font-bold text-foreground mb-2">
                    {cert.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-muted-foreground leading-relaxed">
                    {cert.description}
                  </p>
                </div>

                {/* Footer Action Links */}
                <div className="flex flex-wrap items-center gap-4 pt-4 mt-4 border-t border-border/60 text-xs font-medium">
                  {cert.project?.live && (
                    <a
                      href={cert.project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground hover:text-amber-500 transition-colors font-mono font-medium"
                    >
                      <span>Live Product</span>
                      <ArrowUpRight size={13} />
                    </a>
                  )}
                  {cert.project && (
                    <a
                      href={cert.project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-muted-foreground hover:text-foreground transition-colors font-mono"
                    >
                      <FaGithub size={13} />
                      <span>{cert.project.name} Repository</span>
                    </a>
                  )}
                  {cert.credentialUrl && (
                    <a
                      href={cert.credentialUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-1.5 text-foreground hover:text-amber-500 transition-colors font-mono"
                    >
                      <span>Verify Credential</span>
                      <ExternalLink size={12} />
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Dotted Visual Scroll Indicator & Navigation Bar */}
        <div className="flex items-center justify-between pt-6 mt-4">
          <span className="text-xs font-mono text-muted-foreground">
            0{activeIndex + 1} / 0{certificates.length} Credentials
          </span>

          {/* Interactive Dotted Track */}
          <div className="flex items-center gap-2">
            {certificates.map((c, i) => (
              <button
                key={c.id}
                onClick={() => scrollToIndex(i)}
                aria-label={`Go to certificate ${i + 1}`}
                className={`transition-all duration-300 rounded-full cursor-pointer ${
                  i === activeIndex
                    ? "w-7 sm:w-9 h-2 bg-amber-500 shadow-sm shadow-amber-500/40"
                    : "w-2 h-2 bg-border hover:bg-muted-foreground/50"
                }`}
              />
            ))}
          </div>

          <div className="flex sm:hidden items-center gap-1">
            <button
              onClick={scrollPrev}
              disabled={activeIndex === 0}
              aria-label="Previous certificate"
              className="p-1.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronLeft size={14} />
            </button>
            <button
              onClick={scrollNext}
              disabled={activeIndex === certificates.length - 1}
              aria-label="Next certificate"
              className="p-1.5 rounded-full border border-border bg-card hover:bg-muted text-foreground transition-all disabled:opacity-30 disabled:cursor-not-allowed"
            >
              <ChevronRight size={14} />
            </button>
          </div>
          <span className="hidden sm:inline-block text-xs font-mono text-muted-foreground">
            Click dots to jump to credential
          </span>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md"
          onClick={() => setSelectedCert(null)}
        >
          <div
            className="relative max-w-3xl w-full max-h-[90vh] bg-card p-4 rounded-2xl border border-border"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setSelectedCert(null)}
              className="absolute top-6 right-6 p-2 rounded-full bg-background/80 hover:bg-background border border-border text-foreground transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={18} />
            </button>

            <div className="relative w-full h-[60vh] rounded-xl overflow-hidden bg-muted">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                sizes="(max-width: 1024px) 100vw, 800px"
                className="object-contain"
              />
            </div>

            <div className="mt-4 flex items-center justify-between">
              <div>
                <h4 className="font-bold text-foreground text-sm sm:text-base">
                  {selectedCert.title}
                </h4>
                <p className="text-xs text-muted-foreground font-mono">
                  {selectedCert.issuer} • {selectedCert.date}
                </p>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}

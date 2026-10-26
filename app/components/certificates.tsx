"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import {
  Trophy,
  Award,
  ExternalLink,
  Maximize2,
  X,
  Calendar,
  CheckCircle2,
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
  credentialId?: string;
  credentialUrl?: string;
  project?: {
    name: string;
    github: string;
  };
  accentColor: "gold" | "purple" | "blue";
}

const certificates: CertificateItem[] = [
  {
    id: "martinovation-2026",
    title: "1st Place – Martinovation 2026",
    issuer: "Martinovation 24-Hour Hackathon",
    date: "October 2026",
    badge: "1st Place Winner",
    isWinner: true,
    prize: "₹20,000 Prize • 52 Teams",
    description:
      "Led my team in building P2Shield, an LLM privacy firewall designed to detect and redact sensitive information before it reaches AI models, with controls for reviewing or ignoring detected information. Won 1st place and a ₹20,000 prize.",
    image: "/Martinovation_certificate.JPG.jpeg",
    project: {
      name: "P2Shield",
      github: "https://github.com/Ravindra-builds/P2Shield",
    },
    accentColor: "gold",
  },
  {
    id: "genai-chaicode-2026",
    title: "GenAI with JavaScript 2026",
    issuer: "ChaiCode",
    date: "September 2026",
    badge: "Course Certification",
    description:
      "Completed ChaiCode's GenAI with JavaScript course, building my understanding of integrating generative AI capabilities into JavaScript applications.",
    image: "/GenAI-Cohort.png",
    credentialId: "14169589-270594",
    credentialUrl: "https://courses.chaicode.com/learn/certificate/14169589-270594",
    accentColor: "purple",
  },
  {
    id: "gtec-internship-2025",
    title: "Full Stack Web Development Internship",
    issuer: "G TEC Computer Education",
    date: "Nov 3 – Dec 8, 2025",
    badge: "Internship Certificate",
    description:
      "Completed a Full Stack Web Development internship, applying web development concepts through practical project work. Presented Rentique, a property rental platform, as part of my development work.",
    image: "/FullStack-internship.jpeg",
    project: {
      name: "Rentique",
      github: "https://github.com/Ravindra-builds/Rentique",
    },
    accentColor: "blue",
  },
];

const Certificates = () => {
  const [selectedCert, setSelectedCert] = useState<CertificateItem | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setSelectedCert(null);
      }
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

  return (
    <section
      id="achievements"
      className="py-24 bg-gray-50/60 dark:bg-gray-900/40 transition-colors relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center mb-16 slideDown">
          <span className="text-xs font-semibold uppercase tracking-wider text-amber-600 dark:text-amber-400 bg-amber-50 dark:bg-amber-500/10 px-3.5 py-1 rounded-full border border-amber-200 dark:border-amber-500/20">
            Honors & Credentials
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-3 mb-4 tracking-tight">
            Certifications & Achievements
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-amber-500 via-orange-500 to-purple-500 mx-auto rounded-full mb-4"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Recognized hackathon achievements, verified technical credentials, and professional software development milestones.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 items-stretch">
          {certificates.map((cert) => {
            const isWinner = cert.isWinner;

            return (
              <div
                key={cert.id}
                className={`group relative rounded-2xl flex flex-col transition-all duration-300 hover:-translate-y-1.5 hover:shadow-2xl ${
                  isWinner
                    ? "bg-gradient-to-b from-amber-500/[0.07] via-white to-white dark:from-amber-500/[0.08] dark:via-gray-900 dark:to-gray-900 border-2 border-amber-400/60 dark:border-amber-500/50 shadow-xl shadow-amber-500/10"
                    : "bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 hover:border-gray-300 dark:hover:border-gray-700 shadow-md"
                }`}
              >
                {/* Winner Ribbon / Badge */}
                {isWinner && (
                  <div className="absolute -top-3.5 left-6 z-20">
                    <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-gradient-to-r from-amber-500 to-orange-500 text-white shadow-md shadow-amber-500/30">
                      <Trophy size={13} className="text-yellow-200" />
                      1st Place Winner
                    </span>
                  </div>
                )}

                {/* Certificate Preview Image (Clickable for Modal) */}
                <div
                  onClick={() => setSelectedCert(cert)}
                  className="relative h-52 sm:h-56 m-3 rounded-xl overflow-hidden cursor-pointer bg-gray-100 dark:bg-gray-800 border border-gray-200/80 dark:border-gray-700/80 group/img"
                  role="button"
                  tabIndex={0}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      setSelectedCert(cert);
                    }
                  }}
                  aria-label={`View larger certificate: ${cert.title}`}
                >
                  <Image
                    src={cert.image}
                    alt={`${cert.title} certificate`}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
                    className="object-cover object-top transition-transform duration-500 group-hover/img:scale-105"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover/img:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2 text-white font-medium text-xs backdrop-blur-[2px]">
                    <Maximize2 size={16} />
                    <span>Click to enlarge</span>
                  </div>
                </div>

                {/* Card Body */}
                <div className="p-6 pt-2 flex flex-col flex-1">
                  {/* Meta: Issuer & Date */}
                  <div className="flex items-center justify-between text-xs text-gray-500 dark:text-gray-400 mb-2.5">
                    <span className="font-medium text-gray-700 dark:text-gray-300">
                      {cert.issuer}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {cert.date}
                    </span>
                  </div>

                  {/* Title */}
                  <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2 leading-snug">
                    {cert.title}
                  </h3>

                  {/* Winner Prize Banner if applicable */}
                  {cert.prize && (
                    <div className="mb-3 px-2.5 py-1 rounded-md bg-amber-50 dark:bg-amber-500/10 border border-amber-200 dark:border-amber-500/20 text-xs font-semibold text-amber-800 dark:text-amber-300 inline-flex items-center gap-1.5 w-fit">
                      <CheckCircle2 size={13} className="text-amber-600 dark:text-amber-400" />
                      {cert.prize}
                    </div>
                  )}

                  {/* Description */}
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mb-5 flex-1">
                    {cert.description}
                  </p>

                  {/* Credential ID if present */}
                  {cert.credentialId && (
                    <div className="mb-4 text-[11px] font-mono text-gray-500 dark:text-gray-400 bg-gray-50 dark:bg-gray-800/60 px-2.5 py-1 rounded border border-gray-200/80 dark:border-gray-800 w-fit">
                      ID: {cert.credentialId}
                    </div>
                  )}

                  {/* Action Links */}
                  <div className="pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between mt-auto">
                    {/* Lightbox Trigger */}
                    <button
                      onClick={() => setSelectedCert(cert)}
                      className="text-xs font-medium text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white inline-flex items-center gap-1 transition-colors"
                    >
                      <Maximize2 size={13} />
                      Preview
                    </button>

                    {/* External Link or Project Link */}
                    {cert.credentialUrl && (
                      <a
                        href={cert.credentialUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-blue-600 dark:text-blue-400 hover:text-blue-700 dark:hover:text-blue-300 inline-flex items-center gap-1.5 transition-colors"
                      >
                        Verify Credential
                        <ExternalLink size={13} />
                      </a>
                    )}

                    {cert.project && (
                      <a
                        href={cert.project.github}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-xs font-semibold text-gray-800 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 inline-flex items-center gap-1.5 transition-colors"
                      >
                        <FaGithub size={14} />
                        {cert.project.name}
                        <ExternalLink size={12} />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Lightbox / Modal for enlarged certificate */}
      {selectedCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
          onClick={() => setSelectedCert(null)}
          role="dialog"
          aria-modal="true"
          aria-label={selectedCert.title}
        >
          <div
            className="relative w-full max-w-4xl bg-white dark:bg-gray-900 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 flex flex-col max-h-[90vh]"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3">
                <Award size={20} className="text-amber-500" />
                <div>
                  <h3 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white leading-tight">
                    {selectedCert.title}
                  </h3>
                  <span className="text-xs text-gray-500 dark:text-gray-400">
                    {selectedCert.issuer} • {selectedCert.date}
                  </span>
                </div>
              </div>
              <button
                onClick={() => setSelectedCert(null)}
                className="p-1.5 rounded-full text-gray-500 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                aria-label="Close modal"
              >
                <X size={20} />
              </button>
            </div>

            {/* Modal Image Area */}
            <div className="relative flex-1 min-h-[300px] sm:min-h-[450px] bg-gray-950 flex items-center justify-center p-2">
              <Image
                src={selectedCert.image}
                alt={selectedCert.title}
                fill
                className="object-contain p-2"
                priority
              />
            </div>

            {/* Modal Footer */}
            <div className="px-6 py-3 bg-gray-50 dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800 flex flex-wrap items-center justify-between gap-3 text-xs">
              <p className="text-gray-600 dark:text-gray-400 max-w-lg line-clamp-1">
                {selectedCert.description}
              </p>
              <div className="flex items-center gap-3 ml-auto">
                {selectedCert.credentialUrl && (
                  <a
                    href={selectedCert.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-700 text-white font-medium transition-colors"
                  >
                    <span>Verify Credential</span>
                    <ExternalLink size={12} />
                  </a>
                )}
                {selectedCert.project && (
                  <a
                    href={selectedCert.project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-200 dark:bg-gray-800 hover:bg-gray-300 dark:hover:bg-gray-700 text-gray-900 dark:text-white font-medium transition-colors"
                  >
                    <FaGithub size={13} />
                    <span>View {selectedCert.project.name}</span>
                  </a>
                )}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Certificates;
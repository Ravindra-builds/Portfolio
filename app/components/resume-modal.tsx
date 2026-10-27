"use client";

import React, { useEffect } from "react";
import { X, Download, ExternalLink, FileText } from "lucide-react";

interface ResumeModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export function ResumeModal({ isOpen, onClose }: ResumeModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    if (isOpen) {
      window.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "unset";
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-5 md:p-8 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="resume-title"
    >
      <div
        className="relative max-w-4xl w-full max-h-[92vh] bg-card border border-border rounded-2xl shadow-2xl flex flex-col overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Top Header Bar */}
        <div className="flex items-center justify-between px-5 py-3.5 border-b border-border bg-muted/30">
          <div className="flex items-center gap-2.5">
            <div className="p-2 rounded-xl bg-amber-500/15 border border-amber-500/25 text-amber-500">
              <FileText size={16} />
            </div>
            <div>
              <h3 id="resume-title" className="text-sm font-bold text-foreground font-mono">
                Ravindra_Yadav_Resume.pdf
              </h3>
              <p className="text-[11px] text-muted-foreground font-mono">
                Full-Stack &amp; Generative AI Systems Engineer
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <a
              href="/Resume.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl border border-border bg-card hover:bg-muted text-xs font-mono text-muted-foreground hover:text-foreground transition-colors"
              title="Open in new browser tab"
            >
              <ExternalLink size={12} />
              <span>Full Tab</span>
            </a>

            <a
              href="/Resume.pdf"
              download="Ravindra_Yadav_Resume.pdf"
              className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-foreground text-background text-xs font-mono font-medium hover:opacity-90 transition-opacity"
            >
              <Download size={13} />
              <span>Download PDF</span>
            </a>

            <button
              onClick={onClose}
              className="p-1.5 rounded-xl border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors ml-1"
              aria-label="Close resume viewer"
            >
              <X size={17} />
            </button>
          </div>
        </div>

        {/* Embedded PDF Viewer */}
        <div className="w-full h-[75vh] p-2 sm:p-3 bg-muted/40">
          <iframe
            src="/Resume.pdf#toolbar=1"
            className="w-full h-full rounded-xl bg-white border border-border/80 shadow-inner"
            title="Ravindra Yadav Resume Preview"
          />
        </div>
      </div>
    </div>
  );
}

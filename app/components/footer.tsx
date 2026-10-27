import React from "react";
import { ArrowUp } from "lucide-react";
import { getLastUpdated } from "../lib/last-updated";

export default function Footer() {
  const lastUpdated = getLastUpdated();

  return (
    <footer className="py-12 border-t border-border/40 text-xs font-mono text-muted-foreground">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 md:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-2">
          <span>&copy; {new Date().getFullYear()} Ravindra Yadav.</span>
          <span>•</span>
          <span>Ranchi, India (IST)</span>
        </div>

        <div className="flex items-center gap-4">
          <span>Built with Next.js 16 &amp; Tailwind CSS v4</span>
          <a
            href="#hero"
            aria-label="Back to top"
            className="p-1.5 rounded-full border border-border hover:bg-muted text-muted-foreground hover:text-foreground transition-colors"
          >
            <ArrowUp size={13} />
          </a>
        </div>
      </div>
    </footer>
  );
}

"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Menu,
  X,
  FileText,
  Search,
  ArrowUpRight,
} from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import { CommandMenu } from "./command-menu";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Projects", href: "#projects" },
  { name: "Honors", href: "#achievements" },
  { name: "Journey", href: "#journey" },
  { name: "Stack", href: "#stack" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 30) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // Update active section based on scroll position
      const sections = ["about", "projects", "achievements", "journey", "stack", "blog", "contact"];
      const scrollPosition = window.scrollY + 220;

      for (const section of sections) {
        const el = document.getElementById(section);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPosition >= top && scrollPosition < top + height) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      {/* Dynamic Floating & Morphing Navigation Header */}
      <header
        className={`fixed top-0 left-0 right-0 z-50 flex justify-center transition-all duration-300 ease-out pointer-events-none ${
          isScrolled ? "pt-2.5 sm:pt-3.5" : "pt-5 sm:pt-7"
        }`}
      >
        <nav
          className={`pointer-events-auto transition-all duration-300 ease-out flex items-center justify-between w-[95%] sm:w-[92%] max-w-5xl ${
            isScrolled
              ? "px-4 sm:px-6 py-2.5 rounded-full bg-background/90 dark:bg-[#0E0F12]/90 backdrop-blur-xl border border-border shadow-lg shadow-black/5 dark:shadow-black/30"
              : "px-5 sm:px-7 py-3.5 rounded-2xl bg-background/60 dark:bg-[#0E0F12]/60 backdrop-blur-md border border-border/50"
          }`}
          aria-label="Main Navigation"
        >
          {/* Brand Mark with Editorial Serif Accent */}
          <a
            href="#hero"
            className="flex items-baseline gap-1.5 group mr-3 sm:mr-6 shrink-0 select-none"
          >
            <span className="font-serif italic text-lg sm:text-xl text-foreground group-hover:text-amber-500 transition-colors">
              Ravindra
            </span>
            <span className="font-mono text-[10px] text-amber-500 uppercase tracking-widest font-semibold border border-amber-500/30 px-1.5 py-0.5 rounded bg-amber-500/10">
              AI.SYS
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => {
              const isActive = activeSection === link.href.replace("#", "");
              return (
                <a
                  key={link.name}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-full text-xs font-mono transition-all ${
                    isActive
                      ? "bg-amber-500/15 text-amber-800 dark:text-amber-300 font-semibold border border-amber-500/30"
                      : "text-muted-foreground hover:text-foreground hover:bg-muted"
                  }`}
                >
                  {link.name}
                </a>
              );
            })}
          </div>

          {/* Right Actions: Resume & Theme */}
          <div className="flex items-center gap-2 ml-auto sm:ml-4">
            <a
              href="/Resume.pdf"
              download="Ravindra_Yadav_Resume.pdf"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-medium text-amber-800 dark:text-amber-300 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 transition-colors"
            >
              <span>Resume</span>
              <ArrowUpRight size={13} className="text-amber-500" />
            </a>

            <button
              onClick={() => setIsCommandOpen(true)}
              className="p-2 text-muted-foreground hover:text-foreground rounded-full hover:bg-muted transition-colors"
              aria-label="Open command palette"
              title="Search (⌘K)"
            >
              <Search size={15} />
            </button>

            <ModeToggle />

            {/* Mobile Menu Toggle Button */}
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 md:hidden text-muted-foreground hover:text-foreground rounded-full"
              aria-label="Toggle menu"
            >
              {isMobileMenuOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer Dropdown */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-50 md:hidden p-4 rounded-2xl bg-card/95 backdrop-blur-2xl border border-border shadow-2xl space-y-3"
          >
            <div className="grid grid-cols-2 gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-3 py-2 rounded-xl text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted transition-colors font-mono"
                >
                  {link.name}
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-border flex items-center justify-between">
              <a
                href="/Resume.pdf"
                download="Ravindra_Yadav_Resume.pdf"
                className="inline-flex items-center gap-1.5 text-xs font-medium text-amber-500 font-mono"
              >
                <span>Download Resume (PDF)</span>
                <ArrowUpRight size={13} />
              </a>

              <div className="flex items-center gap-3 text-muted-foreground">
                <a
                  href="https://github.com/Ravindra-builds"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="GitHub"
                >
                  <FaGithub size={16} />
                </a>
                <a
                  href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LinkedIn"
                >
                  <FaLinkedin size={16} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Global Command Palette */}
      <CommandMenu isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
}

"use client";

import React, { useState, useEffect, useMemo, useCallback } from "react";
import {
  Search,
  ExternalLink,
  Copy,
  Check,
  Download,
  Moon,
  Sun,
  Briefcase,
  Code2,
  BookOpen,
  Mail,
  User,
  Compass,
  Trophy,
  X,
} from "lucide-react";
import { useTheme } from "next-themes";

interface CommandMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

export function CommandMenu({ isOpen, onClose }: CommandMenuProps) {
  const [query, setQuery] = useState("");
  const [copied, setCopied] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (isOpen) {
          onClose();
        } else {
          window.dispatchEvent(new CustomEvent("toggle-command-menu"));
        }
      }
      if (e.key === "Escape" && isOpen) {
        onClose();
      }
    };
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen, onClose]);

  const email = "yadavravindra7292@gmail.com";

  const handleCopyEmail = useCallback(() => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => {
      setCopied(false);
      onClose();
    }, 1500);
  }, [email, onClose]);

  const items = useMemo(() => {
    return [
      {
        section: "Navigation",
        id: "nav-about",
        title: "About Me",
        category: "Jump to section",
        icon: <User size={16} className="text-amber-500" />,
        action: () => {
          window.location.hash = "about";
          onClose();
        },
      },
      {
        section: "Navigation",
        id: "nav-projects",
        title: "Featured Projects (SkillFarm, P2Shield, ChaiBookLM...)",
        category: "Jump to section",
        icon: <Briefcase size={16} className="text-amber-500" />,
        action: () => {
          window.location.hash = "projects";
          onClose();
        },
      },
      {
        section: "Navigation",
        id: "nav-achievements",
        title: "Honors & Certifications (Martinovation 1st Place, ChaiCode)",
        category: "Jump to section",
        icon: <Trophy size={16} className="text-amber-500" />,
        action: () => {
          window.location.hash = "achievements";
          onClose();
        },
      },
      {
        section: "Navigation",
        id: "nav-journey",
        title: "Engineering Journey & Milestones",
        category: "Jump to section",
        icon: <Compass size={16} className="text-amber-500" />,
        action: () => {
          window.location.hash = "journey";
          onClose();
        },
      },
      {
        section: "Navigation",
        id: "nav-stack",
        title: "Technical Stack & Capabilities",
        category: "Jump to section",
        icon: <Code2 size={16} className="text-amber-500" />,
        action: () => {
          window.location.hash = "stack";
          onClose();
        },
      },
      {
        section: "Navigation",
        id: "nav-blog",
        title: "Articles & Technical Writing",
        category: "Jump to section",
        icon: <BookOpen size={16} className="text-amber-500" />,
        action: () => {
          window.location.hash = "blog";
          onClose();
        },
      },
      {
        section: "Navigation",
        id: "nav-contact",
        title: "Contact & Direct Ingestion",
        category: "Jump to section",
        icon: <Mail size={16} className="text-amber-500" />,
        action: () => {
          window.location.hash = "contact";
          onClose();
        },
      },
      {
        section: "Actions",
        id: "act-copy-email",
        title: copied ? "Copied Email!" : "Copy Email Address",
        category: "Action",
        icon: copied ? <Check size={16} className="text-emerald-500" /> : <Copy size={16} className="text-amber-500" />,
        action: handleCopyEmail,
      },
      {
        section: "Actions",
        id: "act-resume",
        title: "Download Resume (PDF)",
        category: "Action",
        icon: <Download size={16} className="text-amber-500" />,
        action: () => {
          const a = document.createElement("a");
          a.href = "/Resume.pdf";
          a.download = "Ravindra_Yadav_Resume.pdf";
          a.click();
          onClose();
        },
      },
      {
        section: "Theme",
        id: "theme-toggle",
        title: theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode",
        category: "Theme",
        icon: theme === "dark" ? <Sun size={16} className="text-amber-400" /> : <Moon size={16} className="text-amber-500" />,
        action: () => {
          setTheme(theme === "dark" ? "light" : "dark");
          onClose();
        },
      },
      {
        section: "Socials",
        id: "soc-github",
        title: "Visit GitHub Profile",
        category: "External link",
        icon: <ExternalLink size={16} className="text-muted-foreground" />,
        action: () => {
          window.open("https://github.com/Ravindra-builds", "_blank");
          onClose();
        },
      },
      {
        section: "Socials",
        id: "soc-linkedin",
        title: "Connect on LinkedIn",
        category: "External link",
        icon: <ExternalLink size={16} className="text-muted-foreground" />,
        action: () => {
          window.open("https://www.linkedin.com/in/ravindra-yadav-778498390/", "_blank");
          onClose();
        },
      },
      {
        section: "Socials",
        id: "soc-hashnode",
        title: "Read Blog on Hashnode",
        category: "External link",
        icon: <ExternalLink size={16} className="text-muted-foreground" />,
        action: () => {
          window.open("https://rvindra.hashnode.dev", "_blank");
          onClose();
        },
      },
    ];
  }, [copied, handleCopyEmail, onClose, setTheme, theme]);

  const filteredItems = useMemo(() => {
    if (!query.trim()) return items;
    const q = query.toLowerCase();
    return items.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q) ||
        item.section.toLowerCase().includes(q)
    );
  }, [items, query]);

  const safeSelectedIndex = Math.min(selectedIndex, Math.max(0, filteredItems.length - 1));

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev + 1) % (filteredItems.length || 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setSelectedIndex((prev) => (prev - 1 + filteredItems.length) % (filteredItems.length || 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      if (filteredItems[safeSelectedIndex]) {
        filteredItems[safeSelectedIndex].action();
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-start justify-center pt-20 px-4">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/60 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div
        className="relative w-full max-w-xl rounded-2xl bg-card text-foreground border border-border shadow-2xl overflow-hidden z-10 transition-all transform animate-in fade-in zoom-in-95 duration-150"
        onKeyDown={handleKeyDown}
      >
        {/* Search Input Bar */}
        <div className="flex items-center px-4 py-3.5 border-b border-border gap-3">
          <Search size={18} className="text-amber-500 shrink-0" />
          <input
            type="text"
            placeholder="Type a command, jump to section, or action..."
            value={query}
            onChange={(e) => {
              setQuery(e.target.value);
              setSelectedIndex(0);
            }}
            className="w-full bg-transparent text-sm text-foreground placeholder-muted-foreground focus:outline-none"
            autoFocus
          />
          <button
            onClick={onClose}
            className="p-1 rounded-md text-muted-foreground hover:text-foreground"
            aria-label="Close command palette"
          >
            <X size={16} />
          </button>
        </div>

        {/* Results List */}
        <div className="max-h-80 overflow-y-auto p-2 space-y-1">
          {filteredItems.length === 0 ? (
            <div className="py-8 text-center text-sm text-muted-foreground">
              No matching commands or sections found.
            </div>
          ) : (
            filteredItems.map((item, index) => {
              const isSelected = index === safeSelectedIndex;
              return (
                <button
                  key={item.id}
                  onClick={item.action}
                  onMouseEnter={() => setSelectedIndex(index)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-left text-sm transition-colors ${
                    isSelected
                      ? "bg-amber-500/15 text-amber-800 dark:text-amber-300 font-medium border border-amber-500/25"
                      : "text-foreground/90 hover:bg-muted"
                  }`}
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="shrink-0">{item.icon}</span>
                    <span className="truncate">{item.title}</span>
                  </div>
                  <span className="text-[11px] font-mono text-muted-foreground shrink-0 ml-2">
                    {item.category}
                  </span>
                </button>
              );
            })
          )}
        </div>

        {/* Footer shortcuts */}
        <div className="px-4 py-2.5 bg-muted/50 border-t border-border flex items-center justify-between text-[11px] font-mono text-muted-foreground">
          <div className="flex items-center gap-3">
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-border text-[10px]">↑</kbd>
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-border text-[10px] ml-0.5">↓</kbd> navigate
            </span>
            <span>
              <kbd className="px-1.5 py-0.5 rounded bg-card border border-border text-[10px]">↵</kbd> select
            </span>
          </div>
          <span>
            <kbd className="px-1.5 py-0.5 rounded bg-card border border-border text-[10px]">esc</kbd> close
          </span>
        </div>
      </div>
    </div>
  );
}

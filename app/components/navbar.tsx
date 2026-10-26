"use client";

import { useState, useEffect } from "react";
import { Menu, X, Mail, Search } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";
import { CommandMenu } from "./command-menu";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isCommandOpen, setIsCommandOpen] = useState(false);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const totalScroll = document.documentElement.scrollHeight - document.documentElement.clientHeight;
      if (totalScroll > 0) {
        const currentProgress = (window.scrollY / totalScroll) * 100;
        setScrollProgress(currentProgress);
      }
    };

    const handleToggleCommand = () => {
      setIsCommandOpen((prev) => !prev);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("toggle-command-menu", handleToggleCommand);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("toggle-command-menu", handleToggleCommand);
    };
  }, []);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Achievements", href: "#achievements" },
    { name: "Journey", href: "#journey" },
    { name: "Blog", href: "#blog" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <>
      <nav className="fixed w-full z-40 transition-colors">
        {/* Real-time Reading/Scroll Progress Bar */}
        <div
          className="absolute top-0 left-0 h-[2.5px] bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transition-all duration-150 z-50"
          style={{ width: `${scrollProgress}%` }}
        />

        {/* Glass layer — blur + saturation */}
        <div className="absolute inset-0 bg-white/75 dark:bg-black/50 backdrop-blur-2xl backdrop-saturate-150 border-b border-gray-200/60 dark:border-white/10" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Brand Logo - clean aligned baseline, no awkward floating */}
            <div className="flex-shrink-0">
              <a
                href="#hero"
                className="text-xl font-extrabold tracking-tight inline-flex items-baseline group"
              >
                <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 dark:from-blue-400 dark:via-indigo-300 dark:to-purple-400 bg-clip-text text-transparent">
                  Ravindra
                </span>
                <span className="text-blue-600 dark:text-blue-400 font-mono text-base font-semibold ml-0.5 group-hover:translate-x-0.5 transition-transform">
                  .dev
                </span>
              </a>
            </div>

            {/* Desktop Navigation Links — spacious floating capsule */}
            <div className="hidden lg:flex items-center">
              <div className="flex items-center gap-1 xl:gap-1.5 p-1 rounded-full bg-gray-100/70 dark:bg-gray-900/60 border border-gray-200/60 dark:border-gray-800/60 backdrop-blur-md">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.href}
                    className="px-3.5 py-1.5 rounded-full text-xs xl:text-sm font-medium text-gray-600 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-white dark:hover:bg-gray-800 shadow-none hover:shadow-sm transition-all duration-200"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            </div>

            {/* Quick Actions & Socials */}
            <div className="hidden md:flex items-center space-x-2.5">
              {/* Command Palette Trigger Button */}
              <button
                onClick={() => setIsCommandOpen(true)}
                className="flex items-center gap-2 px-3 py-1.5 text-xs text-gray-500 dark:text-gray-400 bg-gray-100 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700/80 rounded-full border border-gray-200 dark:border-gray-700 transition-colors"
                aria-label="Open command palette"
              >
                <Search size={13} />
                <span className="hidden xl:inline">Search</span>
                <kbd className="px-1.5 py-0.5 rounded bg-white dark:bg-gray-900 text-[10px] font-mono border border-gray-300 dark:border-gray-700 text-gray-600 dark:text-gray-300">
                  ⌘K
                </kbd>
              </button>

              <div className="h-4 w-px bg-gray-200 dark:bg-gray-800 my-auto" />

              <a
                href="https://github.com/Ravindra-builds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1.5 hover:scale-110"
              >
                <FaGithub size={17} />
              </a>
              <a
                href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1.5 hover:scale-110"
              >
                <FaLinkedin size={17} />
              </a>
              <a
                href="mailto:yadavravindra7292@gmail.com"
                aria-label="Send Email"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors p-1.5 hover:scale-110"
              >
                <Mail size={17} />
              </a>

              <ModeToggle />
            </div>

            {/* Mobile Actions */}
            <div className="flex items-center gap-2 md:hidden">
              <button
                onClick={() => setIsCommandOpen(true)}
                className="p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-800"
                aria-label="Search or command menu"
              >
                <Search size={18} />
              </button>
              <ModeToggle />
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="inline-flex items-center justify-center p-2 rounded-lg text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-800 focus:outline-none"
                aria-label="Toggle mobile menu"
              >
                {isOpen ? <X size={22} /> : <Menu size={22} />}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {isOpen && (
          <div className="relative md:hidden border-t border-gray-200/50 dark:border-white/10 bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl shadow-xl">
            <div className="px-3 pt-2 pb-3 space-y-1">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-white/5"
                >
                  {link.name}
                </a>
              ))}
            </div>
            <div className="pt-3 pb-4 border-t border-gray-200 dark:border-gray-800 flex justify-center space-x-6">
              <a
                href="https://github.com/Ravindra-builds"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub Profile"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaGithub size={22} />
              </a>
              <a
                href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn Profile"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <FaLinkedin size={22} />
              </a>
              <a
                href="mailto:yadavravindra7292@gmail.com"
                aria-label="Email"
                className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              >
                <Mail size={22} />
              </a>
            </div>
          </div>
        )}
      </nav>

      {/* Global Command Menu */}
      <CommandMenu isOpen={isCommandOpen} onClose={() => setIsCommandOpen(false)} />
    </>
  );
};

export default Navbar;
"use client";
import { useState } from "react";
import { Menu, X, Mail } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { ModeToggle } from "./mode-toggle";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Projects", href: "#projects" },
    { name: "Blog", href: "#blog" },
    { name: "Focus", href: "#focus" },
    { name: "Contact", href: "#contact" },
  ];

  return (
    <nav className="fixed w-full z-50  border-white/25">
      {/* Glass layer — blur + saturation, sits behind content */}
      <div className="absolute inset-0 bg-white/40 dark:bg-black/15 backdrop-blur-3xl backdrop-saturate-150" />

      {/* Sheen — soft light catching the top edge, like real glass */}
      <div className="absolute inset-0 bg-gradient-to-b from-white/25 via-white/5 to-transparent dark:from-white/10 dark:via-white/[0.02] dark:to-transparent pointer-events-none" />

      {/* Rim highlight — the thin bright line right at the top edge */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/60 dark:via-white/25 to-transparent" />

      {/* Depth shadow
      <div className="absolute inset-0 shadow-[0_8px_32px_rgba(0,0,0,0.06)] dark:shadow-[0_8px_32px_rgba(0,0,0,0.3)] pointer-events-none" /> */}

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <a
              href="#hero"
              className="text-xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-500 bg-clip-text text-transparent"
            >
              Ravindra.dev
            </a>
          </div>

          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              {navLinks.map((link) => (
                <a
                  key={link.name}
                  href={link.href}
                  className="px-3 py-2 rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/5 transition-all duration-300"
                >
                  {link.name}
                </a>
              ))}
            </div>
          </div>

          <div className="hidden md:flex items-center space-x-4">
            <a
              href="https://github.com/Ravindra-builds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaGithub size={20} className="hover:scale-110" />
            </a>
            <a
              href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <FaLinkedin size={20} className="hover:scale-110" />
            </a>
            <a
              href="mailto:yadavravindra7292@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
            >
              <Mail size={20} className="hover:scale-110" />
            </a>
            <ModeToggle />
          </div>

          <div className="flex items-center gap-3 md:hidden">
            <ModeToggle />
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/5 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="relative md:hidden border-t border-white/25 dark:border-white/10">
          <div className="absolute inset-0 bg-white/15 dark:bg-black/20 backdrop-blur-2xl backdrop-saturate-150 -z-10" />

          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((link) => (
              <a
                key={link.name}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 dark:text-gray-300 hover:text-gray-900 dark:hover:text-white hover:bg-gray-900/5 dark:hover:bg-white/5"
              >
                {link.name}
              </a>
            ))}
          </div>
          <div className="pt-4 pb-4 border-t border-white/25 dark:border-white/10 flex justify-center space-x-6">
            <a
              href="https://github.com/Ravindra-builds"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaGithub size={24} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <FaLinkedin size={24} />
            </a>
            <a
              href="mailto:yadavravindra7292@gmail.com"
              className="text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
            >
              <Mail size={24} />
            </a>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

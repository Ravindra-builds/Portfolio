import React from "react";
import { Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { getLastUpdated } from "../lib/last-updated";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Achievements", href: "#achievements" },
  { name: "Journey", href: "#journey" },
  { name: "Blog", href: "#blog" },
  { name: "Focus", href: "#focus" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  {
    name: "GitHub",
    href: "https://github.com/Ravindra-builds",
    icon: <FaGithub size={17} />,
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/in/ravindra-yadav-778498390/",
    icon: <FaLinkedin size={17} />,
  },
  {
    name: "X",
    href: "https://x.com/YadavRavin7292",
    icon: <FaTwitter size={17} />,
  },
  {
    name: "Hashnode",
    href: "https://rvindra.hashnode.dev",
    icon: <SiHashnode size={17} />,
  },
];

const Footer = () => {
  const lastUpdated = getLastUpdated();

  return (
    <footer className="relative bg-white dark:bg-gray-950 border-t border-gray-200 dark:border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          {/* Brand & Bio (5 cols) */}
          <div className="md:col-span-5">
            <a
              href="#hero"
              className="text-lg font-bold tracking-tight text-gray-900 dark:text-white inline-flex items-center"
            >
              <span className="bg-gradient-to-r from-blue-600 to-purple-600 dark:from-blue-400 dark:to-purple-400 bg-clip-text text-transparent font-extrabold">
                Ravindra
              </span>
              <span className="text-blue-600 dark:text-blue-400 font-mono ml-0.5">
                .dev
              </span>
            </a>
            <p className="mt-2.5 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed max-w-sm">
              AI & Full-Stack Developer building production-ready apps, RAG systems, and AI products end to end.
            </p>
          </div>

          {/* Navigate 2-column Grid (4 cols) */}
          <div className="md:col-span-4">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
              Navigate
            </h4>
            <ul className="grid grid-cols-2 gap-x-6 gap-y-1.5 text-xs sm:text-sm">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="group inline-flex items-center text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-colors"
                  >
                    <span className="w-0 group-hover:w-2 h-px bg-blue-500 mr-0 group-hover:mr-1 transition-all duration-200"></span>
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect (3 cols) */}
          <div className="md:col-span-3 md:text-right">
            <h4 className="text-[11px] font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-2.5">
              Connect
            </h4>
            <div className="flex gap-2.5 md:justify-end">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-white hover:border-transparent hover:bg-gradient-to-br hover:from-blue-500 hover:to-purple-500 hover:-translate-y-0.5 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-8 pt-6 border-t border-gray-200 dark:border-gray-900 flex flex-col-reverse sm:flex-row items-center justify-between gap-4 text-xs text-gray-500">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
            <span>&copy; 2026 Ravindra Yadav.</span>
            <span className="hidden sm:inline text-gray-400">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
              Last updated {lastUpdated}
            </span>
          </div>

          <div className="flex items-center gap-3">
            <span className="flex items-center text-[11px]">
              Made with <Heart size={11} className="mx-1 text-red-500 fill-current" /> using Next.js & Tailwind CSS
            </span>
            <a
              href="#hero"
              aria-label="Back to top"
              className="p-1.5 bg-gray-100 dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white transition-all hover:-translate-y-0.5"
            >
              <ArrowUp size={13} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
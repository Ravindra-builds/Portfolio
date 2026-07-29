import React from "react";
import { Heart, ArrowUp } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiHashnode } from "react-icons/si";
import { getLastUpdated } from "../lib/last-updated";

const navLinks = [
  { name: "About", href: "#about" },
  { name: "Skills", href: "#skills" },
  { name: "Projects", href: "#projects" },
  { name: "Blog", href: "#blog" },
  { name: "Contact", href: "#contact" },
];

const socials = [
  { name: "GitHub", href: "https://github.com/Ravindra-builds", icon: <FaGithub size={18} /> },
  { name: "LinkedIn", href: "https://www.linkedin.com/in/ravindra-yadav-778498390/", icon: <FaLinkedin size={18} /> },
  { name: "X", href: "https://x.com/YadavRavin7292", icon: <FaTwitter size={18} /> },
  { name: "Hashnode", href: "https://rvindra.hashnode.dev", icon: <SiHashnode size={18} /> },
];

const Footer = () => {
  const lastUpdated = getLastUpdated();

  return (
    <footer className="relative bg-gray-950 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex flex-col md:flex-row justify-between gap-10">

          <div className="max-w-xs">
            <a href="#hero" className="text-lg font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
              Ravindra.dev
            </a>
            <p className="mt-3 text-sm text-gray-500 leading-relaxed">
              AI & Full-Stack Developer building production-ready apps and AI products, end to end.
            </p>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Navigate
            </h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    className="text-sm text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-wider text-gray-500 mb-4">
              Connect
            </h4>
            <div className="flex gap-3">
              {socials.map((s) => (
                <a
                  key={s.name}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.name}
                  className="p-2.5 bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 hover:-translate-y-1 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-gray-900 flex flex-col-reverse sm:flex-row items-center justify-between gap-4">
          <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4 text-xs text-gray-500">
            <span>&copy; 2026 Ravindra Yadav. All rights reserved.</span>
            <span className="hidden sm:inline text-gray-700">•</span>
            <span className="inline-flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
              Last updated {lastUpdated}
            </span>
          </div>

          <div className="flex items-center gap-4">
            <span className="flex items-center text-xs text-gray-500">
              Made with <Heart size={13} className="mx-1 text-red-500 fill-current" /> using React & Tailwind CSS
            </span>
            <a
              href="#hero"
              aria-label="Back to top"
              className="p-2 bg-gray-900 border border-gray-800 rounded-full text-gray-400 hover:text-white hover:border-gray-600 transition-all"
            >
              <ArrowUp size={14} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
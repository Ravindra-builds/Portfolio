"use client";

import React, { useState } from "react";
import { Mail, MapPin, Coffee, Check, Copy } from "lucide-react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = "yadavravindra7292@gmail.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section
      id="contact"
      className="py-24 bg-gradient-to-t from-gray-50 via-white to-gray-50 dark:from-black dark:via-gray-950 dark:to-gray-900/50"
    >
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="mb-14 slideDown">
          <span className="text-xs font-semibold uppercase tracking-wider text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-500/10 px-3 py-1 rounded-full border border-blue-200 dark:border-blue-500/20">
            Let&apos;s Connect
          </span>
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 dark:text-white mt-4 mb-3 tracking-tight">
            Get In Touch
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-purple-500 mx-auto rounded-full mb-6"></div>
          <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            I am currently open to full-time engineering roles, AI projects, and technical collaborations.
            Whether you have an opportunity or just want to discuss LLM architecture, my inbox is open!
          </p>
        </div>

        <div className="bg-white/80 dark:bg-gray-900/70 backdrop-blur-xl border border-gray-200 dark:border-gray-800 rounded-3xl p-8 md:p-12 shadow-xl shadow-gray-200/50 dark:shadow-none slideUp">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
            {/* Email Card */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 hover:border-blue-500/40 transition-colors">
              <div className="w-12 h-12 bg-blue-500/10 dark:bg-blue-500/20 rounded-2xl flex items-center justify-center mb-4 text-blue-600 dark:text-blue-400">
                <Mail size={22} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                Direct Email
              </h3>
              <a
                href={`mailto:${email}`}
                className="text-sm font-medium text-gray-900 dark:text-white hover:text-blue-600 dark:hover:text-blue-400 transition-colors break-all"
              >
                {email}
              </a>
            </div>

            {/* Location Card */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 hover:border-purple-500/40 transition-colors">
              <div className="w-12 h-12 bg-purple-500/10 dark:bg-purple-500/20 rounded-2xl flex items-center justify-center mb-4 text-purple-600 dark:text-purple-400">
                <MapPin size={22} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                Location
              </h3>
              <p className="text-sm font-medium text-gray-900 dark:text-white">
                Ranchi, Jharkhand (India)
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Available for remote worldwide
              </span>
            </div>

            {/* Availability Card */}
            <div className="flex flex-col items-center p-4 rounded-2xl bg-gray-50/50 dark:bg-gray-800/40 border border-gray-100 dark:border-gray-800 hover:border-emerald-500/40 transition-colors">
              <div className="w-12 h-12 bg-emerald-500/10 dark:bg-emerald-500/20 rounded-2xl flex items-center justify-center mb-4 text-emerald-600 dark:text-emerald-400">
                <Coffee size={22} />
              </div>
              <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-1">
                Status
              </h3>
              <p className="text-sm font-medium text-gray-900 dark:text-white flex items-center gap-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                Ready to Join
              </p>
              <span className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
                Full-time & AI contracts
              </span>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
            <a
              href={`mailto:${email}`}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3.5 text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 dark:bg-blue-500 dark:hover:bg-blue-600 rounded-full transition-all duration-300 shadow-lg shadow-blue-500/25 hover:shadow-blue-500/35 hover:-translate-y-0.5"
            >
              <Mail size={18} />
              Send Email
            </a>

            <button
              onClick={handleCopy}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 text-sm font-medium text-gray-700 dark:text-gray-200 bg-gray-100 dark:bg-gray-800/80 hover:bg-gray-200 dark:hover:bg-gray-700 rounded-full border border-gray-200 dark:border-gray-700 transition-all duration-300 hover:-translate-y-0.5"
              aria-label="Copy email address"
            >
              {copied ? (
                <>
                  <Check size={18} className="text-green-500" />
                  <span className="text-green-600 dark:text-green-400">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <Copy size={18} />
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Socials */}
          <div className="flex justify-center gap-4 pt-8 border-t border-gray-200 dark:border-gray-800">
            <a
              href="https://github.com/Ravindra-builds"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub Profile"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-gray-900 hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform hover:-translate-y-1 hover:shadow-md"
            >
              <FaGithub size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/ravindra-yadav-778498390/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn Profile"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-blue-600 hover:text-white transition-all transform hover:-translate-y-1 hover:shadow-md"
            >
              <FaLinkedin size={20} />
            </a>
            <a
              href="https://x.com/YadavRavin7292"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="X Twitter Profile"
              className="p-3 bg-gray-100 dark:bg-gray-800 rounded-full text-gray-600 dark:text-gray-400 hover:bg-black hover:text-white dark:hover:bg-white dark:hover:text-black transition-all transform hover:-translate-y-1 hover:shadow-md"
            >
              <FaTwitter size={20} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
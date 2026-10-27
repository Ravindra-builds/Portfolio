import React from "react";
import Navbar from "./components/navbar";
import Hero from "./components/hero";
import About from "./components/about";
import Projects from "./components/projects";
import Certificates from "./components/certificates";
import Timeline from "./components/timeline";
import Skills from "./components/skills";
import Blog from "./components/blog";
import Contact from "./components/contact";
import Footer from "./components/footer";

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-amber-500/20 selection:text-foreground transition-colors duration-300 relative">
      <div className="pointer-events-none fixed inset-0 z-50 bg-grain opacity-40" />
      <Navbar />
      <main>
        <Hero />
        <About />
        <Projects />
        <Certificates />
        <Timeline />
        <Skills />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

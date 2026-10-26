import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import TechMarquee from './components/tech-marquee';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Certificates from './components/certificates';
import Timeline from './components/timeline';
import Blog from './components/blog';
import Learning from './components/learning';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
    <div className="bg-background min-h-screen text-foreground selection:bg-blue-500/30 selection:text-foreground transition-colors duration-300">
      <Navbar />
      <main>
        <Hero />
        <TechMarquee />
        <About />
        <Skills />
        <Projects />
        <Certificates />
        <Timeline />
        <Blog />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

import React from 'react';
import Navbar from './components/navbar';
import Hero from './components/hero';
import About from './components/about';
import Skills from './components/skills';
import Projects from './components/projects';
import Blog from './components/blog';
import Learning from './components/learning';
import Contact from './components/contact';
import Footer from './components/footer';

export default function Home() {
  return (
     <div className="bg-gray-950 min-h-screen text-gray-100 selection:bg-blue-500/30">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Blog />
        <Learning />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

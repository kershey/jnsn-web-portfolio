'use client';

import Navigation from '@/components/layout/Navigation';
import Hero from '@/components/sections/Hero';
import About from '@/components/sections/About';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-black">
      {/* Background with grid and dots */}
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-dot-white/[0.2]" />
        <div className="absolute inset-0 bg-grid-white/[0.2]" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
      </div>
    </div>
  );
}

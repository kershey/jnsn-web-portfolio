'use client';

import Contact from '@/components/sections/Contact';
import Hero from '@/components/sections/Hero';
import Skills from '@/components/sections/Skills';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Navigation from '@/components/layout/Navigation';

export default function Home() {
  return (
    <div className="relative min-h-screen w-full bg-gray-50 dark:bg-black">
      {/* Background with grid and dots */}
      <div className="absolute inset-0 bg-gray-50 dark:bg-black">
        <div className="absolute inset-0 bg-dot-gray-800/[0.1] dark:bg-dot-white/[0.2]" />
        <div className="absolute inset-0 bg-grid-gray-800/[0.1] dark:bg-grid-white/[0.2]" />
        <div className="absolute inset-0 bg-gradient-to-b from-gray-50 via-gray-50/80 to-gray-50 dark:from-black dark:via-black/50 dark:to-black" />
      </div>

      {/* Content */}
      <div className="relative z-10">
        <Navigation />

        {/* Hero Section */}
        <Hero />

        {/* About Me Section */}
        <About />

        {/* Skills and Technologies Section */}
        <Skills />

        {/* My Work Section */}
        <Projects />

        {/* Contact Section */}
        <Contact />
      </div>
    </div>
  );
}

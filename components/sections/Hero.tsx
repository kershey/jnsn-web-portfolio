'use client';

import { motion } from 'framer-motion';
import { TypeAnimation } from 'react-type-animation';
import Link from 'next/link';

export default function Hero() {
  return (
    <main
      id="home"
      className="pt-32 md:pt-48 px-4 relative min-h-[calc(100vh-80px)] bg-background"
    >
      <div className="max-w-7xl mx-auto text-center relative">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{
            duration: 0.5,
            type: 'spring',
            stiffness: 100,
          }}
          className="mb-8 md:mb-12"
        >
          <div className="flex items-center justify-center gap-2">
            <TypeAnimation
              sequence={[
                "Hi, I'm Jensen Kershey Aragon",
                1000,
                "I'm a Full Stack Developer",
                1000,
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
              className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground"
            />
            <div className="animate-waving-hand text-4xl md:text-5xl lg:text-6xl">
              👋
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 text-foreground tracking-tight">
            Nextjs web
            <br />
            developer<span className="text-blue-500">.</span>
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl text-foreground max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
            I am a passionate full-stack developer and 4th year Information
            Technology student from Roxas City, Philippines. Currently exploring
            the world of web development while pursuing my degree, with 6 months
            of hands-on experience building modern web applications.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="flex flex-col md:flex-row gap-4 md:gap-6 justify-center px-4"
        >
          <Link
            href="#contact"
            className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full bg-gray-800 hover:bg-gray-700 transition-all hover:scale-105 text-white"
          >
            contact me →
          </Link>
          <Link
            href="https://drive.google.com/file/d/1-bL6TZiv0t0A-izORQ-rFkcUYC55axwg/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
            className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full bg-gray-800 hover:bg-gray-700 transition-all hover:scale-105 text-white"
          >
            my resume →
          </Link>
        </motion.div>
      </div>
    </main>
  );
}

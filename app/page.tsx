'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Download, Code2, Database, GitBranch, Menu, X } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaNodeJs, FaGithub, FaServer } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import { useState } from 'react';
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandFramerMotion,
  TbBrandMongodb,
  TbBrandVscode,
  TbBrandVercel,
} from 'react-icons/tb';

export default function Home() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
    // Prevent scrolling when menu is open
    if (!isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  };

  const closeMenu = () => {
    setIsOpen(false);
    document.body.style.overflow = 'unset';
  };

  const menuItems = [
    { href: '#home', label: 'Home' },
    { href: '#about', label: 'About me' },
    { href: '#services', label: 'Skills' },
    { href: '#work', label: 'My Work' },
  ];

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
        {/* Navigation */}
        <nav className="fixed w-full top-0 z-50 px-4 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/[0.05] backdrop-blur-md rounded-full px-4 md:px-8 py-4 flex justify-between items-center border border-white/[0.05]">
              <Link href="/" className="text-2xl font-bold">
                Jensen<span className="text-red-500">.</span>
              </Link>

              {/* Desktop Navigation */}
              <div className="hidden md:block">
                <NavigationMenu.Root className="relative">
                  <NavigationMenu.List className="flex space-x-8">
                    {menuItems.map((item) => (
                      <NavigationMenu.Item key={item.href}>
                        <NavigationMenu.Link
                          className="hover:text-gray-300 transition-colors"
                          href={item.href}
                        >
                          {item.label}
                        </NavigationMenu.Link>
                      </NavigationMenu.Item>
                    ))}
                  </NavigationMenu.List>
                </NavigationMenu.Root>
              </div>

              <div className="flex items-center gap-4">
                <Link
                  href="#contact"
                  className="hidden md:block px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
                >
                  Contact →
                </Link>

                {/* Hamburger Menu Button */}
                <button
                  onClick={toggleMenu}
                  className="md:hidden p-2 hover:bg-white/10 rounded-full transition-colors"
                  aria-label="Toggle Menu"
                >
                  {isOpen ? (
                    <X className="w-6 h-6" />
                  ) : (
                    <Menu className="w-6 h-6" />
                  )}
                </button>
              </div>
            </div>
          </div>
        </nav>

        {/* Mobile Navigation Overlay */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.2 }}
              className="fixed inset-0 z-40 md:hidden"
            >
              <div className="absolute inset-0 bg-black/95 backdrop-blur-md" />
              <nav className="relative h-full flex flex-col items-center justify-center space-y-8 text-2xl">
                {menuItems.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={closeMenu}
                    className="hover:text-blue-500 transition-colors"
                  >
                    {item.label}
                  </Link>
                ))}
                <Link
                  href="#contact"
                  onClick={closeMenu}
                  className="px-8 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-colors text-base"
                >
                  Contact →
                </Link>
              </nav>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Hero Section */}
        <main
          id="home"
          className="pt-32 md:pt-48 px-4 relative min-h-[calc(100vh-80px)]"
        >
          {/* Hero Background */}
          <div className="absolute inset-0">
            {/* Grid pattern */}
            <div className="absolute inset-0 bg-grid-white/[0.02] bg-[length:50px_50px]" />
            {/* Dot pattern */}
            <div className="absolute inset-0 bg-dot-white/[0.05]" />
            {/* Radial fade */}
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/90 to-black [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]" />
          </div>

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
                  className="text-3xl md:text-4xl lg:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-500"
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
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400 tracking-tight">
                full-stack web
                <br />
                developer<span className="text-blue-500">.</span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-gray-400 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed px-4">
                I am a passionate frontend developer and 4th year Information
                Technology student from Roxas City, Philippines. Currently
                exploring the world of web development while pursuing my degree,
                with 6 months of hands-on experience building modern web
                applications.
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
                className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-105 border border-white/10"
              >
                contact me →
              </Link>
              <button className="px-6 md:px-8 py-3 md:py-4 text-base md:text-lg rounded-full bg-gradient-to-r from-neutral-200 to-neutral-100 text-black hover:opacity-90 transition-all hover:scale-105 flex items-center justify-center gap-3">
                my resume <Download size={20} />
              </button>
            </motion.div>
          </div>
        </main>

        {/* About Me Section */}
        <section id="about" className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                About <span className="text-blue-500">Me</span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full" />
            </motion.div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-4"
              >
                <h3 className="text-2xl font-bold mb-4">
                  Full Stack Developer & UI/UX Designer
                </h3>
                <p className="text-gray-400">
                  Hello! I&apos;m Jensen, a passionate Full Stack Developer and
                  aspiring technologist based in the Philippines. As a 4th year
                  IT student, I combine my academic knowledge with practical
                  development experience to create web solutions that are both
                  functional and user-friendly.
                </p>
                <p className="text-gray-400">
                  My journey in web development began during my university
                  studies, where my curiosity about web technologies led me to
                  dive deep into modern frameworks and development practices.
                  I&apos;ve dedicated countless hours to self-study, exploring
                  the latest web technologies, frameworks, and industry best
                  practices through online courses, documentation, and hands-on
                  projects. This self-driven learning approach, combined with my
                  academic foundation, has enabled me to stay current with
                  rapidly evolving web development trends and deliver modern,
                  efficient solutions.
                </p>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div>
                    <h4 className="font-bold mb-2">Skills</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• React & Next.js</li>
                      <li>• TypeScript</li>
                      <li>• Node.js</li>
                      <li>• UI/UX Design</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-bold mb-2">Interests</h4>
                    <ul className="space-y-2 text-gray-400">
                      <li>• Web Development</li>
                      <li>• Mobile Apps</li>
                      <li>• Cloud Computing</li>
                      <li>• AI & ML</li>
                    </ul>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="relative z-10">
                  <Image
                    src="/images/portfolio-avatar.jpg"
                    alt="About Me"
                    width={500}
                    height={600}
                    className="rounded-lg shadow-2xl"
                  />
                </div>
                <div className="absolute inset-0 bg-blue-500/10 rounded-lg transform translate-x-4 translate-y-4 -z-10" />
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.6 }}
              viewport={{ once: true }}
              className="grid grid-cols-2 md:grid-cols-2 gap-8 mt-16"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">6+</h3>
                <p className="text-gray-400">Months Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">3+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Skills and Technologies Section */}
        <section id="services" className="py-16 md:py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Skills & <span className="text-blue-500">Technologies</span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
              <p className="text-gray-400 max-w-2xl mx-auto">
                Here are the technologies and tools I specialize in,
                continuously learning and applying to create modern web
                solutions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Frontend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] rounded-lg p-6 hover:bg-white/[0.1] transition-colors border border-white/[0.05]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Code2 className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-500">Frontend</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <FaReact className="w-4 h-4 text-[#61DAFB]" />
                    React.js & <TbBrandNextjs className="w-4 h-4 text-white" />{' '}
                    Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <TbBrandTypescript className="w-4 h-4 text-[#3178C6]" />
                    TypeScript
                  </li>
                  <li className="flex items-center gap-2">
                    <TbBrandTailwind className="w-4 h-4 text-[#38BDF8]" />
                    Tailwind CSS
                  </li>
                  <li className="flex items-center gap-2">
                    <TbBrandFramerMotion className="w-4 h-4 text-[#FF5757]" />
                    Framer Motion
                  </li>
                </ul>
              </motion.div>

              {/* Backend */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] rounded-lg p-6 hover:bg-white/[0.1] transition-colors border border-white/[0.05]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <Database className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-500">Backend</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <FaNodeJs className="w-4 h-4 text-[#339933]" />
                    Node.js
                  </li>
                  <li className="flex items-center gap-2">
                    <SiExpress className="w-4 h-4 text-white" />
                    Express.js
                  </li>
                  <li className="flex items-center gap-2">
                    <TbBrandMongodb className="w-4 h-4 text-[#47A248]" />
                    MongoDB
                  </li>
                  <li className="flex items-center gap-2">
                    <FaServer className="w-4 h-4 text-[#FF5757]" />
                    REST APIs
                  </li>
                </ul>
              </motion.div>

              {/* Tools & DevOps */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] rounded-lg p-6 hover:bg-white/[0.1] transition-colors border border-white/[0.05]"
              >
                <div className="flex items-center gap-3 mb-4">
                  <div className="p-2 bg-blue-500/10 rounded-lg">
                    <GitBranch className="w-5 h-5 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold text-blue-500">
                    Tools & DevOps
                  </h3>
                </div>
                <ul className="space-y-2 text-gray-400">
                  <li className="flex items-center gap-2">
                    <FaGithub className="w-4 h-4 text-white" />
                    Git & GitHub
                  </li>
                  <li className="flex items-center gap-2">
                    <TbBrandVscode className="w-4 h-4 text-[#007ACC]" />
                    VS Code
                  </li>
                  <li className="flex items-center gap-2">
                    <TbBrandVercel className="w-4 h-4 text-white" />
                    Vercel
                  </li>
                  <li className="flex items-center gap-2">
                    <Image
                      src="/logo.svg"
                      alt="Cursor AI"
                      width={16}
                      height={16}
                      priority
                    />
                    Cursor AI
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </section>

        {/* My Work Section */}
        <section id="work" className="py-16 md:py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                My <span className="text-blue-500">Work</span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
              <p className="text-gray-400 max-w-2xl mx-auto">
                Here are some of my recent projects that showcase my skills and
                experience in web development and design.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] backdrop-blur-sm border border-white/[0.05] rounded-xl overflow-hidden hover:bg-white/[0.1] transition-all duration-300 hover:-translate-y-1"
              >
                <Link
                  href="https://wish-app-eta.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/images/wish-app.png"
                        alt="Full-Stack Wishlist Web Application"
                        width={600}
                        height={400}
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-md rounded-full p-2 text-white/70 hover:text-white transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      Full-Stack Wishlist Web Application
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1">
                      A modern wishlist application built with Next.js 14 App
                      Router, featuring a clean and intuitive interface. Built
                      with Supabase for real-time database functionality and
                      Tailwind CSS for responsive styling. Features include
                      real-time updates, wishlist management, and a
                      mobile-friendly design.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Next.js 14
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Supabase
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Tailwind CSS
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Shadcn UI
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Project 2 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] backdrop-blur-sm border border-white/[0.05] rounded-xl overflow-hidden hover:bg-white/[0.1] transition-all duration-300 hover:-translate-y-1"
              >
                <Link
                  href="https://expense-tracker-jnsn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/images/expense-tracker.png"
                        alt="Full-Stack Expense Tracking Application"
                        width={600}
                        height={400}
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-md rounded-full p-2 text-white/70 hover:text-white transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      Full-Stack Expense Tracking Application
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1">
                      A comprehensive expense tracking application featuring
                      user authentication, real-time updates, and interactive
                      data visualization. Built with Next.js 14, PostgreSQL with
                      Neon DB for data storage, and Chart.js for data
                      visualization. Includes features like expense
                      categorization, budget tracking, and detailed financial
                      reports.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Next.js 14
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        NeonDB
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Prisma
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Chart.js
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Shadcn UI
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Project 3 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] backdrop-blur-sm border border-white/[0.05] rounded-xl overflow-hidden hover:bg-white/[0.1] transition-all duration-300 hover:-translate-y-1"
              >
                <Link
                  href="https://realstate-app-mauve.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="block"
                >
                  <div className="relative">
                    <div className="aspect-video overflow-hidden">
                      <Image
                        src="/images/real-estate.png"
                        alt="Real Estate Web Application"
                        width={600}
                        height={400}
                        className="object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <div className="absolute top-4 right-4">
                      <div className="bg-black/50 backdrop-blur-md rounded-full p-2 text-white/70 hover:text-white transition-colors">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-5 w-5"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
                          <polyline points="15 3 21 3 21 9" />
                          <line x1="10" y1="14" x2="21" y2="3" />
                        </svg>
                      </div>
                    </div>
                  </div>
                  <div className="p-6 flex flex-col h-full">
                    <h3 className="text-xl font-bold mb-3 text-white group-hover:text-blue-400 transition-colors">
                      Modern Real Estate Web Platform
                    </h3>
                    <p className="text-gray-400 text-sm mb-6 flex-1">
                      A dynamic real estate platform with smooth animations and
                      an intuitive property browsing experience. Built with
                      Next.js 14, Framer Motion for animations, and MongoDB for
                      property data storage. Features include property search,
                      filtering, interactive maps, and a responsive image
                      gallery with modern UI components.
                    </p>
                    <div className="flex flex-wrap gap-2 mt-auto">
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Next.js 14
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        TypeScript
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        MongoDB
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Framer Motion
                      </span>
                      <span className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 rounded-full text-xs text-blue-300">
                        Tailwind CSS
                      </span>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-16 md:py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                Contact <span className="text-blue-500">Me</span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
              <p className="text-gray-400 max-w-2xl mx-auto">
                Feel free to reach out to me for collaborations or just a
                friendly chat. I&apos;m always open to discussing new projects
                and opportunities.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
              <motion.div
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="space-y-6"
              >
                <h3 className="text-2xl font-bold">
                  Let&apos;s talk about everything!
                </h3>
                <p className="text-gray-400">
                  Don&apos;t like forms? Send me an email directly or connect
                  with me on social media. I&apos;ll get back to you as soon as
                  possible.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/[0.05] rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Mail me at</p>
                      <a
                        href="mailto:your.email@example.com"
                        className="text-blue-500 hover:text-blue-400"
                      >
                        your.email@example.com
                      </a>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="p-3 bg-white/[0.05] rounded-lg">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        className="h-6 w-6 text-blue-500"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </div>
                    <div>
                      <p className="text-sm text-gray-400">Location</p>
                      <p className="text-white">Roxas City, Philippines</p>
                    </div>
                  </div>
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="bg-white/[0.05] backdrop-blur-md rounded-xl p-8 border border-white/[0.05]"
              >
                <h4 className="text-xl font-bold mb-6">Connect with me</h4>
                <div className="grid grid-cols-2 gap-4">
                  <a
                    href="https://github.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/[0.05] rounded-lg hover:bg-white/[0.1] transition-colors"
                  >
                    <FaGithub className="w-6 h-6" />
                    <span>GitHub</span>
                  </a>
                  <a
                    href="https://linkedin.com/in/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/[0.05] rounded-lg hover:bg-white/[0.1] transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-[#0A66C2]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                    </svg>
                    <span>LinkedIn</span>
                  </a>
                  <a
                    href="https://twitter.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/[0.05] rounded-lg hover:bg-white/[0.1] transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-[#1DA1F2]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M23.953 4.57a10 10 0 01-2.825.775 4.958 4.958 0 002.163-2.723c-.951.555-2.005.959-3.127 1.184a4.92 4.92 0 00-8.384 4.482C7.69 8.095 4.067 6.13 1.64 3.162a4.822 4.822 0 00-.666 2.475c0 1.71.87 3.213 2.188 4.096a4.904 4.904 0 01-2.228-.616v.06a4.923 4.923 0 003.946 4.827 4.996 4.996 0 01-2.212.085 4.936 4.936 0 004.604 3.417 9.867 9.867 0 01-6.102 2.105c-.39 0-.779-.023-1.17-.067a13.995 13.995 0 007.557 2.209c9.053 0 13.998-7.496 13.998-13.985 0-.21 0-.42-.015-.63A9.935 9.935 0 0024 4.59z" />
                    </svg>
                    <span>Twitter</span>
                  </a>
                  <a
                    href="https://instagram.com/yourusername"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 p-4 bg-white/[0.05] rounded-lg hover:bg-white/[0.1] transition-colors"
                  >
                    <svg
                      className="w-6 h-6 text-[#E4405F]"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path d="M12 0C8.74 0 8.333.015 7.053.072 5.775.132 4.905.333 4.14.63c-.789.306-1.459.717-2.126 1.384S.935 3.35.63 4.14C.333 4.905.131 5.775.072 7.053.012 8.333 0 8.74 0 12s.015 3.667.072 4.947c.06 1.277.261 2.148.558 2.913.306.788.717 1.459 1.384 2.126.667.666 1.336 1.079 2.126 1.384.766.296 1.636.499 2.913.558C8.333 23.988 8.74 24 12 24s3.667-.015 4.947-.072c1.277-.06 2.148-.262 2.913-.558.788-.306 1.459-.718 2.126-1.384.666-.667 1.079-1.335 1.384-2.126.296-.765.499-1.38.899-2.126.419-.419-.824.679-1.38.896-.42.164-1.065.36-2.235.413-1.274.057-1.649.07-4.859.07-3.211 0-3.586-.015-4.859-.074-1.171-.061-1.816-.256-2.236-.421-.569-.224-.96-.479-1.379-.899-.421-.419-.69-.824-.9-1.38-.165-.42-.359-1.065-.42-2.235-.045-1.26-.061-1.649-.061-4.844 0-3.196.016-3.586.061-4.861.061-1.17.255-1.814.42-2.234.21-.57.479-.96.9-1.381.419-.419.81-.689 1.379-.898.42-.166 1.051-.361 2.221-.421 1.275-.045 1.65-.06 4.859-.06l.045.03zm0 3.678c-3.405 0-6.162 2.76-6.162 6.162 0 3.405 2.76 6.162 6.162 6.162 3.405 0 6.162-2.76 6.162-6.162 0-3.405-2.76-6.162-6.162-6.162zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405c0 .795-.646 1.44-1.44 1.44-.795 0-1.44-.646-1.44-1.44 0-.794.646-1.439 1.44-1.439.793-.001 1.44.645 1.44 1.439z" />
                    </svg>
                    <span>Instagram</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
}

'use client';

import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Download, Code2, Database, GitBranch, Menu, X } from 'lucide-react';
import { TypeAnimation } from 'react-type-animation';
import { FaReact, FaGithub } from 'react-icons/fa';
import { useState } from 'react';
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandFramerMotion,
  TbBrandVscode,
  TbBrandVercel,
} from 'react-icons/tb';
import Contact from '@/components/sections/Contact';

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
                  className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-gray-500"
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
              <h2 className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 md:mb-8 tracking-tighter">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-white via-white to-neutral-600">
                  Next.js web
                  <br />
                  developer
                </span>
                <span className="inline-block text-blue-500 animate-pulse">
                  .
                </span>
              </h2>
              <p className="text-lg md:text-xl lg:text-2xl text-neutral-400 max-w-3xl mx-auto mb-8 md:mb-12 leading-relaxed font-light px-4">
                I am a passionate frontend developer and 4th year Information
                Technology student from{' '}
                <span className="text-white font-medium">
                  Roxas City, Philippines
                </span>
                . Currently exploring the world of web development while
                pursuing my degree, with
                <span className="text-white font-medium"> 6 months</span> of
                hands-on experience building modern web applications.
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
                  Next.js Stack Developer
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
                  <div className="col-span-2">
                    <h4 className="font-bold mb-2">Skills</h4>
                    <div className="grid grid-cols-2 gap-x-4">
                      <ul className="space-y-2 text-gray-400">
                        <li>• Next.js</li>
                        <li>• React</li>
                        <li>• TypeScript</li>
                        <li>• Supabase</li>
                        <li>• NeonDB</li>
                      </ul>
                      <ul className="space-y-2 text-gray-400">
                        <li>• Drizzle ORM</li>
                        <li>• Prisma ORM</li>
                        <li>• Tailwind CSS</li>
                        <li>• Framer Motion</li>
                        <li>• Shadcn UI</li>
                      </ul>
                    </div>
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
                    <TbBrandNextjs className="w-4 h-4 text-white" />
                    Next.js
                  </li>
                  <li className="flex items-center gap-2">
                    <FaReact className="w-4 h-4 text-[#61DAFB]" />
                    React.js
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
                  <li className="flex items-center gap-2">
                    <div className="p-0.5 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
                      <Image
                        src="/shadcn.png"
                        alt="Shadcn UI"
                        width={16}
                        height={16}
                        className="w-4 h-4"
                      />
                    </div>
                    Shadcn UI
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
                    <Image
                      src="/supabase.svg"
                      alt="Supabase"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    Supabase
                  </li>
                  <li className="flex items-center gap-2">
                    <Image
                      src="/neondb.png"
                      alt="NeonDB"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    NeonDB
                  </li>
                  <li className="flex items-center gap-2">
                    <Image
                      src="/prisma.svg"
                      alt="PrismaORM"
                      width={24}
                      height={24}
                      className="w-6 h-6 bg-white rounded-sm"
                    />
                    Prisma ORM
                  </li>
                  <li className="flex items-center gap-2">
                    <Image
                      src="/drizzle.png"
                      alt="DrizzleORM"
                      width={24}
                      height={24}
                      className="w-6 h-6"
                    />
                    Drizzle ORM
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
                  <h3 className="text-lg font-bold text-blue-500">Tools</h3>
                </div>
                <ul className="space-y-2 text-gray-400">
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
        <Contact />
      </div>
    </div>
  );
}

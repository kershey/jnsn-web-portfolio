'use client';

import { motion } from 'framer-motion';
import Image from 'next/image';
import Link from 'next/link';
import * as NavigationMenu from '@radix-ui/react-navigation-menu';
import { Download } from 'lucide-react';
import { TypewriterEffect } from '@/components/ui/typewriter-effect';
import { WavingHand } from '@/components/ui/waving-hand';

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
        {/* Navigation */}
        <nav className="fixed w-full top-0 z-50 px-4 py-4">
          <div className="max-w-7xl mx-auto">
            <div className="bg-white/[0.05] backdrop-blur-md rounded-full px-8 py-4 flex justify-between items-center border border-white/[0.05]">
              <Link href="/" className="text-2xl font-bold">
                Jensen<span className="text-red-500">.</span>
              </Link>

              <NavigationMenu.Root className="relative">
                <NavigationMenu.List className="flex space-x-8">
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      className="hover:text-gray-300 transition-colors"
                      href="#home"
                    >
                      Home
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      className="hover:text-gray-300 transition-colors"
                      href="#about"
                    >
                      About me
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      className="hover:text-gray-300 transition-colors"
                      href="#services"
                    >
                      Services
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      className="hover:text-gray-300 transition-colors"
                      href="#work"
                    >
                      My Work
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                  <NavigationMenu.Item>
                    <NavigationMenu.Link
                      className="hover:text-gray-300 transition-colors"
                      href="#contact"
                    >
                      Contact me
                    </NavigationMenu.Link>
                  </NavigationMenu.Item>
                </NavigationMenu.List>
              </NavigationMenu.Root>

              <Link
                href="#contact"
                className="px-6 py-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors"
              >
                Contact →
              </Link>
            </div>
          </div>
        </nav>

        {/* Hero Section */}
        <main className="pt-48 px-4 relative min-h-[calc(100vh-80px)]">
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
              className="mb-12"
            >
              <div className="flex items-center justify-center gap-2">
                <TypewriterEffect
                  words={[
                    { text: 'Hi!' },
                    { text: "I'm" },
                    { text: 'Jensen', className: 'text-blue-500' },
                    { text: 'Kershey' },
                    { text: 'Aragon' },
                    { text: <WavingHand /> },
                  ]}
                  className="text-5xl mb-2"
                  cursorClassName="bg-blue-500"
                />
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <h2 className="text-6xl font-serif mb-6 bg-clip-text text-transparent bg-gradient-to-r from-neutral-100 to-neutral-400">
                full-stack web developer
                <br />
                based in Philippines.
              </h2>
              <p className="text-gray-400 max-w-2xl mx-auto mb-8">
                I am a frontend developer from California, USA with 10 years of
                experience in multiple companies like Microsoft, Tesla and
                Apple.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex gap-4 justify-center"
            >
              <Link
                href="#contact"
                className="px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-105 border border-white/10"
              >
                contact me →
              </Link>
              <button className="px-6 py-3 rounded-full bg-gradient-to-r from-neutral-200 to-neutral-100 text-black hover:opacity-90 transition-all hover:scale-105 flex items-center gap-2">
                my resume <Download size={16} />
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
                  Hello! I&apos;m Jensen, a passionate Full Stack Developer
                  based in the Philippines. With a keen eye for design and a
                  love for clean, efficient code, I create web solutions that
                  not only look beautiful but also deliver exceptional user
                  experiences.
                </p>
                <p className="text-gray-400">
                  My journey in web development started with a curiosity for how
                  things work on the internet, and it has evolved into a
                  professional career where I&apos;ve had the opportunity to
                  work with various technologies and frameworks.
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
              className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-16"
            >
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">5+</h3>
                <p className="text-gray-400">Years Experience</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">50+</h3>
                <p className="text-gray-400">Projects Completed</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">20+</h3>
                <p className="text-gray-400">Happy Clients</p>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-bold text-blue-500">10+</h3>
                <p className="text-gray-400">Awards Won</p>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Services Section */}
        <section id="services" className="py-20 px-4 relative z-10">
          <div className="max-w-7xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
              className="text-center mb-12"
            >
              <h2 className="text-4xl font-bold mb-4">
                My <span className="text-blue-500">Services</span>
              </h2>
              <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
              <p className="text-gray-400 max-w-2xl mx-auto">
                I offer a wide range of web development and design services,
                crafted to meet your specific needs and help your business grow
                in the digital space.
              </p>
            </motion.div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Web Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] rounded-lg p-8 hover:bg-white/[0.1] transition-colors border border-white/[0.05]"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    className="w-7 h-7 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Web Development</h3>
                <p className="text-gray-400">
                  Custom web applications built with modern technologies like
                  React, Next.js, and Node.js. Focus on performance,
                  scalability, and user experience.
                </p>
              </motion.div>

              {/* UI/UX Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.3 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] rounded-lg p-8 hover:bg-white/[0.1] transition-colors border border-white/[0.05]"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    className="w-7 h-7 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h6a1 1 0 011 1v6a1 1 0 01-1 1H5a1 1 0 01-1-1v-6zM16 13a1 1 0 011-1h2a1 1 0 011 1v6a1 1 0 01-1 1h-2a1 1 0 01-1-1v-6z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">UI/UX Design</h3>
                <p className="text-gray-400">
                  Beautiful, intuitive interfaces designed with user experience
                  in mind. From wireframes to high-fidelity prototypes and
                  design systems.
                </p>
              </motion.div>

              {/* Mobile Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] rounded-lg p-8 hover:bg-white/[0.1] transition-colors border border-white/[0.05]"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    className="w-7 h-7 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Mobile Development</h3>
                <p className="text-gray-400">
                  Cross-platform mobile applications using React Native and
                  Flutter. Native-like performance with code reusability.
                </p>
              </motion.div>

              {/* API Development */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] rounded-lg p-8 hover:bg-white/[0.1] transition-colors border border-white/[0.05]"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    className="w-7 h-7 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">API Development</h3>
                <p className="text-gray-400">
                  Robust and scalable REST APIs built with Node.js and Express.
                  Secure, documented, and performance-optimized.
                </p>
              </motion.div>

              {/* Database Design */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] rounded-lg p-8 hover:bg-white/[0.1] transition-colors border border-white/[0.05]"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    className="w-7 h-7 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Database Design</h3>
                <p className="text-gray-400">
                  Efficient database architecture with SQL and NoSQL solutions.
                  Optimized queries and data structures for your needs.
                </p>
              </motion.div>

              {/* Cloud Services */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="group bg-white/[0.05] rounded-lg p-8 hover:bg-white/[0.1] transition-colors border border-white/[0.05]"
              >
                <div className="w-14 h-14 bg-blue-500/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
                  <svg
                    className="w-7 h-7 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
                    />
                  </svg>
                </div>
                <h3 className="text-xl font-bold mb-4">Cloud Services</h3>
                <p className="text-gray-400">
                  Cloud infrastructure setup and management using AWS, Google
                  Cloud, or Azure. Scalable and cost-effective solutions.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* My Work Section */}
        <section id="work" className="py-20 px-4 relative z-10">
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

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {/* Project 1 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Link
                  href="https://tax-app-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/tax-app.png"
                      alt="E-commerce Platform"
                      width={600}
                      height={400}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        E-commerce Platform
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        A modern e-commerce platform built with Next.js, Stripe,
                        and Tailwind CSS.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Next.js
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Stripe
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Tailwind
                        </span>
                      </div>
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
                className="group relative overflow-hidden rounded-lg"
              >
                <Link
                  href="https://expense-tracker-jnsn.vercel.app/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/expense-tracker.png"
                      alt="Social Media Dashboard"
                      width={600}
                      height={400}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        Social Media Dashboard
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Real-time social media analytics dashboard with data
                        visualization.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          React
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          D3.js
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Firebase
                        </span>
                      </div>
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
                className="group relative overflow-hidden rounded-lg"
              >
                <Link
                  href="https://ai-chat-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/project3.jpg"
                      alt="AI Chat Application"
                      width={600}
                      height={400}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        AI Chat Application
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Real-time chat application with AI-powered responses and
                        language translation.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          TypeScript
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          OpenAI
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          WebSocket
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Project 4 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.5 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Link
                  href="https://fitness-app-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/project4.jpg"
                      alt="Fitness Tracking App"
                      width={600}
                      height={400}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        Fitness Tracking App
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Mobile-first fitness tracking application with workout
                        plans and progress tracking.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          React Native
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Redux
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Node.js
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Project 5 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.6 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Link
                  href="https://edu-platform-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/project5.jpg"
                      alt="Educational Platform"
                      width={600}
                      height={400}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        Educational Platform
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Online learning platform with video courses, quizzes,
                        and progress tracking.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Vue.js
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Django
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          PostgreSQL
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>

              {/* Project 6 */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.7 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-lg"
              >
                <Link
                  href="https://task-manager-demo.vercel.app"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <div className="relative aspect-video overflow-hidden">
                    <Image
                      src="/images/project6.jpg"
                      alt="Task Management Tool"
                      width={600}
                      height={400}
                      className="object-cover transform group-hover:scale-110 transition-transform duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    <div className="absolute inset-0 p-6 flex flex-col justify-end opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <h3 className="text-xl font-bold mb-2">
                        Task Management Tool
                      </h3>
                      <p className="text-gray-300 text-sm mb-4">
                        Collaborative task management tool with real-time
                        updates and team features.
                      </p>
                      <div className="flex gap-2">
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Angular
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          Express
                        </span>
                        <span className="px-3 py-1 bg-blue-500/20 rounded-full text-xs text-blue-300">
                          MongoDB
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.8 }}
              viewport={{ once: true }}
              className="text-center mt-12"
            >
              <Link
                href="https://github.com/yourusername"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-full bg-white/10 hover:bg-white/20 transition-all hover:scale-105 border border-white/10"
              >
                View More Projects →
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
}

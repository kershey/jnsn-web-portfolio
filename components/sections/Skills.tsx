'use client';

import { motion } from 'framer-motion';
import { Code2, Database, GitBranch } from 'lucide-react';
import { FaReact, FaGithub } from 'react-icons/fa';
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandFramerMotion,
  TbBrandVscode,
} from 'react-icons/tb';
import { IoLogoVercel } from 'react-icons/io5';
import Image from 'next/image';

export default function Skills() {
  return (
    <section id="skills" className="py-16 md:py-20 px-4 relative z-10">
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
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Here are the technologies and tools I specialize in, continuously
            learning and applying to create modern web solutions.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">
          {/* Frontend */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            viewport={{ once: true }}
            className="group bg-white/[0.05] dark:bg-white/[0.05] bg-gray-100/50 rounded-lg p-8 hover:bg-gray-200/50 dark:hover:bg-white/[0.1] transition-colors border border-gray-200 dark:border-white/[0.05]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Code2 className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-blue-500">Frontend</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <TbBrandNextjs className="w-6 h-6 dark:text-white text-black" />
                Next.js
              </li>
              <li className="flex items-center gap-3">
                <FaReact className="w-6 h-6 text-[#61DAFB]" />
                React.js
              </li>
              <li className="flex items-center gap-3">
                <TbBrandTypescript className="w-6 h-6 text-[#3178C6]" />
                TypeScript
              </li>
              <li className="flex items-center gap-3">
                <TbBrandTailwind className="w-6 h-6 text-[#38BDF8]" />
                Tailwind CSS
              </li>
              <li className="flex items-center gap-3">
                <div className="p-1 bg-white rounded-md shadow-sm hover:shadow-md transition-shadow">
                  <Image
                    src="/shadcn.png"
                    alt="Shadcn UI"
                    width={20}
                    height={20}
                    className="w-5 h-5"
                  />
                </div>
                Shadcn UI
              </li>
              <li className="flex items-center gap-3">
                <TbBrandFramerMotion className="w-6 h-6 text-[#FF5757]" />
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
            className="group bg-white/[0.05] dark:bg-white/[0.05] bg-gray-100/50 rounded-lg p-8 hover:bg-gray-200/50 dark:hover:bg-white/[0.1] transition-colors border border-gray-200 dark:border-white/[0.05]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <Database className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-blue-500">Backend</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Image
                  src="/supabase.svg"
                  alt="Supabase"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
                Supabase
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/neondb.png"
                  alt="NeonDB"
                  width={28}
                  height={28}
                  className="w-7 h-7"
                />
                NeonDB
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/prisma.svg"
                  alt="PrismaORM"
                  width={28}
                  height={28}
                  className="w-7 h-7 bg-white rounded-sm"
                />
                Prisma ORM
              </li>
              <li className="flex items-center gap-3">
                <Image
                  src="/drizzle.png"
                  alt="DrizzleORM"
                  width={28}
                  height={28}
                  className="w-7 h-7"
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
            className="group bg-white/[0.05] dark:bg-white/[0.05] bg-gray-100/50 rounded-lg p-8 hover:bg-gray-200/50 dark:hover:bg-white/[0.1] transition-colors border border-gray-200 dark:border-white/[0.05]"
          >
            <div className="flex items-center gap-4 mb-6">
              <div className="p-3 bg-blue-500/10 rounded-lg">
                <GitBranch className="w-6 h-6 text-blue-500" />
              </div>
              <h3 className="text-xl font-bold text-blue-500">Tools</h3>
            </div>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-center gap-3">
                <Image
                  src="/logo.svg"
                  alt="Cursor AI"
                  width={24}
                  height={24}
                  className="w-6 h-6"
                  priority
                />
                Cursor AI
              </li>
              <li className="flex items-center gap-3">
                <FaGithub className="w-6 h-6 dark:text-white text-black" />
                Git & GitHub
              </li>
              <li className="flex items-center gap-3">
                <TbBrandVscode className="w-6 h-6 text-[#007ACC]" />
                VS Code
              </li>
              <li className="flex items-center gap-3">
                <IoLogoVercel className="w-6 h-6 dark:text-white text-black" />
                Vercel
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

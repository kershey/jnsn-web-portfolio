'use client';

import { motion } from 'framer-motion';
import { Code2, Database, GitBranch } from 'lucide-react';
import { FaReact, FaNodeJs, FaGithub, FaServer } from 'react-icons/fa';
import { SiExpress } from 'react-icons/si';
import {
  TbBrandNextjs,
  TbBrandTypescript,
  TbBrandTailwind,
  TbBrandFramerMotion,
  TbBrandMongodb,
  TbBrandVscode,
  TbBrandVercel,
} from 'react-icons/tb';
import Image from 'next/image';

export default function Skills() {
  return (
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
            Here are the technologies and tools I specialize in, continuously
            learning and applying to create modern web solutions.
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
  );
}

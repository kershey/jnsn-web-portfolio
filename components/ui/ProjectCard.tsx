import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

interface ProjectCardProps {
  title: string;
  description: string;
  image: string;
  link: string;
  technologies: string[];
}

export default function ProjectCard({
  title,
  description,
  image,
  link,
  technologies,
}: ProjectCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
      className="group bg-white/[0.05] backdrop-blur-sm border border-white/[0.05] rounded-xl overflow-hidden hover:bg-white/[0.1] transition-all duration-300 hover:-translate-y-1"
    >
      <Link
        href={link}
        target="_blank"
        rel="noopener noreferrer"
        className="block"
      >
        <div className="relative">
          <div className="aspect-video overflow-hidden">
            <Image
              src={image}
              alt={title}
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
          <h3 className="text-xl font-bold mb-3 text-foreground group-hover:text-blue-400 transition-colors">
            {title}
          </h3>
          <p className="text-gray-600 dark:text-gray-400 text-sm mb-6 flex-1">
            {description}
          </p>
          <div className="flex flex-wrap gap-2 mt-auto">
            {technologies.map((tech) => (
              <span
                key={tech}
                className="px-3 py-1 bg-blue-500/10 border border-blue-500/20 dark:border-blue-500/20 rounded-full text-xs text-blue-600 dark:text-blue-300"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

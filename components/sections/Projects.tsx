import { motion } from 'framer-motion';
import ProjectCard from '../ui/ProjectCard';
import { projects } from '@/constants/data';

export default function Projects() {
  return (
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
          <p className="text-gray-800 dark:text-gray-400 max-w-2xl mx-auto">
            Here are some of my recent projects that showcase my skills and
            experience in web development and design.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
}

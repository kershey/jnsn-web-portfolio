import Image from 'next/image';
import { motion } from 'framer-motion';

export default function About() {
  return (
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
            <h3 className="text-2xl font-bold mb-4">Next.js Stack Developer</h3>
            <p className="text-gray-800 dark:text-gray-400">
              Hello! I&apos;m Jensen, a passionate Full Stack Developer and
              aspiring Software Engineer based in the Philippines. As a 4th year
              IT student, I combine my academic knowledge with practical
              development experience to create web solutions that are both
              functional and user-friendly. With a persevering spirit and
              determination to excel, I&apos;m always eager to embrace new
              technologies and expand my technical expertise.
            </p>
            <p className="text-gray-800 dark:text-gray-400">
              My journey in web development began during my university studies,
              where my curiosity about web technologies led me to dive deep into
              modern frameworks and development practices. I&apos;ve dedicated
              countless hours to self-study, exploring the latest web
              technologies, frameworks, and industry best practices through
              online courses, documentation, and hands-on projects. This
              self-driven learning approach, combined with my academic
              foundation and unwavering determination to learn new tech stacks,
              has enabled me to stay current with rapidly evolving web
              development trends and deliver modern, efficient solutions.
            </p>
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="col-span-2">
                <h4 className="font-bold mb-2">Skills</h4>
                <div className="grid grid-cols-2 gap-x-4">
                  <ul className="space-y-2 text-gray-800 dark:text-gray-400">
                    <li>• Next.js</li>
                    <li>• React</li>
                    <li>• TypeScript</li>
                    <li>• Tailwind CSS</li>
                    <li>• Framer Motion</li>
                    <li>• Shadcn UI</li>
                  </ul>
                  <ul className="space-y-2 text-gray-800 dark:text-gray-400">
                    <li>• Drizzle ORM</li>
                    <li>• Prisma ORM</li>
                    <li>• Supabase</li>
                    <li>• NeonDB</li>
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
            <p className="text-gray-800 dark:text-gray-400">
              Months Experience
            </p>
          </div>
          <div className="text-center">
            <h3 className="text-3xl font-bold text-blue-500">3+</h3>
            <p className="text-gray-800 dark:text-gray-400">
              Projects Completed
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

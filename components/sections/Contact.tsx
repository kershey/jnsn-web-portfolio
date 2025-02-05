import { motion } from 'framer-motion';
import { FaGithub, FaFacebook, FaFileDownload } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';

export default function Contact() {
  return (
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
            Connect with <span className="text-blue-500">Me</span>
          </h2>
          <div className="w-24 h-1 bg-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            Feel free to reach out to me for collaborations or just a friendly
            chat. I&apos;m always open to discussing new projects and
            opportunities.
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
              Don&apos;t like forms? Send me an email directly or connect with
              me on social media. I&apos;ll get back to you as soon as possible.
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
                    href="https://mail.google.com/mail/?view=cm&fs=1&to=jnsnaragon01@gmail.com&su=Hello&body=How+are+you%3F"
                    target="_blank"
                    className="text-blue-500 hover:text-blue-400"
                  >
                    jnsnaragon01@gmail.com
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
                href="https://github.com/kershey"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/[0.05] rounded-lg hover:bg-white/[0.1] transition-colors"
              >
                <FaGithub className="w-6 h-6" />
                <span>GitHub</span>
              </a>
              <a
                href="https://www.facebook.com/jnsnkrshy"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/[0.05] rounded-lg hover:bg-white/[0.1] transition-colors"
              >
                <FaFacebook className="w-6 h-6 text-[#1877F2]" />
                <span>Facebook</span>
              </a>
              <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=jnsnaragon01@gmail.com&su=Hello&body=How+are+you%3F"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/[0.05] rounded-lg hover:bg-white/[0.1] transition-colors"
              >
                <MdEmail className="w-6 h-6 text-[#EA4335]" />
                <span>Gmail</span>
              </a>
              <a
                href="https://drive.google.com/file/d/1-bL6TZiv0t0A-izORQ-rFkcUYC55axwg/view?usp=sharing"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 bg-white/[0.05] rounded-lg hover:bg-white/[0.1] transition-colors"
              >
                <FaFileDownload className="w-6 h-6 text-green-500" />
                <span>Resume</span>
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-8 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
          Get In Touch
        </span>
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="bg-white/5 rounded-2xl p-8 md:p-12 border border-white/10"
      >
        <p className="text-gray-300 text-center text-lg mb-8">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions. Feel free to reach out!
        </p>
        
        <div className="flex flex-col items-center space-y-6">
          <motion.a
            href="mailto:abdulqaderdost@yahoo.com"
            whileHover={{ scale: 1.05, y: -2 }}
            whileTap={{ scale: 0.95 }}
            className="flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-pink-500/50"
          >
            <Mail className="w-5 h-5" />
            Send Email
          </motion.a>
          
          <div className="flex gap-4 pt-4">
            <motion.a
              href="https://github.com/abeddost"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: 5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-lg hover:bg-pink-500/20 transition-colors"
              aria-label="GitHub"
            >
              <Github className="w-5 h-5 text-gray-300" />
            </motion.a>
            <motion.a
              href="https://linkedin.com/in/abdulqaderdost"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.2, rotate: -5 }}
              whileTap={{ scale: 0.9 }}
              className="p-3 bg-white/10 rounded-lg hover:bg-pink-500/20 transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin className="w-5 h-5 text-gray-300" />
            </motion.a>
          </div>
        </div>
      </motion.div>
      
      {/* Footer */}
      <motion.footer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.4 }}
        className="mt-16 text-center text-gray-400 text-sm"
      >
        <p>© 2025 Abdul Qader Dost. All rights reserved.</p>
        <p className="mt-2">Built with Next.js & Tailwind CSS • Deployed on Vercel</p>
      </motion.footer>
    </div>
  );
}


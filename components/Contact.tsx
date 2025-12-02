'use client';

import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, Instagram } from 'lucide-react';
import { useState, FormEvent } from 'react';

export default function Contact() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const subject = `New message from ${name || 'portfolio visitor'}`;
    const body = `Name: ${name || 'N/A'}\nEmail: ${email || 'N/A'}\n\nMessage:\n${message}`;
    const mailto = `mailto:abdulqaderdost@yahoo.com?subject=${encodeURIComponent(
      subject
    )}&body=${encodeURIComponent(body)}`;

    window.location.href = mailto;
  };

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
        <p className="text-gray-300 text-center text-lg mb-10">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of your visions.
          Use the form below or reach out via social links.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-[minmax(0,2fr)_minmax(0,1fr)] gap-10 items-start">
          {/* Contact form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="name" className="block text-sm font-medium text-gray-200">
                Name
              </label>
              <input
                id="name"
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/70 focus:border-pink-500/70"
                placeholder="Your name"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                id="email"
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/70 focus:border-pink-500/70"
                placeholder="you@example.com"
              />
            </div>

            <div className="space-y-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-200">
                Message
              </label>
              <textarea
                id="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                required
                rows={5}
                className="w-full rounded-lg bg-black/30 border border-white/10 px-4 py-3 text-gray-100 placeholder:text-gray-500 focus:outline-none focus:ring-2 focus:ring-pink-500/70 focus:border-pink-500/70 resize-none"
                placeholder="Tell me a bit about your project or question..."
              />
            </div>

            <motion.button
              type="submit"
              whileHover={{ scale: 1.03, y: -1 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center justify-center gap-2 w-full md:w-auto px-6 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-pink-500/40"
            >
              <Mail className="w-5 h-5" />
              Send Message
            </motion.button>
          </form>

          {/* Social links */}
          <div className="flex flex-col items-center md:items-start space-y-6">
            <p className="text-gray-300 text-center md:text-left">
              Prefer to reach out directly? You can email me or find me on these platforms:
            </p>

            <motion.a
              href="mailto:abdulqaderdost@yahoo.com"
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              className="flex items-center gap-3 px-5 py-3 bg-white/10 text-white font-semibold rounded-lg hover:bg-pink-500/70 transition-all duration-300"
            >
              <Mail className="w-5 h-5" />
              abdulqaderdost@yahoo.com
            </motion.a>

            <div className="flex gap-4 pt-2">
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
              <motion.a
                href="https://instagram.com/abeddostt"
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.2, rotate: 5 }}
                whileTap={{ scale: 0.9 }}
                className="p-3 bg-white/10 rounded-lg hover:bg-pink-500/20 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-5 h-5 text-gray-300" />
              </motion.a>
            </div>
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


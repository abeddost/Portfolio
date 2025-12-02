'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function About() {
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
          About Me
        </span>
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300 leading-relaxed"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          I'm <motion.span 
            className="text-pink-500 font-semibold inline-block"
            animate={{ scale: [1, 1.05, 1] }}
            transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
          >Abdul Qader Dost</motion.span>, an Electrical and Electronics Engineer with a strong focus on <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-400 font-semibold">AI, Machine Learning</span>, and building modern digital applications. After completing my bachelor's thesis on license plate detection using machine learning and Raspberry Pi, I continued strengthening my foundation through the <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-blue-400 font-semibold">MIT Emerging Talent Program</span>.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Over the past years, I've helped several businesses in Germany become digitalized by building professional, user-friendly websites and tools tailored to their operations. This includes working with car-selling companies and developing platforms that simplify and automate real business workflows. I've created invoice generators, business websites, and data-driven applications that improve efficiency and customer experience. You can explore my <Link href="#projects" className="text-pink-500 hover:text-pink-400 underline transition-colors">projects</Link> and <Link href="#portfolio" className="text-pink-500 hover:text-pink-400 underline transition-colors">certifications</Link> to see examples of my work.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          At the moment, I'm working on{' '}
          <Link 
            href="https://mein-auto24.vercel.app/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block"
          >
            <motion.span 
              className="text-pink-500 font-semibold"
              animate={{ scale: [1, 1.05, 1] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut', delay: 0.5 }}
            >
              meinautopreis24
            </motion.span>
          </Link>
          {' '}— a platform designed to make the car-selling process faster and more convenient by connecting car owners with a network of trusted dealers. My goal is to build solutions that feel smooth, intuitive, reliable, and emotionally engaging.
        </motion.p>
        
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm transitioning into a <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-400 to-blue-400 font-semibold">Machine Learning Engineering</span> career and planning to pursue a Master's in Computer Science with a focus on AI. I enjoy turning ideas into real, polished products and building technology that makes people's lives easier.
        </motion.p>
      </motion.div>
    </div>
  );
}


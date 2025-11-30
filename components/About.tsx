'use client';

import { motion } from 'framer-motion';

export default function About() {
  return (
    <div className="max-w-4xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-8 text-center"
      >
        About Me
      </motion.h2>
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="prose prose-invert prose-lg max-w-none space-y-6 text-gray-300 leading-relaxed"
      >
        <p>
          I'm <span className="text-pink-500 font-semibold">Abdul Qader Dost</span>, an Electrical and Electronics Engineer with a strong focus on <span className="text-pink-500 font-semibold">AI, Machine Learning</span>, and building modern digital applications. After completing my bachelor's thesis on license plate detection using machine learning and Raspberry Pi, I continued strengthening my foundation through the <span className="text-pink-500 font-semibold">MIT Emerging Talent Program</span>.
        </p>
        
        <p>
          Over the past years, I've helped several businesses in Germany become digitalized by building professional, user-friendly websites and tools tailored to their operations. This includes working with car-selling companies and developing platforms that simplify and automate real business workflows. I've created invoice generators, business websites, and data-driven applications that improve efficiency and customer experience.
        </p>
        
        <p>
          At the moment, I'm working on <span className="text-pink-500 font-semibold">meinautopreis24</span> — a platform designed to make the car-selling process faster and more convenient by connecting car owners with a network of trusted dealers. My goal is to build solutions that feel smooth, intuitive, reliable, and emotionally engaging.
        </p>
        
        <p>
          I'm transitioning into a <span className="text-pink-500 font-semibold">Machine Learning Engineering</span> career and planning to pursue a Master's in Computer Science with a focus on AI. I enjoy turning ideas into real, polished products and building technology that makes people's lives easier.
        </p>
      </motion.div>
    </div>
  );
}


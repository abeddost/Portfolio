'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Hero() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        {/* Left side - Text content */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-tight"
          >
            Hello, I'm{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">
              Abdul Qader Dost
            </span>
          </motion.h1>
          
          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-2xl md:text-3xl text-gray-300 font-semibold"
          >
            Fullstack Developer
          </motion.h2>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl"
          >
            Turning Ideas into Digital Reality: Abdul Qader Dost, a Fullstack Developer passionate about building complete, scalable, and user-focused solutions from front to back.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="flex flex-wrap gap-4 pt-4"
          >
            <Link
              href="#projects"
              className="px-8 py-3 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-8 py-3 border-2 border-pink-500 text-pink-500 font-semibold rounded-lg hover:bg-pink-500 hover:text-white transition-all duration-300"
            >
              Contact Me
            </Link>
          </motion.div>
        </motion.div>

        {/* Right side - Visual element */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative"
        >
          <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-pink-500/20 to-purple-500/20 p-8 backdrop-blur-sm border border-pink-500/30">
            <div className="absolute inset-0 bg-gradient-to-br from-pink-500/10 to-purple-500/10 animate-pulse"></div>
            <div className="relative z-10 space-y-4">
              <div className="h-4 bg-pink-500/30 rounded w-3/4"></div>
              <div className="h-4 bg-purple-500/30 rounded w-1/2"></div>
              <div className="h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg mt-4"></div>
              <div className="flex gap-2">
                <div className="h-8 bg-pink-500/30 rounded w-24"></div>
                <div className="h-8 bg-purple-500/30 rounded w-24"></div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}


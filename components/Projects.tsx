'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';
import { projects } from '@/lib/projects';
import ProjectSlideshow from './projects/ProjectSlideshow';

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold mb-10 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
          Projects
        </span>
      </motion.h2>

      <ProjectSlideshow projects={projects} />

      <div className="mt-12 flex justify-center">
        <Link
          href="/projects"
          className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105 will-change-transform"
        >
          See all projects
          <ArrowRight className="w-4 h-4" />
        </Link>
      </div>
    </div>
  );
}

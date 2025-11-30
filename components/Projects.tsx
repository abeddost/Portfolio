'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'MeinAutoPreis24',
    url: 'https://mein-auto24.vercel.app/',
    description: 'A comprehensive car selling platform that connects car owners with trusted dealers. Features a multi-step form for car valuation, secure data handling, and streamlined car selling process. Designed to make selling cars fast, fair, and stress-free with instant payment options and flexible pickup arrangements.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Form Handling', 'Responsive Design'],
    gradient: 'from-pink-500/20 to-purple-500/20',
  },
  {
    name: 'QalinSara',
    url: 'https://qalinsara.vercel.app/',
    description: 'A business platform designed for streamlined operations and customer engagement. Built with modern web technologies to provide a smooth user experience and efficient business workflows.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'H&F Autohaus',
    url: 'https://hf-autos.de/',
    description: 'Professional car dealership website for H&F Autohaus in Bodenheim. Features vehicle listings, service information, and contact forms. Built to showcase the dealership\'s inventory and services with a clean, professional design.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO Optimization'],
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Qalin Sara Invoice Generator',
    url: 'https://qalin-sara-invoice-generator.vercel.app/',
    description: 'An invoice generation tool that automates the creation of professional invoices. Simplifies billing processes for businesses with customizable templates and easy-to-use interface.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PDF Generation'],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    name: 'QASR Invoice Generator',
    url: 'https://qasr-invoice-generator.vercel.app/',
    description: 'Another invoice generation platform with enhanced features for business invoicing. Provides efficient invoice management and generation capabilities for various business needs.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Invoice Management'],
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    name: 'Data Strikers',
    url: 'https://datastrikers.netlify.app/',
    description: 'A data-driven application focused on analytics and data visualization. Built to help businesses make informed decisions through comprehensive data analysis and insights.',
    techStack: ['React', 'JavaScript', 'Data Visualization', 'Analytics'],
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    name: 'Transalyze',
    url: 'https://transalyze.netlify.app/',
    description: 'A translation and analysis platform that provides language translation services with advanced analysis features. Designed to help users understand and process multilingual content efficiently.',
    techStack: ['React', 'JavaScript', 'Translation APIs', 'Text Analysis'],
    gradient: 'from-teal-500/20 to-cyan-500/20',
  },
];

export default function Projects() {
  return (
    <div className="max-w-7xl mx-auto">
      <motion.h2
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
      >
        Projects
      </motion.h2>
      
      <div className="space-y-12">
        {projects.map((project, index) => (
          <motion.div
            key={project.name}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center"
          >
            {/* Left side - Visual card */}
            <div className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} p-8 backdrop-blur-sm border border-white/10`}>
              <div className="absolute inset-0 bg-gradient-to-br from-black/20 to-transparent"></div>
              <div className="relative z-10">
                <div className="h-48 bg-white/5 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-4xl font-bold text-white/30">{project.name.charAt(0)}</span>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-white/10 rounded w-3/4"></div>
                  <div className="h-3 bg-white/10 rounded w-1/2"></div>
                </div>
              </div>
            </div>

            {/* Right side - Description */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <h3 className="text-2xl md:text-3xl font-bold text-white">
                  {project.name}
                </h3>
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-pink-500 hover:text-pink-400 transition-colors"
                  aria-label={`Visit ${project.name}`}
                >
                  <ExternalLink className="w-5 h-5" />
                </Link>
              </div>
              
              <p className="text-gray-300 leading-relaxed">
                {project.description}
              </p>
              
              <div className="flex flex-wrap gap-2 pt-2">
                {project.techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              
              <Link
                href={project.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 transform hover:scale-105"
              >
                Visit Live
                <ExternalLink className="w-4 h-4" />
              </Link>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


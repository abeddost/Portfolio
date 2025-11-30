'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';
import Image from 'next/image';
import { ExternalLink } from 'lucide-react';

const projects = [
  {
    name: 'MeinAutoPreis24',
    url: 'https://mein-auto24.vercel.app/',
    screenshot: '/project-screenshots/mein-auto24.png',
    description: 'A comprehensive car selling platform that connects car owners with trusted dealers. Features a multi-step form for car valuation, secure data handling, and streamlined car selling process. Designed to make selling cars fast, fair, and stress-free with instant payment options and flexible pickup arrangements.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Form Handling', 'Responsive Design'],
    gradient: 'from-pink-500/20 to-purple-500/20',
  },
  {
    name: 'QalinSara',
    url: 'https://qalinsara.vercel.app/',
    screenshot: '/project-screenshots/qalinsara.png',
    description: 'A business platform designed for streamlined operations and customer engagement. Built with modern web technologies to provide a smooth user experience and efficient business workflows.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS'],
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    name: 'H&F Autohaus',
    url: 'https://hf-autos.de/',
    screenshot: '/project-screenshots/hf-autos.png',
    description: 'Professional car dealership website for H&F Autohaus in Bodenheim. Features vehicle listings, service information, and contact forms. Built to showcase the dealership\'s inventory and services with a clean, professional design.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'SEO Optimization'],
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    name: 'Qalin Sara Invoice Generator',
    url: 'https://qalin-sara-invoice-generator.vercel.app/',
    screenshot: '/project-screenshots/qalin-sara-invoice.png',
    description: 'An invoice generation tool that automates the creation of professional invoices. Simplifies billing processes for businesses with customizable templates and easy-to-use interface.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'PDF Generation'],
    gradient: 'from-orange-500/20 to-red-500/20',
  },
  {
    name: 'QASR Invoice Generator',
    url: 'https://qasr-invoice-generator.vercel.app/',
    screenshot: '/project-screenshots/qasr-invoice.png',
    description: 'Another invoice generation platform with enhanced features for business invoicing. Provides efficient invoice management and generation capabilities for various business needs.',
    techStack: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Invoice Management'],
    gradient: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    name: 'Data Strikers',
    url: 'https://datastrikers.netlify.app/',
    screenshot: '/project-screenshots/datastrikers.png',
    description: 'A data-driven application focused on analytics and data visualization. Built to help businesses make informed decisions through comprehensive data analysis and insights.',
    techStack: ['React', 'JavaScript', 'Data Visualization', 'Analytics'],
    gradient: 'from-indigo-500/20 to-purple-500/20',
  },
  {
    name: 'Transalyze',
    url: 'https://transalyze.netlify.app/',
    screenshot: '/project-screenshots/transalyze.png',
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
        className="text-4xl md:text-5xl font-bold mb-12 text-center"
      >
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
          Projects
        </span>
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
            {/* Left side - Project Screenshot */}
            <motion.div 
              className={`relative rounded-2xl overflow-hidden bg-gradient-to-br ${project.gradient} backdrop-blur-sm border border-white/10 group`}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, y: -5 }}
            >
              <div className={`absolute inset-0 bg-gradient-to-br ${project.gradient} opacity-50`}></div>
              <div className="relative z-10 p-2">
                <div className="relative h-64 md:h-80 rounded-lg overflow-hidden bg-black/20">
                  {project.screenshot ? (
                    <Image
                      src={project.screenshot}
                      alt={`${project.name} screenshot`}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                      sizes="(max-width: 768px) 100vw, 50vw"
                      onError={(e) => {
                        // Fallback to placeholder if image doesn't exist
                        const target = e.target as HTMLImageElement;
                        target.style.display = 'none';
                        const fallback = target.nextElementSibling as HTMLElement;
                        if (fallback) fallback.style.display = 'flex';
                      }}
                    />
                  ) : null}
                  <div 
                    className="h-full w-full bg-gradient-to-br from-gray-800/50 to-gray-900/50 flex items-center justify-center"
                    style={{ display: project.screenshot ? 'none' : 'flex' }}
                  >
                    <div className="text-center space-y-4">
                      <div className="w-20 h-20 mx-auto bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-lg flex items-center justify-center">
                        <span className="text-4xl font-bold text-white/30">{project.name.charAt(0)}</span>
                      </div>
                      <p className="text-white/40 text-sm">Screenshot coming soon</p>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                </div>
              </div>
              <div className="absolute inset-0 border-2 border-transparent group-hover:border-pink-500/50 rounded-2xl transition-colors duration-300"></div>
              <div className="absolute -inset-1 bg-gradient-to-r from-pink-500/20 to-purple-500/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10"></div>
            </motion.div>

            {/* Right side - Description */}
            <motion.div 
              className="space-y-4"
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 + 0.2 }}
            >
              <div className="flex items-center gap-3">
                <motion.h3 
                  className="text-2xl md:text-3xl font-bold text-white"
                  whileHover={{ scale: 1.05 }}
                  transition={{ type: 'spring', stiffness: 400 }}
                >
                  {project.name}
                </motion.h3>
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
              
              <motion.div 
                className="flex flex-wrap gap-2 pt-2"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 + 0.4 }}
              >
                {project.techStack.map((tech, techIndex) => (
                  <motion.span
                    key={tech}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.3, delay: index * 0.1 + techIndex * 0.05 }}
                    whileHover={{ scale: 1.1, y: -2 }}
                    className="px-3 py-1 bg-white/10 text-gray-300 text-sm rounded-full border border-white/20 hover:border-pink-500/50 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </motion.div>
              
              <motion.div
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <Link
                  href={project.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-6 py-2 bg-gradient-to-r from-pink-500 to-purple-500 text-white font-semibold rounded-lg hover:from-pink-600 hover:to-purple-600 transition-all duration-300 shadow-lg shadow-pink-500/50"
                >
                  Visit Live
                  <ExternalLink className="w-4 h-4" />
                </Link>
              </motion.div>
            </motion.div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


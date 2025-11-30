'use client';

import { motion } from 'framer-motion';

const techCategories = [
  {
    title: 'Frontend',
    technologies: [
      'React.js',
      'Next.js',
      'HTML5, CSS3',
      'Tailwind CSS',
      'JavaScript (ES6+)',
    ],
    color: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    title: 'Backend & APIs',
    technologies: [
      'Node.js',
      'Express.js',
      'Integration with AI APIs (Gemini, OpenAI)',
    ],
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'Machine Learning',
    technologies: [
      'Python',
      'NumPy, Pandas',
      'Scikit-learn',
      'TensorFlow / PyTorch',
    ],
    color: 'from-purple-500/20 to-pink-500/20',
  },
  {
    title: 'Databases',
    technologies: [
      'MongoDB',
      'Firebase',
      'PostgreSQL',
    ],
    color: 'from-orange-500/20 to-red-500/20',
  },
  {
    title: 'Tools & DevOps',
    technologies: [
      'Git & GitHub',
      'Vercel',
      'Netlify',
      'Docker',
    ],
    color: 'from-yellow-500/20 to-orange-500/20',
  },
  {
    title: 'Other Skills',
    technologies: [
      'UI/UX with emotional design principles',
      'Data analysis',
      'SEO optimization',
      'Building production-ready web apps',
    ],
    color: 'from-indigo-500/20 to-purple-500/20',
  },
];

export default function TechStack() {
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
          Tech Stack
        </span>
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            className={`bg-gradient-to-br ${category.color} rounded-xl p-6 border border-white/10 hover:border-pink-500/50 transition-all duration-300 shadow-lg hover:shadow-pink-500/20`}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.technologies.map((tech, techIndex) => (
                <motion.li
                  key={tech}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.1 + techIndex * 0.05 }}
                  whileHover={{ x: 5, scale: 1.05 }}
                  className="text-gray-300 text-sm flex items-center gap-2 cursor-default"
                >
                  <motion.span 
                    className="w-1.5 h-1.5 bg-pink-500 rounded-full"
                    animate={{ scale: [1, 1.3, 1], opacity: [1, 0.7, 1] }}
                    transition={{ duration: 2, repeat: Infinity, delay: techIndex * 0.2 }}
                  ></motion.span>
                  {tech}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


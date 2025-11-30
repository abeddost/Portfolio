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
        className="text-4xl md:text-5xl font-bold text-white mb-12 text-center"
      >
        Tech Stack
      </motion.h2>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {techCategories.map((category, index) => (
          <motion.div
            key={category.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.1 }}
            className={`bg-gradient-to-br ${category.color} rounded-xl p-6 border border-white/10 hover:border-white/20 transition-all duration-300`}
          >
            <h3 className="text-xl font-bold text-white mb-4">
              {category.title}
            </h3>
            <ul className="space-y-2">
              {category.technologies.map((tech) => (
                <li
                  key={tech}
                  className="text-gray-300 text-sm flex items-center gap-2"
                >
                  <span className="w-1.5 h-1.5 bg-pink-500 rounded-full"></span>
                  {tech}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


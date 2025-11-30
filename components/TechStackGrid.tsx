'use client';

import { motion } from 'framer-motion';
import {
  HTML5Icon,
  CSS3Icon,
  JavaScriptIcon,
  TailwindIcon,
  ExpressIcon,
  NodeJSIcon,
  ReactIcon,
  MongoIcon,
  JWTIcon,
  PostgresIcon,
  TypeScriptIcon,
  DockerIcon,
  NextJSIcon,
  PythonIcon,
  GitIcon,
  FirebaseIcon,
  TensorFlowIcon,
  PyTorchIcon,
} from './TechIcons';

const technologies = [
  {
    name: 'HTML5',
    Icon: HTML5Icon,
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-500/30',
    glowColor: 'shadow-orange-500/50',
  },
  {
    name: 'CSS3',
    Icon: CSS3Icon,
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/50',
  },
  {
    name: 'JavaScript',
    Icon: JavaScriptIcon,
    bgColor: 'bg-yellow-400/20',
    borderColor: 'border-yellow-400/30',
    glowColor: 'shadow-yellow-400/50',
  },
  {
    name: 'Tailwind CSS',
    Icon: TailwindIcon,
    bgColor: 'bg-cyan-400/20',
    borderColor: 'border-cyan-400/30',
    glowColor: 'shadow-cyan-400/50',
  },
  {
    name: 'Express.js',
    Icon: ExpressIcon,
    bgColor: 'bg-purple-500/20',
    borderColor: 'border-purple-500/30',
    glowColor: 'shadow-purple-500/50',
  },
  {
    name: 'Node.js',
    Icon: NodeJSIcon,
    bgColor: 'bg-green-500/20',
    borderColor: 'border-green-500/30',
    glowColor: 'shadow-green-500/50',
  },
  {
    name: 'React',
    Icon: ReactIcon,
    bgColor: 'bg-cyan-400/20',
    borderColor: 'border-cyan-400/30',
    glowColor: 'shadow-cyan-400/50',
  },
  {
    name: 'MongoDB',
    Icon: MongoIcon,
    bgColor: 'bg-green-400/20',
    borderColor: 'border-green-400/30',
    glowColor: 'shadow-green-400/50',
  },
  {
    name: 'JWT',
    Icon: JWTIcon,
    bgColor: 'bg-pink-500/20',
    borderColor: 'border-pink-500/30',
    glowColor: 'shadow-pink-500/50',
  },
  {
    name: 'PostgreSQL',
    Icon: PostgresIcon,
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/50',
  },
  {
    name: 'TypeScript',
    Icon: TypeScriptIcon,
    bgColor: 'bg-blue-500/20',
    borderColor: 'border-blue-500/30',
    glowColor: 'shadow-blue-500/50',
  },
  {
    name: 'Docker',
    Icon: DockerIcon,
    bgColor: 'bg-blue-400/20',
    borderColor: 'border-blue-400/30',
    glowColor: 'shadow-blue-400/50',
  },
  {
    name: 'Next.js',
    Icon: NextJSIcon,
    bgColor: 'bg-gray-700/20',
    borderColor: 'border-gray-700/30',
    glowColor: 'shadow-gray-700/50',
  },
  {
    name: 'Python',
    Icon: PythonIcon,
    bgColor: 'bg-yellow-400/20',
    borderColor: 'border-yellow-400/30',
    glowColor: 'shadow-yellow-400/50',
  },
  {
    name: 'Git & GitHub',
    Icon: GitIcon,
    bgColor: 'bg-gray-600/20',
    borderColor: 'border-gray-600/30',
    glowColor: 'shadow-gray-600/50',
  },
  {
    name: 'Firebase',
    Icon: FirebaseIcon,
    bgColor: 'bg-orange-400/20',
    borderColor: 'border-orange-400/30',
    glowColor: 'shadow-orange-400/50',
  },
  {
    name: 'TensorFlow',
    Icon: TensorFlowIcon,
    bgColor: 'bg-orange-500/20',
    borderColor: 'border-orange-500/30',
    glowColor: 'shadow-orange-500/50',
  },
  {
    name: 'PyTorch',
    Icon: PyTorchIcon,
    bgColor: 'bg-red-500/20',
    borderColor: 'border-red-500/30',
    glowColor: 'shadow-red-500/50',
  },
];

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
      {technologies.map((tech, index) => {
        const Icon = tech.Icon;
        
        return (
          <motion.div
            key={tech.name}
            initial={{ opacity: 0, scale: 0.8, y: 20 }}
            whileInView={{ opacity: 1, scale: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ 
              duration: 0.4, 
              delay: index * 0.05,
              type: 'spring',
              stiffness: 200,
              damping: 20
            }}
            whileHover={{ 
              scale: 1.15, 
              y: -10,
              rotate: [0, -3, 3, 0],
            }}
            className={`group relative ${tech.bgColor} rounded-xl p-4 md:p-6 border ${tech.borderColor} cursor-pointer transition-all duration-300`}
          >
            {/* Glow effect on hover */}
            <motion.div
              className={`absolute -inset-1 rounded-xl opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-300 ${tech.glowColor}`}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0, 0.5, 0],
              }}
              transition={{
                duration: 2,
                repeat: Infinity,
                ease: 'easeInOut',
              }}
            />
            
            {/* Icon container */}
            <motion.div
              className="relative z-10 w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 rounded-lg flex items-center justify-center shadow-lg overflow-hidden"
              animate={{
                y: [0, -5, 0],
              }}
              transition={{
                duration: 3 + index * 0.2,
                repeat: Infinity,
                ease: 'easeInOut',
                delay: index * 0.1,
              }}
              whileHover={{
                scale: 1.1,
                rotate: [0, 5, -5, 0],
              }}
            >
              <Icon className="w-full h-full" />
            </motion.div>
            
            {/* Technology name */}
            <motion.h3
              className="text-white text-xs md:text-sm font-semibold text-center relative z-10"
              whileHover={{ scale: 1.05 }}
            >
              {tech.name}
            </motion.h3>
            
            {/* Floating particles effect */}
            <div className="absolute inset-0 overflow-hidden rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              {[...Array(3)].map((_, i) => (
                <motion.div
                  key={i}
                  className={`absolute w-1 h-1 rounded-full ${tech.bgColor.replace('/20', '')}`}
                  initial={{
                    x: '50%',
                    y: '50%',
                    opacity: 0,
                  }}
                  animate={{
                    x: `${20 + i * 30}%`,
                    y: `${20 + i * 30}%`,
                    opacity: [0, 1, 0],
                    scale: [0, 1, 0],
                  }}
                  transition={{
                    duration: 2,
                    repeat: Infinity,
                    delay: i * 0.3,
                    ease: 'easeInOut',
                  }}
                />
              ))}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}


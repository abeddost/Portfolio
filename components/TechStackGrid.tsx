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
    name: 'HTML',
    Icon: HTML5Icon,
  },
  {
    name: 'CSS',
    Icon: CSS3Icon,
  },
  {
    name: 'JavaScript',
    Icon: JavaScriptIcon,
  },
  {
    name: 'Tailwind CSS',
    Icon: TailwindIcon,
  },
  {
    name: 'Express JS',
    Icon: ExpressIcon,
  },
  {
    name: 'Node JS',
    Icon: NodeJSIcon,
  },
  {
    name: 'React',
    Icon: ReactIcon,
  },
  {
    name: 'MongoDB',
    Icon: MongoIcon,
  },
  {
    name: 'JWT',
    Icon: JWTIcon,
  },
  {
    name: 'PostgreSQL',
    Icon: PostgresIcon,
  },
  {
    name: 'TypeScript',
    Icon: TypeScriptIcon,
  },
  {
    name: 'Docker',
    Icon: DockerIcon,
  },
  {
    name: 'Next.js',
    Icon: NextJSIcon,
  },
  {
    name: 'Python',
    Icon: PythonIcon,
  },
  {
    name: 'Git & GitHub',
    Icon: GitIcon,
  },
  {
    name: 'Firebase',
    Icon: FirebaseIcon,
  },
  {
    name: 'TensorFlow',
    Icon: TensorFlowIcon,
  },
  {
    name: 'PyTorch',
    Icon: PyTorchIcon,
  },
];

export default function TechStackGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 md:gap-6">
      {technologies.map((tech, index) => {
        const Icon = tech.Icon;
        
        return (
          <div
            key={tech.name}
            className="group relative bg-white/5 rounded-lg p-4 border border-white/10 cursor-pointer transition-all duration-200 hover:border-white/20 hover:scale-105"
          >
            {/* Icon container */}
            <div className="w-16 h-16 md:w-20 md:h-20 mx-auto mb-3 flex items-center justify-center">
              <Icon className="w-full h-full" />
            </div>
            
            {/* Technology name */}
            <h3 className="text-white text-xs md:text-sm font-medium text-center">
              {tech.name}
            </h3>
          </div>
        );
      })}
    </div>
  );
}

'use client';

import { motion } from 'framer-motion';
import type { Project } from '@/lib/projects';
import { BrowserFrame, PhoneFrame } from './DeviceFrames';

export default function ProjectRow({ project, index }: { project: Project; index: number }) {
  const imageOnRight = index % 2 === 1;
  const number = String(index + 1).padStart(2, '0');

  return (
    <motion.article
      id={project.slug}
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.6 }}
      className="grid scroll-mt-24 items-center gap-10 lg:grid-cols-[3fr_2fr] lg:gap-16"
    >
      {/* Screenshots */}
      <div className={`pb-[8%] pr-[4%] ${imageOnRight ? 'lg:order-2' : ''}`}>
        <div className="relative transition-transform duration-500 hover:-translate-y-2">
          <BrowserFrame
            src={project.desktop}
            alt={`${project.name} website on desktop`}
            domain={project.domain}
            priority={index === 0}
          />
          <div className="absolute -bottom-[10%] -right-[4%] w-[22%]">
            <PhoneFrame src={project.mobile} alt={`${project.name} website on mobile`} priority={index === 0} />
          </div>
        </div>
      </div>

      {/* Text */}
      <div className="space-y-4">
        <div className="flex items-center gap-4">
          <span className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500 md:text-6xl">
            {number}
          </span>
          <span className="h-px flex-1 bg-white/20" aria-hidden="true" />
          <span className="rounded-full border border-pink-500/40 bg-pink-500/10 px-3 py-1 text-sm text-pink-300">
            {project.kind}
          </span>
        </div>
        <h2 className="text-3xl font-bold text-white md:text-4xl">{project.name}</h2>
        <p className="text-xs uppercase tracking-[0.2em] text-gray-400">{project.sector}</p>
        <p className="leading-relaxed text-gray-300">{project.summary}</p>
        <ul className="flex flex-wrap gap-2 pt-1">
          {project.tags.map((tag) => (
            <li key={tag} className="rounded-full border border-white/20 bg-white/10 px-3 py-1 text-sm text-gray-300">
              {tag}
            </li>
          ))}
        </ul>
        <div className="flex flex-wrap gap-x-6 gap-y-2 pt-2 font-semibold">
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-pink-500 transition-colors hover:text-pink-400"
          >
            View project →
          </a>
          <a
            href={project.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 transition-colors hover:text-white"
          >
            Visit website ↗
          </a>
        </div>
      </div>
    </motion.article>
  );
}

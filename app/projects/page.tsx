import type { Metadata } from 'next';
import { projects } from '@/lib/projects';
import ProjectRow from '@/components/projects/ProjectRow';

export const metadata: Metadata = {
  title: 'Projects',
  description:
    'Client websites and personal projects by Abdul Qader Dost: car dealerships, local businesses, catalogues and AI tools built with Next.js and React.',
  alternates: {
    canonical: '/projects',
  },
};

export default function ProjectsPage() {
  return (
    <section className="min-h-screen px-4 pb-20 pt-28 sm:px-6 lg:px-8">
      <div className="mx-auto max-w-7xl">
        <header className="mb-16 text-center md:mb-24">
          <h1 className="mb-4 text-4xl font-bold md:text-5xl">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 animate-gradient">
              Projects
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-lg text-gray-300">
            Websites I&apos;ve built for clients and products of my own, from car dealerships and local services to
            catalogues and AI tools.
          </p>
        </header>

        <div className="space-y-24 md:space-y-32">
          {projects.map((project, index) => (
            <ProjectRow key={project.slug} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

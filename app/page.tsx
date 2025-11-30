import dynamic from 'next/dynamic';
import Hero from '@/components/Hero';
import About from '@/components/About';

// Lazy load heavy components for better performance
const Projects = dynamic(() => import('@/components/Projects'), {
  loading: () => <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"><div className="max-w-7xl mx-auto">Loading projects...</div></div>,
  ssr: true,
});

const PortfolioShowcase = dynamic(() => import('@/components/PortfolioShowcase'), {
  loading: () => <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"><div className="max-w-7xl mx-auto">Loading portfolio...</div></div>,
  ssr: true,
});

const Contact = dynamic(() => import('@/components/Contact'), {
  loading: () => <div className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"><div className="max-w-4xl mx-auto">Loading contact...</div></div>,
  ssr: true,
});

export default function Home() {
  return (
    <>
      <a 
        href="#home" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-pink-500 focus:text-white focus:rounded-lg focus:shadow-lg"
      >
        Skip to main content
      </a>
      <section id="home" className="min-h-screen flex items-center justify-center pt-16 pb-20">
        <Hero />
      </section>
      <section id="about" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <About />
      </section>
      <section id="projects" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <Projects />
      </section>
      <section id="portfolio" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <PortfolioShowcase />
      </section>
      <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <Contact />
      </section>
    </>
  );
}

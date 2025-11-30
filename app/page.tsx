import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import PortfolioShowcase from '@/components/PortfolioShowcase';
import Contact from '@/components/Contact';

export default function Home() {
  return (
    <>
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


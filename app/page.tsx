import Hero from '@/components/Hero';
import About from '@/components/About';
import Projects from '@/components/Projects';
import Certificates from '@/components/Certificates';
import TechStack from '@/components/TechStack';
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
      <section id="certificates" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <Certificates />
      </section>
      <section id="techstack" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <TechStack />
      </section>
      <section id="contact" className="min-h-screen py-20 px-4 sm:px-6 lg:px-8">
        <Contact />
      </section>
    </>
  );
}


import React from 'react';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';
import ScrollProgress from './components/ui/ScrollProgress';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Projects from './components/sections/Projects';
import Skills from './components/sections/Skills';
import SoftSkills from './components/sections/SoftSkills';
import Education from './components/sections/Education';
import Contact from './components/sections/Contact';
import Stats from './components/sections/Stats';

const App: React.FC = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <ScrollProgress />
      <Header />
      <main className="flex-grow">
        <Hero />
        <About />
        <Experience />
        <Stats />
        <Projects />
        <Skills />
        <SoftSkills />
        <Education />
        <Contact />
      </main>
      <Footer />
    </div>
  );
};

export default App;

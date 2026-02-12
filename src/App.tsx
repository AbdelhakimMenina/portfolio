import React from 'react';
import { LanguageProvider } from './contexts/LanguageContext';
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

const App: React.FC = () => {
  return (
    <LanguageProvider>
      <div className="min-h-screen flex flex-col">
        <ScrollProgress />
        <Header />
        <main className="flex-grow">
          <Hero />
          <About />
          <Experience />
          <Projects />
          <Skills />
          <SoftSkills />
          <Education />
          <Contact />
        </main>
        <Footer />
      </div>
    </LanguageProvider>
  );
};

export default App;

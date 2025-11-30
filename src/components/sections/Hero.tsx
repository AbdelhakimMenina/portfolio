import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import ParticlesBackground from '../ui/ParticlesBackground';

const Hero: React.FC = () => {
  const [showContent, setShowContent] = useState(false);

  useEffect(() => {
    setShowContent(true);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hero"
      className="min-h-screen flex items-center justify-center pt-16 px-4 sm:px-6 lg:px-8 relative overflow-hidden"
    >
      {/* Particles Background */}
      <ParticlesBackground particleCount={80} speed={0.3} />

      {/* Animated gradient background */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-blue-50 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 -z-10"></div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(14,165,233,0.15),transparent_50%)] -z-10 animate-pulse"></div>
      
      {/* Floating orbs */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-primary-300 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-72 h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto text-center max-w-4xl relative z-10">
        {/* Nom avec animation */}
        <div className={`mb-6 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-primary-600 via-blue-600 to-primary-600 dark:from-primary-400 dark:via-blue-400 dark:to-primary-400 bg-clip-text text-transparent animate-gradient">
            Abdelhakim
          </h1>
        </div>
        
        {/* Rôle */}
        <div className={`mb-4 transition-all duration-1000 delay-200 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-2xl md:text-3xl lg:text-4xl font-semibold text-gray-800 dark:text-gray-200">
            Développeur Full Stack / DevOps / IA
          </p>
        </div>
        
        {/* Description avec animation */}
        <div className={`mb-8 transition-all duration-1000 delay-400 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Passionné par le développement web moderne, l'infrastructure cloud et l'intelligence artificielle.
            Je conçois et développe des solutions performantes, de la création d'interfaces utilisateur à la mise en place d'infrastructures robustes.
          </p>
        </div>

        {/* Domaines d'expertise avec animation stagger */}
        <div className={`flex flex-wrap justify-center gap-3 mb-8 transition-all duration-1000 delay-600 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          {['Développement Web', 'DevOps & Cloud', 'Intelligence Artificielle', 'Cybersécurité'].map((domain, index) => (
            <span
              key={domain}
              className="px-4 py-2 bg-white/70 dark:bg-gray-800/70 backdrop-blur-md text-gray-700 dark:text-gray-300 rounded-full text-sm font-medium border border-gray-200 dark:border-gray-700 hover:scale-110 hover:shadow-lg transition-all duration-300 cursor-default"
              style={{ animationDelay: `${600 + index * 100}ms` }}
            >
              {domain}
            </span>
          ))}
        </div>

        {/* Boutons d'action avec animation */}
        <div className={`flex flex-col sm:flex-row gap-4 justify-center items-center transition-all duration-1000 delay-800 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
          <Button
            onClick={() => scrollToSection('projects')}
            variant="primary"
            className="w-full sm:w-auto transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow"
            aria-label="Voir mes projets"
          >
            Voir mes projets
          </Button>
          <Button
            onClick={() => scrollToSection('contact')}
            variant="outline"
            className="w-full sm:w-auto transform hover:scale-110 transition-all duration-300"
            aria-label="Me contacter"
          >
            Me contacter
          </Button>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          <svg className="w-6 h-6 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
          </svg>
        </div>
      </div>
    </section>
  );
};

export default Hero;

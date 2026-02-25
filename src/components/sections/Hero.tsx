import React, { useState, useEffect } from 'react';
import Button from '../ui/Button';
import ParticlesBackground from '../ui/ParticlesBackground';
import { useLanguage } from '../../contexts/LanguageContext';

const Hero: React.FC = () => {
  const { t } = useLanguage();
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
      <div className="absolute top-20 left-10 w-48 h-48 md:w-72 md:h-72 bg-primary-300 dark:bg-primary-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 md:w-72 md:h-72 bg-blue-300 dark:bg-blue-600 rounded-full mix-blend-multiply dark:mix-blend-soft-light filter blur-3xl opacity-20 animate-float" style={{ animationDelay: '2s' }}></div>

      <div className="container mx-auto max-w-7xl relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Colonne gauche - Photo */}
          <div className={`flex justify-center lg:justify-start transition-all duration-1000 ${showContent ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <div className="relative">
              {/* Photo avec effet de glow */}
              <div className="bg-white/60 relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-[28rem] xl:h-[28rem] rounded-full overflow-hidden shadow-2xl">
                <img
                  src={`${import.meta.env.BASE_URL}images/profile-photo1.png`}
                  alt="Abdelhakim MENINA"
                  className="w-full h-auto object-cover"
                  onError={(e) => {
                    // Fallback si l'image n'existe pas
                    const target = e.target as HTMLImageElement;
                    target.style.display = 'none';
                    const parent = target.parentElement;
                    if (parent) {
                      parent.innerHTML = `
                        <div class="w-full h-full bg-gradient-to-br from-primary-400 to-blue-600 flex items-center justify-center text-white text-4xl font-bold">
                          AM
                        </div>
                      `;
                    }
                  }}
                />
              </div>
            </div>
          </div>

          {/* Colonne droite - Contenu */}
          <div className="text-center lg:text-left">
            {/* Nom avec animation */}
            <div className={`mb-6 transition-all duration-1000 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold bg-gradient-to-r from-primary-600 via-blue-600 to-primary-600 dark:from-primary-400 dark:via-blue-400 dark:to-primary-400 bg-clip-text text-transparent animate-gradient">
                {t('hero.title')}
              </h1>
            </div>
            
            {/* Description avec animation */}
            <div className={`mb-8 transition-all duration-1000 delay-400 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <p className="text-base md:text-lg lg:text-xl text-gray-600 dark:text-gray-400 leading-relaxed">
                {t('hero.description')}
              </p>
            </div>

            {/* Domaines d'expertise avec animation stagger */}
            <div className={`flex flex-wrap justify-center lg:justify-start gap-3 mb-8 transition-all duration-1000 delay-600 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              {[t('hero.domain1'), t('hero.domain2'), t('hero.domain3'), t('hero.domain4')].map((domain, index) => (
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
            <div className={`flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center transition-all duration-1000 delay-800 ${showContent ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'}`}>
              <Button
                onClick={() => scrollToSection('projects')}
                variant="primary"
                className="w-full sm:w-auto transform hover:scale-110 transition-all duration-300 shadow-lg hover:shadow-xl animate-pulse-glow"
                aria-label={t('hero.buttonProjects')}
              >
                {t('hero.buttonProjects')}
              </Button>
              <Button
                onClick={() => scrollToSection('contact')}
                variant="outline"
                className="w-full sm:w-auto transform hover:scale-110 transition-all duration-300"
                aria-label={t('hero.buttonContact')}
              >
                {t('hero.buttonContact')}
              </Button>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
          
        </div>
      </div>
    </section>
  );
};

export default Hero;

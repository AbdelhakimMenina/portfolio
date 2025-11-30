import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';

const About: React.FC = () => {
  return (
    <SectionWrapper
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          À propos
        </h2>
        
        <div className="space-y-8">
          {/* Texte de présentation */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Je suis développeur full stack avec une formation en <strong>Master 2 Informatique</strong>, 
              spécialisé en <strong>Programmation, Sûreté et Sécurité</strong>. Passionné par les technologies 
              modernes, je me concentre sur le développement web, le DevOps et l'intelligence artificielle.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Actuellement, je travaille sur plusieurs projets stimulants : un <strong>simulateur vocal IA</strong> 
              combinant traitement du langage naturel et synthèse vocale, des <strong>sites web professionnels</strong> 
              pour des entreprises, et des <strong>applications full stack</strong> avec des architectures modernes 
              et scalables.
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              Mon approche combine rigueur technique, attention aux détails et recherche constante d'innovation. 
              Je suis toujours prêt à relever de nouveaux défis et à contribuer à des projets passionnants.
            </p>
          </div>

          {/* Stack principale */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Stack principale
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold">▹</span>
                <span>Frontend : React, TypeScript, TailwindCSS</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold">▹</span>
                <span>Backend : Node.js, NestJS, Express</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold">▹</span>
                <span>DevOps : Docker, GitLab CI/CD, AWS</span>
              </div>
              <div className="flex items-center space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold">▹</span>
                <span>IA : Python, LLM, STT/TTS</span>
              </div>
            </div>
          </div>

          {/* Domaines d'expertise */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              Domaines d'expertise
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                'Développement web moderne',
                'DevOps & Infrastructure',
                'Cloud Computing (AWS)',
                'Intelligence Artificielle',
                'Cybersécurité',
              ].map((domain) => (
                <span
                  key={domain}
                  className="px-4 py-2 bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 rounded-full text-sm font-medium"
                >
                  {domain}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default About;


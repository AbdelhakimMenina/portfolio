import React from 'react';
import type { Education } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../contexts/LanguageContext';

// Données des formations
const educations: Education[] = [
  {
    id: '1',
    degree: 'Master Informatique parcours Programmation, Sûreté et Sécurité',
    school: 'Université Sorbonne Paris Nord - Institut Galilée',
    field: '99 Av. Jean Baptiste Clément, 93430 Villetaneuse',
    startDate: '2023',
    endDate: '2025',
    description: 'Formation approfondie en développement logiciel, sécurité informatique et méthodes formelles. Mention Bien.',
    achievements: [
      'Applications web : Node.js, Express et React pour les composants, API REST, Vue.js et Electrons',
      'Vérifications de formules CTL en utilisant des automates en JAVA',
      'Développement Front-End d\'un jeu de bataille navale en React',
      'Implémentation d\'un espace bidimensionnel de Barnes-Hut en Python',
      'Mise en place d\'un pipeline CI/CD sécurisé intégrant SAST, DAST et analyse des dépendances',
      'Modélisation et Simulation Distribuée des Opinions Sociales en JAVA',
    ],
  },
  {
    id: '2',
    degree: 'Licence Informatique',
    school: 'Université Sorbonne Paris Nord - Institut Galilée',
    field: '99 Av. Jean Baptiste Clément, 93430 Villetaneuse',
    startDate: '2017',
    endDate: '2023',
    description: 'Formation fondamentale en informatique couvrant les algorithmes, structures de données, bases de données et développement logiciel.',
    achievements: [
      'City-mapper en Python avec une base de données PostgreSQL',
      'Développement et Pilotage d\'un Robot Éducatif en Python',
      'Administration de serveurs web sous Linux (LAMP, DNS, DHCP, LDAP)',
      'Configurations de machine avec Wireshark (switch, routeurs, firewalls)',
    ],
  },
];

const EducationCard: React.FC<{ education: Education }> = ({ education }) => {
  const { t } = useLanguage();
  return (
    <div className="relative overflow-hidden rounded-2xl border border-gray-200/60 dark:border-primary-500/30 bg-white/90 dark:bg-gradient-to-br dark:from-slate-900 dark:via-slate-900/95 dark:to-slate-950 shadow-md hover:shadow-[0_25px_60px_rgba(15,23,42,0.8)] hover:-translate-y-1 transition-all duration-300">
      {/* Accents de fond animés */}
      <div className="pointer-events-none absolute -right-20 -top-16 h-40 w-40 rounded-full bg-primary-500/15 blur-3xl" />
      <div className="pointer-events-none absolute -left-10 bottom-0 h-32 w-32 rounded-full bg-blue-500/10 blur-3xl" />


      <div className="relative flex h-full flex-col gap-6 px-4 sm:px-6 py-6">
        {/* Titre dans un cadre stylé en haut au centre */}
        <div className="flex flex-col items-center gap-3">
          <div className="relative group">
            {/* Cadre avec bordure animée et fond dégradé */}
            <div className="relative px-4 sm:px-6 py-3 sm:py-4 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary-500/10 via-blue-500/10 to-primary-500/10 dark:from-primary-500/20 dark:via-blue-500/20 dark:to-primary-500/20 border-2 border-primary-300/50 dark:border-primary-500/50 shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105">
              {/* Effet de glow animé */}
              <div className="absolute inset-0 rounded-lg sm:rounded-xl bg-gradient-to-r from-primary-400/20 via-blue-400/20 to-primary-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl"></div>
              
              {/* Points décoratifs */}
              <div className="absolute -top-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-400 dark:bg-primary-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
              <div className="absolute -top-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400 dark:bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <div className="absolute -bottom-1 -left-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-blue-400 dark:bg-blue-500 shadow-[0_0_10px_rgba(59,130,246,0.8)]"></div>
              <div className="absolute -bottom-1 -right-1 w-2 h-2 sm:w-3 sm:h-3 rounded-full bg-primary-400 dark:bg-primary-500 shadow-[0_0_10px_rgba(56,189,248,0.8)]"></div>
              
              {/* Titre */}
              <h3 className="relative text-center text-base sm:text-lg md:text-xl lg:text-2xl font-bold bg-gradient-to-r from-primary-600 via-blue-600 to-primary-600 dark:from-primary-400 dark:via-blue-400 dark:to-primary-400 bg-clip-text text-transparent">
                {t(`education.${education.id}.degree`) || education.degree}
              </h3>
            </div>
          </div>
          
          {/* Date en dessous du titre */}
          <div className="text-sm sm:text-base text-gray-600 dark:text-gray-400">
            <span className="font-medium">
              {education.startDate} - {education.current ? t('education.inProgress') : education.endDate || 'N/A'}
            </span>
          </div>
        </div>

        {/* Établissement et domaine */}
        <div className="text-center">
          <p className="text-sm md:text-base font-semibold text-primary-600 dark:text-primary-400">
            {t(`education.${education.id}.school`) || education.school}
          </p>
          <p className="text-xs md:text-sm text-gray-600 dark:text-gray-400 mt-1 italic">
            {education.field}
          </p>
        </div>

        {/* Description */}
        {education.description && (
          <p className="text-sm md:text-base text-gray-700 dark:text-gray-300 leading-relaxed text-center">
            {t(`education.${education.id}.description`) || education.description}
          </p>
        )}

        {/* Réalisations */}
        {education.achievements && education.achievements.length > 0 && (
          <div className="pt-4 border-t border-gray-200/50 dark:border-gray-700/50">
            <h4 className="text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-4 flex items-center gap-2">
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"></span>
              <span>{t('education.achievementsTitle')}</span>
              <span className="h-px flex-1 bg-gradient-to-r from-transparent via-primary-400/50 to-transparent"></span>
            </h4>
            <div className="grid gap-3 md:grid-cols-2">
              {education.achievements.map((achievement, index) => {
                const translatedAchievement = t(`education.${education.id}.achieve.${index + 1}`) || achievement;
                return (
                  <div
                    key={index}
                    className="group relative overflow-hidden rounded-lg border border-gray-200/60 dark:border-gray-700/60 bg-gradient-to-br from-white/50 to-gray-50/50 dark:from-gray-800/50 dark:to-gray-900/50 p-3 hover:border-primary-400/50 dark:hover:border-primary-500/50 hover:shadow-lg hover:shadow-primary-500/10 dark:hover:shadow-primary-500/20 transition-all duration-300 hover:-translate-y-0.5"
                  >
                    {/* Accent de bordure gauche */}
                    <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-primary-400 via-primary-500 to-primary-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    
                    {/* Contenu */}
                    <p className="text-xs md:text-sm text-gray-700 dark:text-gray-300 leading-relaxed pl-2 group-hover:text-gray-900 dark:group-hover:text-gray-100 transition-colors duration-300">
                      {translatedAchievement}
                    </p>
                    
                    {/* Effet de glow au survol */}
                    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-primary-400/0 via-primary-400/5 to-primary-400/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                  </div>
                );
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

const EducationSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <SectionWrapper
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          {t('education.title')}
        </h2>
        
        <div className="grid grid-cols-1 gap-8">
          {educations.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;


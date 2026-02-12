import React from 'react';
import type { Experience } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';
import Badge from '../ui/Badge';
import { useLanguage } from '../../contexts/LanguageContext';

// Labels pour les types d'expérience (seront traduits dynamiquement)
const getExperienceTypeLabel = (type: Experience['type'], t: (key: string) => string): string => {
  return t(`experience.type.${type}`);
};

const experienceTypeColors: Record<Experience['type'], string> = {
  stage: 'bg-yellow-100 dark:bg-yellow-900 text-yellow-800 dark:text-yellow-200',
  cdd: 'bg-orange-100 dark:bg-orange-900 text-orange-800 dark:text-orange-200',
  cdi: 'bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200',
  alternance: 'bg-blue-100 dark:bg-blue-900 text-blue-800 dark:text-blue-200',
  freelance: 'bg-purple-100 dark:bg-purple-900 text-purple-800 dark:text-purple-200',
};

// Données d'expérience professionnelle
const experiences: Experience[] = [
  {
    id: '1',
    title: 'Développeur Full Stack',
    company: 'FRANCE TÉLÉPHONE',
    type: 'stage',
    location: 'Fontenay Sous-Bois',
    startDate: '26/05/2025',
    endDate: '26/09/2025',
    description: [
      'Développement des deux sites web Finanssor, WINVEST Capital',
      'Développement et intégration dans un CMS (Wordpress)',
      'Collaboration avec les équipes métier et marketing',
      'Intégration SEO, analytics et tracking',
      'Maintenance, sécurité et évolutivité',
      'Support technique et documentation',
      'Mise en place du module RH, ainsi que d\'autres missions',
      'Scripts Bash : Automatisation du processus d\'installation et de sauvegarde',
      'AWS EC2 (Amazon Linux) - Déploiement et sécurisation de serveurs web Apache : configuration HTTP/HTTPS, gestion DNS, accès SSH par clés, Security Groups, firewall et durcissement système',
      'Migration du site web France Téléphone de IONOS vers AWS EC2 : transfert des données, reconfiguration Apache, mise à jour DNS, sécurisation HTTP/HTTPS et SSH',
    ],
    technologies: ['WordPress', 'Bash', 'AWS EC2', 'Apache', 'Linux', 'HTML', 'CSS', 'JavaScript', 'SEO'],
  },
  {
    id: '2',
    title: 'Développeur WordPress',
    company: 'The ENERGY ACTION Project (ACT 4)',
    type: 'stage',
    location: 'Saint-Ouen-sur-Seine, France',
    startDate: '06/2023',
    endDate: '08/2023',
    description: [
      'Développement du site web EnAct en utilisant WordPress (Elementor)',
      'Développement et intégration dans un CMS (WordPress)',
    ],
    technologies: ['WordPress', 'Elementor', 'HTML', 'CSS', 'JavaScript'],
  },
];

const ExperienceCard: React.FC<{ experience: Experience; isLast?: boolean }> = ({ experience, isLast = false }) => {
  const { t } = useLanguage();
  return (
    <div className="relative pl-8 pb-8">
      {/* Ligne de timeline */}
      {!isLast && (
        <div className="absolute left-[7px] top-8 bottom-0 w-0.5 bg-primary-200 dark:bg-primary-800"></div>
      )}
      
      {/* Point de la timeline */}
      <div className="absolute left-0 top-1 w-4 h-4 rounded-full bg-primary-600 dark:bg-primary-400 border-4 border-white dark:border-gray-900 shadow-md"></div>
      
      <div className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-md hover:shadow-lg transition-shadow duration-300 border border-gray-200 dark:border-gray-700">
        {/* En-tête avec type et dates */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 sm:gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-2 sm:gap-3">
            <span className={`px-2 sm:px-3 py-1 rounded-full text-xs font-semibold ${experienceTypeColors[experience.type]}`}>
              {getExperienceTypeLabel(experience.type, t)}
            </span>
            {experience.current && (
              <span className="px-2 sm:px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                {t('experience.current')}
              </span>
            )}
          </div>
          <div className="flex flex-col items-end gap-2">
            <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-primary-50 dark:bg-primary-900/30 border border-primary-200 dark:border-primary-800">
              <svg className="w-4 h-4 text-primary-600 dark:text-primary-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
              </svg>
              <span className="text-sm font-semibold text-primary-700 dark:text-primary-300">
                {experience.startDate} - {experience.current ? t('experience.today') : experience.endDate || 'N/A'}
              </span>
            </div>
            {(() => {
              const calculateDurationInMonths = (startDateStr: string, endDateStr: string | null) => {
                if (!endDateStr) return null;
                const parseDate = (dateStr: string) => {
                  const parts = dateStr.split('/');
                  if (parts.length === 3) {
                    // Format DD/MM/YYYY
                    return new Date(parseInt(parts[2]), parseInt(parts[1]) - 1, parseInt(parts[0]));
                  } else if (parts.length === 2) {
                    // Format MM/YYYY
                    return new Date(parseInt(parts[1]), parseInt(parts[0]) - 1, 1);
                  }
                  return null;
                };
                const start = parseDate(startDateStr);
                const end = parseDate(endDateStr);
                if (!start || !end) return null;
                const months = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
                return months > 0 ? months : 1; // Au moins 1 mois
              };
              const duration = experience.current 
                ? null 
                : calculateDurationInMonths(experience.startDate, experience.endDate || null);
              return duration ? (
                <div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-50 dark:bg-blue-900/30 border border-blue-200 dark:border-blue-800">
                  <svg className="w-4 h-4 text-blue-600 dark:text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                  <span className="text-sm font-semibold text-blue-700 dark:text-blue-300">
                    {duration} {t('experience.months')}
                  </span>
                </div>
              ) : null;
            })()}
          </div>
        </div>

        {/* Titre et entreprise */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {t(`experience.${experience.id}.title`) || experience.title}
        </h3>
        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">
          {t(`experience.${experience.id}.company`) || experience.company}
        </p>
        {experience.location && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            📍 {t(`experience.${experience.id}.location`) || experience.location}
          </p>
        )}

        {/* Description */}
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, index) => {
            const translatedItem = t(`experience.${experience.id}.desc.${index + 1}`) || item;
            return (
              <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">▹</span>
                <span>{translatedItem}</span>
              </li>
            );
          })}
        </ul>

        {/* Technologies */}
        {experience.technologies && experience.technologies.length > 0 && (
          <div className="flex flex-wrap gap-2 pt-4 border-t border-gray-200 dark:border-gray-700">
            {experience.technologies.map((tech) => (
              <Badge key={tech} variant="default">
                {tech}
              </Badge>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

const ExperienceSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <SectionWrapper
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          {t('experience.title')}
        </h2>
        
        <div className="relative">
          {experiences.map((experience, index) => (
            <ExperienceCard 
              key={experience.id} 
              experience={experience}
              isLast={index === experiences.length - 1}
            />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ExperienceSection;


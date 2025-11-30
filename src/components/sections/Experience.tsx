import React from 'react';
import type { Experience } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';
import Badge from '../ui/Badge';

// Labels pour les types d'expérience
const experienceTypeLabels: Record<Experience['type'], string> = {
  stage: 'Stage',
  cdd: 'CDD',
  cdi: 'CDI',
  alternance: 'Alternance',
  freelance: 'Freelance',
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
    company: 'Entreprise Tech',
    type: 'cdi',
    location: 'Paris, France',
    startDate: '01/2024',
    current: true,
    description: [
      'Développement d\'applications web modernes avec React et TypeScript',
      'Mise en place d\'infrastructures cloud sur AWS',
      'Collaboration avec une équipe agile pour livrer des fonctionnalités',
      'Optimisation des performances et amélioration continue',
    ],
    technologies: ['React', 'TypeScript', 'Node.js', 'AWS', 'Docker'],
  },
  {
    id: '2',
    title: 'Stage Développeur Full Stack',
    company: 'Startup Innovation',
    type: 'stage',
    location: 'Lyon, France',
    startDate: '06/2023',
    endDate: '12/2023',
    description: [
      'Développement de fonctionnalités backend avec NestJS',
      'Création d\'interfaces utilisateur avec React',
      'Participation aux code reviews et aux réunions d\'équipe',
    ],
    technologies: ['React', 'NestJS', 'PostgreSQL', 'GitLab CI/CD'],
  },
];

const ExperienceCard: React.FC<{ experience: Experience; isLast?: boolean }> = ({ experience, isLast = false }) => {
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
        <div className="flex flex-wrap items-center justify-between gap-3 mb-3">
          <div className="flex flex-wrap items-center gap-3">
            <span className={`px-3 py-1 rounded-full text-xs font-semibold ${experienceTypeColors[experience.type]}`}>
              {experienceTypeLabels[experience.type]}
            </span>
            {experience.current && (
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
                Actuel
              </span>
            )}
          </div>
          <span className="text-sm font-medium text-gray-500 dark:text-gray-400">
            {experience.startDate} - {experience.current ? 'Aujourd\'hui' : experience.endDate || 'N/A'}
          </span>
        </div>

        {/* Titre et entreprise */}
        <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100 mb-1">
          {experience.title}
        </h3>
        <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">
          {experience.company}
        </p>
        {experience.location && (
          <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
            📍 {experience.location}
          </p>
        )}

        {/* Description */}
        <ul className="space-y-2 mb-4">
          {experience.description.map((item, index) => (
            <li key={index} className="flex items-start text-gray-700 dark:text-gray-300">
              <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">▹</span>
              <span>{item}</span>
            </li>
          ))}
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
  return (
    <SectionWrapper
      id="experience"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Expérience professionnelle
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


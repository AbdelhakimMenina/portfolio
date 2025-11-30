import React from 'react';
import type { Education } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';

// Données des formations
const educations: Education[] = [
  {
    id: '1',
    degree: 'Master 2 Informatique',
    school: 'Université [Nom]',
    field: 'Programmation, Sûreté et Sécurité',
    startDate: '2022',
    endDate: '2024',
    description: 'Formation approfondie en développement logiciel, sécurité informatique et méthodes formelles.',
    achievements: [
      'Spécialisation en Programmation, Sûreté et Sécurité',
      'Projets de développement d\'applications sécurisées',
      'Mémoire sur [sujet si applicable]',
    ],
  },
  {
    id: '2',
    degree: 'Licence Informatique',
    school: 'Université [Nom]',
    field: 'Informatique',
    startDate: '2019',
    endDate: '2022',
    description: 'Formation fondamentale en informatique couvrant les algorithmes, structures de données, bases de données et développement logiciel.',
  },
];

const EducationCard: React.FC<{ education: Education }> = ({ education }) => {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6 border border-gray-200 dark:border-gray-700">
      {/* En-tête avec période */}
      <div className="flex items-center justify-between mb-4">
        <span className="px-3 py-1 rounded-full text-xs font-semibold bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200">
          {education.startDate} - {education.current ? 'En cours' : education.endDate || 'N/A'}
        </span>
        {education.current && (
          <span className="px-3 py-1 rounded-full text-xs font-semibold bg-green-100 dark:bg-green-900 text-green-800 dark:text-green-200">
            En cours
          </span>
        )}
      </div>

      {/* Diplôme et établissement */}
      <h3 className="text-2xl font-bold text-gray-900 dark:text-gray-100 mb-2">
        {education.degree}
      </h3>
      <p className="text-lg font-semibold text-primary-600 dark:text-primary-400 mb-1">
        {education.school}
      </p>
      <p className="text-sm text-gray-600 dark:text-gray-400 mb-4 italic">
        {education.field}
      </p>

      {/* Description */}
      {education.description && (
        <p className="text-gray-700 dark:text-gray-300 mb-4 leading-relaxed">
          {education.description}
        </p>
      )}

      {/* Réalisations */}
      {education.achievements && education.achievements.length > 0 && (
        <div className="pt-4 border-t border-gray-200 dark:border-gray-700">
          <h4 className="text-sm font-semibold text-gray-900 dark:text-gray-100 mb-2">
            Points clés :
          </h4>
          <ul className="space-y-1">
            {education.achievements.map((achievement, index) => (
              <li key={index} className="flex items-start text-sm text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 mr-2 mt-1">▸</span>
                <span>{achievement}</span>
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

const EducationSection: React.FC = () => {
  return (
    <SectionWrapper
      id="education"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Formations
        </h2>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {educations.map((education) => (
            <EducationCard key={education.id} education={education} />
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default EducationSection;


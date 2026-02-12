import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../contexts/LanguageContext';

// Données des soft skills avec clés de traduction
const softSkills: Array<{ key: string }> = [
  { key: 'communication' },
  { key: 'teamwork' },
  { key: 'adaptability' },
  { key: 'problemSolving' },
  { key: 'projectManagement' },
  { key: 'leadership' },
  { key: 'curiosity' },
  { key: 'autonomy' },
];

const SoftSkillsSection: React.FC = () => {
  const { t } = useLanguage();
  return (
    <SectionWrapper
      id="soft-skills"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-4 text-gray-900 dark:text-gray-100">
          {t('softSkills.title')}
        </h2>
        <p className="text-center text-lg text-gray-600 dark:text-gray-400 mb-12 max-w-2xl mx-auto">
          {t('softSkills.description')}
        </p>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
          {softSkills.map((skill) => (
            <div
              key={skill.key}
              className="bg-gray-50 dark:bg-gray-700/50 rounded-lg p-6 text-center hover:bg-gray-100 dark:hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-600 group"
            >
              <div className="mb-3">
                <div className="w-12 h-12 mx-auto rounded-full bg-primary-100 dark:bg-primary-900 flex items-center justify-center text-primary-600 dark:text-primary-400 group-hover:bg-primary-200 dark:group-hover:bg-primary-800 transition-colors">
                  <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
              </div>
              <h3 className="text-lg font-semibold text-gray-900 dark:text-gray-100 mb-1">
                {t(`softSkill.${skill.key}.name`)}
              </h3>
              <p className="text-sm text-gray-600 dark:text-gray-400">
                {t(`softSkill.${skill.key}.desc`)}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default SoftSkillsSection;

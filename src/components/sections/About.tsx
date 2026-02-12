import React from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../contexts/LanguageContext';

const About: React.FC = () => {
  const { t } = useLanguage();
  return (
    <SectionWrapper
      id="about"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-white dark:bg-gray-800"
    >
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          {t('about.title')}
        </h2>
        
        <div className="space-y-8">
          {/* Texte de présentation */}
          <div className="prose prose-lg dark:prose-invert max-w-none">
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.p1')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.p2')}
            </p>
            <p className="text-lg text-gray-700 dark:text-gray-300 leading-relaxed">
              {t('about.p3')}
            </p>
          </div>

          {/* Stack principale */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t('about.stackTitle')}
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
              <div className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0 mt-1">▹</span>
                <span className="text-sm sm:text-base break-words">{t('about.stack1')}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0 mt-1">▹</span>
                <span className="text-sm sm:text-base break-words">{t('about.stack2')}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0 mt-1">▹</span>
                <span className="text-sm sm:text-base break-words">{t('about.stack3')}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0 mt-1">▹</span>
                <span className="text-sm sm:text-base break-words">{t('about.stack4')}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0 mt-1">▹</span>
                <span className="text-sm sm:text-base break-words">{t('about.stack5')}</span>
              </div>
              <div className="flex items-start space-x-3 text-gray-700 dark:text-gray-300">
                <span className="text-primary-600 dark:text-primary-400 font-bold flex-shrink-0 mt-1">▹</span>
                <span className="text-sm sm:text-base break-words">{t('about.stack6')}</span>
              </div>
            </div>
          </div>

          {/* Domaines d'expertise */}
          <div className="mt-12">
            <h3 className="text-2xl font-semibold mb-4 text-gray-900 dark:text-gray-100">
              {t('about.expertiseTitle')}
            </h3>
            <div className="flex flex-wrap gap-3">
              {[
                t('about.expertise1'),
                t('about.expertise2'),
                t('about.expertise3'),
                t('about.expertise4'),
                t('about.expertise5'),
                t('about.expertise6'),
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


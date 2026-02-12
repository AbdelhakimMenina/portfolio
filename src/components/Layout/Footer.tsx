import React from 'react';
import { useLanguage } from '../../contexts/LanguageContext';

const Footer: React.FC = () => {
  const { t } = useLanguage();
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Abdelhakim MENINA. {t('footer.rights')}</p>
          <p className="mt-2 text-sm">
            <a 
              href="mailto:meninaabdelhakim@gmail.com" 
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              meninaabdelhakim@gmail.com
            </a>
            {' • '}
            <a 
              href="tel:+33698241257" 
              className="text-primary-600 dark:text-primary-400 hover:underline"
            >
              +33 6 98 24 12 57
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


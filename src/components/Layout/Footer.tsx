import React from 'react';

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-100 dark:bg-gray-800 border-t border-gray-200 dark:border-gray-700">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-6">
        <div className="text-center text-gray-600 dark:text-gray-400">
          <p>&copy; {currentYear} Abdelhakim. Tous droits réservés.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;


import React, { useState } from 'react';
import type { Project, ProjectCategory } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../contexts/LanguageContext';

// Labels et couleurs pour les catégories (seront traduits dynamiquement)
const getCategoryConfig = (category: ProjectCategory, t: (key: string) => string) => {
  const configs: Record<ProjectCategory, { color: string; bgColor: string }> = {
    professional: {
      color: 'text-blue-700 dark:text-blue-300',
      bgColor: 'bg-blue-100 dark:bg-blue-900',
    },
    academic: {
      color: 'text-green-700 dark:text-green-300',
      bgColor: 'bg-green-100 dark:bg-green-900',
    },
    personal: {
      color: 'text-purple-700 dark:text-purple-300',
      bgColor: 'bg-purple-100 dark:bg-purple-900',
    },
  };
  return {
    label: t(`projects.filter.${category}`),
    ...configs[category],
  };
};

// Données des projets organisés par catégorie
const projects: Project[] = [
  // Projets Professionnels
  {
    id: '2',
    name: 'Site WordPress & AWS – Winvest Capital',
    description: 'Développement du site web Winvest Capital. Développement et intégration dans un CMS (Wordpress). Collaboration avec les équipes métier et marketing. Intégration SEO, analytics et tracking. Maintenance, sécurité et évolutivité. Support technique et documentation.',
    stack: ['WordPress', 'PHP', 'MySQL/MariaDB', 'Apache', 'AWS EC2', 'Linux', 'SSH', 'SEO', 'Analytics'],
    category: 'professional',
    date: '2025',
    liveUrl: 'https://winvest-capital.fr/',
  },
  {
    id: '2b',
    name: 'Site WordPress & AWS – Finanssor',
    description: 'Développement du site web Finanssor. Développement et intégration dans un CMS (Wordpress). Collaboration avec les équipes métier et marketing. Intégration SEO, analytics et tracking. Maintenance, sécurité et évolutivité. Support technique et documentation.',
    stack: ['WordPress', 'PHP', 'MySQL/MariaDB', 'Apache', 'AWS EC2', 'Linux', 'SSH', 'SEO', 'Analytics'],
    category: 'professional',
    date: '2025',
    liveUrl: 'https://finanssor.fr/',
  },
  {
    id: '7',
    name: 'Module RH – Portail Employé Sécurisé',
    description: 'Développement d\'un portail employé sécurisé permettant aux employés d\'accéder à leurs documents professionnels, gérer leurs absences et suivre leurs informations professionnelles. Interface de connexion et d\'inscription avec gestion des comptes utilisateurs. Fonctionnalités : accès aux bulletins de paie et contrats, gestion des demandes de congés et suivi du solde, suivi des tickets restaurant, pointage simplifié pour enregistrer les heures d\'arrivée et de départ. Déploiement et sécurisation sur AWS EC2 avec stockage sécurisé des documents.',
    stack: ['React', 'NestJS', 'Axios', 'AWS EC2', 'S3 Bucket', 'TypeScript', 'JavaScript'],
    category: 'professional',
    date: '2025',
    liveUrl: 'https://r-win.fr/',
  },
  {
    id: '8',
    name: 'Migration France Téléphone – IONOS vers AWS EC2',
    description: 'Migration complète du site web France Téléphone de IONOS vers AWS EC2 : transfert des données, reconfiguration Apache, mise à jour DNS, sécurisation HTTP/HTTPS et SSH. Scripts Bash pour automatisation du processus d\'installation et de sauvegarde.',
    stack: ['AWS EC2', 'Apache', 'Linux', 'Bash', 'DNS', 'SSH', 'HTTPS', 'MySQL'],
    category: 'professional',
    date: '2025',
    liveUrl: 'https://france-telephone.com/',
  },
  
  // Projets Académiques
  
  // Projets Personnels
  {
    id: '4',
    name: 'Jeu de Bataille Navale en React',
    description: 'Jeu web interactif avec placement de bateaux via drag & drop, gestion du statut de partie, interface utilisateur intuitive et animations fluides. Projet personnel pour explorer React et TypeScript.',
    stack: ['React', 'TypeScript', 'HTML/CSS'],
    category: 'personal',
    date: '2024',
  },
  {
    id: '6',
    name: 'Portfolio Personnel',
    description: 'Portfolio web moderne et responsive développé avec React, TypeScript et TailwindCSS. Design épuré avec mode sombre, animations fluides et optimisé pour le SEO.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    category: 'personal',
    date: '2025',
    liveUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const { t } = useLanguage();
  const categoryInfo = getCategoryConfig(project.category, t);

  return (
    <div 
      className="group relative bg-gradient-to-br from-white to-gray-50 dark:from-gray-800 dark:to-gray-900 rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-200 dark:border-gray-700"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      {/* Barre latérale colorée */}
      <div className={`absolute left-0 top-0 bottom-0 w-1 ${categoryInfo.bgColor.replace('bg-', 'bg-gradient-to-b from-').replace('-100', '-400').replace('-900', '-600')} dark:from-${categoryInfo.color.split('-')[1]}-500`}></div>
      
      <div className="relative pl-6 pr-6 py-6 flex flex-col h-full min-h-[400px]">
        {/* En-tête avec catégorie et date */}
        <div className="flex items-start justify-between mb-4">
          <span className={`px-3 py-1 rounded-full text-xs font-bold ${categoryInfo.bgColor} ${categoryInfo.color}`}>
            {categoryInfo.label}
          </span>
          <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
            {project.date}
          </span>
        </div>

        {/* Titre */}
        <h3 className="text-xl sm:text-2xl font-bold mb-4 text-gray-900 dark:text-gray-100 leading-tight">
          {t(`project.${project.id}.name`) || project.name}
        </h3>
        
        {/* Description en cadres */}
        <div className={`mb-6 grid grid-cols-1 sm:grid-cols-2 gap-3 flex-grow ${project.id === '8' ? 'max-w-2xl mx-auto' : ''}`}>
          {(() => {
            const translatedDesc = t(`project.${project.id}.description`) || project.description;
            const descPoints = translatedDesc.split('. ').filter(point => point.trim().length > 0);
            return descPoints;
          })().map((point, idx) => (
            <div 
              key={idx} 
              className={`px-3 py-1.5 rounded-lg bg-white dark:bg-gray-700/30 border border-gray-200 dark:border-gray-600 hover:border-primary-300 dark:hover:border-primary-500 transition-colors w-full ${project.id === '8' ? 'max-w-md' : ''}`}
            >
              <p className="text-sm text-gray-700 dark:text-gray-300 leading-snug">
                {point.trim()}
              </p>
            </div>
          ))}
        </div>
        
        {/* Stack et Liens - Toujours en bas */}
        <div className="mt-auto pt-4 border-t border-gray-200 dark:border-gray-700">
          {/* Stack */}
          <div className="mb-5">
            <div className="flex items-center gap-2 mb-3">
              <div className="w-1 h-4 bg-primary-600 dark:bg-primary-400 rounded-full"></div>
              <h4 className="text-sm font-bold text-gray-700 dark:text-gray-300 uppercase tracking-wider">
                {t('projects.technologies')}
              </h4>
            </div>
            <div className="flex flex-wrap gap-2">
              {project.stack.map((tech) => (
                <span
                  key={tech}
                  className="px-3 py-1.5 rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 dark:from-gray-700/50 dark:to-gray-800/50 text-gray-700 dark:text-gray-300 text-xs font-semibold border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 hover:bg-primary-50 dark:hover:bg-primary-900/20 hover:text-primary-700 dark:hover:text-primary-400 transition-all duration-300 shadow-sm hover:shadow"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Séparation */}
          <div className="border-t border-gray-200 dark:border-gray-700 my-4"></div>

          {/* Liens */}
          <div className="flex flex-wrap gap-3">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gray-100 dark:bg-gray-700/50 text-gray-700 dark:text-gray-300 hover:bg-gray-200 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-600 hover:border-primary-400 dark:hover:border-primary-500 transition-all duration-300 font-semibold text-sm shadow-sm hover:shadow-md"
                aria-label={`Voir le code source de ${project.name} sur GitHub`}
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                  <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                </svg>
                <span>{t('projects.github')}</span>
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="group inline-flex items-center gap-2 px-5 py-2.5 rounded-lg bg-gradient-to-r from-primary-600 to-primary-500 text-white hover:from-primary-700 hover:to-primary-600 dark:hover:from-primary-500 dark:hover:to-primary-400 transition-all duration-300 font-semibold text-sm shadow-md hover:shadow-lg transform hover:scale-105"
                aria-label={`Voir le site ${project.name}`}
              >
                <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
                <span>{t('projects.viewSite')}</span>
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const { t } = useLanguage();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  // Filtrer les projets selon la catégorie active et trier par date
  const filteredProjects = (activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory)
  ).sort((a, b) => {
    // Trier par date décroissante (plus récent en premier)
    const dateA = parseInt(a.date) || 0;
    const dateB = parseInt(b.date) || 0;
    return dateB - dateA;
  });

  // Compter les projets par catégorie
  const projectCounts = {
    all: projects.length,
    professional: projects.filter(p => p.category === 'professional').length,
    academic: projects.filter(p => p.category === 'academic').length,
    personal: projects.filter(p => p.category === 'personal').length,
  };

  const categories: Array<{ value: ProjectCategory | 'all'; labelKey: string }> = [
    { value: 'all', labelKey: 'projects.filter.all' },
    { value: 'professional', labelKey: 'projects.filter.professional' },
    { value: 'academic', labelKey: 'projects.filter.academic' },
    { value: 'personal', labelKey: 'projects.filter.personal' },
  ];

  return (
    <SectionWrapper
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          {t('projects.title')}
        </h2>
        
        {/* Filtres par catégorie */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => {
            const count = projectCounts[category.value];
            const isActive = activeCategory === category.value;
            return (
              <button
                key={category.value}
                onClick={() => setActiveCategory(category.value)}
                className={`px-6 py-3 rounded-xl font-semibold transition-all duration-300 flex items-center gap-2 ${
                  isActive
                    ? 'bg-gradient-to-r from-primary-600 to-primary-500 text-white shadow-lg shadow-primary-500/40 transform scale-105'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border-2 border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600'
                }`}
                aria-label={`Filtrer par ${t(category.labelKey)}`}
                aria-pressed={isActive}
              >
                {isActive && (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                )}
                <span>{t(category.labelKey)}</span>
                <span className={`px-2.5 py-1 rounded-full text-xs font-bold ${
                  isActive
                    ? 'bg-white/25 text-white backdrop-blur-sm'
                    : 'bg-gray-100 dark:bg-gray-700 text-gray-600 dark:text-gray-400'
                }`}>
                  {count}
                </span>
              </button>
            );
          })}
        </div>
        
        {/* Grille de projets */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {filteredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>
        ) : (
          <div className="text-center py-12 bg-white dark:bg-gray-800 rounded-2xl border border-gray-200 dark:border-gray-700">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              {t('projects.noProjects')}
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Projects;

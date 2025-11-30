import React, { useState } from 'react';
import type { Project, ProjectCategory } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';
import Badge from '../ui/Badge';

// Labels et couleurs pour les catégories
const categoryConfig: Record<ProjectCategory, { label: string; color: string; bgColor: string }> = {
  professional: {
    label: 'Professionnelle',
    color: 'text-blue-700 dark:text-blue-300',
    bgColor: 'bg-blue-100 dark:bg-blue-900',
  },
  academic: {
    label: 'Académique',
    color: 'text-green-700 dark:text-green-300',
    bgColor: 'bg-green-100 dark:bg-green-900',
  },
  personal: {
    label: 'Personnelle',
    color: 'text-purple-700 dark:text-purple-300',
    bgColor: 'bg-purple-100 dark:bg-purple-900',
  },
};

// Données des projets organisés par catégorie
const projects: Project[] = [
  // Projets Professionnels
  {
    id: '1',
    name: 'Simulateur IA Vocal – Finanssor',
    description: 'Application web avec frontend React/TypeScript et backend Node/NestJS orchestrant un pipeline STT → LLM → TTS. Intégrée à une plateforme de formation professionnelle pour offrir des simulations vocales interactives.',
    stack: ['React', 'TypeScript', 'NestJS', 'Node.js', 'Docker', 'GitLab CI/CD'],
    category: 'professional',
    date: '2024',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: '2',
    name: 'Sites WordPress & AWS – Winvest & Finanssor',
    description: 'Déploiement et sécurisation de sites corporate sur AWS EC2 avec stack LAMP. Configuration HTTPS, durcissement de la sécurité, mise en place de sauvegardes automatisées et monitoring.',
    stack: ['WordPress', 'PHP', 'MySQL/MariaDB', 'Apache', 'AWS EC2', 'Linux', 'SSH'],
    category: 'professional',
    date: '2024',
    githubUrl: '#',
    liveUrl: '#',
  },
  
  // Projets Académiques
  {
    id: '3',
    name: 'Dashboard Analytics',
    description: 'Tableau de bord web pour visualiser des données en temps réel avec graphiques interactifs, filtres avancés et intégration d\'API REST. Interface intuitive et performante. Projet réalisé dans le cadre académique.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Node.js', 'Express', 'MongoDB'],
    category: 'academic',
    date: '2023',
    githubUrl: '#',
    liveUrl: '#',
  },
  {
    id: '5',
    name: 'Projet Académique - Système de Gestion',
    description: 'Application de gestion développée dans le cadre universitaire avec architecture microservices, API REST complète et base de données relationnelle. Mise en pratique des concepts de développement logiciel et de bases de données.',
    stack: ['Java', 'Spring Boot', 'PostgreSQL', 'REST API', 'Docker'],
    category: 'academic',
    date: '2023',
    githubUrl: '#',
  },
  
  // Projets Personnels
  {
    id: '4',
    name: 'Jeu de Bataille Navale en React',
    description: 'Jeu web interactif avec placement de bateaux via drag & drop, gestion du statut de partie, interface utilisateur intuitive et animations fluides. Projet personnel pour explorer React et TypeScript.',
    stack: ['React', 'TypeScript', 'HTML/CSS'],
    category: 'personal',
    date: '2024',
    githubUrl: '#',
  },
  {
    id: '6',
    name: 'Portfolio Personnel',
    description: 'Portfolio web moderne et responsive développé avec React, TypeScript et TailwindCSS. Design épuré avec mode sombre, animations fluides et optimisé pour le SEO.',
    stack: ['React', 'TypeScript', 'TailwindCSS', 'Vite'],
    category: 'personal',
    date: '2024',
    githubUrl: '#',
    liveUrl: '#',
  },
];

const ProjectCard: React.FC<{ project: Project; index: number }> = ({ project, index }) => {
  const categoryInfo = categoryConfig[project.category];

  return (
    <div 
      className="bg-white dark:bg-gray-800 rounded-lg shadow-lg hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-200 dark:border-gray-700 hover:border-primary-300 dark:hover:border-primary-600 transform hover:-translate-y-2 hover:scale-[1.02] group"
      style={{ animationDelay: `${index * 100}ms` }}
    >
      <div className="p-6">
        {/* En-tête avec catégorie et date */}
        <div className="flex items-center justify-between mb-3">
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${categoryInfo.bgColor} ${categoryInfo.color}`}>
            {categoryInfo.label}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-400 font-medium">
            {project.date}
          </span>
        </div>

        <h3 className="text-2xl font-bold mb-3 text-gray-900 dark:text-gray-100">
          {project.name}
        </h3>
        <p className="text-gray-600 dark:text-gray-400 mb-4 leading-relaxed">
          {project.description}
        </p>
        
        {/* Stack */}
        <div className="flex flex-wrap gap-2 mb-4">
          {project.stack.map((tech) => (
            <Badge key={tech} variant="default">
              {tech}
            </Badge>
          ))}
        </div>

        {/* Liens */}
        <div className="flex gap-4">
          {project.githubUrl && (
            <a
              href={project.githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium group"
              aria-label={`Voir le code source de ${project.name} sur GitHub`}
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
              </svg>
              <span>GitHub</span>
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center space-x-2 text-primary-600 dark:text-primary-400 hover:text-primary-700 dark:hover:text-primary-300 transition-colors font-medium group"
              aria-label={`Voir le site ${project.name}`}
            >
              <svg className="w-5 h-5 transition-transform group-hover:scale-110" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
              <span>Voir le site</span>
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory | 'all'>('all');

  // Filtrer les projets selon la catégorie active
  const filteredProjects = activeCategory === 'all'
    ? projects
    : projects.filter(project => project.category === activeCategory);

  // Compter les projets par catégorie
  const projectCounts = {
    all: projects.length,
    professional: projects.filter(p => p.category === 'professional').length,
    academic: projects.filter(p => p.category === 'academic').length,
    personal: projects.filter(p => p.category === 'personal').length,
  };

  const categories: Array<{ value: ProjectCategory | 'all'; label: string }> = [
    { value: 'all', label: 'Tous' },
    { value: 'professional', label: 'Professionnelle' },
    { value: 'academic', label: 'Académique' },
    { value: 'personal', label: 'Personnelle' },
  ];

  return (
    <SectionWrapper
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-gray-900 dark:text-gray-100">
          Projets
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
                className={`px-6 py-3 rounded-lg font-medium transition-all duration-300 ${
                  isActive
                    ? 'bg-primary-600 text-white shadow-lg'
                    : 'bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 border border-gray-200 dark:border-gray-700'
                }`}
                aria-label={`Filtrer par ${category.label}`}
                aria-pressed={isActive}
              >
                {category.label}
                <span className={`ml-2 px-2 py-0.5 rounded-full text-xs ${
                  isActive
                    ? 'bg-white/20 text-white'
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
          <div className="text-center py-12">
            <p className="text-gray-600 dark:text-gray-400 text-lg">
              Aucun projet dans cette catégorie pour le moment.
            </p>
          </div>
        )}
      </div>
    </SectionWrapper>
  );
};

export default Projects;

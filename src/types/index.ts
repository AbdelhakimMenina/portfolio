// Catégories de projets
export type ProjectCategory = 'professional' | 'academic' | 'personal';

// Types pour les projets
export interface Project {
  id: string;
  name: string;
  description: string;
  stack: string[];
  category: ProjectCategory;
  date: string; // Format: "MM/YYYY" ou "YYYY" ou "Mois YYYY"
  githubUrl?: string;
  liveUrl?: string;
}

// Types pour les compétences
export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'devops' | 'other';
}

// Catégories de compétences
export type SkillCategory = 'frontend' | 'backend' | 'devops' | 'other';

// Données du formulaire de contact
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Types pour l'expérience professionnelle
export type ExperienceType = 'stage' | 'cdd' | 'cdi' | 'alternance' | 'freelance';

export interface Experience {
  id: string;
  title: string;
  company: string;
  type: ExperienceType;
  location?: string;
  startDate: string; // Format: "MM/YYYY" ou "YYYY"
  endDate?: string; // Format: "MM/YYYY" ou "YYYY" - optionnel pour les postes actuels
  current?: boolean; // true si c'est le poste actuel
  description: string[];
  technologies?: string[];
}

// Types pour les formations
export interface Education {
  id: string;
  degree: string;
  school: string;
  field: string; // Domaine d'étude
  startDate: string; // Format: "YYYY"
  endDate?: string; // Format: "YYYY"
  current?: boolean; // true si en cours
  description?: string;
  achievements?: string[]; // Réalisations, mentions, etc.
}


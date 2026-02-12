import React, { createContext, useContext, useState } from 'react';
import type { ReactNode } from 'react';

type Language = 'fr' | 'en';

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
}

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

// Traductions
const translations: Record<Language, Record<string, string>> = {
  fr: {
    // Navigation
    'nav.home': 'Accueil',
    'nav.about': 'À propos',
    'nav.experience': 'Expérience',
    'nav.projects': 'Projets',
    'nav.skills': 'Compétences',
    'nav.softSkills': 'Soft Skills',
    'nav.education': 'Formations',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Abdelhakim MENINA',
    'hero.role': 'Développeur Full Stack / Front-End / Back-End',
    'hero.description': 'Récemment diplômé d\'un Master Informatique parcours Programmation, Sûreté et Sécurité. Disponible dès maintenant, je recherche un emploi en tant que développeur Full-Stack / Front-End / Back-End.',
    'hero.domain1': 'Développement Web',
    'hero.domain2': 'DevOps & Cloud',
    'hero.domain3': 'Sécurité Informatique',
    'hero.domain4': 'CMS & WordPress',
    'hero.buttonProjects': 'Voir mes projets',
    'hero.buttonContact': 'Me contacter',
    
    // About
    'about.title': 'À propos',
    'about.p1': 'Récemment diplômé d\'un Master Informatique parcours Programmation, Sûreté et Sécurité à l\'Université Sorbonne Paris Nord, mention Bien. Disponible dès maintenant, je recherche un emploi en tant que développeur Full-Stack / Front-End / Back-End.',
    'about.p2': 'J\'ai acquis une solide expérience lors de mes stages en développement web, notamment dans la création de sites web avec WordPress, le développement full stack, et la mise en place d\'infrastructures cloud sur AWS. J\'ai également travaillé sur l\'intégration SEO, l\'analytics, et la sécurisation de serveurs web.',
    'about.p3': 'Mon approche combine rigueur technique, attention aux détails et recherche constante d\'innovation. Je suis toujours prêt à relever de nouveaux défis et à contribuer à des projets passionnants.',
    'about.stackTitle': 'Stack principale',
    'about.stack1': 'Frontend : React.js, Vue.js, TypeScript, JavaScript, HTML, CSS',
    'about.stack2': 'Backend : Node.js, Nest.js, Express.js, Python, Java, C',
    'about.stack3': 'DevOps : Docker, GitLab CI/CD, AWS EC2, Linux, Bash',
    'about.stack4': 'Bases de données : PostgreSQL, MySQL, SQL',
    'about.stack5': 'CMS : WordPress, Bootstrap',
    'about.stack6': 'Outils : Git, GitHub, GitLab, Jira, Trello, Figma, Canva',
    'about.expertiseTitle': 'Domaines d\'expertise',
    'about.expertise1': 'Développement web moderne',
    'about.expertise2': 'DevOps & Infrastructure',
    'about.expertise3': 'Cloud Computing (AWS)',
    'about.expertise4': 'Sécurité informatique',
    'about.expertise5': 'CMS & WordPress',
    'about.expertise6': 'Développement Full Stack',
    
    // Experience
    'experience.title': 'Expérience professionnelle',
    'experience.type.stage': 'Stage',
    'experience.type.cdd': 'CDD',
    'experience.type.cdi': 'CDI',
    'experience.type.alternance': 'Alternance',
    'experience.type.freelance': 'Freelance',
    'experience.current': 'Actuel',
    'experience.today': 'Aujourd\'hui',
    'experience.months': 'mois',
    'education.inProgress': 'En cours',
    'education.achievementsTitle': 'Projets & réalisations marquants',
    
    // Projects
    'projects.title': 'Projets',
    'projects.filter.all': 'Tous',
    'projects.filter.professional': 'Professionnelle',
    'projects.filter.academic': 'Académique',
    'projects.filter.personal': 'Personnelle',
    'projects.technologies': 'Technologies',
    'projects.github': 'GitHub',
    'projects.viewSite': 'Voir le site',
    'projects.noProjects': 'Aucun projet dans cette catégorie pour le moment.',
    
    // Skills
    'skills.title': 'Compétences & Outils',
    'skills.description': 'Technologies et outils que je maîtrise pour créer des solutions modernes et performantes.',
    
    // Soft Skills
    'softSkills.title': 'Soft Skills',
    'softSkills.description': 'Compétences interpersonnelles et savoir-être qui complètent mon expertise technique.',
    
    // Education
    'education.title': 'Formations',
    
    // Contact
    'contact.title': 'Contact',
    'contact.description': 'Vous pouvez me contacter pour un poste ou un projet.',
    'contact.infoTitle': 'Informations de contact',
    'contact.email': 'Email',
    'contact.phone': 'Téléphone',
    'contact.location': 'Localisation',
    'contact.locationValue': 'Saint-Denis, Ile-De-France',
    'contact.form.name': 'Nom',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Envoyer',
    'contact.form.sending': 'Envoi en cours...',
    'contact.form.success': 'Merci pour votre message ! Je vous répondrai dès que possible.',
    'contact.form.error': 'Veuillez corriger les erreurs dans le formulaire.',
    'contact.form.nameRequired': 'Le nom est requis',
    'contact.form.nameMin': 'Le nom doit contenir au moins 2 caractères',
    'contact.form.emailRequired': 'L\'email est requis',
    'contact.form.emailInvalid': 'Veuillez entrer un email valide',
    'contact.form.messageRequired': 'Le message est requis',
    'contact.form.messageMin': 'Le message doit contenir au moins 10 caractères',
    'contact.form.required': '*',
    'contact.form.namePlaceholder': 'Votre nom',
    'contact.form.emailPlaceholder': 'votre.email@example.com',
    'contact.form.messagePlaceholder': 'Votre message...',
    
    // Footer
    'footer.rights': 'Tous droits réservés.',
    
    // Common
    'common.loading': 'Chargement...',
    
    // Projects Content
    'project.2.name': 'Site WordPress & AWS – Winvest Capital',
    'project.2.description': 'Développement du site web Winvest Capital. Développement et intégration dans un CMS (Wordpress). Collaboration avec les équipes métier et marketing. Intégration SEO, analytics et tracking. Maintenance, sécurité et évolutivité. Support technique et documentation.',
    'project.2b.name': 'Site WordPress & AWS – Finanssor',
    'project.2b.description': 'Développement du site web Finanssor. Développement et intégration dans un CMS (Wordpress). Collaboration avec les équipes métier et marketing. Intégration SEO, analytics et tracking. Maintenance, sécurité et évolutivité. Support technique et documentation.',
    'project.7.name': 'Module RH – Portail Employé Sécurisé',
    'project.7.description': 'Développement d\'un portail employé sécurisé permettant aux employés d\'accéder à leurs documents professionnels, gérer leurs absences et suivre leurs informations professionnelles. Interface de connexion et d\'inscription avec gestion des comptes utilisateurs. Fonctionnalités : accès aux bulletins de paie et contrats, gestion des demandes de congés et suivi du solde, suivi des tickets restaurant, pointage simplifié pour enregistrer les heures d\'arrivée et de départ. Déploiement et sécurisation sur AWS EC2 avec stockage sécurisé des documents.',
    'project.8.name': 'Migration France Téléphone – IONOS vers AWS EC2',
    'project.8.description': 'Migration complète du site web France Téléphone de IONOS vers AWS EC2 : transfert des données, reconfiguration Apache, mise à jour DNS, sécurisation HTTP/HTTPS et SSH. Scripts Bash pour automatisation du processus d\'installation et de sauvegarde.',
    'project.4.name': 'Jeu de Bataille Navale en React',
    'project.4.description': 'Jeu web interactif avec placement de bateaux via drag & drop, gestion du statut de partie, interface utilisateur intuitive et animations fluides. Projet personnel pour explorer React et TypeScript.',
    'project.6.name': 'Portfolio Personnel',
    'project.6.description': 'Portfolio web moderne et responsive développé avec React, TypeScript et TailwindCSS. Design épuré avec mode sombre, animations fluides et optimisé pour le SEO.',
    
    // Experience Content
    'experience.1.title': 'Développeur Full Stack',
    'experience.1.company': 'FRANCE TÉLÉPHONE',
    'experience.1.location': 'Fontenay Sous-Bois',
    'experience.1.desc.1': 'Développement des deux sites web Finanssor, WINVEST Capital',
    'experience.1.desc.2': 'Développement et intégration dans un CMS (Wordpress)',
    'experience.1.desc.3': 'Collaboration avec les équipes métier et marketing',
    'experience.1.desc.4': 'Intégration SEO, analytics et tracking',
    'experience.1.desc.5': 'Maintenance, sécurité et évolutivité',
    'experience.1.desc.6': 'Support technique et documentation',
    'experience.1.desc.7': 'Mise en place du module RH, ainsi que d\'autres missions',
    'experience.1.desc.8': 'Scripts Bash : Automatisation du processus d\'installation et de sauvegarde',
    'experience.1.desc.9': 'AWS EC2 (Amazon Linux) - Déploiement et sécurisation de serveurs web Apache : configuration HTTP/HTTPS, gestion DNS, accès SSH par clés, Security Groups, firewall et durcissement système',
    'experience.1.desc.10': 'Migration du site web France Téléphone de IONOS vers AWS EC2 : transfert des données, reconfiguration Apache, mise à jour DNS, sécurisation HTTP/HTTPS et SSH',
    'experience.2.title': 'Développeur WordPress',
    'experience.2.company': 'The ENERGY ACTION Project (ACT 4)',
    'experience.2.location': 'Saint-Ouen-sur-Seine, France',
    'experience.2.desc.1': 'Développement du site web EnAct en utilisant WordPress (Elementor)',
    'experience.2.desc.2': 'Développement et intégration dans un CMS (WordPress)',
    
    // Education Content
    'education.1.degree': 'Master Informatique parcours Programmation, Sûreté et Sécurité',
    'education.1.school': 'Université Sorbonne Paris Nord - Institut Galilée',
    'education.1.description': 'Formation approfondie en développement logiciel, sécurité informatique et méthodes formelles. Mention Bien.',
    'education.1.achieve.1': 'Applications web : Node.js, Express et React pour les composants, API REST, Vue.js et Electrons',
    'education.1.achieve.2': 'Vérifications de formules CTL en utilisant des automates en JAVA',
    'education.1.achieve.3': 'Développement Front-End d\'un jeu de bataille navale en React',
    'education.1.achieve.4': 'Implémentation d\'un espace bidimensionnel de Barnes-Hut en Python',
    'education.1.achieve.5': 'Mise en place d\'un pipeline CI/CD sécurisé intégrant SAST, DAST et analyse des dépendances',
    'education.1.achieve.6': 'Modélisation et Simulation Distribuée des Opinions Sociales en JAVA',
    'education.2.degree': 'Licence Informatique',
    'education.2.school': 'Université Sorbonne Paris Nord - Institut Galilée',
    'education.2.description': 'Formation fondamentale en informatique couvrant les algorithmes, structures de données, bases de données et développement logiciel.',
    'education.2.achieve.1': 'City-mapper en Python avec une base de données PostgreSQL',
    'education.2.achieve.2': 'Développement et Pilotage d\'un Robot Éducatif en Python',
    'education.2.achieve.3': 'Administration de serveurs web sous Linux (LAMP, DNS, DHCP, LDAP)',
    'education.2.achieve.4': 'Configurations de machine avec Wireshark (switch, routeurs, firewalls)',
    
    // Soft Skills Content
    'softSkill.communication.name': 'Communication',
    'softSkill.communication.desc': 'Échange efficace avec les équipes',
    'softSkill.teamwork.name': 'Travail en équipe',
    'softSkill.teamwork.desc': 'Collaboration et synergie',
    'softSkill.adaptability.name': 'Adaptabilité',
    'softSkill.adaptability.desc': 'Flexibilité face aux changements',
    'softSkill.problemSolving.name': 'Résolution de problèmes',
    'softSkill.problemSolving.desc': 'Analyse et solutions innovantes',
    'softSkill.projectManagement.name': 'Gestion de projet',
    'softSkill.projectManagement.desc': 'Organisation et planification',
    'softSkill.leadership.name': 'Leadership',
    'softSkill.leadership.desc': 'Encadrement et motivation',
    'softSkill.curiosity.name': 'Curiosité',
    'softSkill.curiosity.desc': 'Veille technologique continue',
    'softSkill.autonomy.name': 'Autonomie',
    'softSkill.autonomy.desc': 'Capacité à travailler en indépendance',
    
    // Skills Categories
    'skills.category.languages': 'Langages de programmation',
    'skills.category.project': 'Gestion de projet',
    'skills.category.devops-tools': 'Outils DevOps',
    'skills.category.frameworks': 'Frameworks',
    'skills.category.databases': 'SGBD',
    'skills.category.systems': 'Système & outils informatiques',
    'skills.category.sysadmin': 'Administration système et réseaux',
    'skills.category.automation': 'Automatisation de workflow',
    'skills.category.cms': 'CMS',
    'skills.category.ai-tools': 'IA & Assistance au développement',
    'skills.category.design': 'Design & UI',
    'skills.category.security': 'Sécurité & Pentesting',
    'skills.category.cloud': 'Cloud',
  },
  en: {
    // Navigation
    'nav.home': 'Home',
    'nav.about': 'About',
    'nav.experience': 'Experience',
    'nav.projects': 'Projects',
    'nav.skills': 'Skills',
    'nav.softSkills': 'Soft Skills',
    'nav.education': 'Education',
    'nav.contact': 'Contact',
    
    // Hero
    'hero.title': 'Abdelhakim MENINA',
    'hero.role': 'Full Stack / Front-End / Back-End Developer',
    'hero.description': 'Recently graduated with a Master\'s degree in Computer Science, Programming, Safety and Security track. Available now, I am looking for a job as a Full-Stack / Front-End / Back-End developer.',
    'hero.domain1': 'Web Development',
    'hero.domain2': 'DevOps & Cloud',
    'hero.domain3': 'Cybersecurity',
    'hero.domain4': 'CMS & WordPress',
    'hero.buttonProjects': 'View my projects',
    'hero.buttonContact': 'Contact me',
    
    // About
    'about.title': 'About',
    'about.p1': 'Recently graduated with a Master\'s degree in Computer Science, Programming, Safety and Security track at Sorbonne Paris Nord University, with Distinction. Available now, I am looking for a job as a Full-Stack / Front-End / Back-End developer.',
    'about.p2': 'I have gained solid experience during my internships in web development, particularly in creating websites with WordPress, full stack development, and setting up cloud infrastructures on AWS. I have also worked on SEO integration, analytics, and web server security.',
    'about.p3': 'My approach combines technical rigor, attention to detail and constant search for innovation. I am always ready to take on new challenges and contribute to exciting projects.',
    'about.stackTitle': 'Main stack',
    'about.stack1': 'Frontend: React.js, Vue.js, TypeScript, JavaScript, HTML, CSS',
    'about.stack2': 'Backend: Node.js, Nest.js, Express.js, Python, Java, C',
    'about.stack3': 'DevOps: Docker, GitLab CI/CD, AWS EC2, Linux, Bash',
    'about.stack4': 'Databases: PostgreSQL, MySQL, SQL',
    'about.stack5': 'CMS: WordPress, Bootstrap',
    'about.stack6': 'Tools: Git, GitHub, GitLab, Jira, Trello, Figma, Canva',
    'about.expertiseTitle': 'Areas of expertise',
    'about.expertise1': 'Modern web development',
    'about.expertise2': 'DevOps & Infrastructure',
    'about.expertise3': 'Cloud Computing (AWS)',
    'about.expertise4': 'Cybersecurity',
    'about.expertise5': 'CMS & WordPress',
    'about.expertise6': 'Full Stack Development',
    
    // Experience
    'experience.title': 'Professional Experience',
    'experience.type.stage': 'Internship',
    'experience.type.cdd': 'Fixed-term contract',
    'experience.type.cdi': 'Permanent contract',
    'experience.type.alternance': 'Apprenticeship',
    'experience.type.freelance': 'Freelance',
    'experience.current': 'Current',
    'experience.today': 'Today',
    'experience.months': 'months',
    'education.inProgress': 'In progress',
    'education.achievementsTitle': 'Notable Projects & Achievements',
    
    // Projects
    'projects.title': 'Projects',
    'projects.filter.all': 'All',
    'projects.filter.professional': 'Professional',
    'projects.filter.academic': 'Academic',
    'projects.filter.personal': 'Personal',
    'projects.technologies': 'Technologies',
    'projects.github': 'GitHub',
    'projects.viewSite': 'View site',
    'projects.noProjects': 'No projects in this category at the moment.',
    
    // Skills
    'skills.title': 'Skills & Tools',
    'skills.description': 'Technologies and tools I master to create modern and high-performing solutions.',
    
    // Soft Skills
    'softSkills.title': 'Soft Skills',
    'softSkills.description': 'Interpersonal skills and soft skills that complement my technical expertise.',
    
    // Education
    'education.title': 'Education',
    
    // Contact
    'contact.title': 'Contact',
    'contact.description': 'You can contact me for a position or a project.',
    'contact.infoTitle': 'Contact information',
    'contact.email': 'Email',
    'contact.phone': 'Phone',
    'contact.location': 'Location',
    'contact.locationValue': 'Saint-Denis, Ile-De-France',
    'contact.form.name': 'Name',
    'contact.form.email': 'Email',
    'contact.form.message': 'Message',
    'contact.form.send': 'Send',
    'contact.form.sending': 'Sending...',
    'contact.form.success': 'Thank you for your message! I will get back to you as soon as possible.',
    'contact.form.error': 'Please correct the errors in the form.',
    'contact.form.nameRequired': 'Name is required',
    'contact.form.nameMin': 'Name must contain at least 2 characters',
    'contact.form.emailRequired': 'Email is required',
    'contact.form.emailInvalid': 'Please enter a valid email',
    'contact.form.messageRequired': 'Message is required',
    'contact.form.messageMin': 'Message must contain at least 10 characters',
    'contact.form.required': '*',
    'contact.form.namePlaceholder': 'Your name',
    'contact.form.emailPlaceholder': 'your.email@example.com',
    'contact.form.messagePlaceholder': 'Your message...',
    
    // Footer
    'footer.rights': 'All rights reserved.',
    
    // Common
    'common.loading': 'Loading...',
    
    // Projects Content
    'project.2.name': 'WordPress & AWS Site – Winvest Capital',
    'project.2.description': 'Development of the Winvest Capital website. Development and integration into a CMS (WordPress). Collaboration with business and marketing teams. SEO, analytics and tracking integration. Maintenance, security and scalability. Technical support and documentation.',
    'project.2b.name': 'WordPress & AWS Site – Finanssor',
    'project.2b.description': 'Development of the Finanssor website. Development and integration into a CMS (WordPress). Collaboration with business and marketing teams. SEO, analytics and tracking integration. Maintenance, security and scalability. Technical support and documentation.',
    'project.7.name': 'HR Module – Secure Employee Portal',
    'project.7.description': 'Development of a secure employee portal allowing employees to access their professional documents, manage their absences and track their professional information. Login and registration interface with user account management. Features: access to pay slips and contracts, leave request management and balance tracking, meal voucher tracking, simplified time tracking to record arrival and departure times. Deployment and security on AWS EC2 with secure document storage.',
    'project.8.name': 'France Téléphone Migration – IONOS to AWS EC2',
    'project.8.description': 'Complete migration of the France Téléphone website from IONOS to AWS EC2: data transfer, Apache reconfiguration, DNS update, HTTP/HTTPS and SSH security. Bash scripts for automating the installation and backup process.',
    'project.4.name': 'Battleship Game in React',
    'project.4.description': 'Interactive web game with ship placement via drag & drop, game status management, intuitive user interface and smooth animations. Personal project to explore React and TypeScript.',
    'project.6.name': 'Personal Portfolio',
    'project.6.description': 'Modern and responsive web portfolio developed with React, TypeScript and TailwindCSS. Clean design with dark mode, smooth animations and SEO optimized.',
    
    // Experience Content
    'experience.1.title': 'Full Stack Developer',
    'experience.1.company': 'FRANCE TÉLÉPHONE',
    'experience.1.location': 'Fontenay Sous-Bois',
    'experience.1.desc.1': 'Development of the two websites Finanssor, WINVEST Capital',
    'experience.1.desc.2': 'Development and integration into a CMS (WordPress)',
    'experience.1.desc.3': 'Collaboration with business and marketing teams',
    'experience.1.desc.4': 'SEO, analytics and tracking integration',
    'experience.1.desc.5': 'Maintenance, security and scalability',
    'experience.1.desc.6': 'Technical support and documentation',
    'experience.1.desc.7': 'Implementation of the HR module, as well as other missions',
    'experience.1.desc.8': 'Bash scripts: Automation of the installation and backup process',
    'experience.1.desc.9': 'AWS EC2 (Amazon Linux) - Deployment and security of Apache web servers: HTTP/HTTPS configuration, DNS management, SSH key access, Security Groups, firewall and system hardening',
    'experience.1.desc.10': 'Migration of the France Téléphone website from IONOS to AWS EC2: data transfer, Apache reconfiguration, DNS update, HTTP/HTTPS and SSH security',
    'experience.2.title': 'WordPress Developer',
    'experience.2.company': 'The ENERGY ACTION Project (ACT 4)',
    'experience.2.location': 'Saint-Ouen-sur-Seine, France',
    'experience.2.desc.1': 'Development of the EnAct website using WordPress (Elementor)',
    'experience.2.desc.2': 'Development and integration into a CMS (WordPress)',
    
    // Education Content
    'education.1.degree': 'Master\'s in Computer Science, Programming, Safety and Security track',
    'education.1.school': 'Sorbonne Paris Nord University - Institut Galilée',
    'education.1.description': 'In-depth training in software development, computer security and formal methods. Distinction.',
    'education.1.achieve.1': 'Web applications: Node.js, Express and React for components, REST API, Vue.js and Electron',
    'education.1.achieve.2': 'CTL formula verification using automata in JAVA',
    'education.1.achieve.3': 'Front-End development of a battleship game in React',
    'education.1.achieve.4': 'Implementation of a two-dimensional Barnes-Hut space in Python',
    'education.1.achieve.5': 'Setting up a secure CI/CD pipeline integrating SAST, DAST and dependency analysis',
    'education.1.achieve.6': 'Distributed Modeling and Simulation of Social Opinions in JAVA',
    'education.2.degree': 'Bachelor\'s in Computer Science',
    'education.2.school': 'Sorbonne Paris Nord University - Institut Galilée',
    'education.2.description': 'Fundamental training in computer science covering algorithms, data structures, databases and software development.',
    'education.2.achieve.1': 'City-mapper in Python with a PostgreSQL database',
    'education.2.achieve.2': 'Development and Control of an Educational Robot in Python',
    'education.2.achieve.3': 'Web server administration under Linux (LAMP, DNS, DHCP, LDAP)',
    'education.2.achieve.4': 'Machine configurations with Wireshark (switches, routers, firewalls)',
    
    // Soft Skills Content
    'softSkill.communication.name': 'Communication',
    'softSkill.communication.desc': 'Effective exchange with teams',
    'softSkill.teamwork.name': 'Teamwork',
    'softSkill.teamwork.desc': 'Collaboration and synergy',
    'softSkill.adaptability.name': 'Adaptability',
    'softSkill.adaptability.desc': 'Flexibility in the face of change',
    'softSkill.problemSolving.name': 'Problem Solving',
    'softSkill.problemSolving.desc': 'Analysis and innovative solutions',
    'softSkill.projectManagement.name': 'Project Management',
    'softSkill.projectManagement.desc': 'Organization and planning',
    'softSkill.leadership.name': 'Leadership',
    'softSkill.leadership.desc': 'Supervision and motivation',
    'softSkill.curiosity.name': 'Curiosity',
    'softSkill.curiosity.desc': 'Continuous technological watch',
    'softSkill.autonomy.name': 'Autonomy',
    'softSkill.autonomy.desc': 'Ability to work independently',
    
    // Skills Categories
    'skills.category.languages': 'Programming Languages',
    'skills.category.project': 'Project Management',
    'skills.category.devops-tools': 'DevOps Tools',
    'skills.category.frameworks': 'Frameworks',
    'skills.category.databases': 'Databases',
    'skills.category.systems': 'Systems & IT Tools',
    'skills.category.sysadmin': 'System & Network Administration',
    'skills.category.automation': 'Workflow Automation',
    'skills.category.cms': 'CMS',
    'skills.category.ai-tools': 'AI & Development Assistance',
    'skills.category.design': 'Design & UI',
    'skills.category.security': 'Security & Pentesting',
    'skills.category.cloud': 'Cloud',
  },
};

export const LanguageProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [language, setLanguageState] = useState<Language>(() => {
    // Récupérer la langue depuis localStorage ou utiliser 'fr' par défaut
    const savedLang = localStorage.getItem('portfolio-language') as Language;
    return savedLang && (savedLang === 'fr' || savedLang === 'en') ? savedLang : 'fr';
  });

  const setLanguage = (lang: Language) => {
    setLanguageState(lang);
    localStorage.setItem('portfolio-language', lang);
  };

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t }}>
      {children}
    </LanguageContext.Provider>
  );
};

export const useLanguage = () => {
  const context = useContext(LanguageContext);
  if (!context) {
    throw new Error('useLanguage must be used within a LanguageProvider');
  }
  return context;
};

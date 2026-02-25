import React, { useState, useEffect, useRef } from 'react';
import SectionWrapper from '../ui/SectionWrapper';
import { useLanguage } from '../../contexts/LanguageContext';

// Données locales pour les compétences avec icônes
interface SkillItem {
  icon: string;
  name: string;
  category: string;
}

// Données alignées sur les catégories du CV
const skillsData: SkillItem[] = [
  // Langages de programmation
  { name: 'C', category: 'languages', icon: '💻' },
  { name: 'Python', category: 'languages', icon: '💻' },
  { name: 'Java', category: 'languages', icon: '💻' },
  { name: 'JavaScript', category: 'languages', icon: '📜' },
  { name: 'TypeScript', category: 'languages', icon: '📜' },
  { name: 'HTML', category: 'languages', icon: '🌐' },
  { name: 'CSS', category: 'languages', icon: '🌐' },
  { name: 'PHP', category: 'languages', icon: '💻' },
  { name: 'Node.js', category: 'languages', icon: '⚙️' },
  { name: 'Bash', category: 'languages', icon: '💻' },

  // Gestion de projet
  { name: 'GitLab', category: 'project', icon: '📂' },
  { name: 'GitHub', category: 'project', icon: '📂' },
  { name: 'Git', category: 'project', icon: '📋' },
  { name: 'Jira', category: 'project', icon: '📋' },
  { name: 'Trello', category: 'project', icon: '📋' },

  // Outils DevOps
  { name: 'GitLab CI/CD', category: 'devops-tools', icon: '🔄' },
  { name: 'Docker', category: 'devops-tools', icon: '🐳' },

  // Frameworks
  { name: 'React.js', category: 'frameworks', icon: '⚛️' },
  { name: 'Nest.js', category: 'frameworks', icon: '🪺' },
  { name: 'Bootstrap', category: 'frameworks', icon: '🧱' },
  { name: 'Express.js', category: 'frameworks', icon: '⚡' },
  { name: 'Vue.js', category: 'frameworks', icon: '🟢' },
  { name: 'Axios', category: 'frameworks', icon: '📡' },

  // SGBD
  { name: 'PostgreSQL', category: 'databases', icon: '🗄️' },
  { name: 'MySQL', category: 'databases', icon: '🗄️' },
  { name: 'MariaDB', category: 'databases', icon: '🗄️' },
  { name: 'SQL', category: 'databases', icon: '📊' },

  // Système & outils informatiques
  { name: 'Linux', category: 'systems', icon: '🐧' },
  { name: 'Windows', category: 'systems', icon: '🪟' },
  { name: 'Apache', category: 'systems', icon: '🌐' },
  { name: 'SSH', category: 'systems', icon: '🔐' },
  { name: 'Excel', category: 'systems', icon: '📈' },
  { name: 'SEO', category: 'systems', icon: '🔍' },
  { name: 'Analytics', category: 'systems', icon: '📊' },

  // Administration système et réseaux
  { name: 'DNS', category: 'sysadmin', icon: '🌍' },
  { name: 'DHCP', category: 'sysadmin', icon: '🔌' },
  { name: 'LDAP', category: 'sysadmin', icon: '📁' },


  // CMS
  { name: 'WordPress', category: 'cms', icon: '📝' },

  // IA & Assistance au développement
  { name: 'ChatGPT', category: 'ai-tools', icon: '🧠' },
  { name: 'Cursor', category: 'ai-tools', icon: '✏️' },
  { name: 'Banani', category: 'ai-tools', icon: '🚀' },

  // Design & UI
  { name: 'Figma', category: 'design', icon: '🎨' },
  { name: 'Canva', category: 'design', icon: '🖼️' },

  // Outils de Sécurité et Pentesting
  { name: 'Wireshark', category: 'security', icon: '🔍' },
  { name: 'Nmap', category: 'security', icon: '🔎' },
  { name: 'iptables', category: 'security', icon: '🛡️' },
  { name: 'Kali Linux', category: 'security', icon: '🐉' },

  // Cloud
  { name: 'AWS', category: 'cloud', icon: '☁️' },
  { name: 'S3 Bucket', category: 'cloud', icon: '🪣' },
];

// Les labels de catégories seront traduits dynamiquement via useLanguage

const categoryColors: Record<string, { bg: string; border: string; text: string }> = {
  languages: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-600 dark:text-blue-400',
  },
  project: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-600 dark:text-green-400',
  },
  'devops-tools': {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    text: 'text-purple-600 dark:text-purple-400',
  },
  frameworks: {
    bg: 'bg-indigo-50 dark:bg-indigo-900/20',
    border: 'border-indigo-200 dark:border-indigo-800',
    text: 'text-indigo-600 dark:text-indigo-400',
  },
  databases: {
    bg: 'bg-emerald-50 dark:bg-emerald-900/20',
    border: 'border-emerald-200 dark:border-emerald-800',
    text: 'text-emerald-600 dark:text-emerald-400',
  },
  systems: {
    bg: 'bg-slate-50 dark:bg-slate-900/20',
    border: 'border-slate-200 dark:border-slate-800',
    text: 'text-slate-700 dark:text-slate-300',
  },
  sysadmin: {
    bg: 'bg-teal-50 dark:bg-teal-900/20',
    border: 'border-teal-200 dark:border-teal-800',
    text: 'text-teal-600 dark:text-teal-400',
  },
  cms: {
    bg: 'bg-amber-50 dark:bg-amber-900/20',
    border: 'border-amber-200 dark:border-amber-800',
    text: 'text-amber-600 dark:text-amber-400',
  },
  'ai-tools': {
    bg: 'bg-fuchsia-50 dark:bg-fuchsia-900/20',
    border: 'border-fuchsia-200 dark:border-fuchsia-800',
    text: 'text-fuchsia-600 dark:text-fuchsia-400',
  },
  design: {
    bg: 'bg-rose-50 dark:bg-rose-900/20',
    border: 'border-rose-200 dark:border-rose-800',
    text: 'text-rose-600 dark:text-rose-400',
  },
  security: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800',
    text: 'text-orange-600 dark:text-orange-400',
  },
  cloud: {
    bg: 'bg-sky-50 dark:bg-sky-900/20',
    border: 'border-sky-200 dark:border-sky-800',
    text: 'text-sky-600 dark:text-sky-400',
  },
};

const Skills: React.FC = () => {
  const { t } = useLanguage();
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animer l'apparition des compétences (fade-in / slide)
            const skillElements = entry.target.querySelectorAll('[data-skill]');
            skillElements.forEach((el, index) => {
              setTimeout(() => {
                const skillName = el.getAttribute('data-skill') || '';
                setVisibleSkills((prev) => new Set([...prev, skillName]));
              }, index * 100);
            });
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const skillsByCategory = skillsData.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {} as Record<string, typeof skillsData>);

  return (
    <SectionWrapper
      id="skills"
      ref={sectionRef}
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-50 dark:bg-gray-900"
    >
      <div className="container mx-auto max-w-7xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 text-gray-900 dark:text-gray-100">
            {t('skills.title')}
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            {t('skills.description')}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
            const colors = categoryColors[category];
            return (
              <div
                key={category}
                className={`rounded-2xl p-6 border-2 ${colors.bg} ${colors.border} transition-all duration-300 hover:shadow-xl hover:-translate-y-1`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <h3 className={`text-2xl font-bold ${colors.text}`}>
                    {t(`skills.category.${category}`)}
                  </h3>
                  <div className="h-px flex-1 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent dark:via-gray-200/30" />
                </div>
                
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {categorySkills.map((skill) => {
                    const isVisible = visibleSkills.has(skill.name);
                    return (
                      <div
                        key={skill.name}
                        data-skill={skill.name}
                        className={`group flex items-center gap-3 px-4 py-3 rounded-xl bg-white/70 dark:bg-gray-900/40 border border-gray-200/60 dark:border-gray-700/60 shadow-sm transition-all duration-500 ${
                          isVisible
                            ? 'opacity-100 translate-y-0'
                            : 'opacity-0 translate-y-2'
                        }`}
                      >
                        {/* Icône personnalisée */}
                        <div
                          className="w-9 h-9 rounded-lg bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center overflow-hidden group-hover:border-primary-400 transition-colors duration-300"
                          data-icon-slot={skill.name}
                        >
                          <img
                            src={`${import.meta.env.BASE_URL}icons/${skill.name.toLowerCase().replace(/\s+/g, '-').replace(/\./g, '')}.svg`}
                            alt={skill.name}
                            className="w-7 h-7 object-contain"
                            onError={(e) => {
                              // Fallback si l'icône n'existe pas
                              const target = e.target as HTMLImageElement;
                              target.style.display = 'none';
                              const parent = target.parentElement;
                              if (parent) {
                                parent.innerHTML = `<span class="text-[10px] font-medium text-gray-400 dark:text-gray-500 group-hover:text-primary-400">Icon</span>`;
                              }
                            }}
                          />
                        </div>
                        <span className="font-semibold text-gray-900 dark:text-gray-100 text-sm sm:text-base">
                          {skill.name}
                        </span>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default Skills;

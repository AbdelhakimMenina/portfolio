import React, { useState, useEffect, useRef } from 'react';
import type { Skill } from '../../types';
import SectionWrapper from '../ui/SectionWrapper';

// Données des compétences avec niveaux et icônes
interface SkillWithLevel extends Skill {
  level: number; // 0-100
  icon: string;
}

const skillsData: SkillWithLevel[] = [
  // Frontend
  { name: 'React', category: 'frontend', level: 90, icon: '⚛️' },
  { name: 'TypeScript', category: 'frontend', level: 85, icon: '📘' },
  { name: 'JavaScript', category: 'frontend', level: 90, icon: '🟨' },
  { name: 'TailwindCSS', category: 'frontend', level: 88, icon: '🎨' },
  { name: 'HTML/CSS', category: 'frontend', level: 92, icon: '🌐' },
  
  // Backend
  { name: 'Node.js', category: 'backend', level: 85, icon: '🟢' },
  { name: 'NestJS', category: 'backend', level: 80, icon: '🪺' },
  { name: 'Express', category: 'backend', level: 82, icon: '⚡' },
  { name: 'Java', category: 'backend', level: 75, icon: '☕' },
  { name: 'Python', category: 'backend', level: 78, icon: '🐍' },
  { name: 'REST APIs', category: 'backend', level: 88, icon: '🔌' },
  
  // DevOps
  { name: 'Docker', category: 'devops', level: 85, icon: '🐳' },
  { name: 'GitLab CI/CD', category: 'devops', level: 82, icon: '🔄' },
  { name: 'GitHub Actions', category: 'devops', level: 80, icon: '⚙️' },
  { name: 'Linux', category: 'devops', level: 83, icon: '🐧' },
  { name: 'AWS (EC2, S3)', category: 'devops', level: 75, icon: '☁️' },
  
  // Autres
  { name: 'SQL (MySQL/PostgreSQL)', category: 'other', level: 80, icon: '🗄️' },
  { name: 'Git', category: 'other', level: 88, icon: '📚' },
  { name: 'Shell', category: 'other', level: 78, icon: '💻' },
  { name: 'WordPress', category: 'other', level: 75, icon: '📝' },
];

const categoryLabels: Record<string, string> = {
  frontend: 'Frontend',
  backend: 'Backend',
  devops: 'DevOps / Cloud',
  other: 'Autres',
};

const categoryColors: Record<string, { bg: string; border: string; text: string; progress: string }> = {
  frontend: {
    bg: 'bg-blue-50 dark:bg-blue-900/20',
    border: 'border-blue-200 dark:border-blue-800',
    text: 'text-blue-600 dark:text-blue-400',
    progress: 'bg-blue-500 dark:bg-blue-400',
  },
  backend: {
    bg: 'bg-green-50 dark:bg-green-900/20',
    border: 'border-green-200 dark:border-green-800',
    text: 'text-green-600 dark:text-green-400',
    progress: 'bg-green-500 dark:bg-green-400',
  },
  devops: {
    bg: 'bg-purple-50 dark:bg-purple-900/20',
    border: 'border-purple-200 dark:border-purple-800',
    text: 'text-purple-600 dark:text-purple-400',
    progress: 'bg-purple-500 dark:bg-purple-400',
  },
  other: {
    bg: 'bg-orange-50 dark:bg-orange-900/20',
    border: 'border-orange-200 dark:border-orange-800',
    text: 'text-orange-600 dark:text-orange-400',
    progress: 'bg-orange-500 dark:bg-orange-400',
  },
};

const Skills: React.FC = () => {
  const [visibleSkills, setVisibleSkills] = useState<Set<string>>(new Set());
  const [animatedLevels, setAnimatedLevels] = useState<Map<string, number>>(new Map());
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Animer l'apparition des compétences
            const skillElements = entry.target.querySelectorAll('[data-skill]');
            skillElements.forEach((el, index) => {
              setTimeout(() => {
                const skillName = el.getAttribute('data-skill') || '';
                setVisibleSkills((prev) => new Set([...prev, skillName]));
                
                // Animer la barre de progression
                const skill = skillsData.find((s) => s.name === skillName);
                if (skill) {
                  let currentLevel = 0;
                  const interval = setInterval(() => {
                    currentLevel += 2;
                    if (currentLevel >= skill.level) {
                      currentLevel = skill.level;
                      clearInterval(interval);
                    }
                    setAnimatedLevels((prev) => {
                      const newMap = new Map(prev);
                      newMap.set(skillName, currentLevel);
                      return newMap;
                    });
                  }, 20);
                }
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
            Compétences & Outils
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
            Technologies et outils que je maîtrise pour créer des solutions modernes et performantes.
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {Object.entries(skillsByCategory).map(([category, categorySkills]) => {
            const colors = categoryColors[category];
            return (
              <div
                key={category}
                className={`rounded-xl p-6 border-2 ${colors.bg} ${colors.border} transition-all duration-300 hover:shadow-xl`}
              >
                <div className="flex items-center gap-3 mb-6">
                  <h3 className={`text-2xl font-bold ${colors.text}`}>
                    {categoryLabels[category]}
                  </h3>
                  <div className={`h-1 flex-1 ${colors.progress} opacity-30 rounded-full`}></div>
                </div>
                
                <div className="space-y-4">
                  {categorySkills.map((skill) => {
                    const isVisible = visibleSkills.has(skill.name);
                    const currentLevel = animatedLevels.get(skill.name) || 0;
                    return (
                      <div
                        key={skill.name}
                        data-skill={skill.name}
                        className={`transition-all duration-500 ${
                          isVisible
                            ? 'opacity-100 translate-x-0'
                            : 'opacity-0 -translate-x-4'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-2">
                          <div className="flex items-center gap-3">
                            <span className="text-2xl">{skill.icon}</span>
                            <span className="font-semibold text-gray-900 dark:text-gray-100">
                              {skill.name}
                            </span>
                          </div>
                          <span className={`text-sm font-bold ${colors.text}`}>
                            {currentLevel}%
                          </span>
                        </div>
                        <div className="w-full bg-gray-200 dark:bg-gray-700 rounded-full h-2.5 overflow-hidden">
                          <div
                            className={`h-full rounded-full transition-all duration-500 ${colors.progress} relative overflow-hidden`}
                            style={{ width: `${currentLevel}%` }}
                          >
                            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-shimmer"></div>
                          </div>
                        </div>
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

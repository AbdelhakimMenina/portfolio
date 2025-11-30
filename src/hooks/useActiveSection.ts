import { useEffect, useState } from 'react';

type SectionId = 'hero' | 'about' | 'experience' | 'projects' | 'skills' | 'soft-skills' | 'education' | 'contact';

/**
 * Hook pour détecter la section actuellement visible dans le viewport
 * Utilise IntersectionObserver pour suivre toutes les sections
 */
export const useActiveSection = () => {
  const [activeSection, setActiveSection] = useState<SectionId>('hero');

  useEffect(() => {
    const sections: SectionId[] = ['hero', 'about', 'experience', 'projects', 'skills', 'soft-skills', 'education', 'contact'];
    const observers: IntersectionObserver[] = [];
    const sectionElements: Map<SectionId, HTMLElement> = new Map();

    // Récupérer toutes les sections
    sections.forEach((sectionId) => {
      const element = document.getElementById(sectionId);
      if (element) {
        sectionElements.set(sectionId, element);
      }
    });

    // Observer chaque section
    sectionElements.forEach((element) => {
      const observer = new IntersectionObserver(
        () => {
          // Trouver la section avec le plus grand ratio d'intersection
          const ratios = new Map<SectionId, number>();
          sectionElements.forEach((el, id) => {
            const rect = el.getBoundingClientRect();
            const viewportHeight = window.innerHeight;
            const visibleHeight = Math.max(0, Math.min(rect.bottom, viewportHeight) - Math.max(rect.top, 0));
            const ratio = visibleHeight / rect.height;
            ratios.set(id, ratio);
          });

          // Sélectionner la section avec le ratio le plus élevé
          let maxRatio = 0;
          let maxSection: SectionId = 'hero';
          ratios.forEach((ratio, id) => {
            if (ratio > maxRatio) {
              maxRatio = ratio;
              maxSection = id;
            }
          });

          // Mettre à jour seulement si la section est visible à au moins 30%
          if (maxRatio > 0.3) {
            setActiveSection(maxSection);
          }
        },
        {
          threshold: [0, 0.3, 0.5, 0.7, 1],
          rootMargin: '-20% 0px -70% 0px',
        }
      );

      observer.observe(element);
      observers.push(observer);
    });

    // Nettoyage
    return () => {
      observers.forEach((observer) => observer.disconnect());
    };
  }, []);

  return activeSection;
};


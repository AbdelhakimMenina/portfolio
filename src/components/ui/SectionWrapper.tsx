import { useEffect, useRef, useState, forwardRef, useImperativeHandle } from 'react';
import type { ReactNode } from 'react';

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  id?: string;
}

/**
 * Wrapper pour les sections qui ajoute une animation d'apparition au scroll
 */
const SectionWrapper = forwardRef<HTMLElement, SectionWrapperProps>(({ 
  children, 
  className = '',
  id 
}, ref) => {
  const [isVisible, setIsVisible] = useState(false);
  const internalRef = useRef<HTMLElement>(null);

  useImperativeHandle(ref, () => internalRef.current as HTMLElement);

  useEffect(() => {
    const element = internalRef.current;
    if (!element) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(element);
        }
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, []);

  return (
    <section
      id={id}
      ref={internalRef}
      className={`transition-all duration-700 ${
        isVisible
          ? 'opacity-100 translate-y-0'
          : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  );
});

SectionWrapper.displayName = 'SectionWrapper';

export default SectionWrapper;


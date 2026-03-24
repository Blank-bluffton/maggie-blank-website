'use client';

import { useEffect, useRef, ReactNode } from 'react';

interface ScrollAnimationProps {
  children: ReactNode;
  animation?: 'fade-in' | 'fade-in-left' | 'fade-in-right' | 'scale-in';
  delay?: number;
  threshold?: number;
  className?: string;
}

export default function ScrollAnimation({ 
  children, 
  animation = 'fade-in',
  delay = 0,
  threshold = 0.1,
  className = ''
}: ScrollAnimationProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setTimeout(() => {
              entry.target.classList.add('visible');
            }, delay);
          }
        });
      },
      {
        threshold,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    const currentElement = elementRef.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    return () => {
      if (currentElement) {
        observer.unobserve(currentElement);
      }
    };
  }, [delay, threshold]);

  const animationClasses = {
    'fade-in': 'scroll-fade-in',
    'fade-in-left': 'scroll-fade-in-left',
    'fade-in-right': 'scroll-fade-in-right',
    'scale-in': 'scroll-scale-in'
  };

  return (
    <div ref={elementRef} className={`${animationClasses[animation]} ${className}`}>
      {children}
    </div>
  );
}

// Hook for components that want to add scroll animations to their own elements
export function useScrollAnimation() {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('visible');
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => {
      if (elementRef.current) {
        observer.unobserve(elementRef.current);
      }
    };
  }, []);

  return elementRef;
}
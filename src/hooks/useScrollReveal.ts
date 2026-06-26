import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SELECTORS = [
  '.page-stats',
  '.section',
  '.about-quote',
  '.about-editorial',
  '.about-values-dark',
  '.about-finale',
  '.contact-trust',
].join(', ');

export function useScrollReveal() {
  const { pathname } = useLocation();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('sr-visible');
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.07, rootMargin: '0px 0px -40px 0px' },
    );

    const els = document.querySelectorAll(SELECTORS);
    els.forEach((el) => {
      const rect = el.getBoundingClientRect();
      // Already in viewport → mark visible immediately (no flash)
      if (rect.top < window.innerHeight && rect.bottom > 0) {
        el.classList.add('sr-visible');
      } else {
        el.classList.remove('sr-visible');
        observer.observe(el);
      }
    });

    return () => observer.disconnect();
  }, [pathname]);
}

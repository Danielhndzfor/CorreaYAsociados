import { useEffect, useRef, useState } from 'react';
import { ArrowRight } from 'lucide-react';

const WA_LINK = 'https://wa.me/523141460458?text=Hola%2C%20me%20gustar%C3%ADa%20informaci%C3%B3n%20sobre%20sus%20servicios%20legales.';

const STATS = [
  { target: 500, suffix: '+', label: 'Casos resueltos' },
  { target: 15,  suffix: '+', label: 'Años de trayectoria' },
  { target: 5,   suffix: '',  label: 'Áreas de práctica' },
];

function useCountUp(target: number, duration = 1800, active: boolean) {
  const [value, setValue] = useState(0);
  useEffect(() => {
    if (!active) return;
    let start: number | null = null;
    const step = (ts: number) => {
      if (!start) start = ts;
      const progress = Math.min((ts - start) / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setValue(Math.floor(ease * target));
      if (progress < 1) requestAnimationFrame(step);
    };
    requestAnimationFrame(step);
  }, [active, target, duration]);
  return value;
}

function StatItem({ target, suffix, label, active }: { target: number; suffix: string; label: string; active: boolean }) {
  const value = useCountUp(target, 1800, active);
  return (
    <div className="hero__stat">
      <span className="hero__stat-num">{value}{suffix}</span>
      <span className="hero__stat-label">{label}</span>
    </div>
  );
}

export default function HeroSection() {
  const bgRef = useRef<HTMLDivElement>(null);
  const statsRef = useRef<HTMLDivElement>(null);
  const [statsActive, setStatsActive] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      if (bgRef.current) {
        bgRef.current.style.transform = `translateY(${window.scrollY * 0.45}px)`;
      }
    };
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    if (!statsRef.current) return;
    const observer = new IntersectionObserver(
      ([entry]) => { if (entry.isIntersecting) { setStatsActive(true); observer.disconnect(); } },
      { threshold: 0.3 }
    );
    observer.observe(statsRef.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="inicio" className="hero">
      <div className="hero__bg" ref={bgRef} aria-hidden />
      <div className="hero__overlay" aria-hidden />

      <div className="hero__content">

        {/* ── Left column ── */}
        <div className="hero__left">
          <p className="hero__eyebrow">Despacho Jurídico · Manzanillo, Colima</p>

          <h1 className="hero__title">
            Su caso merece<br />
            <em className="hero__title-em">representación experta</em>
          </h1>

          <p className="hero__sub">
            Asesoría legal integral con más de una década de experiencia.
            Estrategia sólida, comunicación honesta y resultados concretos.
          </p>

          <div className="hero__actions">
            <a
              href={WA_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn--amber btn--lg"
            >
              Escríbenos ahora
            </a>
            <a href="#servicios" className="btn btn--ghost-white btn--lg">
              <span>Ver servicios</span>
              <ArrowRight size={18} strokeWidth={1.8} />
            </a>
          </div>

          {/* Stats en la columna izquierda */}
          <div className="hero__stats" ref={statsRef}>
            {STATS.map(({ target, suffix, label }, i) => (
              <div key={label} style={{ display: 'contents' }}>
                {i > 0 && <span className="hero__stat-divider" aria-hidden />}
                <StatItem target={target} suffix={suffix} label={label} active={statsActive} />
              </div>
            ))}
          </div>
        </div>

        {/* ── Right column – solo imagen ── */}
        <div className="hero__right">
          <div className="hero__image-wrap">
            <img
              src="/logoSinFondo.png"
              alt="Libros de derecho"
              className="hero__image"
            />
          </div>
        </div>

      </div>
    </section>
  );
}

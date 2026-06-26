import { Link } from 'react-router-dom';
import {
  ArrowRight, MapPin, Target, Eye,
  Scale, Users, Shield, Phone, Lock, Zap, Heart,
} from 'lucide-react';
import { ROUTES } from '../../router/routes';
import MexicoMap from '../../components/shared/MexicoMap';
import { useCountUp } from '../../hooks/useCountUp';

const STATS = [
  { value: 20, suffix: '+', label: 'Años de experiencia' },
  { value: 4,  suffix: '',  label: 'Ciudades con presencia' },
  { value: 500, suffix: '+', label: 'Clientes atendidos' },
  { value: 5,  suffix: '',  label: 'Áreas de práctica' },
];

function StatItem({ value, suffix, label }: { value: number; suffix: string; label: string }) {
  const { count, ref } = useCountUp(value);
  return (
    <div className="page-stats__item" ref={ref as React.RefObject<HTMLDivElement>}>
      <span className="page-stats__num">
        {count}{suffix}
      </span>
      <span className="page-stats__label">{label}</span>
    </div>
  );
}

const LOCATIONS = [
  'Manzanillo, Colima',
  'Colima, Colima',
  'Guadalajara, Jalisco',
  'Ciudad de México',
];

const VALUES = [
  {
    Icon: Scale,
    title: 'Integridad',
    body: 'Actuamos con transparencia y honestidad en cada caso, sin comprometer los principios éticos que rigen la profesión jurídica.',
  },
  {
    Icon: Users,
    title: 'Compromiso',
    body: 'Cada cliente recibe atención personalizada. Nos involucramos a fondo en su situación para construir la estrategia más sólida.',
  },
  {
    Icon: Shield,
    title: 'Excelencia',
    body: 'Implementamos estrategias eficaces y personalizadas fundamentadas en la ley, respaldadas por preparación académica permanente.',
  },
  {
    Icon: Lock,
    title: 'Confidencialidad',
    body: 'Toda la información relacionada con su caso es completamente reservada. Su privacidad es una prioridad no negociable.',
  },
  {
    Icon: Zap,
    title: 'Innovación',
    body: 'Nos actualizamos de forma constante para ofrecer las estrategias legales más eficaces frente a un marco jurídico en permanente evolución.',
  },
  {
    Icon: Heart,
    title: 'Empatía',
    body: 'Entendemos que cada caso representa una persona y una situación real. Escuchamos con atención y respondemos con sensibilidad humana.',
  },
];

export default function AboutPage() {
  return (
    <>
      {/* 1 · Hero */}
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="page-hero__inner">
          <span className="page-hero__tag">Quiénes somos</span>
          <h1 className="page-hero__title">Correa &amp; Asociados</h1>
          <p className="page-hero__sub">
            Más de 20 años proporcionando asesoramiento jurídico con un equipo de profesionales
            comprometidos con cada cliente.
          </p>
        </div>
      </div>

      {/* 2 · Stats */}
      <div className="page-stats">
        <div className="page-stats__inner">
          {STATS.map((s) => (
            <StatItem key={s.label} {...s} />
          ))}
        </div>
      </div>

      {/* 3 · El Despacho */}
      <section className="section about-editorial">
        <div className="about-editorial__grid">
          <div className="about-editorial__text">
            <span className="section__tag">El despacho</span>
            <h2 className="about-editorial__heading">
              Experiencia que<br />
              <em className="about-editorial__em">resuelve</em>
            </h2>
            <p className="about-editorial__body">
              En Correa &amp; Asociados contamos con más de 20 años de experiencia
              proporcionando asesoramiento jurídico. Estamos conformados por un equipo de
              profesionales comprometidos con nuestros clientes, brindando soluciones
              legales efectivas, honestas y personalizadas.
            </p>

            <div className="about-editorial__locations">
              <p className="about-editorial__locations-label">Presencia nacional</p>
              <ul className="about-editorial__locations-list">
                {LOCATIONS.map((loc) => (
                  <li key={loc} className="about-editorial__loc-item">
                    <MapPin size={14} strokeWidth={2} />
                    <span>{loc}</span>
                  </li>
                ))}
              </ul>
              <p className="about-editorial__locations-note">
                Con representaciones en diversas ciudades de la república mexicana.
              </p>
            </div>

            <div className="about-editorial__actions">
              <Link to={ROUTES.CONTACT} className="btn btn--navy">
                Agendar consulta
                <ArrowRight size={16} strokeWidth={2} />
              </Link>
              <a href="tel:+523141460458" className="btn btn--outline">
                <Phone size={15} strokeWidth={2} />
                314 146 0458
              </a>
            </div>
          </div>

          <div className="about-editorial__visual">
            <div className="about-editorial__photo-main">
              <img
                src="/Antonio2.png"
                alt="Mtro. Antonio Correa — Director"
                className="about-editorial__img"
              />
              <div className="about-editorial__photo-badge">
                <span className="about-editorial__badge-num">20+</span>
                <span className="about-editorial__badge-label">Años de trayectoria</span>
              </div>
            </div>

            <div className="about-editorial__office-card">
              <div className="about-editorial__office-img-wrap">
                <img
                  src="/FondoHero.jpg"
                  alt="Oficina Correa & Asociados"
                  className="about-editorial__office-img"
                />
                <div className="about-editorial__office-overlay">
                  <span className="about-editorial__office-label">Nuestras oficinas</span>
                  <Link to={ROUTES.CONTACT} className="about-editorial__office-link">
                    Cómo llegar →
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4 · Frase */}
      <div className="about-quote">
        <div className="about-quote__inner">
          <span className="about-quote__mark">"</span>
          <p className="about-quote__text">
            La justicia no es un privilegio — es el derecho de cada persona que
            confía en nosotros para defenderla con honestidad y con rigor.
          </p>
          <span className="about-quote__author">Mtro. Antonio Correa — Director del Despacho</span>
        </div>
      </div>

      {/* 5 · Misión y Visión — fondo claro */}
      <section className="section about-values" style={{ background: 'var(--cream)' }}>
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Identidad institucional</span>
            <h2 className="section__title">Misión &amp; Visión</h2>
            <p className="section__desc">
              Los principios que guían cada decisión de nuestro equipo y nuestra relación con cada cliente.
            </p>
          </div>
          <div className="about-values__grid" style={{ gridTemplateColumns: 'repeat(2, 1fr)' }}>
            <div className="about-values__card">
              <div className="about-values__icon-wrap">
                <Target size={24} strokeWidth={1.5} />
              </div>
              <h3 className="about-values__title">Misión</h3>
              <p className="about-values__body">
                Proporcionar a nuestros clientes un servicio de excelencia basado en el análisis
                detallado de cada caso, implementando estrategias eficaces y personalizadas con
                fundamento en la ley. Acompañados de un equipo de profesionales del derecho que
                los representarán y defenderán para llevar su caso al éxito.
              </p>
            </div>
            <div className="about-values__card">
              <div className="about-values__icon-wrap">
                <Eye size={24} strokeWidth={1.5} />
              </div>
              <h3 className="about-values__title">Visión</h3>
              <p className="about-values__body">
                Consolidarnos de manera nacional como una firma líder en el ámbito legal.
                Nuestro compromiso es ofrecer un servicio de calidad e innovación constante,
                mediante la preparación académica permanente y los logros profesionales de
                nuestro equipo.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 6 · Nuestros Valores — fondo oscuro */}
      <section className="about-values-dark">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Nuestros valores</span>
            <h2 className="section__title">Lo que nos define</h2>
            <p className="section__desc">
              Principios que guían cada decisión, cada argumento y cada relación con nuestros clientes.
            </p>
          </div>
          <div className="values-dark__grid">
            {VALUES.map(({ Icon, title, body }, i) => (
              <div key={title} className="values-dark__card">
                <span className="values-dark__num">0{i + 1}</span>
                <div className="values-dark__icon">
                  <Icon size={26} strokeWidth={1.5} />
                </div>
                <h3 className="values-dark__title">{title}</h3>
                <p className="values-dark__body">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7 · CTA + Sedes fusionados */}
      <section className="about-finale">
        <div className="container">

          {/* CTA */}
          <div className="about-finale__cta">
            <h2 className="about-finale__title">¿Listo para resolver su caso?</h2>
            <p className="about-finale__sub">
              Llámenos al <strong>314 146 0458</strong> — contacto directo, sin intermediarios.
            </p>
            <p className="about-finale__promo">*Pregunta por nuestras promociones y descuentos.</p>
            <div className="about-finale__actions">
              <Link to={ROUTES.CONTACT} className="btn btn--gold btn--lg">
                Contactar ahora
              </Link>
              <Link to={ROUTES.SERVICES} className="btn btn--ghost-white btn--lg">
                Ver servicios
              </Link>
            </div>
          </div>

          {/* Sedes */}
          <div className="about-finale__map-header">
            <span className="section__tag">Presencia nacional</span>
            <h3 className="about-finale__map-title">Nuestras sedes</h3>
            <p className="about-finale__map-sub">
              Selecciona un pin o una ciudad para ver información de la sede.
            </p>
          </div>
          <MexicoMap />

        </div>
      </section>
    </>
  );
}

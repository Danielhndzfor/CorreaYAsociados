import { Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2 } from 'lucide-react';
import { ROUTES } from '../../router/routes';
import { SERVICES } from '../Home/sections/ServicesSection';

const GUARANTEES = [
  'Asesoría inicial sin costo y sin compromiso',
  'Honorarios claros y transparentes desde el primer día',
  'Representación personalizada por el Mtro. Antonio Correa',
];

export default function ServicesPage() {
  return (
    <div className="services-page">
      {/* ── Page hero ── */}
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="page-hero__inner">
          <span className="page-hero__tag">Áreas de práctica</span>
          <h1 className="page-hero__title">Servicios Legales</h1>
          <p className="page-hero__sub">
            Cobertura jurídica completa para personas físicas y morales en Manzanillo y todo Colima.
          </p>
        </div>
      </div>

      {/* ── Intro strip ── */}
      <div className="services-page-intro">
        <div className="services-page-intro__inner">
          <span className="section__tag">Nuestras especialidades</span>
          <h2 className="section__title" style={{ marginBottom: '16px' }}>¿En qué podemos ayudarle?</h2>
          <p className="section__desc">
            Seleccione el área legal que corresponda a su situación. Cada servicio incluye
            valoración del caso, estrategia personalizada y acompañamiento durante todo el proceso.
          </p>
          <ul style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '28px', alignItems: 'flex-start' }}>
            {GUARANTEES.map((g) => (
              <li key={g} style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '14px', color: 'var(--text-body)' }}>
                <CheckCircle2 size={16} strokeWidth={2} style={{ color: 'var(--gold)', flexShrink: 0 }} />
                {g}
              </li>
            ))}
          </ul>
        </div>
      </div>

      {/* ── Services grid ── */}
      <section className="section services">
        <div className="container">
          <div className="services__grid">
            {SERVICES.map(({ slug, title, image, description }) => (
              <Link key={slug} to={ROUTES.serviceDetail(slug)} className="service-card">
                <div className="service-card__img-wrap">
                  <img src={image} alt={title} className="service-card__img" />
                </div>
                <div className="service-card__body">
                  <h3 className="service-card__title">{title}</h3>
                  <p className="service-card__desc">{description}</p>
                </div>
                <span className="service-card__cta">
                  Ver detalle
                  <ArrowRight size={14} strokeWidth={2} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── Bottom CTA ── */}
      <section className="about-cta-band">
        <div className="about-cta-band__inner">
          <div>
            <h2 className="about-cta-band__title">¿No encuentra su área de interés?</h2>
            <p className="about-cta-band__sub">Contáctenos directamente y evaluamos su caso sin compromiso.</p>
          </div>
          <div className="about-cta-band__actions">
            <Link to={ROUTES.CONTACT} className="btn btn--gold btn--lg">
              Agendar consulta
            </Link>
            <Link to={ROUTES.ABOUT} className="btn btn--ghost-white btn--lg">
              Conocer el despacho
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}

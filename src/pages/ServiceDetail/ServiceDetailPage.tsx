import { useParams, Link } from 'react-router-dom';
import { ArrowRight, CheckCircle2, ChevronRight, Phone } from 'lucide-react';
import { ROUTES } from '../../router/routes';
import { SERVICES_DATA } from '../../data/services';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const service = SERVICES_DATA.find((s) => s.slug === slug);
  const related = SERVICES_DATA.filter((s) => s.slug !== slug).slice(0, 3);

  if (!service) {
    return (
      <div className="container section" style={{ textAlign: 'center', padding: '6rem 1rem' }}>
        <p style={{ marginBottom: '1.5rem', color: 'var(--text-body)' }}>Servicio no encontrado.</p>
        <Link to={ROUTES.SERVICES} className="btn btn--outline">Ver todos los servicios</Link>
      </div>
    );
  }

  const { Icon, title, tagline, image, longDesc, cases, process, highlights } = service;

  return (
    <>
      {/* ── Hero ── */}
      <div className="sd-hero" style={{ backgroundImage: `url(${image})` }}>
        <div className="sd-hero__overlay" />
        <div className="sd-hero__inner">
          {/* Breadcrumb */}
          <nav className="sd-hero__breadcrumb" aria-label="Ruta de navegación">
            <Link to={ROUTES.HOME}>Inicio</Link>
            <ChevronRight size={14} />
            <Link to={ROUTES.SERVICES}>Servicios</Link>
            <ChevronRight size={14} />
            <span>{title}</span>
          </nav>

          <div className="sd-hero__icon">
            <Icon size={28} strokeWidth={1.5} />
          </div>
          <span className="sd-hero__tag">Área de práctica</span>
          <h1 className="sd-hero__title">{title}</h1>
          <p className="sd-hero__tagline">{tagline}</p>
        </div>
      </div>

      {/* ── Overview ── */}
      <section className="section sd-overview">
        <div className="container sd-overview__grid">
          <div className="sd-overview__text">
            <span className="section__tag">Sobre este servicio</span>
            <h2 className="sd-overview__heading">¿En qué le podemos ayudar?</h2>
            <p className="sd-overview__body">{longDesc}</p>
            <div className="sd-overview__actions">
              <Link to={ROUTES.CONTACT} className="btn btn--gold">
                Consultar ahora
                <ArrowRight size={15} strokeWidth={2} />
              </Link>
              <a href="tel:+523141460458" className="btn btn--outline">
                <Phone size={14} strokeWidth={2} />
                314 146 0458
              </a>
            </div>
            <p className="sd-overview__promo">*Pregunta por nuestras promociones y descuentos.</p>
          </div>

          <div className="sd-overview__highlights">
            {highlights.map(({ title: ht, desc }) => (
              <div key={ht} className="sd-highlight">
                <div className="sd-highlight__bar" />
                <h3 className="sd-highlight__title">{ht}</h3>
                <p className="sd-highlight__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Cases ── */}
      <section className="section sd-cases">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Casos que atendemos</span>
            <h2 className="section__title">¿Qué cubrimos?</h2>
            <p className="section__desc">
              Atendemos los casos más comunes en esta área con estrategias probadas y personalizadas.
            </p>
          </div>
          <div className="sd-cases__grid">
            {cases.map(({ title: ct, desc }) => (
              <div key={ct} className="sd-case-card">
                <div className="sd-case-card__icon">
                  <CheckCircle2 size={18} strokeWidth={2} />
                </div>
                <h3 className="sd-case-card__title">{ct}</h3>
                <p className="sd-case-card__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Process ── */}
      <section className="sd-process">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Metodología</span>
            <h2 className="section__title">Nuestro proceso</h2>
            <p className="section__desc">
              Cada caso sigue una ruta clara. Usted sabe siempre en qué etapa está y qué sigue.
            </p>
          </div>
          <div className="sd-process__steps">
            {process.map(({ num, title: pt, desc }, i) => (
              <div key={num} className="sd-step">
                {i < process.length - 1 && <div className="sd-step__connector" />}
                <div className="sd-step__num">{num}</div>
                <h3 className="sd-step__title">{pt}</h3>
                <p className="sd-step__desc">{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Related services ── */}
      <section className="section sd-related">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Otras áreas</span>
            <h2 className="section__title">También atendemos</h2>
          </div>
          <div className="sd-related__grid">
            {related.map(({ slug: rs, title: rt, image: ri, description: rd, Icon: RI }) => (
              <Link key={rs} to={ROUTES.serviceDetail(rs)} className="sd-related-card">
                <div className="sd-related-card__img-wrap">
                  <img src={ri} alt={rt} />
                </div>
                <div className="sd-related-card__body">
                  <RI size={18} strokeWidth={1.5} className="sd-related-card__icon" />
                  <h3 className="sd-related-card__title">{rt}</h3>
                  <p className="sd-related-card__desc">{rd}</p>
                  <span className="sd-related-card__cta">
                    Ver detalle <ArrowRight size={13} strokeWidth={2} />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="about-cta-band">
        <div className="about-cta-band__inner">
          <div>
            <h2 className="about-cta-band__title">¿Tiene dudas sobre su caso?</h2>
            <p className="about-cta-band__sub">
              Contáctenos al <strong style={{ color: 'var(--gold)' }}>314 146 0458</strong> — atención directa, sin intermediarios.
            </p>
          </div>
          <div className="about-cta-band__actions">
            <Link to={ROUTES.CONTACT} className="btn btn--gold btn--lg">Contactar ahora</Link>
            <Link to={ROUTES.SERVICES} className="btn btn--ghost-white btn--lg">Ver todos los servicios</Link>
          </div>
        </div>
      </section>
    </>
  );
}

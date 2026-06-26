import { Link } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';
import { ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../../data/services';

// Re-export for backward compatibility
export const SERVICES = SERVICES_DATA;

export default function ServicesSection() {
  return (
    <section id="servicios" className="section services">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Áreas de práctica</span>
          <h2 className="section__title">Soluciones legales integrales</h2>
          <p className="section__desc">
            Cobertura jurídica completa para personas físicas y morales en Manzanillo y todo Colima.
          </p>
        </div>

        <div className="services__grid">
          {SERVICES_DATA.map(({ slug, title, image, description }) => (
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
  );
}

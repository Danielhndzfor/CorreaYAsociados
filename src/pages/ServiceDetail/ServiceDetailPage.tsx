import { useParams, Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import { SERVICES } from '../Home/sections/ServicesSection';

export default function ServiceDetailPage() {
  const { slug } = useParams<{ slug: string }>();

  // TODO: Reemplazar con fetch real a CMS o data source
  const service = SERVICES.find((s) => s.slug === slug);

  if (!service) {
    return (
      <div className="container section">
        <p>Servicio no encontrado.</p>
        <Link to={`${ROUTES.HOME}#servicios`} className="btn btn--outline">
          Ver todos los servicios
        </Link>
      </div>
    );
  }

  return (
    <article className="section service-detail">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to={ROUTES.HOME}>Inicio</Link>
          <span aria-hidden>›</span>
          <Link to={`${ROUTES.HOME}#servicios`}>Servicios</Link>
          <span aria-hidden>›</span>
          <span aria-current="page">{service.title}</span>
        </nav>

        {/* Header */}
        <header className="service-detail__header">
          <span className="service-detail__icon">{service.icon}</span>
          <h1 className="service-detail__title">{service.title}</h1>
          <p className="service-detail__desc">{service.description}</p>
        </header>

        {/* TODO: Agregar contenido detallado del servicio */}
        <div className="service-detail__body">
          <p>
            Aquí irá el contenido completo del servicio, incluyendo alcance,
            beneficios, casos de uso y preguntas frecuentes.
          </p>
        </div>

        {/* CTA */}
        <div className="service-detail__cta">
          <Link to={ROUTES.serviceForm(service.slug)} className="btn btn--primary">
            Solicitar este servicio
          </Link>
          <Link to={`${ROUTES.HOME}#contacto`} className="btn btn--ghost">
            Contactar directamente
          </Link>
        </div>
      </div>
    </article>
  );
}

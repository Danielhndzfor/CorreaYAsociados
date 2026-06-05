import { Link } from 'react-router-dom';
import { ROUTES } from '../../../router/routes';

// TODO: Mover a src/data/services.ts o conectar con CMS/API
export const SERVICES = [
    {
        slug: 'consulta-legal',
        title: 'Consulta Legal',
        icon: '📋',
        description: 'Asesoría personalizada para evaluar tu situación y orientarte con claridad.',
    },
    {
        slug: 'contratos',
        title: 'Contratos',
        icon: '📝',
        description: 'Redacción y revisión de contratos civiles, mercantiles y laborales.',
    },
    {
        slug: 'litigios',
        title: 'Litigios',
        icon: '⚖️',
        description: 'Representación estratégica en procesos judiciales y arbitrajes.',
    },
    {
        slug: 'derecho-empresarial',
        title: 'Derecho Empresarial',
        icon: '🏢',
        description: 'Constitución de empresas, compliance y asesoría corporativa.',
    },
    {
        slug: 'derecho-familiar',
        title: 'Derecho de Familia',
        icon: '👨‍👩‍👧',
        description: 'Divorcios, custodia, sucesiones y asuntos familiares con sensibilidad.',
    },
] as const;

export default function ServicesSection() {
    return (
        <section id="servicios" className="section services">
            <div className="container">
                <div className="section__header">
                    <span className="section__tag">Lo que hacemos</span>
                    <h2 className="section__title">Nuestros servicios</h2>
                    <p className="section__desc">
                        Cobertura legal integral para personas físicas y morales.
                    </p>
                </div>

                <div className="services__grid">
                    {SERVICES.map((service) => (
                        <Link
                            key={service.slug}
                            to={ROUTES.serviceDetail(service.slug)}
                            className="service-card"
                        >
                            <span className="service-card__icon">{service.icon}</span>
                            <h3 className="service-card__title">{service.title}</h3>
                            <p className="service-card__desc">{service.description}</p>
                            <span className="service-card__cta">Ver más →</span>
                        </Link>
                    ))}
                </div>
            </div>
        </section>
    );
}

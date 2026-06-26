import { CheckCircle2, ArrowRight } from 'lucide-react';

const HIGHLIGHTS = [
  'Especialización en derecho laboral, familiar, civil y penal',
  'Representación ante juzgados federales y locales de Colima',
  'Asesoría empresarial, mercantil y constitución de sociedades',
  'Atención personalizada y seguimiento en cada etapa del proceso',
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="section about">
      <div className="about__grid">
        <div className="about__visual">
          <div className="about__photo-frame">
            <img
              src="/Antonio2.png"
              alt="Mtro. Antonio Correa — Abogado Director"
              className="about__photo"
            />

          </div>
        </div>

        <div className="about__text">
          <span className="section__tag">Quiénes somos</span>
          <h2 className="section__title about__heading">
            Correa &amp; Asociados —<br />Experiencia que resuelve
          </h2>
          <p className="about__body">
            Somos un despacho jurídico comprometido con brindar soluciones legales
            efectivas, honestas y personalizadas. Nuestro equipo combina experiencia
            técnica con atención cercana, generando confianza desde el primer contacto.
          </p>

          <ul className="about__list">
            {HIGHLIGHTS.map((h) => (
              <li key={h} className="about__item">
                <CheckCircle2 size={18} strokeWidth={2} className="about__check" />
                <span>{h}</span>
              </li>
            ))}
          </ul>

          <a href="#contacto" className="btn btn--navy about__cta">
            Conoce más
            <ArrowRight size={16} strokeWidth={2} />
          </a>
        </div>
      </div>
    </section>
  );
}

export default function HeroSection() {
  return (
    <section id="inicio" className="hero">
      <div className="container hero__content">
        <span className="section__tag">Correa &amp; Asociados</span>

        <h1 className="hero__title">
          Soluciones legales <br />
          con visión profesional
        </h1>

        <p className="hero__desc">
          Asesoramos a personas y empresas con integridad, experiencia y
          compromiso. Tu tranquilidad es nuestro resultado.
        </p>

        <div className="hero__actions">
          <a href="#contacto" className="btn btn--primary">
            Contáctanos
          </a>
          <a href="#servicios" className="btn btn--ghost">
            Ver servicios
          </a>
        </div>
      </div>
    </section>
  );
}

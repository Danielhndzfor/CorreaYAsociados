const VALUES = [
  { icon: '⚖️', label: 'Integridad', desc: 'Actuamos con honestidad y transparencia en cada caso.' },
  { icon: '🎯', label: 'Compromiso', desc: 'Nos involucramos a fondo con la situación de cada cliente.' },
  { icon: '💡', label: 'Experiencia', desc: 'Años de trayectoria resolviendo casos complejos.' },
];

export default function AboutSection() {
  return (
    <section id="nosotros" className="section about">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Quiénes somos</span>
          <h2 className="section__title">Experiencia que genera confianza</h2>
          <p className="section__desc">
            Somos un equipo de profesionales del derecho comprometidos con
            brindar soluciones efectivas, claras y personalizadas para cada
            cliente.
          </p>
        </div>

        <div className="about__values">
          {VALUES.map(({ icon, label, desc }) => (
            <div key={label} className="value-card">
              <span className="value-card__icon">{icon}</span>
              <h3 className="value-card__title">{label}</h3>
              <p className="value-card__desc">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

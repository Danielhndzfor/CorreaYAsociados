const STEPS = [
  {
    number: '01',
    title: 'Primera consulta',
    description: 'Evaluamos tu caso de forma confidencial y sin compromiso.',
  },
  {
    number: '02',
    title: 'Diagnóstico legal',
    description: 'Analizamos tu situación y definimos la estrategia más efectiva.',
  },
  {
    number: '03',
    title: 'Propuesta clara',
    description: 'Te presentamos un plan de acción con tiempos y costos definidos.',
  },
  {
    number: '04',
    title: 'Ejecución y seguimiento',
    description: 'Trabajamos con dedicación y te mantenemos informado en cada etapa.',
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="section process">
      <div className="container">
        <div className="section__header">
          <span className="section__tag">Cómo trabajamos</span>
          <h2 className="section__title">Nuestro proceso</h2>
          <p className="section__desc">
            Un método claro y estructurado para acompañarte desde el primer
            contacto hasta la resolución de tu caso.
          </p>
        </div>

        <ol className="process__list">
          {STEPS.map((step) => (
            <li key={step.number} className="process__step">
              <span className="process__number">{step.number}</span>
              <div>
                <h3 className="process__title">{step.title}</h3>
                <p className="process__desc">{step.description}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}

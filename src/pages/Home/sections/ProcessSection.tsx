import { MessageSquare, Search, FileCheck, Zap } from 'lucide-react';

const STEPS = [
  {
    number: '01',
    Icon: MessageSquare,
    title: 'Consulta Inicial',
    description:
      'Lo escuchamos. Evaluamos su caso con total confidencialidad y sin ningún compromiso previo.',
  },
  {
    number: '02',
    Icon: Search,
    title: 'Análisis Jurídico',
    description:
      'Investigamos precedentes y normativa vigente. Construimos la estrategia más sólida para su situación.',
  },
  {
    number: '03',
    Icon: FileCheck,
    title: 'Propuesta Ejecutiva',
    description:
      'Plan claro con cronograma definido, costos transparentes y expectativas realistas desde el inicio.',
  },
  {
    number: '04',
    Icon: Zap,
    title: 'Ejecución & Control',
    description:
      'Actuamos con decisión. Informes periódicos y comunicación constante hasta la resolución total.',
  },
];

export default function ProcessSection() {
  return (
    <section id="proceso" className="section process">
      <div className="process__inner">
        <div className="section__header process__header">
          <span className="section__tag">Cómo trabajamos</span>
          <h2 className="section__title">Un método claro, resultados reales</h2>
          <p className="section__desc">
            Desde el primer contacto hasta la resolución, cada paso está diseñado para proteger sus intereses.
          </p>
        </div>

        <div className="process__grid">
          {STEPS.map(({ number, Icon, title, description }) => (
            <div key={number} className="process__step" data-num={number}>
              <span className="process__number">{number}</span>
              <div className="process__icon-wrap">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <h3 className="process__title">{title}</h3>
              <p className="process__desc">{description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>

  );
}

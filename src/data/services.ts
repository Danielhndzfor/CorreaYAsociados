import {
  Briefcase, Heart, TrendingUp, FileText, Shield,
} from 'lucide-react';
import type { LucideIcon } from 'lucide-react';

export interface ServiceCase {
  title: string;
  desc: string;
}

export interface ServiceStep {
  num: string;
  title: string;
  desc: string;
}

export interface ServiceHighlight {
  title: string;
  desc: string;
}

export interface ServiceData {
  slug: string;
  title: string;
  image: string;
  Icon: LucideIcon;
  tagline: string;
  description: string;
  longDesc: string;
  cases: ServiceCase[];
  process: ServiceStep[];
  highlights: ServiceHighlight[];
}

export const SERVICES_DATA: ServiceData[] = [
  {
    slug: 'derecho-laboral',
    title: 'Derecho Laboral',
    image: '/DerechoLaboral.jpg',
    Icon: Briefcase,
    tagline: 'Defendemos sus derechos en el entorno laboral',
    description: 'Asesoría a trabajadores y patrones, elaboración de contratos, asesoría preventiva y litigio.',
    longDesc:
      'Brindamos representación legal integral en materia laboral, tanto para trabajadores que han visto vulnerados sus derechos como para empresas que buscan actuar dentro del marco legal. Contamos con amplia experiencia en litigios ante las Juntas de Conciliación y el Tribunal Laboral Federal.',
    cases: [
      { title: 'Despido injustificado', desc: 'Reclamación de liquidación conforme a la Ley Federal del Trabajo, incluyendo partes proporcionales y derechos adquiridos.' },
      { title: 'Liquidación y prestaciones', desc: 'Cálculo y exigencia de prestaciones de ley: vacaciones, aguinaldo, prima vacacional y proporcionales.' },
      { title: 'Contratos laborales', desc: 'Elaboración y revisión de contratos individuales y colectivos de trabajo apegados a la legislación vigente.' },
      { title: 'Accidentes de trabajo', desc: 'Representación en casos de riesgos profesionales y enfermedades de trabajo ante el IMSS y tribunales.' },
      { title: 'Demandas IMSS / INFONAVIT', desc: 'Asesoría y litigio en materia de seguridad social, pensiones y beneficios de vivienda.' },
    ],
    process: [
      { num: '01', title: 'Análisis del caso', desc: 'Revisión de documentación, contratos y evidencias para determinar viabilidad y estrategia.' },
      { num: '02', title: 'Estrategia jurídica', desc: 'Diseño de la estrategia más adecuada según el tipo de conflicto y las partes involucradas.' },
      { num: '03', title: 'Negociación directa', desc: 'Intento de resolución amigable mediante conciliación antes de acudir a tribunales.' },
      { num: '04', title: 'Litigio y representación', desc: 'Presentación de demanda y representación activa en todas las etapas del proceso laboral.' },
      { num: '05', title: 'Resolución y cobro', desc: 'Seguimiento hasta el cumplimiento efectivo del laudo o convenio alcanzado.' },
    ],
    highlights: [
      { title: 'Experiencia comprobada', desc: 'Más de 20 años representando a trabajadores y empresas en litigios laborales en Colima y a nivel federal.' },
      { title: 'Representación activa', desc: 'Presencia en cada audiencia. No delegamos su caso a pasantes. El Mtro. Correa lidera personalmente.' },
      { title: 'Atención integral', desc: 'Desde la consulta inicial hasta el cobro de la sentencia, le acompañamos en cada paso del proceso.' },
    ],
  },
  {
    slug: 'derecho-familiar',
    title: 'Derecho Familiar',
    image: '/DerechoFamiliar.jpg',
    Icon: Heart,
    tagline: 'Protegemos lo que más importa: su familia',
    description: 'Divorcios, pensión alimenticia, guarda y custodia, juicios sucesorios.',
    longDesc:
      'Los asuntos familiares requieren sensibilidad, discreción y experiencia. Nuestro equipo maneja cada caso con el máximo respeto a la privacidad de las familias, buscando siempre la solución más favorable para nuestros clientes y, sobre todo, para los menores involucrados.',
    cases: [
      { title: 'Divorcio', desc: 'Tramitación de divorcio voluntario o contencioso, incluyendo régimen patrimonial y convenios de divorcio.' },
      { title: 'Pensión alimenticia', desc: 'Fijación, modificación o cobro coactivo de pensión alimenticia para menores y cónyuge.' },
      { title: 'Guarda y custodia', desc: 'Definición y modificación de la guarda física y jurídica de los menores de edad.' },
      { title: 'Herencias y sucesiones', desc: 'Tramitación de juicios sucesorios intestamentarios y testamentarios; validación de testamentos.' },
      { title: 'Violencia familiar', desc: 'Medidas de protección, órdenes de alejamiento y representación en casos de violencia intrafamiliar.' },
    ],
    process: [
      { num: '01', title: 'Consulta confidencial', desc: 'Escuchamos su situación en un ambiente de total privacidad y sin presiones.' },
      { num: '02', title: 'Evaluación jurídica', desc: 'Determinamos el tipo de procedimiento aplicable y los derechos que le corresponden.' },
      { num: '03', title: 'Mediación familiar', desc: 'Buscamos acuerdos amigables cuando es posible, priorizando el bienestar de los menores.' },
      { num: '04', title: 'Proceso judicial', desc: 'Si no hay acuerdo, representamos su caso ante los juzgados de lo familiar con firmeza.' },
      { num: '05', title: 'Acuerdo definitivo', desc: 'Supervisamos el cumplimiento de la sentencia o convenio para garantizar sus derechos.' },
    ],
    highlights: [
      { title: 'Trato humano y discreto', desc: 'Entendemos que los asuntos familiares son emocionalmente difíciles. Actuamos con sensibilidad y respeto absoluto.' },
      { title: 'Prioridad al menor', desc: 'En casos que involucran hijos, orientamos cada decisión al interés superior del menor, como lo exige la ley.' },
      { title: 'Resolución ágil', desc: 'Buscamos la resolución más rápida posible sin sacrificar la solidez y plenitud de sus derechos.' },
    ],
  },
  {
    slug: 'derecho-mercantil',
    title: 'Derecho Mercantil',
    image: '/DerechoMercantil.jpg',
    Icon: TrendingUp,
    tagline: 'Respaldo jurídico para sus negocios y operaciones',
    description: 'Demanda de pagarés, cheques, facturas y contratos mercantiles.',
    longDesc:
      'Protegemos sus intereses comerciales con estrategias legales efectivas para el cobro de deudas, la validación de contratos y la resolución de conflictos entre empresas. Nuestra experiencia cubre personas físicas con actividad empresarial y sociedades mercantiles de cualquier tamaño.',
    cases: [
      { title: 'Cobro de pagarés y cheques', desc: 'Demandas ejecutivas mercantiles para el cobro de títulos de crédito vencidos e impagos.' },
      { title: 'Facturas y cartera vencida', desc: 'Recuperación de cartera vencida y cobro de facturas mediante procedimientos judiciales ágiles.' },
      { title: 'Contratos mercantiles', desc: 'Redacción, revisión y litigio de contratos de compraventa, distribución y agencia comercial.' },
      { title: 'Sociedades mercantiles', desc: 'Constitución, modificación y disolución de SA, SAPI, SRL y otras figuras societarias.' },
      { title: 'Litigios comerciales', desc: 'Representación en conflictos entre empresas, incumplimientos contractuales y reclamaciones.' },
    ],
    process: [
      { num: '01', title: 'Revisión de títulos', desc: 'Evaluamos la documentación mercantil para determinar la vía judicial más efectiva y ágil.' },
      { num: '02', title: 'Requerimiento formal', desc: 'Enviamos requerimiento extrajudicial de pago como primer paso antes del litigio.' },
      { num: '03', title: 'Demanda ejecutiva', desc: 'Interposición de demanda ejecutiva mercantil ante el juzgado competente.' },
      { num: '04', title: 'Embargo y aseguramiento', desc: 'Gestión de embargos preventivos y definitivos para garantizar el cobro.' },
      { num: '05', title: 'Cobro efectivo', desc: 'Ejecución de sentencia hasta lograr el cobro real y completo de la deuda.' },
    ],
    highlights: [
      { title: 'Alta tasa de recuperación', desc: 'Experiencia en cobro judicial de créditos comerciales con resultados efectivos y documentados.' },
      { title: 'Velocidad procesal', desc: 'Conocemos los tiempos y mecanismos del proceso mercantil para agilizar la recuperación de cartera.' },
      { title: 'Cobertura nacional', desc: 'Gestionamos asuntos mercantiles en Colima, Jalisco, CDMX y mediante corresponsales en todo el país.' },
    ],
  },
  {
    slug: 'derecho-civil',
    title: 'Derecho Civil',
    image: '/DerechoCivil.jpg',
    Icon: FileText,
    tagline: 'Seguridad jurídica en sus transacciones civiles',
    description: 'Contratos de compraventa, arrendamiento, comodato y más.',
    longDesc:
      'El derecho civil regula las relaciones entre particulares: contratos de todo tipo, derechos sobre bienes inmuebles y responsabilidades por daños. Ofrecemos asesoría preventiva para blindar sus transacciones y representación en litigios cuando los conflictos no pueden resolverse de forma amigable.',
    cases: [
      { title: 'Compraventa de inmuebles', desc: 'Elaboración y revisión de contratos de compraventa y verificación de antecedentes registrales.' },
      { title: 'Contratos de arrendamiento', desc: 'Redacción de contratos de renta, demandas por incumplimiento y desahucio de inquilinos.' },
      { title: 'Usucapión', desc: 'Tramitación de juicios para adquirir la propiedad de bienes por posesión prolongada y pública.' },
      { title: 'Daños y perjuicios', desc: 'Reclamación de indemnización por incumplimiento de contratos y responsabilidad civil extracontractual.' },
      { title: 'Comodato y préstamo', desc: 'Contratos de préstamo de uso, reclamación de bienes prestados y resolución de conflictos.' },
    ],
    process: [
      { num: '01', title: 'Diagnóstico jurídico', desc: 'Revisamos documentos y hechos para identificar derechos, obligaciones y riesgos legales.' },
      { num: '02', title: 'Asesoría preventiva', desc: 'Cuando es posible, redactamos contratos robustos que evitan conflictos futuros costosos.' },
      { num: '03', title: 'Negociación directa', desc: 'Intentamos resolver la controversia de forma extrajudicial, ahorrando tiempo y recursos.' },
      { num: '04', title: 'Demanda y litigio', desc: 'Si no hay acuerdo, presentamos demanda ante el juzgado civil con la estrategia más sólida.' },
      { num: '05', title: 'Ejecución de sentencia', desc: 'Velamos por el cumplimiento efectivo de la resolución hasta satisfacer plenamente sus derechos.' },
    ],
    highlights: [
      { title: 'Asesoría preventiva', desc: 'Más económico prevenir que litigar. Le ayudamos a redactar contratos sólidos desde el inicio.' },
      { title: 'Agilidad en desahucios', desc: 'Conocemos los procedimientos más eficaces para recuperar su inmueble en casos de arrendamiento incumplido.' },
      { title: 'Respaldo registral', desc: 'Coordinamos con notarios y el Registro Público de la Propiedad para garantizar la seguridad de sus títulos.' },
    ],
  },
  {
    slug: 'derecho-penal',
    title: 'Derecho Penal',
    image: '/DerechoPenal.jpg',
    Icon: Shield,
    tagline: 'Defensa sólida ante cualquier cargo penal',
    description: 'Asesoría y litigio en materia penal local y federal, prevención de delitos.',
    longDesc:
      'Ante una situación penal, cada minuto importa. Ofrecemos defensa técnica inmediata y representación activa en todas las etapas del proceso acusatorio adversarial. También asesoramos a víctimas del delito para garantizar su acceso a la justicia y la reparación del daño.',
    cases: [
      { title: 'Defensa penal (imputado)', desc: 'Representación técnica desde la detención hasta la sentencia definitiva en el sistema acusatorio.' },
      { title: 'Representación de víctimas', desc: 'Asesoría y acompañamiento a víctimas del delito para garantizar reparación del daño.' },
      { title: 'Amparo en materia penal', desc: 'Interposición de juicios de amparo para proteger derechos fundamentales vulnerados en el proceso.' },
      { title: 'Delitos del fuero común', desc: 'Robo, fraude, lesiones, homicidio, violencia familiar y demás delitos de jurisdicción estatal.' },
      { title: 'Delitos federales', desc: 'Delitos contra la salud, defraudación fiscal, lavado de dinero y otros de competencia federal.' },
    ],
    process: [
      { num: '01', title: 'Atención inmediata', desc: 'Presencia del abogado desde la detención o primeras actuaciones para proteger sus derechos.' },
      { num: '02', title: 'Revisión del expediente', desc: 'Análisis de la carpeta de investigación para identificar irregularidades y líneas de defensa.' },
      { num: '03', title: 'Audiencia inicial', desc: 'Representación en formulación de cargos, vinculación a proceso y medidas cautelares.' },
      { num: '04', title: 'Etapa intermedia y juicio', desc: 'Depuración de pruebas y defensa activa en el juicio oral ante el tribunal de enjuiciamiento.' },
      { num: '05', title: 'Recursos y amparo', desc: 'Impugnación de resoluciones adversas mediante apelación y amparo para proteger sus derechos.' },
    ],
    highlights: [
      { title: 'Disponibilidad inmediata', desc: 'Los asuntos penales no esperan horarios. Estamos disponibles para atención urgente cuando más nos necesita.' },
      { title: 'Dominio del sistema acusatorio', desc: 'Experiencia sólida en el sistema de justicia penal acusatorio y adversarial vigente en México.' },
      { title: 'Defensa honesta', desc: 'Le decimos claramente sus posibilidades reales y construimos la mejor defensa posible con los hechos disponibles.' },
    ],
  },
];

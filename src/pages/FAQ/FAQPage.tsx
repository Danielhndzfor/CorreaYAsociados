import { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { ChevronDown, MessageCircle, Phone, Search, X } from 'lucide-react';
import { ROUTES } from '../../router/routes';

interface FAQItem {
  category: string;   // slug: 'general' | 'laboral' | 'familiar' | 'mercantil' | 'civil' | 'penal'
  q: string;
  a: string;
}

const CATEGORIES = [
  { id: 'all',       label: 'Todas' },
  { id: 'general',   label: 'General' },
  { id: 'laboral',   label: 'Laboral' },
  { id: 'familiar',  label: 'Familiar' },
  { id: 'mercantil', label: 'Mercantil' },
  { id: 'civil',     label: 'Civil' },
  { id: 'penal',     label: 'Penal' },
];

const FAQS: FAQItem[] = [
  /* ── General ── */
  {
    category: 'general',
    q: '¿Cuánto cuestan sus servicios?',
    a: 'Los honorarios varían según el tipo y complejidad del caso. Contamos con distintas opciones de atención para adaptarnos a sus necesidades. Contáctenos directamente para conocer nuestras tarifas y promociones disponibles.',
  },
  {
    category: 'general',
    q: '¿Cuánto tiempo tarda un proceso legal?',
    a: 'Depende del área y la complejidad del caso. Un divorcio por mutuo acuerdo puede resolverse en pocas semanas, mientras que un juicio laboral contencioso puede llevar varios meses. En la consulta inicial le daremos un estimado realista.',
  },
  {
    category: 'general',
    q: '¿Atienden casos fuera de Manzanillo?',
    a: 'Sí. Atendemos casos en todo el estado de Colima, Guadalajara, Ciudad de México y mediante corresponsales en toda la república. Para asuntos federales también podemos representarle ante los juzgados correspondientes.',
  },
  {
    category: 'general',
    q: '¿Qué documentos debo llevar a la primera cita?',
    a: 'Para la consulta inicial no es indispensable traer documentación, aunque si ya cuenta con contratos, notificaciones, demandas o cualquier escrito relacionado con su caso, tráigalos. Nos ayudan a evaluar su situación con mayor precisión.',
  },
  {
    category: 'general',
    q: '¿Cómo se calculan los honorarios?',
    a: 'Los honorarios varían según la complejidad del caso, el área legal y el tipo de gestión requerida (consultoría, trámite administrativo o litigio). Siempre presentamos una propuesta económica clara y transparente antes de iniciar cualquier trabajo.',
  },
  {
    category: 'general',
    q: '¿Pueden representarme en juicio?',
    a: 'Sí. Contamos con experiencia en litigio ante juzgados federales y locales en todas las áreas que atendemos: laboral, familiar, civil, mercantil y penal. El Mtro. Antonio Correa dirige personalmente los casos en tribunales.',
  },
  {
    category: 'general',
    q: '¿Puedo agendar una cita por WhatsApp?',
    a: 'Sí. Puede escribirnos directamente por WhatsApp al +52 314 146 0458, enviarnos un correo a antoniocorrea@correayasociados.com.mx, o usar el formulario de contacto en nuestra página. Respondemos en menos de 24 horas.',
  },

  /* ── Laboral ── */
  {
    category: 'laboral',
    q: '¿Qué hago si me despidieron injustificadamente?',
    a: 'Lo primero es no firmar ningún documento sin asesoría jurídica. Tiene derecho a una liquidación que incluye 3 meses de salario, 20 días por año trabajado, partes proporcionales de prestaciones y salarios caídos. Contáctenos antes de tomar cualquier decisión.',
  },
  {
    category: 'laboral',
    q: '¿Cuánto me corresponde de liquidación?',
    a: 'La liquidación incluye: 3 meses de salario integrado, 20 días por año trabajado, partes proporcionales de vacaciones, prima vacacional y aguinaldo, más 12 días por año de antigüedad (prima de antigüedad). El salario integrado puede incluir comisiones, bonos y prestaciones en especie.',
  },
  {
    category: 'laboral',
    q: '¿Puedo demandar si mi patrón no me inscribió al IMSS?',
    a: 'Sí. La falta de inscripción al IMSS es una violación a la Ley Federal del Trabajo y a la Ley del Seguro Social. Puede demandar al patrón tanto ante el Tribunal Laboral como hacer la denuncia correspondiente ante el propio IMSS.',
  },
  {
    category: 'laboral',
    q: '¿En qué plazo debo presentar una demanda laboral?',
    a: 'Tiene 2 años desde la fecha de separación o el hecho que origina la reclamación para presentar su demanda laboral. No espere demasiado: las pruebas se pierden y los plazos corren. Consúltenos lo antes posible.',
  },
  {
    category: 'laboral',
    q: '¿El patrón puede despedirme sin causa?',
    a: 'Puede hacerlo, pero deberá pagarle una liquidación completa. Si alega causa justificada (rescisión), deberá probarlo ante el tribunal. De lo contrario, además de la liquidación, podría tener derecho a salarios caídos durante el juicio.',
  },

  /* ── Familiar ── */
  {
    category: 'familiar',
    q: '¿Cuánto tarda un divorcio?',
    a: 'Un divorcio por mutuo acuerdo (voluntario) puede resolverse en 4 a 8 semanas si hay acuerdo en todos los puntos. Un divorcio contencioso (sin acuerdo) puede durar de 6 meses a más de un año dependiendo de los temas en disputa: bienes, hijos, pensión.',
  },
  {
    category: 'familiar',
    q: '¿Cómo se determina la pensión alimenticia?',
    a: 'El juez considera los ingresos del obligado, las necesidades de los beneficiarios y las posibilidades económicas de ambas partes. En promedio oscila entre el 20% y el 40% del ingreso neto del deudor alimentario, pero cada caso es único.',
  },
  {
    category: 'familiar',
    q: '¿Pueden quitarme la custodia de mis hijos?',
    a: 'La guarda y custodia puede modificarse si se prueba que hay un cambio de circunstancias que afecta el interés superior del menor. Factores como violencia, adicciones, negligencia o traslado de domicilio sin autorización pueden ser causales.',
  },
  {
    category: 'familiar',
    q: '¿Qué pasa si mi ex no paga la pensión alimenticia?',
    a: 'Se puede iniciar un juicio ejecutivo de alimentos para obligar al deudor a pagar. El juez puede ordenar embargo de salario, cuentas bancarias o bienes. En casos extremos, el incumplimiento de pensión alimenticia puede ser un delito penal.',
  },
  {
    category: 'familiar',
    q: '¿Cómo tramito una herencia sin testamento?',
    a: 'Se tramita mediante un juicio sucesorio intestamentario. Primero se acredita el parentesco y la calidad de herederos, luego se inventarían los bienes y finalmente se adjudican. El tiempo varía según la complejidad del patrimonio y el número de herederos.',
  },

  /* ── Mercantil ── */
  {
    category: 'mercantil',
    q: '¿Puedo demandar por un cheque sin fondos?',
    a: 'Sí. El cheque es un título de crédito y su cobro se realiza mediante juicio ejecutivo mercantil. Adicionalmente, presentar un cheque sin fondos puede constituir el delito de fraude. El plazo para demandar es de 6 meses desde la presentación del cheque.',
  },
  {
    category: 'mercantil',
    q: '¿Qué documentos necesito para cobrar un pagaré?',
    a: 'Necesita el pagaré original con todos los requisitos legales: lugar y fecha de suscripción, monto en letra y número, fecha de vencimiento, firma del suscriptor y del avalista si lo hay. Si el documento tiene defectos formales, podría tramitarse por otra vía.',
  },
  {
    category: 'mercantil',
    q: '¿Cuánto tiempo tengo para cobrar un título de crédito?',
    a: 'Los plazos de prescripción varían: pagaré 3 años, cheque 6 meses para la acción cambiaria directa. Una vez prescrito el título, puede intentarse la acción causal o de enriquecimiento, pero con mayores dificultades. Actúe con rapidez.',
  },
  {
    category: 'mercantil',
    q: '¿Puedo cobrar una factura sin contrato firmado?',
    a: 'Sí, aunque es más complejo. La factura firmada de recibido, correos electrónicos, mensajes y la propia factura fiscal pueden servir como prueba de la deuda. En mercantil rige la libertad de forma contractual, por lo que el juez puede valorar cualquier medio de prueba.',
  },

  /* ── Civil ── */
  {
    category: 'civil',
    q: '¿Cómo recupero mi inmueble de un inquilino que no paga?',
    a: 'Se inicia un juicio de desahucio (rescisión de contrato de arrendamiento) ante el juzgado civil. Si el contrato está bien redactado el proceso puede ser relativamente ágil. Por eso recomendamos asesoría jurídica antes de firmar cualquier contrato de renta.',
  },
  {
    category: 'civil',
    q: '¿Qué pasa si compré una propiedad con problemas ocultos?',
    a: 'El vendedor responde por vicios ocultos que existían al momento de la venta y que usted no pudo detectar. Puede exigir la rescisión del contrato con devolución del precio, o una reducción proporcional del mismo (acción quanti minoris).',
  },
  {
    category: 'civil',
    q: '¿Puedo escriturar un terreno que llevo años usando?',
    a: 'Posiblemente sí, mediante la usucapión (prescripción adquisitiva). Se requiere posesión pública, pacífica, continua y a título de dueño por al menos 5 años (con título) o 10 años (sin título). Es un juicio que tramitamos con frecuencia.',
  },
  {
    category: 'civil',
    q: '¿Es válido un contrato hecho a mano?',
    a: 'Sí. En derecho civil rige el principio de libertad de forma: un contrato manuscrito y firmado por las partes es válido y exigible, salvo que la ley exija una forma específica (como la compraventa de inmuebles que requiere escritura pública).',
  },

  /* ── Penal ── */
  {
    category: 'penal',
    q: '¿Qué hago si me detienen?',
    a: 'Tiene derecho a guardar silencio y a que se le informe por qué se le detiene. No firme ningún documento ni haga declaraciones sin la presencia de su abogado. Exija comunicarse con un defensor de inmediato. Llámenos: atendemos urgencias.',
  },
  {
    category: 'penal',
    q: '¿Qué es la vinculación a proceso?',
    a: 'Es la resolución judicial mediante la cual el juez determina que existen datos suficientes para continuar la investigación contra una persona. No es una sentencia condenatoria: aún se puede ganar el caso en la etapa intermedia o en el juicio oral.',
  },
  {
    category: 'penal',
    q: '¿Puedo pedir un amparo si estoy vinculado a proceso?',
    a: 'Sí. El amparo indirecto procede contra la vinculación a proceso cuando se violaron derechos fundamentales (detención ilegal, falta de defensa adecuada, etc.). También procede contra medidas cautelares como la prisión preventiva en ciertos supuestos.',
  },
  {
    category: 'penal',
    q: '¿Cuánto tarda el proceso penal?',
    a: 'El sistema acusatorio tiene plazos definidos: la investigación complementaria dura máximo 6 meses (prorrogables), la etapa intermedia entre 2 y 5 meses, y el juicio oral puede durar de días a semanas. En total, un proceso puede durar de 1 a 3 años.',
  },
  {
    category: 'penal',
    q: '¿Puedo obtener la libertad mientras dura el proceso?',
    a: 'Depende del delito y las circunstancias. Para delitos no graves puede solicitarse libertad bajo caución (fianza) o medidas cautelares alternativas a la prisión. Para delitos graves que ameritan prisión preventiva oficiosa, es más complejo pero no imposible.',
  },
];

/* ── Highlight: marca el término buscado en el texto ── */
function Highlight({ text, term }: { text: string; term: string }) {
  if (!term.trim()) return <>{text}</>;
  const regex = new RegExp(`(${term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')})`, 'gi');
  const parts = text.split(regex);
  return (
    <>
      {parts.map((part, i) =>
        regex.test(part) ? <mark key={i} className="faq-mark">{part}</mark> : part,
      )}
    </>
  );
}

/* ── Accordion item ── */
function FAQItem({
  item, index, search, showCat,
}: {
  item: FAQItem; index: number; search: string; showCat: boolean;
}) {
  const [open, setOpen] = useState(false);
  const cat = CATEGORIES.find((c) => c.id === item.category);

  return (
    <div className={`faq__item${open ? ' faq__item--open' : ''}`}>
      <button className="faq__question" onClick={() => setOpen((p) => !p)} aria-expanded={open}>
        <span className="faq__question-num">{String(index + 1).padStart(2, '0')}</span>
        <span className="faq__question-text">
          <Highlight text={item.q} term={search} />
          {showCat && cat && (
            <span className="faq__question-badge">{cat.label}</span>
          )}
        </span>
        <ChevronDown size={18} strokeWidth={2} className="faq__chevron" />
      </button>
      {open && (
        <div className="faq__answer">
          <p><Highlight text={item.a} term={search} /></p>
        </div>
      )}
    </div>
  );
}

export default function FAQPage() {
  const [search, setSearch] = useState('');
  const [activecat, setActivecat] = useState('all');

  const filtered = useMemo(() => {
    const q = search.toLowerCase().trim();
    return FAQS.filter((f) => {
      const matchesCat = activecat === 'all' || f.category === activecat;
      const matchesSearch =
        !q || f.q.toLowerCase().includes(q) || f.a.toLowerCase().includes(q);
      return matchesCat && matchesSearch;
    });
  }, [search, activecat]);

  const isSearching = search.trim().length > 0;
  const showGrouped = !isSearching && activecat === 'all';

  // Group items by category when showing all without search
  const grouped = useMemo(() => {
    if (!showGrouped) return null;
    const map = new Map<string, FAQItem[]>();
    CATEGORIES.filter((c) => c.id !== 'all').forEach((c) => {
      const items = FAQS.filter((f) => f.category === c.id);
      if (items.length) map.set(c.id, items);
    });
    return map;
  }, [showGrouped]);

  return (
    <>
      {/* ── Hero ── */}
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="page-hero__inner">
          <span className="page-hero__tag">Resolvemos sus dudas</span>
          <h1 className="page-hero__title">Preguntas Frecuentes</h1>
          <p className="page-hero__sub">
            Todo lo que necesita saber antes de su primera consulta con nosotros.
          </p>
        </div>
      </div>

      {/* ── Search + Cats bar ── */}
      <div className="faq-bar">
        <div className="faq-bar__inner">
          {/* Search */}
          <div className="faq-search">
            <Search size={17} strokeWidth={2} className="faq-search__icon" />
            <input
              className="faq-search__input"
              type="text"
              placeholder="Buscar pregunta o tema…"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              aria-label="Buscar en preguntas frecuentes"
            />
            {search && (
              <button className="faq-search__clear" onClick={() => setSearch('')} aria-label="Limpiar búsqueda">
                <X size={15} strokeWidth={2} />
              </button>
            )}
          </div>

          {/* Category pills */}
          <nav className="faq-cats" aria-label="Categorías">
            {CATEGORIES.map(({ id, label }) => (
              <button
                key={id}
                className={`faq-cat${activecat === id ? ' faq-cat--active' : ''}`}
                onClick={() => setActivecat(id)}
              >
                {label}
              </button>
            ))}
          </nav>
        </div>
      </div>

      {/* ── FAQ section ── */}
      <section className="section faq">
        <div className="faq__container">
          <div className="faq__list">
            {/* Results count when searching */}
            {isSearching && (
              <p className="faq-count">
                {filtered.length === 0
                  ? 'Sin resultados para esta búsqueda'
                  : `${filtered.length} pregunta${filtered.length !== 1 ? 's' : ''} encontrada${filtered.length !== 1 ? 's' : ''}`}
              </p>
            )}

            {showGrouped && grouped ? (
              /* Grouped by category */
              Array.from(grouped.entries()).map(([catId, items]) => {
                const catLabel = CATEGORIES.find((c) => c.id === catId)?.label ?? catId;
                return (
                  <div key={catId} className="faq-group">
                    <div className="faq-group__header">
                      <span className="faq-group__label">{catLabel}</span>
                      <span className="faq-group__count">{items.length} preguntas</span>
                    </div>
                    {items.map((item, i) => (
                      <FAQItem key={item.q} item={item} index={i} search="" showCat={false} />
                    ))}
                  </div>
                );
              })
            ) : filtered.length > 0 ? (
              /* Flat filtered list */
              filtered.map((item, i) => (
                <FAQItem
                  key={item.q}
                  item={item}
                  index={i}
                  search={search}
                  showCat={isSearching}
                />
              ))
            ) : (
              <div className="faq-empty">
                <Search size={32} strokeWidth={1.5} />
                <p>No encontramos preguntas que coincidan.</p>
                <button className="btn btn--outline" onClick={() => { setSearch(''); setActivecat('all'); }}>
                  Ver todas las preguntas
                </button>
              </div>
            )}
          </div>

          <aside className="faq__aside">
            <div className="faq__aside-card">
              <span className="section__tag">¿Otra pregunta?</span>
              <h3 className="faq__aside-title">Hablemos directamente</h3>
              <p className="faq__aside-body">
                Si su duda no está aquí, escríbanos o llámenos. Atención directa
                y confidencial. <em>*Pregunta por nuestras promociones.</em>
              </p>
              <Link
                to={ROUTES.CONTACT}
                className="btn btn--gold"
                style={{ width: '100%', justifyContent: 'center' }}
              >
                <MessageCircle size={16} strokeWidth={2} />
                Contactar ahora
              </Link>
              <a
                href="https://wa.me/523141460458"
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn--ghost-white"
                style={{ width: '100%', justifyContent: 'center', marginTop: '10px' }}
              >
                <Phone size={16} strokeWidth={2} />
                WhatsApp directo
              </a>
            </div>

            {/* Mini stats */}
            <div className="faq__aside-stats">
              <div className="faq__aside-stat">
                <span className="faq__aside-stat-num">{FAQS.length}</span>
                <span className="faq__aside-stat-label">Preguntas</span>
              </div>
              <div className="faq__aside-stat">
                <span className="faq__aside-stat-num">5</span>
                <span className="faq__aside-stat-label">Categorías</span>
              </div>
              <div className="faq__aside-stat">
                <span className="faq__aside-stat-num">24h</span>
                <span className="faq__aside-stat-label">Respuesta</span>
              </div>
            </div>
          </aside>
        </div>
      </section>

      {/* ── CTA band ── */}
      <section className="about-cta-band">
        <div className="about-cta-band__inner">
          <div>
            <h2 className="about-cta-band__title">¿Su caso no encaja aquí?</h2>
            <p className="about-cta-band__sub">Cuéntenos su situación directamente. Estamos listos para orientarle.</p>
          </div>
          <div className="about-cta-band__actions">
            <Link to={ROUTES.CONTACT} className="btn btn--gold btn--lg">Contactar ahora</Link>
            <Link to={ROUTES.SERVICES} className="btn btn--ghost-white btn--lg">Ver servicios</Link>
          </div>
        </div>
      </section>
    </>
  );
}

import { type FormEvent, useState } from 'react';
import {
  Phone, MessageCircle, Mail, MapPin,
  Clock, Lock, Star,
} from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  area: string;
  message: string;
}

const INITIAL: ContactForm = { name: '', email: '', phone: '', area: '', message: '' };

const AREAS = [
  'Derecho Laboral',
  'Derecho Familiar',
  'Derecho Civil',
  'Derecho Penal',
  'Derecho Mercantil',
  'Otro / No estoy seguro',
];

const CONTACT_INFO = [
  {
    Icon: Phone,
    label: 'Teléfono',
    value: '+52 314 146 0458',
    href: 'tel:+523141460458',
    external: false,
  },
  {
    Icon: MessageCircle,
    label: 'WhatsApp',
    value: 'Escribir ahora',
    href: 'https://wa.me/523141460458',
    external: true,
  },
  {
    Icon: Mail,
    label: 'Correo',
    value: 'antoniocorrea@correayasociados.com.mx',
    href: 'mailto:antoniocorrea@correayasociados.com.mx',
    external: false,
  },
  {
    Icon: MapPin,
    label: 'Ubicación',
    value: 'Manzanillo, Colima, México',
    href: 'https://maps.app.goo.gl/V5VmPwWPwFCCKmb3A',
    external: true,
  },
];

const TRUST = [
  {
    Icon: Clock,
    title: 'Respuesta en 24 horas',
    sub: 'Confirmamos su consulta el mismo día',
  },
  {
    Icon: Lock,
    title: 'Total confidencialidad',
    sub: 'Su información nunca se comparte',
  },
  {
    Icon: Star,
    title: 'Atención personalizada',
    sub: '*Pregunta por nuestras promociones y descuentos.',
  },
];

const BRANCHES = [
  { city: 'Manzanillo, Col.', type: 'Oficina principal', phone: '314 146 0458' },
  { city: 'Colima, Col.',     type: 'Oficina regional',  phone: '314 146 0458' },
  { city: 'Guadalajara, Jal.', type: 'Representación',  phone: '314 146 0458' },
  { city: 'Ciudad de México', type: 'Representación',    phone: '314 146 0458' },
];

export default function ContactPage() {
  const [form, setForm] = useState<ContactForm>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const lines = [
      `*Nuevo mensaje desde correayasociados.com.mx*`,
      ``,
      `*Nombre:* ${form.name}`,
      form.phone   ? `*Teléfono:* ${form.phone}`  : '',
      form.email   ? `*Correo:* ${form.email}`    : '',
      form.area    ? `*Área:* ${form.area}`        : '',
      ``,
      `*Mensaje:*`,
      form.message,
    ].filter((l) => l !== undefined);

    const text = encodeURIComponent(lines.join('\n'));
    window.open(`https://wa.me/523141460458?text=${text}`, '_blank', 'noopener,noreferrer');

    setStatus('sent');
    setForm(INITIAL);
  };

  return (
    <div className="contact-page">
      {/* ── Page hero ── */}
      <div className="page-hero">
        <div className="page-hero__glow" />
        <div className="page-hero__inner">
          <span className="page-hero__tag">Estamos para servirle</span>
          <h1 className="page-hero__title">Contáctenos</h1>
          <p className="page-hero__sub">
            Respondemos en menos de 24 horas. Atención directa y confidencial.
          </p>
        </div>
      </div>

      {/* ── Trust strip ── */}
      <div className="contact-trust">
        <div className="contact-trust__inner">
          {TRUST.map(({ Icon, title, sub }) => (
            <div key={title} className="contact-trust__item">
              <div className="contact-trust__icon">
                <Icon size={20} strokeWidth={1.5} />
              </div>
              <div className="contact-trust__text">
                <strong>{title}</strong>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* ── Contact form section ── */}
      <section className="section contact">
        <div className="container contact__grid">
          <div className="contact__info">
            <span className="section__tag contact__tag">Hablemos</span>
            <h2 className="section__title contact__heading">Agendar consulta</h2>
            <p className="contact__sub">
              Cuéntenos su caso con total confidencialidad. Le damos una opinión honesta
              y directa desde el primer contacto. <em>*Pregunta por nuestras promociones y descuentos.</em>
            </p>

            <ul className="contact__list">
              {CONTACT_INFO.map(({ Icon, label, value, href, external }) => (
                <li key={label} className="contact__item">
                  <div className="contact__icon-wrap">
                    <Icon size={20} strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="contact__item-label">{label}</p>
                    <a
                      href={href}
                      className="contact__item-value"
                      {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                    >
                      {value}
                    </a>
                  </div>
                </li>
              ))}
            </ul>
          </div>

          <form className="contact__form" onSubmit={handleSubmit} noValidate>
            {status === 'sent' ? (
              <div className="contact__success">
                <div className="contact__success-icon">
                  <MessageCircle size={28} strokeWidth={1.5} />
                </div>
                <p className="contact__success-title">¡WhatsApp abierto!</p>
                <p className="contact__success-body">
                  Su mensaje ya está listo en WhatsApp. Solo presione enviar y le atenderemos a la brevedad.
                </p>
              </div>
            ) : (
              <>
                <div className="form__row">
                  <div className="form-group">
                    <label htmlFor="cp-name">Nombre completo</label>
                    <input
                      id="cp-name"
                      name="name"
                      type="text"
                      required
                      placeholder="Su nombre"
                      value={form.name}
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="cp-phone">Teléfono</label>
                    <input
                      id="cp-phone"
                      name="phone"
                      type="tel"
                      placeholder="+52 314 000 0000"
                      value={form.phone}
                      onChange={handleChange}
                    />
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cp-email">Correo electrónico</label>
                  <input
                    id="cp-email"
                    name="email"
                    type="email"
                    required
                    placeholder="su@correo.com"
                    value={form.email}
                    onChange={handleChange}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="cp-area">Área de interés</label>
                  <select
                    id="cp-area"
                    name="area"
                    value={form.area}
                    onChange={handleChange}
                  >
                    <option value="">Seleccione un área legal…</option>
                    {AREAS.map((a) => (
                      <option key={a} value={a}>{a}</option>
                    ))}
                  </select>
                </div>

                <div className="form-group">
                  <label htmlFor="cp-message">¿En qué podemos ayudarle?</label>
                  <textarea
                    id="cp-message"
                    name="message"
                    rows={5}
                    required
                    placeholder="Describa brevemente su situación legal…"
                    value={form.message}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="btn btn--gold btn--submit"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? (
                    'Abriendo WhatsApp…'
                  ) : (
                    <>
                      <MessageCircle size={16} strokeWidth={2} />
                      Enviar por WhatsApp
                    </>
                  )}
                </button>
              </>
            )}
          </form>
        </div>
      </section>

      {/* ── Conoce dónde te atenderemos ── */}
      <section className="section contact-office">
        <div className="container">
          <div className="section__header">
            <span className="section__tag">Visítanos</span>
            <h2 className="section__title">Conoce dónde te atenderemos</h2>
            <p className="section__desc">
              Contamos con oficinas en cuatro ciudades y representaciones en toda la república mexicana.
            </p>
          </div>

          <div className="contact-office__layout">

            {/* Mapa */}
            <div className="contact-office__map-wrap">
              <iframe
                className="contact-office__map"
                src="https://maps.google.com/maps?q=Manzanillo,+Colima,+Mexico&hl=es&z=14&output=embed"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Oficina Correa & Asociados — Manzanillo, Colima"
              />
              <a
                href="https://maps.app.goo.gl/V5VmPwWPwFCCKmb3A"
                target="_blank"
                rel="noopener noreferrer"
                className="contact-office__map-cta"
              >
                <MapPin size={14} strokeWidth={2} />
                Abrir en Google Maps
              </a>
            </div>

            {/* Collage de sucursales */}
            <div className="contact-office__branches">
              <p className="contact-office__branches-label">Nuestras sedes</p>
              <div className="contact-office__branch-list">
                {BRANCHES.map(({ city, type, phone }) => (
                  <div key={city} className="contact-office__branch">
                    <div className="contact-office__branch-icon">
                      <MapPin size={16} strokeWidth={2} />
                    </div>
                    <div className="contact-office__branch-info">
                      <strong>{city}</strong>
                      <span>{type}</span>
                    </div>
                    <a
                      href={`tel:+52${phone.replace(/\s/g, '')}`}
                      className="contact-office__branch-phone"
                    >
                      {phone}
                    </a>
                  </div>
                ))}
              </div>

              {/* Collage de fotos de oficina */}
              <div className="contact-office__collage">
                <div className="contact-office__collage-slot contact-office__collage-slot--main">
                  <img src="/FondoHero.jpg" alt="Instalaciones" />
                  <span className="contact-office__collage-caption">Oficina principal — Manzanillo</span>
                </div>
                <div className="contact-office__collage-slot contact-office__collage-slot--a">
                  {/* Agregar foto de sala de juntas */}
                  <div className="contact-office__collage-placeholder">
                    <MapPin size={20} strokeWidth={1.5} />
                    <span>Sala de juntas</span>
                  </div>
                </div>
                <div className="contact-office__collage-slot contact-office__collage-slot--b">
                  {/* Agregar foto de recepción */}
                  <div className="contact-office__collage-placeholder">
                    <MapPin size={20} strokeWidth={1.5} />
                    <span>Recepción</span>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}

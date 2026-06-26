import { type FormEvent, useState } from 'react';
import { Phone, MessageCircle, Mail, MapPin, Send } from 'lucide-react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL: ContactForm = { name: '', email: '', phone: '', message: '' };

const CONTACT_INFO = [
  {
    Icon: Phone,
    label: 'Teléfono',
    value: '+52 314 146 0458',
    href: 'tel:+523141460458',
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
  },
  {
    Icon: MapPin,
    label: 'Dirección',
    value: 'Manzanillo, Colima, México',
    href: 'https://maps.app.goo.gl/V5VmPwWPwFCCKmb3A',
    external: true,
  },
];

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) =>
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    setTimeout(() => {
      setStatus('sent');
      setForm(INITIAL);
    }, 1200);
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="section__tag contact__tag">Hablemos</span>
          <h2 className="section__title contact__heading">Agendar consulta</h2>
          <p className="contact__sub">
            Cuéntenos su caso con total confidencialidad. Respondemos en menos de 24 horas.
            <br /><em style={{ fontSize: '.85em', opacity: .75 }}>*Pregunta por nuestras promociones y descuentos.</em>
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
                <Send size={28} strokeWidth={1.5} />
              </div>
              <p className="contact__success-title">Mensaje enviado</p>
              <p className="contact__success-body">
                Gracias por contactarnos. Le responderemos a la brevedad.
              </p>
            </div>
          ) : (
            <>
              <div className="form__row">
                <div className="form-group">
                  <label htmlFor="c-name">Nombre completo</label>
                  <input
                    id="c-name"
                    name="name"
                    type="text"
                    required
                    placeholder="Su nombre"
                    value={form.name}
                    onChange={handleChange}
                  />
                </div>
                <div className="form-group">
                  <label htmlFor="c-phone">Teléfono</label>
                  <input
                    id="c-phone"
                    name="phone"
                    type="tel"
                    placeholder="+52 314 000 0000"
                    value={form.phone}
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="c-email">Correo electrónico</label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  placeholder="su@correo.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-message">¿En qué podemos ayudarle?</label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Describa brevemente su situación legal…"
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button type="submit" className="btn btn--gold btn--submit" disabled={status === 'sending'}>
                {status === 'sending' ? (
                  'Enviando…'
                ) : (
                  <>
                    <Send size={16} strokeWidth={2} />
                    Enviar mensaje
                  </>
                )}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

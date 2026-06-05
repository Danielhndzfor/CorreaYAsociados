import { type FormEvent, useState } from 'react';

interface ContactForm {
  name: string;
  email: string;
  phone: string;
  message: string;
}

const INITIAL: ContactForm = { name: '', email: '', phone: '', message: '' };

export default function ContactSection() {
  const [form, setForm] = useState<ContactForm>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: Conectar con servicio de email (EmailJS, Resend, Formspree, etc.)
    setTimeout(() => {
      setStatus('sent');
      setForm(INITIAL);
    }, 1200);
  };

  return (
    <section id="contacto" className="section contact">
      <div className="container contact__grid">
        {/* Info */}
        <div className="contact__info">
          <span className="section__tag">Hablemos</span>
          <h2 className="section__title">Contáctanos</h2>
          <p className="section__desc">
            Estamos listos para escucharte. Cuéntanos tu caso y te
            responderemos a la brevedad.
          </p>

          <ul className="contact__details">
            <li>
              {/* TODO: Reemplazar con datos reales */}
              <strong>Teléfono:</strong>{' '}
              <a href="tel:+5200000000">+52 (00) 0000-0000</a>
            </li>
            <li>
              <strong>WhatsApp:</strong>{' '}
              <a
                href="https://wa.me/5200000000"
                target="_blank"
                rel="noopener noreferrer"
              >
                Escríbenos
              </a>
            </li>
            <li>
              <strong>Correo:</strong>{' '}
              <a href="mailto:contacto@correayasociados.com">
                contacto@correayasociados.com
              </a>
            </li>
          </ul>
        </div>

        {/* Form */}
        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          {status === 'sent' ? (
            <div className="contact__success">
              ✅ ¡Mensaje enviado! Te contactaremos pronto.
            </div>
          ) : (
            <>
              <div className="form-group">
                <label htmlFor="c-name">Nombre completo</label>
                <input
                  id="c-name"
                  name="name"
                  type="text"
                  required
                  placeholder="Tu nombre"
                  value={form.name}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-email">Correo electrónico</label>
                <input
                  id="c-email"
                  name="email"
                  type="email"
                  required
                  placeholder="tu@correo.com"
                  value={form.email}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-phone">Teléfono</label>
                <input
                  id="c-phone"
                  name="phone"
                  type="tel"
                  placeholder="+52 xxx xxx xxxx"
                  value={form.phone}
                  onChange={handleChange}
                />
              </div>

              <div className="form-group">
                <label htmlFor="c-message">¿En qué podemos ayudarte?</label>
                <textarea
                  id="c-message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Cuéntanos brevemente tu situación..."
                  value={form.message}
                  onChange={handleChange}
                />
              </div>

              <button
                type="submit"
                className="btn btn--primary"
                disabled={status === 'sending'}
              >
                {status === 'sending' ? 'Enviando...' : 'Enviar mensaje'}
              </button>
            </>
          )}
        </form>
      </div>
    </section>
  );
}

import { type FormEvent, useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import { SERVICES } from '../Home/sections/ServicesSection';

interface ServiceFormData {
  name: string;
  email: string;
  phone: string;
  preferContact: 'whatsapp' | 'email' | 'any';
  details: string;
}

const INITIAL: ServiceFormData = {
  name: '',
  email: '',
  phone: '',
  preferContact: 'any',
  details: '',
};

export default function ServiceFormPage() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const [form, setForm] = useState<ServiceFormData>(INITIAL);
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent'>('idle');

  const service = SERVICES.find((s) => s.slug === slug);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >,
  ) => setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');
    // TODO: Conectar con backend o servicio de email
    setTimeout(() => {
      setStatus('sent');
    }, 1200);
  };

  if (status === 'sent') {
    return (
      <div className="section container service-form__success">
        <span className="service-form__success-icon">✅</span>
        <h2>¡Solicitud enviada!</h2>
        <p>Nos pondremos en contacto contigo a la brevedad.</p>
        <button
          className="btn btn--primary"
          onClick={() => navigate(ROUTES.HOME)}
        >
          Volver al inicio
        </button>
      </div>
    );
  }

  return (
    <div className="section service-form">
      <div className="container">
        {/* Breadcrumb */}
        <nav className="breadcrumb" aria-label="Ruta de navegación">
          <Link to={ROUTES.HOME}>Inicio</Link>
          <span aria-hidden>›</span>
          <Link to={`${ROUTES.HOME}#servicios`}>Servicios</Link>
          <span aria-hidden>›</span>
          {service && (
            <>
              <Link to={ROUTES.serviceDetail(service.slug)}>
                {service.title}
              </Link>
              <span aria-hidden>›</span>
            </>
          )}
          <span aria-current="page">Solicitar</span>
        </nav>

        <h1 className="service-form__title">
          Solicitar: {service?.title ?? slug}
        </h1>
        <p className="service-form__subtitle">
          Completa el formulario y te contactaremos en menos de 24 horas.
        </p>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="form-group">
            <label htmlFor="sf-name">Nombre completo *</label>
            <input
              id="sf-name"
              name="name"
              type="text"
              required
              placeholder="Tu nombre"
              value={form.name}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sf-email">Correo electrónico *</label>
            <input
              id="sf-email"
              name="email"
              type="email"
              required
              placeholder="tu@correo.com"
              value={form.email}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sf-phone">Teléfono *</label>
            <input
              id="sf-phone"
              name="phone"
              type="tel"
              required
              placeholder="+52 xxx xxx xxxx"
              value={form.phone}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="sf-contact">¿Cómo prefieres que te contactemos?</label>
            <select
              id="sf-contact"
              name="preferContact"
              value={form.preferContact}
              onChange={handleChange}
            >
              <option value="whatsapp">WhatsApp</option>
              <option value="email">Correo electrónico</option>
              <option value="any">Cualquiera está bien</option>
            </select>
          </div>

          <div className="form-group">
            <label htmlFor="sf-details">Detalles de tu caso</label>
            <textarea
              id="sf-details"
              name="details"
              rows={5}
              placeholder="Cuéntanos más sobre tu situación para atenderte mejor..."
              value={form.details}
              onChange={handleChange}
            />
          </div>

          <div className="service-form__actions">
            <button
              type="submit"
              className="btn btn--primary"
              disabled={status === 'sending'}
            >
              {status === 'sending' ? 'Enviando...' : 'Enviar solicitud'}
            </button>
            <Link
              to={slug ? ROUTES.serviceDetail(slug) : ROUTES.HOME}
              className="btn btn--ghost"
            >
              Cancelar
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}

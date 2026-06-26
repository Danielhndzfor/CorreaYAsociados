import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

const FOOTER_LINKS = [
  { label: 'Inicio',    to: ROUTES.HOME },
  { label: 'Nosotros',  to: ROUTES.ABOUT },
  { label: 'Servicios', to: ROUTES.SERVICES },
  { label: 'FAQ',       to: ROUTES.FAQ },
  { label: 'Contacto',  to: ROUTES.CONTACT },
];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand-col">
          <Link to={ROUTES.HOME}>
            <img src="/logoHorizontal.png" alt="Correa & Asociados" className="footer__logo" />
          </Link>
          <p className="footer__tagline">
            Soluciones jurídicas con integridad,<br />experiencia y compromiso.
          </p>
        </div>

        <div className="footer__nav-col">
          <p className="footer__col-label">Navegación</p>
          <ul className="footer__nav-list">
            {FOOTER_LINKS.map(({ label, to }) => (
              <li key={to}>
                <Link to={to}>{label}</Link>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__contact-col">
          <p className="footer__col-label">Contacto</p>
          <ul className="footer__contact-list">
            <li><a href="tel:+523141460458">+52 314 146 0458</a></li>
            <li>
              <a href="mailto:antoniocorrea@correayasociados.com.mx">
                antoniocorrea@correayasociados.com.mx
              </a>
            </li>
            <li>Manzanillo, Colima — Guadalajara — CDMX</li>
          </ul>
          <Link to={ROUTES.DIGITAL_CARD_MODERN} className="footer__card-link">
            Ver tarjeta digital →
          </Link>
        </div>
      </div>

      <div className="container footer__bottom">
        <p>&copy; {year} Correa &amp; Asociados S.C. Todos los derechos reservados.</p>
      </div>
    </footer>
  );
}

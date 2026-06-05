import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__container">
        <p className="footer__brand">Correa &amp; Asociados</p>

        <nav className="footer__links" aria-label="Links del footer">
          <Link to={ROUTES.HOME}>Inicio</Link>
          <a href={`${ROUTES.HOME}#servicios`}>Servicios</a>
          <a href={`${ROUTES.HOME}#contacto`}>Contacto</a>
          <Link to={ROUTES.DIGITAL_CARD}>Tarjeta Digital</Link>
        </nav>

        <p className="footer__copy">
          &copy; {year} Correa &amp; Asociados. Todos los derechos reservados.
        </p>
      </div>
    </footer>
  );
}

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

const NAV_SECTIONS = [
  { label: 'Inicio', anchor: '#inicio' },
  { label: 'Nosotros', anchor: '#nosotros' },
  { label: 'Servicios', anchor: '#servicios' },
  { label: 'Proceso', anchor: '#proceso' },
  { label: 'Contacto', anchor: '#contacto' },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="navbar">
      <div className="navbar__container">
        {/* Brand */}
        <Link to={ROUTES.HOME} className="navbar__brand">
          Correa &amp; Asociados
        </Link>

        {/* Desktop nav */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__list">
            {NAV_SECTIONS.map(({ label, anchor }) => (
              <li key={anchor}>
                <a href={anchor} className="navbar__link">
                  {label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA */}
        <Link to={ROUTES.DIGITAL_CARD} className="navbar__cta btn btn--primary">
          Tarjeta Digital
        </Link>

        {/* Mobile hamburger */}
        <button
          className="navbar__hamburger"
          aria-label="Abrir menú"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="navbar__mobile" aria-label="Menú móvil">
          <ul>
            {NAV_SECTIONS.map(({ label, anchor }) => (
              <li key={anchor}>
                <a
                  href={anchor}
                  className="navbar__link"
                  onClick={() => setMenuOpen(false)}
                >
                  {label}
                </a>
              </li>
            ))}
            <li>
              <Link
                to={ROUTES.DIGITAL_CARD}
                className="btn btn--primary"
                onClick={() => setMenuOpen(false)}
              >
                Tarjeta Digital
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  );
}

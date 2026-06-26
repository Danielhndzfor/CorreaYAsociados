import { useState, useEffect, useRef } from 'react';
import { NavLink, Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';
import { Menu, X, ChevronRight, ChevronDown, Phone, ArrowRight } from 'lucide-react';
import { SERVICES_DATA } from '../../data/services';

const PHONE_HREF = 'tel:+523141460458';
const WA_HREF    = 'https://wa.me/523141460458';

const NAV_LINKS = [
  { label: 'Inicio',    to: ROUTES.HOME },
  { label: 'Nosotros',  to: ROUTES.ABOUT },
  { label: 'Servicios', to: ROUTES.SERVICES, hasDropdown: true },
  { label: 'FAQ',       to: ROUTES.FAQ },
  { label: 'Contacto',  to: ROUTES.CONTACT },
];

const PhoneIcon = () => (
  <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.93a16 16 0 006.16 6.16l1.29-1.29a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/>
  </svg>
);

const WaIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347z"/>
    <path d="M12 0C5.373 0 0 5.373 0 12c0 2.12.553 4.107 1.52 5.832L0 24l6.335-1.56A11.945 11.945 0 0012 24c6.627 0 12-5.373 12-12S18.627 0 12 0zm0 21.818a9.802 9.802 0 01-5.006-1.372l-.36-.214-3.732.979.995-3.638-.234-.374A9.795 9.795 0 012.182 12C2.182 6.57 6.57 2.182 12 2.182S21.818 6.57 21.818 12 17.43 21.818 12 21.818z"/>
  </svg>
);

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'navbar__link navbar__link--active' : 'navbar__link';

const drawerLinkClass = ({ isActive }: { isActive: boolean }) =>
  isActive ? 'navbar__drawer-link navbar__drawer-link--active' : 'navbar__drawer-link';

export default function Navbar() {
  const [menuOpen,   setMenuOpen]   = useState(false);
  const [scrolled,   setScrolled]   = useState(false);
  const [dropdown,   setDropdown]   = useState(false);
  const [servOpen,   setServOpen]   = useState(false);   // mobile drawer sub-menu
  const leaveTimer = useRef<ReturnType<typeof setTimeout> | undefined>(undefined);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  const close = () => { setMenuOpen(false); setServOpen(false); };

  const onDropdownEnter = () => {
    clearTimeout(leaveTimer.current);
    setDropdown(true);
  };
  const onDropdownLeave = () => {
    leaveTimer.current = setTimeout(() => setDropdown(false), 160);
  };

  return (
    <>
      <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`}>
        <div className="navbar__pill">

          {/* Logo */}
          <Link to={ROUTES.HOME} className="navbar__brand" aria-label="Inicio" onClick={close}>
            <img src="/logoHorizontal.png" alt="Correa & Asociados" className="navbar__logo" />
          </Link>

          <span className="navbar__sep" aria-hidden />

          {/* Desktop nav */}
          <nav className="navbar__nav" aria-label="Navegación principal">
            <ul className="navbar__list">
              {NAV_LINKS.map(({ label, to, hasDropdown }) =>
                hasDropdown ? (
                  /* Servicios with dropdown */
                  <li
                    key={to}
                    className="navbar__item--has-dropdown"
                    onMouseEnter={onDropdownEnter}
                    onMouseLeave={onDropdownLeave}
                  >
                    <NavLink to={to} className={navLinkClass}>
                      {label}
                      <ChevronDown
                        size={13}
                        strokeWidth={2.5}
                        className={`navbar__chevron${dropdown ? ' navbar__chevron--open' : ''}`}
                      />
                    </NavLink>

                    {/* Dropdown panel */}
                    {dropdown && (
                      <div
                        className="nav-dropdown"
                        onMouseEnter={onDropdownEnter}
                        onMouseLeave={onDropdownLeave}
                      >
                        <div className="nav-dropdown__grid">
                          {SERVICES_DATA.map(({ slug, title, Icon, description }) => (
                            <Link
                              key={slug}
                              to={ROUTES.serviceDetail(slug)}
                              className="nav-dropdown__item"
                              onClick={() => setDropdown(false)}
                            >
                              <div className="nav-dropdown__icon">
                                <Icon size={18} strokeWidth={1.5} />
                              </div>
                              <div className="nav-dropdown__text">
                                <span className="nav-dropdown__title">{title}</span>
                                <span className="nav-dropdown__desc">
                                  {description.split(',')[0]}
                                </span>
                              </div>
                            </Link>
                          ))}
                        </div>
                        <div className="nav-dropdown__footer">
                          <Link
                            to={ROUTES.SERVICES}
                            className="nav-dropdown__all"
                            onClick={() => setDropdown(false)}
                          >
                            Ver todas las áreas de práctica
                            <ArrowRight size={14} strokeWidth={2} />
                          </Link>
                        </div>
                      </div>
                    )}
                  </li>
                ) : (
                  <li key={to}>
                    <NavLink to={to} end={to === ROUTES.HOME} className={navLinkClass}>
                      {label}
                    </NavLink>
                  </li>
                ),
              )}
            </ul>
          </nav>

          {/* Desktop CTA */}
          <a href={PHONE_HREF} className="navbar__cta">
            <PhoneIcon />
            Llamar ahora
          </a>

          {/* Hamburger */}
          <button
            className="navbar__hamburger"
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((p) => !p)}
          >
            {menuOpen ? <X size={20} strokeWidth={2} /> : <Menu size={20} strokeWidth={2} />}
          </button>
        </div>
      </header>

      {/* Backdrop */}
      {menuOpen && <div className="navbar__backdrop" onClick={close} aria-hidden="true" />}

      {/* Mobile drawer */}
      <nav
        className={`navbar__drawer${menuOpen ? ' navbar__drawer--open' : ''}`}
        aria-label="Menú móvil"
        aria-hidden={!menuOpen}
      >
        {/* Top bar */}
        <div className="navbar__drawer-top">
          <Link to={ROUTES.HOME} className="navbar__drawer-brand" onClick={close}>
            <img src="/logoHorizontal.png" alt="Correa & Asociados" />
          </Link>
          <button className="navbar__drawer-close" onClick={close} aria-label="Cerrar menú">
            <X size={20} strokeWidth={2} />
          </button>
        </div>

        {/* Links */}
        <ul className="navbar__drawer-list">
          {NAV_LINKS.map(({ label, to, hasDropdown }) =>
            hasDropdown ? (
              /* Servicios expandible */
              <li key={to} className="navbar__drawer-expand-item">
                <div className="navbar__drawer-expand-row">
                  <NavLink
                    to={to}
                    className={drawerLinkClass}
                    onClick={close}
                    style={{ flex: 1, border: 'none', borderRadius: '12px 0 0 12px' }}
                  >
                    {label}
                  </NavLink>
                  <button
                    className={`navbar__drawer-toggle${servOpen ? ' navbar__drawer-toggle--open' : ''}`}
                    onClick={() => setServOpen((p) => !p)}
                    aria-label="Expandir servicios"
                  >
                    <ChevronDown size={16} strokeWidth={2} />
                  </button>
                </div>

                {servOpen && (
                  <ul className="navbar__drawer-sub">
                    {SERVICES_DATA.map(({ slug, title, Icon }) => (
                      <li key={slug}>
                        <Link
                          to={ROUTES.serviceDetail(slug)}
                          className="navbar__drawer-sublink"
                          onClick={close}
                        >
                          <Icon size={15} strokeWidth={1.5} />
                          {title}
                        </Link>
                      </li>
                    ))}
                    <li>
                      <Link
                        to={ROUTES.SERVICES}
                        className="navbar__drawer-sublink navbar__drawer-sublink--all"
                        onClick={close}
                      >
                        Ver todas las áreas
                        <ArrowRight size={13} strokeWidth={2} />
                      </Link>
                    </li>
                  </ul>
                )}
              </li>
            ) : (
              <li key={to}>
                <NavLink
                  to={to}
                  end={to === ROUTES.HOME}
                  className={drawerLinkClass}
                  onClick={close}
                >
                  <span>{label}</span>
                  <ChevronRight size={16} strokeWidth={2} />
                </NavLink>
              </li>
            ),
          )}
        </ul>

        <div className="navbar__drawer-divider" />

        {/* Footer CTAs */}
        <div className="navbar__drawer-footer">
          <a href={PHONE_HREF} className="navbar__drawer-cta navbar__drawer-cta--gold" onClick={close}>
            <Phone size={16} strokeWidth={2} />
            Llamar ahora
          </a>
          <a href={WA_HREF} target="_blank" rel="noopener noreferrer" className="navbar__drawer-cta navbar__drawer-cta--wa" onClick={close}>
            <WaIcon />
            Escribir por WhatsApp
          </a>
        </div>

        <div className="navbar__drawer-glow" aria-hidden="true" />
      </nav>
    </>
  );
}

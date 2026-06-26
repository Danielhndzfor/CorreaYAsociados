/**
 * ROUTE_PATTERNS — Patrones usados en la configuración del router.
 * Las rutas hijas de / son relativas al segmento padre.
 */
export const ROUTE_PATTERNS = {
  HOME:                  '/',
  HOME_ABOUT:            'nosotros',
  HOME_SERVICES:         'servicios',
  HOME_SERVICE_DETAIL:   'servicios/:slug',
  HOME_SERVICE_FORM:     'servicios/:slug/formulario',
  HOME_FAQ:              'faq',
  HOME_CONTACT:          'contacto',
  UNDER_CONSTRUCTION:    '/en-construccion',
  DIGITAL_CARD:           '/tarjeta',
  DIGITAL_CARD_MODERN:    '/tarjeta/moderna',
} as const;

/**
 * ROUTES — Rutas absolutas para navegación (<Link to={...}>, useNavigate).
 */
export const ROUTES = {
  HOME:                 '/',
  ABOUT:                '/nosotros',
  SERVICES:             '/servicios',
  FAQ:                  '/faq',
  CONTACT:              '/contacto',
  UNDER_CONSTRUCTION:   '/en-construccion',
  DIGITAL_CARD:          '/tarjeta',
  DIGITAL_CARD_MODERN:   '/tarjeta/moderna',
  /** Construye la ruta de detalle de un servicio. */
  serviceDetail: (slug: string) => `/servicios/${slug}`,
  /** Construye la ruta del formulario de un servicio. */
  serviceForm:   (slug: string) => `/servicios/${slug}/formulario`,
};

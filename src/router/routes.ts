/**
 * ROUTE_PATTERNS — Patrones usados en la configuración del router.
 * Las rutas hijas de /inicio son relativas al segmento padre.
 */
export const ROUTE_PATTERNS = {
  UNDER_CONSTRUCTION:    '/',
  HOME:                  '/inicio',
  HOME_SERVICE_DETAIL:   'servicios/:slug',
  HOME_SERVICE_FORM:     'servicios/:slug/formulario',
  DIGITAL_CARD:           '/tarjeta',
  DIGITAL_CARD_MODERN:    '/tarjeta/moderna',
} as const;

/**
 * ROUTES — Rutas absolutas para navegación (<Link to={...}>, useNavigate).
 */
export const ROUTES = {
  UNDER_CONSTRUCTION:   '/',
  HOME:                 '/inicio',
  DIGITAL_CARD:          '/tarjeta',
  DIGITAL_CARD_MODERN:   '/tarjeta/moderna',
  /** Construye la ruta de detalle de un servicio. */
  serviceDetail: (slug: string) => `/inicio/servicios/${slug}`,
  /** Construye la ruta del formulario de un servicio. */
  serviceForm:   (slug: string) => `/inicio/servicios/${slug}/formulario`,
};

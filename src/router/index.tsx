import { lazy, Suspense } from 'react';
import { createBrowserRouter } from 'react-router-dom';
import { ROUTE_PATTERNS } from './routes';
import LoadingSpinner from '../components/ui/LoadingSpinner';
import MainLayout from '../layouts/MainLayout';

// ─── Lazy page imports ────────────────────────────────────────────────────────
const UnderConstruction = lazy(
  () => import('../pages/UnderConstruction/UnderConstruction'),
);
const HomePage = lazy(() => import('../pages/Home/HomePage'));
const AboutPage = lazy(() => import('../pages/About/AboutPage'));
const ServicesPage = lazy(() => import('../pages/Services/ServicesPage'));
const FAQPage = lazy(() => import('../pages/FAQ/FAQPage'));
const ContactPage = lazy(() => import('../pages/Contact/ContactPage'));
const ServiceDetailPage = lazy(
  () => import('../pages/ServiceDetail/ServiceDetailPage'),
);
const ServiceFormPage = lazy(
  () => import('../pages/ServiceForm/ServiceFormPage'),
);
const ModernCardPage = lazy(
  () => import('../pages/DigitalCard/ModernCardPage'),
);
const NotFoundPage = lazy(() => import('../pages/NotFound/NotFoundPage'));

// ─── Suspense wrapper ─────────────────────────────────────────────────────────
const fallback = <LoadingSpinner />;

const wrap = (node: React.ReactNode) => (
  <Suspense fallback={fallback}>{node}</Suspense>
);

// ─── Router ───────────────────────────────────────────────────────────────────
export const router = createBrowserRouter([
  {
    // Ruta principal: layout compartido (Navbar + Footer)
    path: ROUTE_PATTERNS.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: wrap(<HomePage />),
      },
      {
        path: ROUTE_PATTERNS.HOME_ABOUT,
        element: wrap(<AboutPage />),
      },
      {
        path: ROUTE_PATTERNS.HOME_SERVICES,
        element: wrap(<ServicesPage />),
      },
      {
        path: ROUTE_PATTERNS.HOME_FAQ,
        element: wrap(<FAQPage />),
      },
      {
        path: ROUTE_PATTERNS.HOME_CONTACT,
        element: wrap(<ContactPage />),
      },
      {
        path: ROUTE_PATTERNS.HOME_SERVICE_DETAIL,
        element: wrap(<ServiceDetailPage />),
      },
      {
        path: ROUTE_PATTERNS.HOME_SERVICE_FORM,
        element: wrap(<ServiceFormPage />),
      },
    ],
  },
  {
    // Página en construcción (accesible pero no es la raíz)
    path: ROUTE_PATTERNS.UNDER_CONSTRUCTION,
    element: wrap(<UnderConstruction />),
  },
  {
    // Tarjeta Moderna — Lic. Antonio Correa
    path: ROUTE_PATTERNS.DIGITAL_CARD_MODERN,
    element: wrap(<ModernCardPage />),
  },
  {
    // 404 — cualquier ruta no definida
    path: '*',
    element: wrap(<NotFoundPage />),
  },
]);

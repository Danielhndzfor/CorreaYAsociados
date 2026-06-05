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
    // Ruta 1: En Construcción
    path: ROUTE_PATTERNS.UNDER_CONSTRUCTION,
    element: wrap(<UnderConstruction />),
  },
  {
    // Ruta 2: Página Principal (con Navbar/Footer compartidos)
    path: ROUTE_PATTERNS.HOME,
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: wrap(<HomePage />),
      },
      {
        // Vista de detalle de servicio
        path: ROUTE_PATTERNS.HOME_SERVICE_DETAIL,
        element: wrap(<ServiceDetailPage />),
      },
      {
        // Formulario de solicitud de servicio
        path: ROUTE_PATTERNS.HOME_SERVICE_FORM,
        element: wrap(<ServiceFormPage />),
      },
    ],
  },
  {
    // Ruta 3b: Tarjeta Moderna — Lic. Antonio Correa (editorial)
    path: ROUTE_PATTERNS.DIGITAL_CARD_MODERN,
    element: wrap(<ModernCardPage />),
  },
  {
    // 404 — cualquier ruta no definida
    path: '*',
    element: wrap(<NotFoundPage />),
  },
]);

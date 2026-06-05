import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

export default function NotFoundPage() {
  return (
    <div className="not-found">
      <p className="not-found__code">404</p>
      <h1 className="not-found__title">Página no encontrada</h1>
      <p className="not-found__desc">
        La ruta que buscas no existe o fue movida.
      </p>
      <Link to={ROUTES.HOME} className="btn btn--primary">
        Volver al inicio
      </Link>
    </div>
  );
}

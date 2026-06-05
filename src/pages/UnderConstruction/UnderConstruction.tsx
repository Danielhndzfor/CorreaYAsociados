import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

export default function UnderConstruction() {
    return (
        <div className="uc">
            {/* Logo */}
            <div className="uc__header">
                <img 
                    src="/logoSinFondo.png" 
                    alt="Correa & Asociados" 
                    className="uc__logo"
                />
            </div>

            {/* Content */}
            <div className="uc__content">

                <p className="uc__subtitle">
                    Estamos construyendo algo increíble.
                    <br />
                    Vuelve muy pronto.
                </p>

                <div className="uc__badge">Próximamente</div>
                {/* Visual element */}
                <div className="uc__visual">
                    <div className="uc__dot uc__dot--1"></div>
                    <div className="uc__dot uc__dot--2"></div>
                    <div className="uc__dot uc__dot--3"></div>
                </div>

                <div className="uc__actions">
                    <Link to={ROUTES.DIGITAL_CARD_MODERN} className="btn btn--outline">
                        Ver Tarjeta Digital
                    </Link>
                </div>
            </div>
        </div>
    );
}

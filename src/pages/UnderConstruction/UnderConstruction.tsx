import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

export default function UnderConstruction() {
    return (
        <div className="uc">
            <span className="uc__corner uc__corner--tl" />
            <span className="uc__corner uc__corner--tr" />
            <span className="uc__corner uc__corner--bl" />
            <span className="uc__corner uc__corner--br" />

            <div className="uc__inner">

                {/* Logo card */}
                <div className="uc__card">
                    <img
                        src="/logo.png"
                        alt="Correa & Asociados"
                        className="uc__logo"
                    />
                </div>

                {/* Divider ornamental */}
                <div className="uc__divider">
                    <span className="uc__divider-line" />
                    <span className="uc__divider-diamond" />
                    <span className="uc__divider-line" />
                </div>

                {/* Label */}
                <p className="uc__label">Próximamente</p>

                {/* Subtitle */}
                <p className="uc__subtitle">
                    Estamos construyendo algo increíble.
                    <br />
                    Vuelve muy pronto.
                </p>

                {/* Dots */}
                <div className="uc__dots">
                    <span className="uc__dot uc__dot--1" />
                    <span className="uc__dot uc__dot--2" />
                    <span className="uc__dot uc__dot--3" />
                </div>

                {/* CTA */}
                <Link to={ROUTES.DIGITAL_CARD_MODERN} className="uc__cta">
                    Ver Tarjeta Digital
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
                        <path d="M3 7h8M7.5 4l3 3-3 3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </Link>

            </div>
        </div>
    );
}

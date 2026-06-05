import { useState } from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../router/routes';

// ─── SVG Icons ───────────────────────────────────────────────────────────────
const IconPhone = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.81a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.91 8.93a16 16 0 006.16 6.16l1.29-1.29a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z" />
    </svg>
);

const IconWhatsApp = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
    </svg>
);

const IconPin = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
        <circle cx="12" cy="10" r="3" />
    </svg>
);



const IconEnvelope = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
        <polyline points="22,6 12,13 2,6" />
    </svg>
);

const IconGlobe = () => (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="10" />
        <line x1="2" y1="12" x2="22" y2="12" />
        <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10 15.3 15.3 0 014-10z" />
    </svg>
);

const IconDownload = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
        <polyline points="7,10 12,15 17,10" />
        <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
);

const IconShare = () => (
    <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="18" cy="5" r="3" /><circle cx="6" cy="12" r="3" /><circle cx="18" cy="19" r="3" />
        <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" /><line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
    </svg>
);





const IconFacebook = () => (
    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
    </svg>
);



const IconSun = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <circle cx="12" cy="12" r="5" />
        <line x1="12" y1="1" x2="12" y2="3" />
        <line x1="12" y1="21" x2="12" y2="23" />
        <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" />
        <line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
        <line x1="1" y1="12" x2="3" y2="12" />
        <line x1="21" y1="12" x2="23" y2="12" />
        <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" />
        <line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
);

const IconMoon = () => (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
);

// ─── Datos ────────────────────────────────────────────────────────────────────
const ANTONIO = {
    name: 'Mtro. Antonio Correa',
    role: 'Abogado · Socio Director',
    firm: 'Correa y Asociados S.C.',
    photo: '/Antonio2.png',
    phone: '+52 314 146 0458',
    phoneRaw: '523141460458',
    email: 'antoniocorrea@correayasociados.com.mx',
    whatsapp: '523141460458',
    whatsappMsg: 'Hola Mtro. Correa, tengo una consulta sobre un caso, ¿podría brindarme orientación legal?',
    website: 'https://correayasociados.com.mx',
    address: 'Av Paseo de las Garzas 274, Guacamayas, Chapultepec, 28219 Manzanillo, Col.',
    addressLink: 'https://maps.app.goo.gl/V5VmPwWPwFCCKmb3A',
    facebook: 'https://www.facebook.com/share/19GDpZk6Zw/?mibextid=wwXIfr',
    linkedin: null,
    instagram: null,
    youtube: null,
} as const;

const PRACTICE_AREAS = [
    { name: 'Derecho Laboral', desc: 'Contratos, litigio laboral, conflictos con trabajadores y recursos humanos', slug: 'derecho-laboral' },
    { name: 'Derecho Familiar', desc: 'Divorcios, pensión alimenticia, custodia, sucesiones y cambios de estado civil', slug: 'derecho-familiar' },
    { name: 'Derecho Mercantil', desc: 'Asesoría mercantil, controversias comerciales, quiebras y sociedades', slug: 'derecho-mercantil' },
    { name: 'Derecho Civil', desc: 'Contratos civiles, responsabilidad civil, propiedad y sucesiones', slug: 'derecho-civil' },
    { name: 'Derecho Penal', desc: 'Defensa penal, litigio federal y estatal, reparación del daño', slug: 'derecho-penal' },
];

// ─── vCard ────────────────────────────────────────────────────────────────────
function downloadVCard() {
    const vcard = [
        'BEGIN:VCARD',
        'VERSION:3.0',
        `FN:${ANTONIO.name}`,
        `ORG:${ANTONIO.firm}`,
        `TITLE:${ANTONIO.role}`,
        `TEL;TYPE=WORK,VOICE:${ANTONIO.phoneRaw}`,
        `TEL;TYPE=CELL:${ANTONIO.phoneRaw}`,
        `EMAIL;TYPE=WORK:${ANTONIO.email}`,
        `URL:${ANTONIO.website}`,
        `ADR;TYPE=WORK:;;${ANTONIO.address};;;;`,
        'END:VCARD',
    ].join('\r\n');

    const blob = new Blob([vcard], { type: 'text/vcard;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'Antonio_Correa.vcf';
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    URL.revokeObjectURL(url);
}

// ─── Component ────────────────────────────────────────────────────────────────
export default function ModernCardPage() {
    const [copied, setCopied] = useState(false);
    const [darkMode, setDarkMode] = useState(() => {
        const saved = localStorage.getItem('dcm-dark-mode');
        return saved ? JSON.parse(saved) : false;
    });

    const toggleDarkMode = () => {
        const newMode = !darkMode;
        setDarkMode(newMode);
        localStorage.setItem('dcm-dark-mode', JSON.stringify(newMode));
    };

    const handleShare = async () => {
        try {
            if (navigator.share) {
                await navigator.share({
                    title: ANTONIO.name,
                    text: `${ANTONIO.name} — ${ANTONIO.role} · ${ANTONIO.firm}`,
                    url: window.location.href,
                });
            } else {
                await navigator.clipboard.writeText(window.location.href);
                setCopied(true);
                setTimeout(() => setCopied(false), 2000);
            }
        } catch {
            // usuario canceló
        }
    };

    return (
        <div className={`dcm ${darkMode ? 'dcm--dark' : ''}`}>

            {/* ── Toggle Dark Mode ── */}
            <button
                type="button"
                onClick={toggleDarkMode}
                className="dcm__theme-toggle"
                aria-label="Cambiar modo"
            >
                {darkMode ? <IconSun /> : <IconMoon />}
            </button>

            {/* ── Cover Editorial ── */}
            <div className="dcm__cover">
                <img src={ANTONIO.photo} alt={ANTONIO.name} className="dcm__cover-photo" />
                <div className="dcm__cover-gradient" aria-hidden />

                {/* <img
          src="/logoSinFondo.png"
          alt={ANTONIO.firm}
          className="dcm__cover-logo"
        /> */}

                <div className="dcm__cover-text">
                    <p className="dcm__cover-firm">{ANTONIO.firm}</p>
                    <p className="dcm__cover-name">{ANTONIO.name}</p>
                    <p className="dcm__cover-role">{ANTONIO.role}</p>
                </div>
            </div>

            {/* ── Cuerpo ── */}
            <div className="dcm__body">

                {/* CTAs */}
                <div className="dcm__ctas">
                    <a href={`tel:${ANTONIO.phoneRaw}`} className="dcm__cta dcm__cta--phone">
                        <span className="dcm__cta-icon"><IconPhone /></span>
                        <span>Llamar</span>
                    </a>
                    <a
                        href={`https://wa.me/${ANTONIO.whatsapp}?text=${encodeURIComponent(ANTONIO.whatsappMsg)}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="dcm__cta dcm__cta--wa"
                    >
                        <span className="dcm__cta-icon"><IconWhatsApp /></span>
                        <span>WhatsApp</span>
                    </a>
                </div>

                {/* Información */}
                <section className="dcm__section">
                    <p className="dcm__section-label">Información</p>
                    <div className="dcm__info-list">
                        <a href={`mailto:${ANTONIO.email}`} className="dcm__info-row">
                            <span className="dcm__info-icon"><IconEnvelope /></span>
                            <span className="dcm__info-text">{ANTONIO.email}</span>
                        </a>
                        <a href={ANTONIO.addressLink} target="_blank" rel="noopener noreferrer" className="dcm__info-row">
                            <span className="dcm__info-icon"><IconPin /></span>
                            <span className="dcm__info-text">{ANTONIO.address}</span>
                        </a>
                        <a href={ROUTES.UNDER_CONSTRUCTION} target="_blank" rel="noopener noreferrer" className="dcm__info-row">
                            <span className="dcm__info-icon"><IconGlobe /></span>
                            <span className="dcm__info-text">{ANTONIO.website.replace('https://', '')}</span>
                        </a>
                    </div>
                </section>

                {/* Áreas de práctica */}
                <section className="dcm__section">
                    <p className="dcm__section-label">Áreas de práctica</p>
                    <ul className="dcm__area-list">
                        {PRACTICE_AREAS.map((area) => (
                            <Link key={area.name} to={`/inicio/servicios/${area.slug}`} className="dcm__area-item">
                                <div className="dcm__area-body">
                                    <span className="dcm__area-name">{area.name}</span>
                                    <span className="dcm__area-desc">{area.desc}</span>
                                </div>
                                <span className="dcm__area-arrow">›</span>
                            </Link>
                        ))}
                    </ul>
                </section>

                {/* Redes sociales */}
                <section className="dcm__section">
                    <p className="dcm__section-label">Redes sociales</p>
                    <div className="dcm__social">
                        {ANTONIO.facebook && <a href={ANTONIO.facebook} target="_blank" rel="noopener noreferrer" className="dcm__social-btn" aria-label="Facebook"><IconFacebook /></a>}
                    </div>
                </section>

                {/* Footer */}
                <div className="dcm__footer">
                    <button type="button" onClick={downloadVCard} className="dcm__save">
                        <IconDownload />
                        Guardar contacto
                    </button>
                    <button type="button" onClick={handleShare} className="dcm__share" aria-label="Compartir">
                        <IconShare />
                        {copied ? 'Copiado ✓' : 'Compartir'}
                    </button>
                </div>

            </div>



        </div>
    );
}

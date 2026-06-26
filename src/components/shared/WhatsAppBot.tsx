import { useState, useEffect, useRef } from 'react';

const WA_NUMBER = '523141460458';
const WA_BASE   = `https://wa.me/${WA_NUMBER}?text=`;

const SUGGESTIONS = [
  { label: 'Necesito asesoría legal',       msg: 'Hola, necesito asesoría legal. ¿Me pueden ayudar?' },
  { label: '¿Cuáles son sus servicios?',    msg: 'Hola, me gustaría conocer los servicios que ofrecen.' },
  { label: 'Quiero agendar una consulta',   msg: 'Hola, me gustaría agendar una consulta con un abogado.' },
  { label: 'Tengo un caso urgente',         msg: 'Hola, tengo un caso urgente y necesito orientación legal inmediata.' },
];

const WhatsAppLogo = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
  </svg>
);

function getTime() {
  return new Date().toLocaleTimeString('es-MX', { hour: '2-digit', minute: '2-digit' });
}

export default function WhatsAppBot() {
  const [open, setOpen]     = useState(false);
  const [time]              = useState(getTime);
  const [showBubble, setShowBubble] = useState(false);
  const panelRef = useRef<HTMLDivElement>(null);

  /* Pulse badge after 3 s to draw attention */
  useEffect(() => {
    const t = setTimeout(() => setShowBubble(true), 3000);
    return () => clearTimeout(t);
  }, []);

  /* Close on outside click */
  useEffect(() => {
    if (!open) return;
    const handler = (e: MouseEvent) => {
      if (panelRef.current && !panelRef.current.contains(e.target as Node)) {
        setOpen(false);
      }
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, [open]);

  const handleSuggestion = (msg: string) => {
    window.open(`${WA_BASE}${encodeURIComponent(msg)}`, '_blank', 'noopener,noreferrer');
  };

  return (
    <div className="wab" ref={panelRef}>

      {/* Chat panel */}
      {open && (
        <div className="wab__panel" role="dialog" aria-label="Chat de WhatsApp">

          {/* Header */}
          <div className="wab__header">
            <div className="wab__header-avatar">
              <WhatsAppLogo />
            </div>
            <div className="wab__header-info">
              <strong className="wab__header-name">Correa &amp; Asociados</strong>
              <span className="wab__header-status">
                <span className="wab__status-dot" /> En línea
              </span>
            </div>
            <button className="wab__close" onClick={() => setOpen(false)} aria-label="Cerrar chat">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round">
                <path d="M18 6L6 18M6 6l12 12"/>
              </svg>
            </button>
          </div>

          {/* Body */}
          <div className="wab__body">
            <div className="wab__date-badge">hoy</div>

            {/* Bot message */}
            <div className="wab__bubble wab__bubble--bot">
              <p>¡Hola! 👋 Bienvenido a <strong>Correa &amp; Asociados</strong>.</p>
              <p>¿En qué podemos ayudarte hoy?</p>
              <span className="wab__bubble-time">{time}</span>
            </div>

            {/* Suggestions label */}
            <p className="wab__suggestions-label">Selecciona una opción:</p>

            {/* Suggestion chips */}
            <div className="wab__suggestions">
              {SUGGESTIONS.map(({ label, msg }) => (
                <button
                  key={label}
                  className="wab__chip"
                  onClick={() => handleSuggestion(msg)}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Footer */}
          <div className="wab__footer">
            <WhatsAppLogo />
            <span>Continúa la conversación en WhatsApp</span>
          </div>

        </div>
      )}

      {/* Floating button */}
      <button
        className={`wab__trigger${open ? ' wab__trigger--open' : ''}`}
        onClick={() => { setOpen((p) => !p); setShowBubble(false); }}
        aria-label="Abrir chat de WhatsApp"
      >
        {open
          ? (
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
              <path d="M18 6L6 18M6 6l12 12"/>
            </svg>
          )
          : <WhatsAppLogo />
        }

        {/* Pulse ring */}
        {!open && <span className="wab__pulse" />}

        {/* Notification badge */}
        {!open && showBubble && (
          <span className="wab__badge">1</span>
        )}
      </button>

      {/* Tooltip bubble */}
      {!open && showBubble && (
        <div className="wab__tooltip" onClick={() => { setOpen(true); setShowBubble(false); }}>
          ¿Necesitas asesoría legal? 💬
        </div>
      )}

    </div>
  );
}

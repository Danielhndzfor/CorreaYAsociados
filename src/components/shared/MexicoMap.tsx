import { useState } from 'react';
import { ComposableMap, Geographies, Geography, Marker } from 'react-simple-maps';
import { MapPin, Phone, Mail, X } from 'lucide-react';

const GEO_URL = 'https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json';

interface Office {
  id: number;
  city: string;
  state: string;
  type: string;
  coordinates: [number, number];
  phone: string;
  email: string;
  address: string;
}

const OFFICES: Office[] = [
  {
    id: 1,
    city: 'Manzanillo',
    state: 'Colima',
    type: 'Oficina Principal',
    coordinates: [-104.32, 19.05],
    phone: '+52 314 146 0458',
    email: 'antoniocorrea@correayasociados.com.mx',
    address: 'Manzanillo, Colima, México',
  },
  {
    id: 2,
    city: 'Colima',
    state: 'Colima',
    type: 'Oficina Regional',
    coordinates: [-103.72, 19.24],
    phone: '+52 314 146 0458',
    email: 'antoniocorrea@correayasociados.com.mx',
    address: 'Colima, Colima, México',
  },
  {
    id: 3,
    city: 'Guadalajara',
    state: 'Jalisco',
    type: 'Representación',
    coordinates: [-103.35, 20.66],
    phone: '+52 314 146 0458',
    email: 'antoniocorrea@correayasociados.com.mx',
    address: 'Guadalajara, Jalisco, México',
  },
  {
    id: 4,
    city: 'Ciudad de México',
    state: 'CDMX',
    type: 'Representación',
    coordinates: [-99.13, 19.43],
    phone: '+52 314 146 0458',
    email: 'antoniocorrea@correayasociados.com.mx',
    address: 'Ciudad de México, México',
  },
];

export default function MexicoMap() {
  const [active, setActive] = useState<Office | null>(null);

  const handlePin = (office: Office) =>
    setActive((prev) => (prev?.id === office.id ? null : office));

  return (
    <div className="mexico-map">
      {/* SVG Map canvas */}
      <div className="mexico-map__canvas">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{ center: [-102, 24], scale: 1350 }}
          style={{ width: '100%', height: '100%' }}
        >
          <Geographies geography={GEO_URL}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isMx = String(geo.id) === '484';
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    fill={isMx ? '#1a3d60' : '#0d2033'}
                    stroke={isMx ? '#bd9969' : '#091827'}
                    strokeWidth={isMx ? 1 : 0.3}
                    style={{
                      default: { outline: 'none' },
                      hover:   { outline: 'none' },
                      pressed: { outline: 'none' },
                    }}
                  />
                );
              })
            }
          </Geographies>

          {OFFICES.map((office) => {
            const isActive = active?.id === office.id;
            return (
              <Marker
                key={office.id}
                coordinates={office.coordinates}
                onClick={() => handlePin(office)}
              >
                <g className={`mxpin${isActive ? ' mxpin--on' : ''}`}>
                  <circle className="mxpin__pulse" r={14} />
                  <circle className="mxpin__dot" r={6} />
                </g>
              </Marker>
            );
          })}
        </ComposableMap>
      </div>

      {/* Side panel */}
      <aside className={`mexico-map__panel${active ? ' mexico-map__panel--open' : ''}`}>
        {active ? (
          <div className="mexico-map__detail">
            <button
              className="mexico-map__close"
              onClick={() => setActive(null)}
              aria-label="Cerrar"
            >
              <X size={15} />
            </button>
            <span className="mexico-map__detail-type">{active.type}</span>
            <h3 className="mexico-map__detail-city">{active.city}</h3>
            <p className="mexico-map__detail-state">{active.state}</p>
            <ul className="mexico-map__detail-list">
              <li>
                <a href={`tel:${active.phone.replace(/\s/g, '')}`}>
                  <Phone size={13} strokeWidth={2} />
                  {active.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${active.email}`}>
                  <Mail size={13} strokeWidth={2} />
                  {active.email}
                </a>
              </li>
              <li className="mexico-map__detail-addr">
                <MapPin size={13} strokeWidth={2} />
                {active.address}
              </li>
            </ul>
          </div>
        ) : (
          <div className="mexico-map__hint">
            <MapPin size={22} strokeWidth={1.5} />
            <p>Toca un pin para ver información de la sede</p>
          </div>
        )}
      </aside>

      {/* City dots legend (always visible) */}
      <div className="mexico-map__legend">
        {OFFICES.map((office) => (
          <button
            key={office.id}
            className={`mexico-map__legend-item${active?.id === office.id ? ' mexico-map__legend-item--on' : ''}`}
            onClick={() => handlePin(office)}
          >
            <span className="mexico-map__legend-dot" />
            <span>{office.city}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

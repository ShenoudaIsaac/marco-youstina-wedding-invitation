import { useState } from "react";
import { config } from "../config";
import Reveal from "../components/Reveal";

// Decorative night-sea illustration for the venue card: moon, stars and
// gilded waves. Inline SVG so no image asset is needed.
function VenueArt() {
  return (
    <svg
      className="venue-art"
      viewBox="0 0 480 210"
      aria-hidden="true"
      preserveAspectRatio="xMidYMid slice"
    >
      <defs>
        <linearGradient id="venue-sky" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#081326" />
          <stop offset="1" stopColor="#123058" />
        </linearGradient>
        <linearGradient id="venue-sea" x1="0" y1="0" x2="0" y2="1">
          <stop offset="0" stopColor="#0e2748" />
          <stop offset="1" stopColor="#081326" />
        </linearGradient>
        <radialGradient id="venue-moon-glow" cx="0.5" cy="0.5" r="0.5">
          <stop offset="0" stopColor="#f5e9c9" stopOpacity="0.5" />
          <stop offset="1" stopColor="#f5e9c9" stopOpacity="0" />
        </radialGradient>
      </defs>

      <rect width="480" height="150" fill="url(#venue-sky)" />
      <rect y="150" width="480" height="60" fill="url(#venue-sea)" />

      {/* stars */}
      {[
        [36, 28, 1.4],
        [88, 62, 1],
        [140, 22, 1.7],
        [196, 74, 1.1],
        [258, 34, 1.4],
        [318, 88, 1],
        [420, 30, 1.2],
        [452, 72, 1.5],
        [64, 104, 1],
        [232, 112, 1.3],
      ].map(([x, y, r], i) => (
        <circle key={i} cx={x} cy={y} r={r} fill="#f5e9c9" opacity="0.75" />
      ))}

      {/* moon and its reflection */}
      <circle cx="366" cy="58" r="52" fill="url(#venue-moon-glow)" />
      <circle cx="366" cy="58" r="24" fill="#f5e9c9" />
      <circle cx="357" cy="52" r="5" fill="#e6d5ae" opacity="0.6" />
      <circle cx="374" cy="66" r="3.6" fill="#e6d5ae" opacity="0.5" />
      <g stroke="#d4af37" strokeLinecap="round" opacity="0.65">
        <line x1="356" y1="158" x2="376" y2="158" strokeWidth="3" />
        <line x1="360" y1="167" x2="372" y2="167" strokeWidth="2.6" />
        <line x1="354" y1="176" x2="378" y2="176" strokeWidth="2.2" />
        <line x1="362" y1="185" x2="370" y2="185" strokeWidth="2" />
      </g>

      {/* waves */}
      <path
        d="M0 152 Q40 144 80 152 T160 152 T240 152 T320 152 T400 152 T480 152"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1.6"
        opacity="0.8"
      />
      <path
        d="M0 170 Q40 163 80 170 T160 170 T240 170 T320 170 T400 170 T480 170"
        fill="none"
        stroke="#7d97c0"
        strokeWidth="1.2"
        opacity="0.5"
      />
      <path
        d="M0 188 Q40 182 80 188 T160 188 T240 188 T320 188 T400 188 T480 188"
        fill="none"
        stroke="#d4af37"
        strokeWidth="1"
        opacity="0.3"
      />
    </svg>
  );
}

export default function Venue() {
  // Shows the real photo of the hall once public/images/venue.jpg exists;
  // falls back to the illustration until then.
  const [photoFailed, setPhotoFailed] = useState(false);

  return (
    <section
      className="venue-section bg-night"
      id="venue"
      aria-label="Wedding venue location"
    >
      <Reveal>
        <p className="section-kicker">Where we celebrate</p>
        <h2 className="section-title">The Venue</h2>
      </Reveal>

      <Reveal delay={150} variant="up">
        <div className="venue-card">
          {photoFailed ? (
            <VenueArt />
          ) : (
            <img
              className="venue-photo"
              src={config.venue.photo}
              alt={`${config.venue.name} — the wedding hall`}
              onError={() => setPhotoFailed(true)}
            />
          )}
          <div className="venue-body">
            <p className="venue-name">{config.venue.name}</p>
            <p className="venue-city">{config.venue.city}</p>
            <p className="venue-meta">
              {config.weddingDateLine}
              <span className="venue-meta-dot" aria-hidden="true">
                •
              </span>
              {config.weddingTimeLine}
            </p>
            <a
              className="venue-map-btn"
              href={config.venue.googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              <svg viewBox="0 0 24 24" width="16" height="16" aria-hidden="true">
                <path
                  d="M12 2a7 7 0 0 1 7 7c0 4.8-5.4 11.2-6.6 12.5a.55.55 0 0 1-.8 0C10.4 20.2 5 13.8 5 9a7 7 0 0 1 7-7Zm0 4.4A2.6 2.6 0 1 0 12 11.6 2.6 2.6 0 0 0 12 6.4Z"
                  fill="currentColor"
                />
              </svg>
              Open in Google Maps
            </a>
          </div>
        </div>
      </Reveal>
    </section>
  );
}

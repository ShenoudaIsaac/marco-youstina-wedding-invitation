import { config } from "../config";
import NightSky from "../components/NightSky";

export default function Hero() {
  return (
    <section className="hero-section bg-night">
      <NightSky />
      <p className="hero-cross" aria-hidden="true">
        ✝
      </p>
      <p className="hero-verse">{config.openingVerse}</p>
      <p className="hero-verse-ref">{config.openingVerseRef}</p>
      <p className="hero-verse-full">{config.heroVerse}</p>

      <div className="hero-names">
        <span className="hero-name-1">{config.nameFirst}</span>
        <span className="hero-ampersand">&amp;</span>
        <span className="hero-name-2">{config.nameSecond}</span>
      </div>

      <p className="hero-tagline">{config.tagline}</p>

      <div className="hero-divider" aria-hidden="true">
        <span className="hero-divider-line" />
        <span className="hero-divider-diamond">◆</span>
        <span className="hero-divider-line" />
      </div>

      <p className="hero-date">{config.weddingDateLine}</p>
      <p className="hero-time">at {config.weddingTimeLine}</p>
      <p className="hero-location">
        {config.venue.name} — {config.venue.city}
      </p>
      <p className="hero-invite">{config.inviteLine}</p>

      <div className="hero-chevron" aria-hidden="true">
        ⌄
      </div>
    </section>
  );
}

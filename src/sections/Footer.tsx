import { config } from "../config";
import Reveal from "../components/Reveal";

export default function Footer() {
  return (
    <footer className="footer-section bg-night-deep">
      <Reveal>
        <p className="footer-names">
          {config.nameFirst} <span className="footer-amp">&amp;</span>{" "}
          {config.nameSecond}
        </p>
        <p className="footer-date">{config.weddingDateLine}</p>
        <p className="footer-heart" aria-hidden="true">
          ♥
        </p>
        <div className="footer-credit">
          <span>Made with love by {config.credit.name}</span>
          <span className="footer-credit-links">
            <a href={`tel:${config.credit.phone}`}>{config.credit.phone}</a>
            <span aria-hidden="true">·</span>
            <a
              href={config.credit.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
            >
              WhatsApp
            </a>
          </span>
        </div>
      </Reveal>
    </footer>
  );
}

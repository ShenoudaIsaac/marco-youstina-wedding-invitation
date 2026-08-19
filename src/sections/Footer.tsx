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
        <p className="footer-credit">
          Made with love by {config.credit.name} &middot;{" "}
          <a
            href={config.credit.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
          >
            {config.credit.phone}
          </a>
        </p>
      </Reveal>
    </footer>
  );
}

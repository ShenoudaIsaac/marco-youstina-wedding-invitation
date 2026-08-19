import { useState } from "react";
import { config } from "../config";
import NightSky from "./NightSky";

export default function SplashGate({
  onOpen,
  onOpenClick,
}: {
  onOpen: () => void;
  onOpenClick?: () => void;
}) {
  const [isExiting, setIsExiting] = useState(false);

  const handleOpen = () => {
    // Called synchronously inside the click so audio starts within the
    // user gesture (mobile browsers block audio outside one).
    onOpenClick?.();
    setIsExiting(true);
    window.setTimeout(onOpen, 600);
  };

  return (
    <div className={`splash-gate bg-night${isExiting ? " is-exiting" : ""}`}>
      <NightSky />
      <div className="splash-card">
        <div className="splash-monogram" aria-hidden="true">
          M&thinsp;·&thinsp;Y
        </div>
        <p className="splash-verse">{config.openingVerse}</p>
        <p className="splash-verse-ref">{config.openingVerseRef}</p>
        <p className="splash-names">
          {config.nameFirst} <span className="splash-amp">&amp;</span>{" "}
          {config.nameSecond}
        </p>
        <p className="splash-date">{config.weddingDateLine}</p>
        <button type="button" className="splash-open-btn" onClick={handleOpen}>
          Open Invitation
        </button>
      </div>
    </div>
  );
}

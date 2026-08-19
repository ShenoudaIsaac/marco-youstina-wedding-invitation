import { forwardRef, useImperativeHandle, useRef, useState } from "react";
import { config } from "../config";

export interface MusicPlayerHandle {
  start: () => void;
}

const MusicPlayer = forwardRef<MusicPlayerHandle>(function MusicPlayer(_, ref) {
  const audioRef = useRef<HTMLAudioElement>(null);
  const [isPlaying, setIsPlaying] = useState(false);
  const startAt = config.music.startAtSeconds ?? 0;

  const play = () => {
    const audio = audioRef.current;
    if (!audio) return;
    // First play (or after the track ended): jump to the configured start point.
    if (audio.currentTime < startAt || audio.ended) {
      audio.currentTime = startAt;
    }
    audio.play().catch(() => {
      // Ignore playback errors, e.g. missing /public/audio/perfect.mp3
    });
  };

  // Lets the splash gate start the music from its click handler, which keeps
  // playback inside a user gesture (required by mobile autoplay policies).
  useImperativeHandle(ref, () => ({ start: play }));

  const toggle = () => {
    const audio = audioRef.current;
    if (!audio) return;
    if (isPlaying) {
      audio.pause();
    } else {
      play();
    }
  };

  const handleEnded = () => {
    const audio = audioRef.current;
    if (!audio) return;
    audio.currentTime = startAt;
    audio.play().catch(() => {});
  };

  return (
    <>
      <audio
        ref={audioRef}
        src={config.music.src}
        onEnded={handleEnded}
        onPlay={() => setIsPlaying(true)}
        onPause={() => setIsPlaying(false)}
        preload="auto"
      />
      <button
        type="button"
        className="music-player-btn"
        onClick={toggle}
        aria-label={isPlaying ? "Pause music" : "Play music"}
      >
        {isPlaying ? (
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <rect x="6" y="5" width="4" height="14" rx="1" fill="currentColor" />
            <rect x="14" y="5" width="4" height="14" rx="1" fill="currentColor" />
          </svg>
        ) : (
          <svg viewBox="0 0 24 24" width="18" height="18" aria-hidden="true">
            <path
              d="M9 18.5a3 3 0 1 1-2-2.83V6.2a1 1 0 0 1 .77-.97l9-2.1a1 1 0 0 1 1.23.98v11.24a3 3 0 1 1-2-2.83V7.2l-7 1.63v9.67Z"
              fill="currentColor"
            />
          </svg>
        )}
      </button>
    </>
  );
});

export default MusicPlayer;

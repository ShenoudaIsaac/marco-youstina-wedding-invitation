import { useRef, useState } from "react";
import SplashGate from "./components/SplashGate";
import GoldFrame from "./components/GoldFrame";
import MusicPlayer, { MusicPlayerHandle } from "./components/MusicPlayer";
import Hero from "./sections/Hero";
import Countdown from "./sections/Countdown";
import Gallery from "./sections/Gallery";
import Venue from "./sections/Venue";
import Footer from "./sections/Footer";

export default function App() {
  const [isOpen, setIsOpen] = useState(false);
  const musicRef = useRef<MusicPlayerHandle>(null);

  // MusicPlayer stays mounted in the same tree position across the splash
  // transition so the <audio> element (and playback) survives it.
  return (
    <>
      {!isOpen && (
        <SplashGate
          onOpen={() => setIsOpen(true)}
          onOpenClick={() => musicRef.current?.start()}
        />
      )}
      <MusicPlayer ref={musicRef} />
      {isOpen && (
        <>
          <GoldFrame />
          <Hero />
          <Countdown />
          <Gallery />
          <Venue />
          <Footer />
        </>
      )}
    </>
  );
}

import { useEffect, useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Hero from "./components/MainSite/Hero/Hero";
import Navbar from "./components/MainSite/Navbar/Navbar";

import btnSoundIdle from "./assets/ui/btn-sound-idle.png";
import btnSoundClick from "./assets/ui/btn-sound-click.png";

function App() {
  const [loading, setLoading] = useState(true);
  const [audioUnlocked, setAudioUnlocked] = useState(false);
  const [isMuted, setIsMuted] = useState(false);
  const audioRef = useRef(null);

  useEffect(() => {
    const audio = new Audio("/assets/audio/startup-sfx.mp3");
    audioRef.current = audio;
    audio.volume = 1;
    audio.loop = false;
    audio.preload = "auto";
  }, []);

  const toggleSound = () => {
    if (!audioRef.current) return;

    if (!audioUnlocked) {
      audioRef.current
        .play()
        .then(() => {
          setAudioUnlocked(true);
          console.log("audio unlocked via mute toggle! 🔊");
        })
        .catch((err) => {
          console.warn("audio still blocked 😔", err);
        });
    }

    audioRef.current.volume = isMuted ? 1 : 0;
    setIsMuted(!isMuted);
  };

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>
      {/* sound toggle only visible while loading */}
      {loading && (
        <img
          src={isMuted ? btnSoundClick : btnSoundIdle}
          onClick={(e) => {
            e.stopPropagation();
            toggleSound();
          }}
          alt="sound toggle"
          style={{
            position: "fixed",
            bottom: "2rem",
            left: "2rem",
            width: "100px",
            cursor: "pointer",
            zIndex: 999,
            imageRendering: "pixelated",
          }}
        />
      )}

      {/* main content */}
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
        </>
      )}
    </div>
  );
}

export default App;

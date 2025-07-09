import { useEffect, useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
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

  const handleUserClick = () => {
    if (!audioUnlocked && audioRef.current) {
      audioRef.current
        .play()
        .then(() => {
          setAudioUnlocked(true);
          console.log("audio unlocked! yay! 🔓🔊");
        })
        .catch((err) => {
          console.warn("audio still blocked 😔", err);
        });
    }
  };

  const toggleSound = () => {
    if (!audioRef.current) return;
    audioRef.current.volume = isMuted ? 1 : 0;
    setIsMuted(!isMuted);
  };

  return (
    <div
      onClick={handleUserClick}
      style={{ width: "100vw", height: "100vh", cursor: "pointer" }}
    >
      {/* sound toggle button */}
      <img
        src={isMuted ? btnSoundClick : btnSoundIdle}
        onClick={(e) => {
          e.stopPropagation(); // stop it from triggering audio unlock again
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

      {/* screen content */}
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <div>{/* actual site content */}</div>
      )}
    </div>
  );
}

export default App;

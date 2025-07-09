import { useEffect, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
  const audio = new Audio("/assets/audio/startup-sfx.mp3");
  audio.preload = "auto";

    setTimeout(() => {
      audio.play().catch((err) => {
        console.warn("autoplay still blocked 😔", err);
      });
    }, 100); // sometimes slight delay helps
  }, []);


  return (
    <>
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <div>
          {/* actual site content */}
        </div>
      )}
    </>
  );
}

export default App;

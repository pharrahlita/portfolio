import { useEffect, useRef, useState } from "react";
import LoadingScreen from "./components/LoadingScreen/LoadingScreen";
import Hero from "./components/MainSite/Hero/Hero";
import Navbar from "./components/MainSite/Navbar/Navbar";
import AboutMe from "./components/MainSite/AboutMe/AboutMe";
import MusicPlayer from "./components/MainSite/MusicPlayer/MusicPlayer";
import TerminalLogs from "./components/MainSite/TerminalLogs/TerminalLogs";


//import Projects from "./components/MainSite/Projects/Projects";

function App() {
  console.log("loaded")
  const [loading, setLoading] = useState(true);
  const [tick, setTick] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => setTick(t => t + 1), 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div style={{ width: "100vw", minHeight: "100vh" }}>

      {/* main content */}
      {loading ? (
        <LoadingScreen onFinish={() => setLoading(false)} />
      ) : (
        <>
          <Navbar />
          <Hero />
          <TerminalLogs tick={tick} />
          <MusicPlayer />
          <AboutMe />
          {/*<Projects />*/}
        </>
      )}
    </div>
  );
}

export default App;

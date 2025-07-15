import { useState, useRef } from "react";
import "./MusicPlayer.css";

import musicCat from "../../../assets/ui/cat3.png";
import playIcon from "../../../assets/ui/play.svg";
import pauseIcon from "../../../assets/ui/pause.svg";
import prevIcon from "../../../assets/ui/prev.svg";
import skipIcon from "../../../assets/ui/skip.svg";

const tracks = [
  { title: "metro van de laatste rit", src: "/assets/audio/metro.mp3" },
  { title: "scared to be alone; scared fall in love", src: "/assets/audio/scared.mp3" },
  { title: "wildflower", src: "/assets/audio/wildflower.mp3" },
  { title: "labour", src: "/assets/audio/labour.mp3" },
  { title: "miaw miaw miaw", src: "/assets/audio/meow.mp3" }
];

const MusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  const togglePlay = () => {
    if (!audioRef.current) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const skipNext = () => {
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const skipPrev = () => {
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  return (
    <div className="music-player-frame">

    <img
    src={musicCat}
    alt="Pixel Cat"
    className={`music-cat ${isPlaying ? "cat-bop" : ""}`}
    />

      <div className="player-titlebar">
        <span className="player-title">୧ ‧₊˚ 🎧 ⋅ ☆ miau.mp3</span>
        <div className="player-controls">
          <span className="window-hyphen"> — </span>
          <span className="window-square"> □ </span>
          <span className="window-close"> x </span>
        </div>
      </div>

      <div className="player-content">
        <audio
          ref={audioRef}
          src={tracks[currentTrackIndex].src}
          preload="metadata"
        />

        <div className="music-controls">
          <button onClick={skipPrev}>
            <img src={prevIcon} alt="Previous" />
          </button>
          <button onClick={togglePlay}>
            <img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" />
          </button>
          <button onClick={skipNext}>
            <img src={skipIcon} alt="Next" />
          </button>
        </div>

        <div className="track-title">{tracks[currentTrackIndex].title}</div>

        <div className="progress-bar">
          <div
            className="progress-fill"
            style={{ width: isPlaying ? "40%" : "0%" }}
          />
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;

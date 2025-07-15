import { useState, useRef, useEffect } from "react";
import "./MusicPlayer.css";

import musicCat from "../../../assets/ui/cat3.png";
import playIcon from "../../../assets/ui/play.svg";
import pauseIcon from "../../../assets/ui/pause.svg";
import prevIcon from "../../../assets/ui/prev.svg";
import skipIcon from "../../../assets/ui/skip.svg";

const tracks = [
  { title: "𐔌   .  ⋮ waar ben ik.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/metro.mp3" },
  { title: "𐔌   .  ⋮ untitled.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/scared.mp3" },
  { title: "𐔌   .  ⋮ wildflower.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/wildflower.mp3" },
  { title: "𐔌   .  ⋮ angst.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/labour.mp3" },
  { title: "𐔌   .  ⋮ miau.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/meow.mp3" }
];

const MusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showDeathScreen, setShowDeathScreen] = useState(false);
  const [isDisabled, setIsDisabled] = useState(false);
  const [forgiveClicks, setForgiveClicks] = useState(0);
  const [forgiveMessage, setForgiveMessage] = useState("forgive me");

  const audioRef = useRef(null);
  const playerRef = useRef(null);
  const pos = useRef({ offsetX: 0, offsetY: 0 });

  const messages = [
    "try harder.",
    "nope.",
    "that all you got?",
    "you think that worked?",
    "still not sorry enough.",
    "forgive me.",
  ];

  const togglePlay = () => {
    if (!audioRef.current || isDisabled) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const skipNext = () => {
    if (isDisabled) return;
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const skipPrev = () => {
    if (isDisabled) return;
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const handleClose = () => {
    setShowDeathScreen(true);
    if (audioRef.current) audioRef.current.pause();
    setTimeout(() => {
      setShowDeathScreen(false);
      setIsDisabled(true);
    }, 4000);
  };

  const handleForgiveClick = () => {
    const newClicks = forgiveClicks + 1;
    setForgiveClicks(newClicks);

    if (newClicks >= Math.floor(Math.random() * 4) + 5) {
      setIsDisabled(false);
      setForgiveClicks(0);
      setForgiveMessage("...fine.");
    } else {
      const msg = messages[Math.floor(Math.random() * messages.length)];
      setForgiveMessage(msg);
    }
  };

  useEffect(() => {
    const audio = audioRef.current;
    if (!audio) return;
    const updateProgress = () => {
      if (audio.duration) {
        setProgress((audio.currentTime / audio.duration) * 100);
      }
    };
    audio.addEventListener("timeupdate", updateProgress);
    return () => audio.removeEventListener("timeupdate", updateProgress);
  }, [currentTrackIndex]);

  useEffect(() => {
    const player = playerRef.current;
    const isMobile = window.innerWidth <= 768;
    if (isMobile || !player) return;

    const handleMouseDown = (e) => {
      if (!e.target.closest(".player-titlebar") || isDisabled) return;
      pos.current.offsetX = e.clientX - player.offsetLeft;
      pos.current.offsetY = e.clientY - player.offsetTop;
      document.addEventListener("mousemove", handleMouseMove);
      document.addEventListener("mouseup", handleMouseUp);
    };

    const handleMouseMove = (e) => {
      playerRef.current.style.left = `${e.clientX - pos.current.offsetX}px`;
      playerRef.current.style.top = `${e.clientY - pos.current.offsetY}px`;
    };

    const handleMouseUp = () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.removeEventListener("mouseup", handleMouseUp);
    };

    player.addEventListener("mousedown", handleMouseDown);
    return () => player.removeEventListener("mousedown", handleMouseDown);
  }, [isDisabled]);

  if (showDeathScreen) {
    return (
      <div className="death-screen">
        <div className="death-text">
          &gt; ok wow. you really did it.<br />
          &gt; you closed the music window.<br />
          &gt; was it fun for you? did you feel powerful?<br /><br />
          &gt; anyway now everything’s broken<br />
          &gt; cat’s dead. vibes are ruined.<br />
          &gt; this is a certified skill issue (yours).<br /><br />
          &gt; ...and now we sit in silence.<br /><br />
          &gt; jk i'm fine lol<br />
          &gt; <span className="glitchy">loading normality...</span>
        </div>
      </div>
    );
  }

  return (
    <div
      className={`music-player-frame ${isDisabled ? "disabled" : ""}`}
      ref={playerRef}
    >
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
          <span className="window-close" onClick={handleClose}> x </span>
        </div>
      </div>
      <div className="player-content">
        {isDisabled ? (
          <button className="forgive-btn" onClick={handleForgiveClick}>
            {forgiveMessage}
          </button>
        ) : (
          <>
            <audio ref={audioRef} src={tracks[currentTrackIndex].src} preload="metadata" />
            <div className="music-controls">
              <button onClick={skipPrev}><img src={prevIcon} alt="Previous" /></button>
              <button onClick={togglePlay}><img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" /></button>
              <button onClick={skipNext}><img src={skipIcon} alt="Next" /></button>
            </div>
            <div className="track-title">{tracks[currentTrackIndex].title}</div>
            <div className="progress-bar">
              <div className="progress-fill" style={{ width: `${progress}%` }} />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default MusicPlayer;

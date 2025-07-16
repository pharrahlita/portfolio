import { useState, useRef, useEffect } from "react";
import "./MusicPlayer.css";

import musicCat from "../../../assets/ui/cat3.png";
import catGhost from "../../../assets/ui/catghost.png";
import playIcon from "../../../assets/ui/play.svg";
import pauseIcon from "../../../assets/ui/pause.svg";
import prevIcon from "../../../assets/ui/prev.svg";
import skipIcon from "../../../assets/ui/skip.svg";

const tracks = [
  { title: "𐔌   .  ⋮ wildflower.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/wildflower.mp3" },
  { title: "𐔌   .  ⋮ untitled.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/scared.mp3" },
  { title: "𐔌   .  ⋮ waar ben ik.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/metro.mp3" },
  { title: "𐔌   .  ⋮ angst.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/labour.mp3" },
  { title: "𐔌   .  ⋮ miau.mp3  .ᐟ  ֹ   ₊ ꒱", src: "/assets/audio/meow.mp3" }
];

const fakeLogs = [
  "> LOADING PERSONAL FILES...",
  "> DECRYPTING PORTFOLIO ASSETS...",
];

const deathLines1 = [
  "> ok wow. you really did it.",
  "> you closed the music window.",
  "> was it fun for you? did you feel powerful?",
  "> ...",
  "> anyway now everything’s broken",
  "> vibes are ruined.",
  "> this is a certified skill issue (yours).",
  "> ...",
  "> and now we sit in silence.",
  "> ...",
  "> ...",
  "> jk i'm fine lol",
  "> loading normality..."
];

const deathLines2 = [
  "> that's it. there's no coming back from this.",
  "> you closed the window *again*.",
  "> ...",
  "> the music is gone.",
  "> the cat is dead.",
  "> the universe is collapsing in on itself.",
  "> ...",
  "> you have no one to blame but yourself.",
  "> terminal.error: irreparable",
  "> ...",
  "> good luck."
];

const MusicPlayer = () => {
  const [currentTrackIndex, setCurrentTrackIndex] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const [showDeathScreen, setShowDeathScreen] = useState(false);
  const [displayedText, setDisplayedText] = useState("");
  const [isDisabled, setIsDisabled] = useState(false);
  const [permaDisabled, setPermaDisabled] = useState(false);
  const [closeCount, setCloseCount] = useState(0);
  const [forgiveClicks, setForgiveClicks] = useState(0);
  const [forgiveMessage, setForgiveMessage] = useState("forgive me");
  const [showTooltip, setShowTooltip] = useState(false);
  const [isDoneTyping, setIsDoneTyping] = useState(false);
  const [fadeClass, setFadeClass] = useState("fadeIn");
  const [flickerTick, setFlickerTick] = useState(0);

    useEffect(() => {
    const interval = setInterval(() => {
        setFlickerTick(t => t + 1);
    }, 500); // change this to flicker faster/slower
    return () => clearInterval(interval);
    }, []);

  const audioRef = useRef(null);
  const playerRef = useRef(null);
  const sfxRef = useRef(null);
  const pos = useRef({ offsetX: 0, offsetY: 0 });
  const typingIntervalRef = useRef(null);

  const messages = [
    "try harder.",
    "nope.",
    "that all you got?",
    "you think that worked?",
    "still not sorry enough.",
  ];

  const togglePlay = () => {
    if (!audioRef.current || isDisabled || permaDisabled) return;
    isPlaying ? audioRef.current.pause() : audioRef.current.play();
    setIsPlaying(!isPlaying);
  };

  const skipNext = () => {
    if (isDisabled || permaDisabled) return;
    const nextIndex = (currentTrackIndex + 1) % tracks.length;
    setCurrentTrackIndex(nextIndex);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const skipPrev = () => {
    if (isDisabled || permaDisabled) return;
    const prevIndex = (currentTrackIndex - 1 + tracks.length) % tracks.length;
    setCurrentTrackIndex(prevIndex);
    setIsPlaying(true);
    setTimeout(() => audioRef.current.play(), 100);
  };

  const handleClose = () => {
    if (permaDisabled) return;

    setFadeClass("fadeIn");
    setShowDeathScreen(true);
    setDisplayedText("");
    setIsDoneTyping(false);

    if (audioRef.current) audioRef.current.pause();
    setIsPlaying(false);

    const newCloseCount = closeCount + 1;
    setCloseCount(newCloseCount);

    // ⏱ Play SFX near the end
    setTimeout(() => {
      if (sfxRef.current) {
        sfxRef.current.currentTime = 0;
        sfxRef.current.play().catch(() => {});
      }
    }, 12200); // plays 1.5s before the 20s mark

    setTimeout(() => {
      setFadeClass("fadeOut");

      setTimeout(() => {
        setShowDeathScreen(false);
        setForgiveClicks(0);
        setForgiveMessage("forgive me");

        if (newCloseCount >= 2) {
          setPermaDisabled(true);
        } else {
          setIsDisabled(true);
        }
      }, 1000); // match fadeOut CSS duration
    }, 20000); // total screen time
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
    if (!player || window.innerWidth <= 768) return;

    const handleMouseDown = (e) => {
      if (!e.target.closest(".player-titlebar") || isDisabled || permaDisabled) return;
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
  }, [isDisabled, permaDisabled]);

  useEffect(() => {
    if (!showDeathScreen) return;

    const lines = closeCount >= 2 ? deathLines2 : deathLines1;
    let lineIndex = 0;

    setDisplayedText("");
    setIsDoneTyping(false);

    function typeNextLine() {
      if (lineIndex >= lines.length) {
        setIsDoneTyping(true);
        return;
      }

      const line = lines[lineIndex];
      let charIndex = 0;
      const lineChars = [];

      typingIntervalRef.current = setInterval(() => {
        if (charIndex < line.length) {
          lineChars.push(line[charIndex]);
          setDisplayedText((prev) => {
            const split = prev.split("\n");
            split[lineIndex] = lineChars.join("");
            return [...split, ...Array(lines.length - split.length).fill("")].join("\n");
          });
          charIndex++;
        } else {
          clearInterval(typingIntervalRef.current);
          lineIndex++;
          setTimeout(typeNextLine, 200);
        }
      }, 40);
    }

    typeNextLine();
    return () => clearInterval(typingIntervalRef.current);
  }, [showDeathScreen, closeCount]);

  return (
    <>


      {showDeathScreen && (
        <div className={`death-screen ${fadeClass}`}>
          <pre className="death-text">
            {displayedText}
            {isDoneTyping && <span className="blink">▍</span>}
          </pre>
        </div>
      )}

      <audio ref={sfxRef} src="/assets/audio/startup-sfx.mp3" preload="auto" />

      <div
        className={`music-player-frame ${isDisabled || permaDisabled ? "disabled" : ""}`}
        ref={playerRef}
      >


        <img
          src={permaDisabled ? catGhost : musicCat}
          alt="cat"
          className={`music-cat ${permaDisabled ? "ghost" : isPlaying ? "cat-bop" : ""}`}
        />

        <div className="player-titlebar">
          <span className="player-title">୧ ‧₊˚ 🎧 ⋅ ☆ miau.mp3</span>
          <div className="player-controls">
            <span className="window-hyphen"> — </span>
            <span className="window-square"> □ </span>
            <div
              className="player-close-container"
              onMouseEnter={() => setShowTooltip(true)}
              onMouseLeave={() => setShowTooltip(false)}
            >
              <span
                className="player-close"
                onClick={handleClose}
                style={{ pointerEvents: permaDisabled ? "none" : "auto" }}
              >
                x
              </span>
              {showTooltip && !permaDisabled && (
                <span className="player-close-tooltip">
                  {closeCount === 0
                    ? "pls don't close me. i have abandonment issues"
                    : "you sure you wanna do that again?"}
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="player-content">
          {permaDisabled ? (
            <button className="forgive-btn" disabled>
              actions have consequences (≖⩊≖)
            </button>
          ) : isDisabled ? (
            <button className="forgive-btn" onClick={handleForgiveClick}>
              {forgiveMessage}
            </button>
          ) : (
            <>
              <audio ref={audioRef} src={tracks[currentTrackIndex].src} preload="metadata" />
              <div className="now-playing"> 𓂃 ִֶָ𐀔 ⋅˚₊‧ now playing:</div>
              <div className="track-title">{tracks[currentTrackIndex].title}</div>
              <div className="music-controls">
                <button onClick={skipPrev}><img src={prevIcon} alt="Previous" /></button>
                <button onClick={togglePlay}><img src={isPlaying ? pauseIcon : playIcon} alt="Play/Pause" /></button>
                <button onClick={skipNext}><img src={skipIcon} alt="Next" /></button>
              </div>
              <div className="progress-bar">
                <div className="progress-fill" style={{ width: `${progress}%` }} />
              </div>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default MusicPlayer;

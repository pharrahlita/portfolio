// Optional: move this to its own file if you want (CatSprite.jsx)
import { useState, useRef } from "react";
import sleepingCat from "../../../assets/ui/cat1.png";
import miauBubbleImg from "../../../assets/ui/meow-bubble.png";
import meowSfx from "../../../assets/ui/meow.mp3";
import "./CatSprite.css";

const CatSprite = () => {
  const [showBubble, setShowBubble] = useState(false);
  const [hasPlayed, setHasPlayed] = useState(false);
  const audioRef = useRef(new Audio(meowSfx));

  const handleHover = () => {
    if (!hasPlayed) {
      audioRef.current.play();
      setHasPlayed(true);
    }
    setShowBubble(true);
  };

  const handleLeave = () => {
    setShowBubble(false);
  };

  return (
    <div
      className="cat-hover-zone"
      onMouseEnter={handleHover}
      onMouseLeave={handleLeave}
    >
      <img src={sleepingCat} alt="cat" className="sprite cat" />
      {showBubble && (
        <img
          src={miauBubbleImg}
          alt="miau"
          className="sprite speech-bubble"
        />
      )}
    </div>
  );
};

export default CatSprite;

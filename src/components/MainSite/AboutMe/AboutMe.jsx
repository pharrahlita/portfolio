import { useEffect, useRef, useState } from "react";

import "./AboutMe.css";
import butterflyImg from "../../../assets/ui/butterfly-ascii.png";
import WindowFrame from "../WindowBar/WindowFrame.jsx";
import catSprite from "../../../assets/ui/cat2.png";
import blossomSprite from "../../../assets/ui/cherryblossoms.png";
import petalSprite from "../../../assets/ui/blossom-petal.png";

const AboutMe = () => {
  
  console.log("about loaded") //debug stuff

  const tooltipRef = useRef(null);
  const [showTooltip, setShowTooltip] = useState(false);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (tooltipRef.current && showTooltip) {
        tooltipRef.current.style.top = `${e.clientY + 15}px`;
        tooltipRef.current.style.left = `${e.clientX + 15}px`;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, [showTooltip]);


  const [isHoveringBlossoms, setIsHoveringBlossoms] = useState(false);
  const [petalDrops, setPetalDrops] = useState([]);

  useEffect(() => {
    if (isHoveringBlossoms) {
      const drops = Array.from({ length: 5 }, () => ({
        id: Date.now() + Math.random(),
        left: Math.random() * 130,
        delay: Math.random() * 0.5,
        zIndex: Math.random() > 0.1 ? 9950 : 9999,
        scale: Math.random() * 0.5 + 0.75,
      }));

      setPetalDrops(drops);

      const timeout = setTimeout(() => setPetalDrops([]), 6000);
      return () => clearTimeout(timeout);
    }
  }, [isHoveringBlossoms]);

  return (
    
    <div className="about-me-section" id="about"> 


      <div className="bg-terminal-text">
        EACH TIME IT ASKED FOR A USERNAME, I HESITATED. WHAT NAME DO YOU GIVE YOURSELF WHEN YOUR WHOLE OS IS PATCHED TOGETHER WITH LABELS THAT NEVER QUITE LOADED? I TYPE ‘SIANY’, BUT THE CURSOR BLINKS LIKE IT’S WAITING FOR MORE. MAYBE THE NAME IS WRONG. MAYBE THE SYSTEM IS.
      </div>

      <div className="about-me-title"> [ ABOUT ME ] </div>

        <WindowFrame>

            <img src={catSprite} alt="Pixel Cat" className="about-cat" />

            <div
              className="cherry-blossoms"
              onMouseEnter={() => {
                setIsHoveringBlossoms(false); 
                setTimeout(() => setIsHoveringBlossoms(true), 50);
              }}

            >
              <img src={blossomSprite} alt="Cherry Blossoms" className="cherry-blossoms-img" />

              {petalDrops.map((drop) => (
                <img
                  key={drop.id}
                  src={petalSprite}
                  alt="🌸"
                  className="petal-drop"
                  style={{
                    left: `${drop.left}%`,
                    animationDelay: `${drop.delay}s`,
                    zIndex: drop.zIndex,
                    transform: `scale(${drop.scale})`,
                  }}
                />
              ))}
            </div>

            <div className="about-me-header">[ DOSSIER : SIANA ]  𓂃 ࣪˖ ִֶָ𐀔 </div>

            {/*<div className="about-me-tags">
            <button className="tag-btn">TAG</button>
            <button className="tag-btn">TAG</button>
            <button className="tag-btn">TAG</button>
            </div>*/}

          <div className="about-me-window-wrapper">
            <div className="about-me-content">
            <img src={butterflyImg} alt="ASCII Butterfly" className="ascii-img" />

            <div className="about-me-text">
                <p>&gt;&gt; USER: siana</p>
                <p className="hover-glitch">
                &gt;&gt; AGE: <span className="glitch-tooltip">??</span>
                </p>
                <p>&gt;&gt; CURRENT LOCATION: .../uk/bournemouth</p>

                <br />

                <p>&gt;&gt; INTERESTS:</p>
                <ul>
                <li>› cybersecurity</li>
                <li>› web design & development</li>
                <li>› musical theatre</li>
                <li>› pixel art</li>
                <li>› pc building</li>
                <li>› crochet</li>
                <li>› making everything a game</li>
                </ul>
            </div>
            </div>
          </div>
        </WindowFrame>

        <>
          <a
            href="/assets/cv/SIANA-PROJECT%20SUMMARY-2025.pdf"
            download="SIANA_PROJECT_SUMMARY_2025.pdf"
            className="cv-download-btn"
            onMouseEnter={() => setShowTooltip(true)}
            onMouseLeave={() => setShowTooltip(false)}
          >
            DOWNLOAD FULL REPORT
          </a>

          {showTooltip && (
            <div ref={tooltipRef} className="cv-tooltip-follow">aka my recent projects</div>
          )}
        </>

    </div>
  );
};


export default AboutMe;

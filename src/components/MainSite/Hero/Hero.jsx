import { useEffect, useState } from "react";
import "./Hero.css";
import titleBg from "../../../assets/imgs/herobackground.svg";

export default function Hero() {
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const maxScroll = 300; // how fast the animations react
      const progress = Math.min(scrollY / maxScroll, 1);
      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);


function SideText({ text, side }) {
  const lines = text.split("\n");
  const [flickerMap, setFlickerMap] = useState({});

  useEffect(() => {
    const interval = setInterval(() => {
      const newMap = {};
      lines.forEach((line, i) => {
        line.split("").forEach((_, j) => {
          if (Math.random() > 0.97) {
            newMap[`${i}-${j}`] = true;
          }
        });
      });
      setFlickerMap(newMap);
    }, 800); 

    return () => clearInterval(interval);
  }, [lines]);

  return (
    <pre className={`hero-side-text ${side}`}>
      {lines.map((line, i) => (
        <div key={i} className="side-line">
          {line.split("").map((char, j) => {
            const key = `${i}-${j}`;
            const isBlinking = flickerMap[key];
            return (
              <span
                key={key}
                className={isBlinking ? "blinking-letter" : "glow-letter"}
              >
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </pre>
  );
}


  return (
    <section className="hero" id="intro">
      <div className="hero-container">
        <SideText
          text={`Thou shalt not be normal. Thou shalt not respect whitespace. thou shalt not plant hidden easter eggs on thoust portfolio site. Thou shalt make audio autoplay (and be smited by Chrome). Thou shalt not explain the joke. Thou shalt not ship portfolio site without at least one cursed asset. Thou shalt design for both desktop and mobile.`}
          progress={scrollProgress}
          side="left"
        />

        <div className="hero-center">
          <div className="title-container">
            <img src={titleBg} alt="" className="title-background" />
            <h1 className="hero-title">
              {["S", "I", "A", "N", "A"].map((letter, index) => {
                const transforms = [
                  { x: -300, y: -200, r: -24 },
                  { x: -60, y: -350, r: 16 },
                  { x: 80, y: -240, r: -12 },
                  { x: 120, y: -400, r: 24 },
                  { x: 200, y: -180, r: 36 },
                ];
                const intensity = scrollProgress;
                const { x, y, r } = transforms[index];

                return (
                  <span
                    key={index}
                    style={{
                      transform: `translate(${x * intensity}px, ${y * intensity}px) rotate(${r * intensity}deg)`,
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </h1>
          </div>
          <p className="hero-subtext">
            <span className="prompt-symbol">⟩</span> ADAPTIVE WEB/GRAPHIC DESIGNER & DEVELOPER
            <span className="blinker"> █</span>
          </p>
        </div>

        <SideText
          text={`Thou shalt npm install chaos. Thou shalt console.log("blorbo") for no reason. Thou shalt over-engineer the button. Thou shalt sacrifice one semicolon to the compiler daily. Thou shalt rename final_v2_ finalREAL.css one last time. Thou shalt not rely solely on hover effects, for mobile knows not hover. Thou shalt not. Thou shalt not.`}
          progress={scrollProgress}
          side="right"
        />
      </div>
    </section>
  );
}

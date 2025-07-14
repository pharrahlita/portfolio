import { useEffect, useState } from "react";
import "./Hero.css";

export default function Hero() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

const [scrollProgress, setScrollProgress] = useState(0);

useEffect(() => {
  const handleScroll = () => {
    const scrollY = window.scrollY;
    const maxScroll = 300; 
    const progress = Math.min(scrollY / maxScroll, 1);
    setScrollProgress(progress);
    setScrolled(scrollY > 10);
  };

  window.addEventListener("scroll", handleScroll);
  return () => window.removeEventListener("scroll", handleScroll);
}, []);

  return (
    <section className="hero" id="intro">
      <div className="hero-container">
        <pre
          className="hero-side-text left"
          style={{
            transform: `translateY(${scrollProgress * 200}px)`,
            opacity: `${0.3 + scrollProgress * 0.5}`,
          }}
        >
            {`Thou shalt not be normal. Thou shalt not respect whitespace. thou shalt not plant hidden easter eggs on thoust portfolio site. Thou shalt make audio autoplay (and be smited by Chrome). Thou shalt not explain the joke. Thou shalt not ship portfolio site without at least one cursed asset. Thou shalt design for both desktop and mobile.`}
        </pre>

        <div className="hero-center">
            <h1 className="hero-title">
              {["S", "I", "A", "N", "A"].map((letter, index) => {
                const transforms = [
                { x: -300, y: -200, r: -24 },
                { x: -60, y: -350, r: 16 },
                { x: 80, y: -240, r: -12 },
                { x: 120, y: -400, r: 24 },
                { x: 200, y: -180, r: 36 },
                ];
                const intensity = scrollProgress; // Adjust intensity based on scroll progress

                const transform = transforms[index];
                const x = transform.x * intensity;
                const y = transform.y * intensity;
                const r = transform.r * intensity;

                return (
                  <span
                    key={index}
                    style={{
                      transform: `translate(${x}px, ${y}px) rotate(${r}deg)`,
                    }}
                  >
                    {letter}
                  </span>
                );
              })}
            </h1>

          <p className="hero-subtext">
            <span className="prompt-symbol">⟩</span> ADAPTIVE WEB/GRAPHIC DESIGNER & DEVELOPER   
            <span className="blinker"> █</span>
          </p>
        </div>

        <pre
          className="hero-side-text right"
          style={{
            transform: `translateY(${scrollProgress * 200}px)`,
            opacity: `${0.3 + scrollProgress * 0.5}`,
          }}
        >
            {`Thou shalt npm install chaos. Thou shalt console.log("blorbo") for no reason. Thou shalt over-engineer the button. Thou shalt sacrifice one semicolon to the compiler daily. Thou shalt rename final_v2_ finalREAL.css one last time. Thou shalt not rely solely on hover effects, for mobile knows not hover. Thou shalt not. Thou shalt not.`}
        </pre>

      </div>
    </section>
  );
}
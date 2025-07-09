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

  const bgText = "SIANA DOES WEB DESIGN WEB DEVELOPMENT SOCIAL MEDIA AND CONTENT CREATION SOLUTIONS".split("");

  return (
    <section className="hero">
      <div className="hero-container">
        <pre className="hero-side-text left">
          {`Thou shalt not be normal. Thou shalt not respect whitespace. thou shalt not plant hidden easter eggs on thoust portfolio site. Thou shalt make audio autoplay (and be smited by Chrome). Thou shalt not explain the joke. Thou shalt not ship portfolio site without at least one cursed asset. Thou shalt design for both desktop and mobile.`}
        </pre>

        <div className="hero-center">
          <div className="hero-bg-text" aria-hidden="true">
            {bgText.map((char, index) => (
              <span key={index}>{char}</span>
            ))}
          </div>

          <h1 className={`hero-title ${scrolled ? "fragmented" : ""}`}>
            <span>S</span>
            <span>I</span>
            <span>A</span>
            <span>N</span>
            <span>A</span>
          </h1>
          <p className="hero-subtext">
            <span className="prompt-symbol">⟩</span> WELCOME TO SIANY.DEV...
            <span className="blinker">█</span>
          </p>
        </div>

        <pre className="hero-side-text right">
          {`Thou shalt npm install chaos. Thou shalt console.log ("blorbo") for no reason. Thou shalt over-engineer the button. Thou shalt sacrifice one semicolon to the compiler daily. Thou shalt rename final_v2_ finalREAL.css one last time. Thou shalt not rely solely on hover effects, for mobile knows not hover. Thou shalt not. Thou shalt not.`}
        </pre>
      </div>
    </section>
  );
}

import "./Hero.css";

export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-container">
        <pre className="hero-side-text left">
          {`Thou shalt not be normal. Thou shalt not respect whitespace. thou shalt not plant hidden easter eggs on thoust portfolio site. Thou shalt make audio autoplay (and be smited by Chrome). Thou shalt not explain the joke. Thou shalt not ship portfolio site without at least one cursed asset. Thou shalt design for both desktop and mobile. `}
        </pre>

        <div className="hero-center">
          <h1 className="hero-title">SIANA</h1>
          <p className="hero-subtext">
            <span className="prompt-symbol">⟩</span> WELCOME TO SIANY.DEV...
            <span className="blinker">█</span>
          </p>
        </div>

        <pre className="hero-side-text right">
          {`Thou shalt npm install chaos. Thou shalt console.log("blorbo") for no reason. Thou shalt over-engineer the button. Thou shalt sacrifice one semicolon to the compiler daily. Thou shalt rename final_v2_finalREAL.css one last time. Thou shalt not rely solely on hover effects, for mobile knows not hover.Thou shalt not thou shalt not.`}
        </pre>
      </div>
    </section>
  );
}

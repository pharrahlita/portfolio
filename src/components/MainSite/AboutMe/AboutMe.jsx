import "./AboutMe.css";
import butterflyImg from "../../../assets/ui/butterfly-ascii.png";
import WindowFrame from "../WindowBar/WindowFrame.jsx";
import catSprite from "../../../assets/ui/cat2.png";

const fakeLogs = [
  "> LOADING PERSONAL FILES...",
  "> DECRYPTING PORTFOLIO ASSETS...",
];

const AboutMe = () => {
    console.log("about loaded") 
  return (
    
    <div className="about-me-section" id="about"> 

      <div className="terminal-logs">
        {fakeLogs.map((line, i) => (
            <div key={i} className="log-line">{line}</div>
        ))}
      </div>

      <div className="bg-terminal-text">
        EACH TIME IT ASKED FOR A USERNAME, I HESITATED. WHAT NAME DO YOU GIVE YOURSELF WHEN YOUR WHOLE OS IS PATCHED TOGETHER WITH LABELS THAT NEVER QUITE LOADED? I TYPE ‘SIANY’, BUT THE CURSOR BLINKS LIKE IT’S WAITING FOR MORE. MAYBE THE NAME IS WRONG. MAYBE THE SYSTEM IS.
      </div>

      <div className="about-me-title"> [ DOSSIER : SIANA ] </div>


      <WindowFrame>

        <img src={catSprite} alt="Pixel Cat" className="about-cat" />

        <div className="about-me-header">[ ABOUT ME ]  𓂃 ࣪˖ ִֶָ𐀔 </div>

        {/*<div className="about-me-tags">
          <button className="tag-btn">TAG</button>
          <button className="tag-btn">TAG</button>
          <button className="tag-btn">TAG</button>
        </div>*/}

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
      </WindowFrame>
    </div>
  );
};


export default AboutMe;

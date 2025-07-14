import "./AboutMe.css";
import butterflyImg from "../../../assets/ui/butterfly-ascii.png";
import WindowFrame from "../WindowBar/WindowFrame.jsx";

const AboutMe = () => {
  return (
    
    <div className="about-me-section"> 

      <div className="bg-terminal-text">
        EACH TIME IT ASKED FOR A USERNAME, I HESITATED. WHAT NAME DO YOU GIVE YOURSELF WHEN YOUR WHOLE OS IS PATCHED TOGETHER WITH LABELS THAT NEVER QUITE LOADED? I TYPE ‘SIANY’, BUT THE CURSOR BLINKS LIKE IT’S WAITING FOR MORE. MAYBE THE NAME IS WRONG. MAYBE THE SYSTEM IS.
      </div>

      <WindowFrame>
        <div className="about-me-header">[ ABOUT ME ]</div>

        <div className="about-me-tags">
          <button className="tag-btn">TAG</button>
          <button className="tag-btn">TAG</button>
          <button className="tag-btn">TAG</button>
        </div>

        <div className="about-me-content">
          <img src={butterflyImg} alt="ASCII Butterfly" className="ascii-img" />

          <div className="about-me-text">
            <p>&gt; Subject: Wasian Bean Supreme</p>
            <p>&gt; Age: ?? [files corrupted]</p>
            <p>&gt; Current Location: /uk/bournemouth</p>

            <br />

            <p>&gt; Interests:</p>
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

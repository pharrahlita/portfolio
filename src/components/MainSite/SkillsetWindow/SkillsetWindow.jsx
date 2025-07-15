import "./SkillsetWindow.css";
import SkillsetFrame from "./SkillsetFrame";
import me from "../../../assets/ui/me.png";

const Skillset = () => {
  return (
    <div className="skillset-wrapper">
      <SkillsetFrame title="୧ ‧₊˚ 💭 ⋅ ☆ skillset.exe">
        <div className="skillset-window" id="skills">
          <img
            src={me}
            alt="photo of myself"
            className="skillset-image"
          />

          <div className="skillset-columns">
            <div className="branch">
              <h3>+ Frontend Branch 🌱</h3>
              <p>– HTML / CSS / Sass / JavaScript / React</p>
            </div>

            <div className="branch">
              <h3>+ Design Branch 🎨</h3>
              <p>
                – Figma / Canva / Aseprite / Adobe Suite<br />
                [Photoshop, Xd, Premiere Pro, After Effects, Illustrator]
              </p>
            </div>

            <div className="branch">
              <h3>+ Productivity Branch 📑</h3>
              <p>– Trello / Notion / GitHub / Git / VSCode</p>
            </div>

            <div className="branch">
              <h3>+ Side Quests 🕹</h3>
              <p>– Pixel Art / Streaming / Video Game Modding</p>
            </div>
          </div>
        </div>
      </SkillsetFrame>
    </div>
  );
};

export default Skillset;

import "./SkillsetWindow.css";
import SkillsetFrame from "./SkillsetFrame";
import me from "../../../assets/ui/me.png";
import sunflowers from "../../../assets/ui/sunflowers.png";

import { useState } from "react";

const Skillset = () => {
  const [openBranch, setOpenBranch] = useState(null);

  const toggleBranch = (branch) => {
    setOpenBranch(openBranch === branch ? null : branch);
  };

  return (
    <>
      <div className="skills-title">[ XP FILES ]</div>

      <div className="skillset-wrapper">
        <SkillsetFrame title="୧ ‧₊˚ 💭 ⋅ ☆ skillset.exe">
        <div className="skillset-header">[ SKILLSET ]  𓂃 ࣪˖ ִֶָ𐀔 </div>
          <div className="skillset-window" id="skills">

            <img
              src={me}
              alt="photo of myself"
              className="skillset-image"
            />

            <div className="skillset-columns">
              {[
                {
                  title: "> ✧˚࿔ frontend ₊✧.˚",
                  content: "HTML / CSS / Sass / JavaScript / React",
                  key: "frontend",
                },
                {
                  title: "> ✧˚࿔ design ₊✧.˚",
                  content:
                    "Figma / Canva / Aseprite / Adobe Suite [Photoshop, Xd, Premiere Pro, After Effects, Illustrator]",
                  key: "design",
                },
                {
                  title: "> ✧˚࿔ productivity ₊✧.˚",
                  content: "Trello / Notion / GitHub / Git / VSCode",
                  key: "productivity",
                },
                {
                  title: "> ✧˚࿔ side quests ₊✧.˚",
                  content: "Pixel Art / Streaming / Video Game Modding",
                  key: "sidequests",
                },
              ].map(({ title, content, key }) => (
                <div
                  key={key}
                  className={`branch ${openBranch === key ? "open" : ""}`}
                  onClick={() => toggleBranch(key)}
                >
                  <h3>
                    <span className="branch-toggle">
                      {openBranch === key ? "⊹" : "⊹"}
                    </span>{" "}
                    {title}
                  </h3>
                  <p className="branch-content">
                    – {content}
                  </p>
                </div>
              ))}
            </div>

          </div>
          
        </SkillsetFrame>

            <img
              src={sunflowers}
              alt="sunflowers"
              className="sunflower-image"
            />

      </div>
    </>
  );
};

export default Skillset;

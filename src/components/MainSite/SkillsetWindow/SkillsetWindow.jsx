import { useEffect , useState } from "react";
import "./SkillsetWindow.css";
import SkillsetFrame from "./SkillsetFrame";
import me from "../../../assets/ui/me.png";
import sunflowers from "../../../assets/ui/sunflowers.png";
import sunflowerFall from "../../../assets/ui/sunflower-fall.png";

const getTooltip = (tool) => {
  const descriptions = {
    HTML: "used for semantic page structure in all web projects",
    CSS: "core styling language, used for all visual layout",
    Sass: "used for modular styling - variables, nesting, and less crying",
    JavaScript: "all the interactivity magic - buttons that *do* stuff on my projects",
    React: "my ride-or-die framework for building component-based UIs",
    Figma: "used for mockups, wireframes, and prototyping",
    Canva: "quick designs, moodboards and branding mockups",
    Aseprite: "all pixel art - sprites, animations, UI bits, all handmade :)",
    Photoshop: "touch-ups, textures. used way too often",
    "Premiere Pro": "editing videos - streams, work, musicals, life... you name it",
    "After Effects": "motion graphics and animation for video content",
    Illustrator: "vector town - logos, icons, scalable assets for web & print",
    Audition: "audio recording and editing (i love music)",
    Xd: "UI prototyping (adobe’s figma - though i have more experience in Xd)",
    Trello: "kanban boards to make my brain make sense. i like organisation.",
    Notion: "second brain - notes, tasks, ideas, everything",
    GitHub: "where all the code goes to live (and get version control)",
    Git: "used for tracking changes + avoiding disasters",
    VSCode: "home sweet home - the IDE i live in",
    "Video Game Modding": "custom assets + edits for existing games i enjoy (mostly the sims and stardew valley)",
    Streaming: "OBS and streamlabs for twitch",
    "Pixel Art": "tiny cute art! <3 (all of the pixel assets on my site are handmade by me 𐔌՞. .՞𐦯)"
  };

  return descriptions[tool.trim()] || "No description yet";
};

const Skillset = () => {

  const [isHovering, setIsHovering] = useState(false);
  const [drops, setDrops] = useState([]);

  useEffect(() => {
    let interval;

    if (isHovering) {
      interval = setInterval(() => {
        const newDrop = {
          id: Date.now(),
          left: Math.random() * 100,
          delay: Math.random() * 0.3,
        };
        setDrops((prev) => [...prev, newDrop]);
      }, 200); // adjust for how frequent new flowers spawn
    }

    return () => {
      clearInterval(interval);
    };
  }, [isHovering]);


  useEffect(() => {
    const tooltip = document.createElement("div");
    tooltip.className = "tooltip-follow";
    document.body.appendChild(tooltip);

    const handleMouseMove = (e) => {
      const hovered = e.target.closest(".tool-tag");
      if (hovered) {
        tooltip.textContent = hovered.dataset.tooltip;
        tooltip.style.top = `${e.clientY + 20}px`;
        tooltip.style.left = `${e.clientX + 20}px`;
        tooltip.style.opacity = 1;
      } else {
        tooltip.style.opacity = 0;
      }
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      document.body.removeChild(tooltip);
    };
  }, []);

  return (
    <>
      <div className="skills-title">[ SKILLSET ]</div>

      <div className="skillset-wrapper">
        <SkillsetFrame title="୧ ‧₊˚ 💭 ⋅ ☆ skillset.exe">
          <div className="skillset-header">[ XP FILES ] 𓂃 ࣪˖ ִֶָ𐀔</div>
          <div className="skillset-window" id="skills">
            
          <div
            className="sunflower-container"
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={() => {
              setIsHovering(false);
              setDrops([]); // clear drops when not hovering
            }}
          >
            <img
              src={me}
              alt="photo of myself"
              className="skillset-image"
            />

            {drops.map((drop) => (
              <img
                key={drop.id}
                src={sunflowerFall}
                alt="🌻"
                className="sunflower-drop"
                style={{
                  left: `${drop.left}%`,
                  animationDelay: `${drop.delay}s`,
                }}
              />
            ))}
          </div>

            <div className="skillset-columns">
              {[
                {
                  title: "> ✧˚࿔ frontend ₊✧.˚",
                  content: "HTML / CSS / Sass / JavaScript / React",
                },
                {
                  title: "> ✧˚࿔ design ₊✧.˚",
                  content:
                    "Figma / Canva / Aseprite / Photoshop / Audition / Premiere Pro / Xd / After Effects / Illustrator",
                },
                {
                  title: "> ✧˚࿔ productivity ₊✧.˚",
                  content: "Trello / Notion / GitHub / Git / VSCode",
                },
                {
                  title: "> ✧˚࿔ side quests ₊✧.˚",
                  content: "Pixel Art / Streaming / Video Game Modding",
                },
              ].map(({ title, content }, i) => (
                <div key={i} className="branch open">
                  <h3>{title}</h3>

                  <p className="branch-content">
                    {content.split(" / ").map((item, index) => (
                      <span
                        key={index}
                        className="tool-tag"
                        data-tooltip={getTooltip(item)}
                      >
                        {item}
                        {index < content.split(" / ").length - 1 ? " / " : ""}
                      </span>
                    ))}
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
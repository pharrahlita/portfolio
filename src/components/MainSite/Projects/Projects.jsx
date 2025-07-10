import { useState } from "react";
import "./Projects.css";
import placeholderImg from "../../../assets/imgs/Placeholder.png";

const fakeLogs = [
  "> LOADING PERSONAL FILES...",
  "> DECRYPTING PORTFOLIO ASSETS...",
];

const projects = [
  {
    title: "PROJECT ONE",
    tags: ["JS", "React", "weird vibes"],
    image: placeholderImg,
    description: "A chaotic project about terminal frogs.",
  },
  {
    title: "PROJECT TWO",
    tags: ["SASS", "CSS Grid"],
    image: placeholderImg,
    description: "Pixel-perfect alignment hell with cursed UI.",
  },
  // add more projects here
];

const Projects = () => {
  const [selectedIndex, setSelectedIndex] = useState(0);

  return (
    <section className="projects-wrapper" id="projects">
      <div className="terminal-logs">
        {fakeLogs.map((line, i) => (
          <div key={i} className="log-line">{line}</div>
        ))}
      </div>

      <div className="projects-section fade-in-left">
        <div className="project-log">
          <div className="window-titlebar">[ PROJECT LOGS ]</div>

          <div className="preview-box">
            <div className="preview-title">
              [ {projects[selectedIndex].title} ]
            </div>

            <div className="preview-tags">
              {projects[selectedIndex].tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>

            <div className="preview-body">
              <div className="preview-photo">
                <img src={projects[selectedIndex].image} alt="project" />
              </div>
              <div className="preview-desc">
                <p>{projects[selectedIndex].description}</p>
                <button className="read-more">READ MORE</button>
              </div>
            </div>
          </div>
        </div>

        <div className="project-titles">
            {projects.map((proj, i) => (
                <div
                key={proj.title}
                className={`project-title ${i === selectedIndex ? "active" : ""}`}
                onClick={() => setSelectedIndex(i)}
                >
                [ {proj.title} ]
                <span className="hover-fill"></span>
                </div>
            ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

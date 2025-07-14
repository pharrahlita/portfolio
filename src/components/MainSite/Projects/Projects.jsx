import { useState } from "react";
import ProjectWindow from "./ProjectWindow";
import useMediaQuery from "../../../hooks/useMediaQuery";
import projectsData from "../../../data/projects.json";

// sprite assets
import catSprite from "../../../assets/ui/cat1.png";
import duckSprite from "../../../assets/ui/ducky.png";
import vinesSprite from "../../../assets/ui/vines-bottom1.png";
import placeholderImg from "../../../assets/imgs/Placeholder.png";

import "./Projects.css";

const fakeLogs = [
  "> LOADING PERSONAL FILES...",
  "> DECRYPTING PORTFOLIO ASSETS...",
];

const imageMap = new Proxy({}, {
  get: (_, key) => placeholderImg
});

const Projects = () => {
  const [expandedWindow, setExpandedWindow] = useState(null);
  const [windowsZIndex, setWindowsZIndex] = useState({});
  const isMobile = useMediaQuery('(max-width: 900px)');

  const handleZIndexChange = (index) => {
    setWindowsZIndex(prev => ({
      ...prev,
      [index]: Math.max(...Object.values(prev), 0) + 1
    }));
  };

  if (isMobile) {
    return (
      <section className="projects-wrapper" id="projects">
        {projectsData.map((project) => (
          <div key={project.title} className="mobile-project">
            <h2>{project.title}</h2>
            <div className="preview-tags">
              {project.tags.map((tag, i) => (
                <span key={i} className="tag">{tag}</span>
              ))}
            </div>
            <img src={`/assets/imgs/project-imgs/${project.image}`} alt={project.title} />
            <p>{project.summary}</p>
          </div>
        ))}
      </section>
    );
  }

  return (
    <section className="projects-wrapper" id="projects" style={{ minHeight: '150vh' }}>
      <div className="terminal-logs">
        {fakeLogs.map((line, i) => (
          <div key={i} className="log-line">{line}</div>
        ))}
      </div>

      <div className="sprite-container">
        <img src={catSprite} alt="cat laying down" className="sprite cat" />
        <img src={duckSprite} alt="duck" className="sprite duck" />
        <img src={vinesSprite} alt="vines" className="sprite vines" />
      </div>

      <div className="projects-container">
        {projectsData.map((project, index) => (
          <ProjectWindow
            key={project.title}
            project={project}
            index={index}
            isExpanded={expandedWindow === index}
            onExpand={(expanded) => setExpandedWindow(expanded ? index : null)}
            zIndex={windowsZIndex[index] || 1}
            onZIndexChange={() => handleZIndexChange(index)}
          />
        ))}
      </div>
    </section>
  );
};

export default Projects;

import { useState, useRef } from "react";
import "./Projects.css";

// Images
import placeholderImg from "../../../assets/imgs/Placeholder.png";
import disinfoquestImg from "../../../assets/imgs/project-imgs/disinfoquest.png";
import ungakImg from "../../../assets/imgs/project-imgs/ungak.png";
import hiraethImg from "../../../assets/imgs/project-imgs/hiraeth.png";
import gfuImg from "../../../assets/imgs/project-imgs/goodforyou.png";
import fireflyImg from "../../../assets/imgs/project-imgs/firefly.png";
import neosImg from "../../../assets/imgs/project-imgs/neos.png";
import tnccImg from "../../../assets/imgs/project-imgs/tncc.png";
import quotesImg from "../../../assets/imgs/project-imgs/quotesapp.png";
import mermaidsImg from "../../../assets/imgs/project-imgs/mermaids.png";
import bitnapImg from "../../../assets/imgs/project-imgs/bitnap.png";

// sprite assets
import catSprite from "../../../assets/ui/cat1.png";
import duckSprite from "../../../assets/ui/ducky.png";
import vinesSprite from "../../../assets/ui/vines-bottom1.png";


const fakeLogs = [
  "> LOADING PERSONAL FILES...",
  "> DECRYPTING PORTFOLIO ASSETS...",
];

const projects = [
  {
    title: "BITNAP",
    tags: ["app", "concept", "design", "Figma", "UI/UX", "react", "mobile development"],
    date: "ongoing",
    role: "designer/developer",
    image: bitnapImg,
    description: "A collaborative iOS dream journal app concept focused on symbolism, mood tracking, and chaos. Designed in Figma and currently in development using React. Future plans include AI-powered dream analysis and integrations with Apple Health.",
  },
  {
    title: "DISINFOQUEST",
    tags: ["React", "Game development", "website", "Pixel Art", "cybersecurity"],
    image: disinfoquestImg,
    date: "May 2025",
    role: "designer/developer",
    description: "A gamified educational tool built entirely in React, designed to help 18–25 year olds recognise online radicalisation and misinformation. Featuring pixel art, cursed easter eggs,and a sprinkle of chaos - because fighting disinformation should not be boring.",
  },
  {
    title: "UNGAK",
    tags: ["Adobe", "Photoshop", "Concept Art", "Landing Page", "Design"],
    image: ungakImg,
    date: "May 2020",
    role: "designer",
    description: "A Photoshop-based concept landing page designed for Ungak, a visual/graphic artist. The layout was tailored to match the artist’s style and aesthetic, intended as a homepage for a future portfolio site.",
  },
  {
    title: "HIRAETH",
    tags: ["Unity", "Game Development", "C#", "Game Design", "Demo"],
    date: "May 2021",
    role: "designer/developer",
    image: hiraethImg,
    description: "A collaborative narrative game demo. All assets were co-designed in-house, while coding, development, and implementation were handled solo. Melancholy atmosphere, soft glitchcore aesthetic, and heavy lore energy.",
  },
  {
    title: "GOOD FOR YOU",
    tags: ["rebrand", "Adobe", "HTML", "CSS", "Design"],
    date: "Oct 2024",
    role: "designer/developer",
    image: gfuImg,
    description: "A full rebrand and digital strategy for a local beauty salon. Deliverables included a new logo, print materials (leaflets, brochures, calling cards), a tailored social media plan, and a custom-built website with online booking system integration.",
  },
  {
    title: "NEO'S PIZZA",
    tags: ["Design", "Rebrand", "photoshop", "illustrator", "print", "social media"],
    date: "ongoing",
    role: "designer/social media content creator",
    image: neosImg,
    description: "Redesigns and ongoing design support for a local pizza spot, including new visuals for print and social media. Deliverables span menu and signage redesign, posters, and a rotating set of content for digital platforms.",
  },
  {
    title: "TOP NOTCH CLEANING",
    tags: ["Design", "Rebrand", "website", "HTML", "CSS", "JavaScript", "WordPress"],
    date: "July 2025",
    role: "designer/developer",
    image: tnccImg,
    description: "A branding and website overhaul for a local cleaning business. The project included a custom-built WordPress site (HTML, CSS, JS) and a clean, professional visual identity tailored for both domestic and commercial clients.",
  },
  {
    title: "QUOTES APP",
    tags: ["design", "website", "HTML", "CSS", "JavaScript", "python", "replit"],
    date: "May 2022",
    role: "designer/developer",
    image: quotesImg,
    description: "A simple web app built in Replit using HTML, CSS, JS, and Python. Allows users to view, submit, and save their favourite quotes. Clean UI, responsive layout, and book-inspired colour palette.",
  },
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

          {/* image sprites */}
          <div className="sprite-container">
            <img src={catSprite} alt="cat laying down" className="sprite cat" />
            <img src={duckSprite} alt="duck" className="sprite duck" />
            <img src={vinesSprite} alt="vines" className="sprite vines" />
          </div>

          <div className="preview-box">
            <div key={selectedIndex} className="preview-fade">


              <div className="window-icons">— □ x</div>
              <div className="preview-title">
                [ {projects[selectedIndex].title} ]
              </div>

              <div className="preview-tags">
                {projects[selectedIndex].tags.map((tag, i) => (
                  <span key={i} className="tag">{tag}</span>
                ))}
              </div>

              <div className="preview-meta">
                <span className="meta-date">{projects[selectedIndex].date}</span>
                <span className="meta-role">{projects[selectedIndex].role}</span>
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

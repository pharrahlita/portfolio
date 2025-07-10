import { useState } from "react";
import "./Projects.css";
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

const fakeLogs = [
  "> LOADING PERSONAL FILES...",
  "> DECRYPTING PORTFOLIO ASSETS...",
];

const projects = [
  {
    title: "BITNAP",
    tags: [ "mobile app", "concept", "design", "Figma", "UI/UX", "react", "JavaScript", "mobile development"],
    date: "ongoing",
    role: "designer/developer",
    image: bitnapImg,
    description: "A collaborative iOS dream journal app concept focused on symbolism, mood tracking, and chaos. Designed in Figma and currently in development using React. Built with soft aesthetics, dark mode, and eerie UI touches. Future plans include AI-powered dream analysis and integrations with Apple Health.",
  },
 {
    title: "DISINFOQUEST",
    tags: ["React", "Game development", "website",  "Pixel Art", "cybersecurity"],
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
    date: "oct 2024",
    role: "designer/developer",
    image: gfuImg,
    description: "A full rebrand and digital strategy for a beauty salon based in the Isle of Man. Deliverables included a new logo, printed marketing materials (leaflet, brochure, calling cards), a social media strategy, and a bespoke website to reflect the salon’s evolving identity.",
  },
  {
    title: "FIREFLY WOODS",
    tags: ["Unity", "Game Development", "C#", "Game Design", "Demo"],
    date: "may 2021",
    role: "designer/developer",
    image: fireflyImg,
    description: "A 2D platformer game built for a games programming assignment, designed for children aged 8–12. Features include multi-level difficulty, collectible items, and hazard navigation — all wrapped in a simple, child-friendly design focused on fun and engagement.",
},
  {
    title: "NEO'S PIZZA",
    tags: [ "Design", "Rebrand", "photoshop", "illustrator", "print", "social media"],
    date: "ongoing",
    role: "designer/social media content creator",
    image: neosImg,
    description: "Redesigns and ongoing design support for a local pizza spot, including new visuals for print and social media. Deliverables span menu and signage redesign, posters, and a rotating set of content for digital platforms.",
  },
  {
    title: "TOP NOTCH CLEANING",
    tags: [ "Design", "Rebrand", "website", "HTML", "CSS", "JavaScript", "WordPress"],
    date: "july 2025",
    role: "designer/developer",
    image: tnccImg,
    description: "A branding and website overhaul for a local cleaning business. The project included a custom-built WordPress site (HTML, CSS, JS) and a clean, professional visual identity tailored for both domestic and commercial clients.",
  },
  {
    title: "QUOTES APP",
    tags: [ "design", "website", "HTML", "CSS", "JavaScript", "python", "replit"],
    date: "may 2022",
    role: "designer/developer",
    image: quotesImg,
    description: "A simple web app built in Replit using HTML, CSS, JS, and Python. Allows users to view, submit, and save their favourite quotes. Clean UI, responsive layout, and book-inspired colour palette.",
  },
  {
    title: "MERMAIDS ONLINE LEARNING PORTAL",
    tags: [ "Design", "development", "cybersecurity", "HTML", "CSS", "JavaScript", "quiz", "education"],
    date: "jan 2023",
    role: "designer/developer",
    image: mermaidsImg,
    description: "A fictional browser-based training platform designed for a university assignment. Created as a concept for Mermaids, a UK trans charity, to help staff and volunteers understand online safety and cybersecurity. Includes interactive quizzes, basic gamification, and a user-friendly custom-coded interface for non-technical audiences.",
  },
  // add more projects here

/*  {
    title: "TEMPLATE",
    tags: [ "Design", "Rebrand"],
    date: "may 2021",
    role: "designer/developer",
    image: placeholderImg,
    description: "",
},*/

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

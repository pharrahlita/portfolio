import { useState } from "react";
import "./NavBar.css";

const navItems = [
  { label: "INTRO", id: "intro" },
  { label: "PROJECTS", id: "projects" },
  { label: "ABOUT", id: "about" },
  { label: "PROCESS", id: "process" },
  { label: "FAQ", id: "faq" },
  { label: "CONTACT", id: "contact" }
];

const NavBar = () => {
  const [active, setActive] = useState("INTRO");

  const handleNavClick = (e, item) => {
    e.preventDefault();
    setActive(item.label);
    const section = document.getElementById(item.id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav className="nav-bar">
      {navItems.map((item) => (
        <div key={item.label} className="nav-link-wrapper">
          <a
            href={`#${item.id}`}
            className={`nav-link ${active === item.label ? "active" : ""}`}
            onClick={e => handleNavClick(e, item)}
          >
            <span className="nav-text">{item.label}</span>
            <span className="hover-fill" />
          </a>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;

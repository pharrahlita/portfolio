import { useState } from "react";
import "./NavBar.css";

const navItems = ["INTRO","PROJECTS", "ABOUT", "PROCESS", "FAQ", "CONTACT"];

const NavBar = () => {
  const [active, setActive] = useState("PROJECTS");

  return (
    <nav className="nav-bar">
      {navItems.map((item, index) => (
        <div key={item} className="nav-link-wrapper">
          <button
            className={`nav-link ${active === item ? "active" : ""}`}
            onClick={() => setActive(item)}
          >
            <span className="nav-text">{item}</span>
            <span className="hover-fill" />
          </button>
        </div>
      ))}
    </nav>
  );
};

export default NavBar;

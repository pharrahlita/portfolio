import { useState, useEffect } from "react";
import "./NavBar.css";

const navItems = [
  { label: "INTRO", id: "intro" },
  { label: "ABOUT", id: "about" },
  { label: "SKILLS", id: "skills" },
  { label: "PROJECTS", id: "projects" },
  { label: "PROCESS", id: "process" },
  { label: "FAQ", id: "faq" },
  { label: "CONTACT", id: "contact" }
];

const NavBar = () => {
  const [active, setActive] = useState("INTRO");
  const [scrollDir, setScrollDir] = useState("down");
  const [isClicking, setIsClicking] = useState(false);

  // 🧭 Scroll direction
  useEffect(() => {
    let lastScrollY = window.scrollY;
    const updateScrollDir = () => {
      const currentScrollY = window.scrollY;
      setScrollDir(currentScrollY > lastScrollY ? "down" : "up");
      lastScrollY = currentScrollY;
    };
    window.addEventListener("scroll", updateScrollDir);
    return () => window.removeEventListener("scroll", updateScrollDir);
  }, []);

  // 👀 Scroll-based active nav detection
  useEffect(() => {
    let timeoutId = null;

    const observer = new IntersectionObserver(
      (entries) => {
        if (isClicking) return;

        const visible = entries.filter((e) => e.isIntersecting);
        if (visible.length > 0) {
          const topMost = visible.reduce((prev, curr) =>
            prev.boundingClientRect.top < curr.boundingClientRect.top ? prev : curr
          );
          const item = navItems.find((nav) => nav.id === topMost.target.id);

          clearTimeout(timeoutId);
          timeoutId = setTimeout(() => {
            if (item) setActive(item.label + "-" + scrollDir);
          }, 80); // quicker debounce
        }
      },
      { threshold: 0.5 } // lower threshold so it fires faster after jump
    );

    navItems.forEach((item) => {
      const section = document.getElementById(item.id);
      if (section) observer.observe(section);
    });

    return () => observer.disconnect();
  }, [scrollDir, isClicking]);

  // 🖱 Instant click jump
  const handleNavClick = (e, item) => {
    e.preventDefault();
    setIsClicking(true);
    const section = document.getElementById(item.id);
    if (section) {
      section.scrollIntoView({ behavior: "auto" });
    }
    setTimeout(() => {
      setIsClicking(false);
    }, 100);
  };

  return (
    <nav className="nav-bar">
      {navItems.map((item) => {
        const isActive = active.startsWith(item.label);
        const direction = active.endsWith("up") ? "scroll-up" : "scroll-down";
        return (
          <div key={item.label} className="nav-link-wrapper">
            <a
              href={`#${item.id}`}
              className={`nav-link ${isActive ? "active" : ""} ${isActive ? direction : ""}`}
              onClick={(e) => handleNavClick(e, item)}
            >
              <span className="nav-text">{item.label}</span>
              <span className="hover-fill" />
            </a>
          </div>
        );
      })}
    </nav>
  );
};

export default NavBar;

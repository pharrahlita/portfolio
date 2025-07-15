import "./Frame.css";

const SkillsetFrame = ({ children, title = "window.exe" }) => {
  return (
    <div className="skillset-frame">
      <div className="skillset-top-bar">
        <span className="skillset-title">{title}</span>
        <div className="skillset-controls">
          <span className="skillset-hyphen"> — </span>
          <span className="skillset-square"> □ </span>
          <span className="skillset-close"> x </span>
        </div>
      </div>
      <div className="skillset-body">{children}</div>
    </div>
  );
};

export default SkillsetFrame;

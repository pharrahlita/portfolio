import "./WindowFrame.css";

const WindowFrame = ({ children }) => {
  return (
    <div className="window-frame">
      <div className="window-top-bar">
        <span className="window-hyphen"> — </span>
        <span className="window-square"> □ </span>
        <span className="window-close"> x </span>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
};

export default WindowFrame;

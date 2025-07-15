import "./WindowFrame.css";

const WindowFrame = ({ children }) => {
  return (
    <div className="window-frame">
      <div className="window-top-bar">
        <span className="player-title">୧ ‧₊˚ 🍮 ⋅ ☆ about.txt</span>

        <div className="player-controls">
          <span className="window-hyphen"> — </span>
          <span className="window-square"> □ </span>
          <span className="window-close"> x </span>
        </div>
      </div>
      <div className="window-body">{children}</div>
    </div>
  );
};

export default WindowFrame;

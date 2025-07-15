import "./TerminalLogs.css";

const fakeLogs = [
  "> LOADING PERSONAL FILES...",
  "> DECRYPTING PORTFOLIO ASSETS...",
];

const TerminalLogs = ({ tick }) => {
  return (
    <div className="terminal-logs">
      {fakeLogs.map((line, i) => (
        <div key={i} className="log-line">
          {line.split("").map((char, j) => {
            const shouldBlink = Math.random() < 0.1;
            return (
              <span
                key={`${i}-${j}-${tick}`}
                className={`log-letter glow-letter ${shouldBlink ? "blinking-letter" : ""}`}
              >
                {char}
              </span>
            );
          })}
        </div>
      ))}
    </div>
  );
};

export default TerminalLogs;

import { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onFinish }) => {
  const [lines, setLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [step, setStep] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [subtext, setSubtext] = useState("");
  const [deleting, setDeleting] = useState(false);
  const [finalMessageShown, setFinalMessageShown] = useState(false);

  const script = [
    ">> siany.dev",
    "> initialising system...",
    "", // title will show here
  ];

  const initialSubtext = "> was supposed to rest. made a website instead...𓂃 ࣪˖ ִֶָ𐀔";
  const finalSubtext = "> welcome to siany.dev...";

  // Type the initial boot lines
  useEffect(() => {
    if (step >= script.length) {
      setTimeout(() => {
        setShowTitle(true);
        setTimeout(() => {
          typeSubtext();
        }, 1000);
      }, 400);
      return;
    }

    const line = script[step];
    let i = 0;
    setCurrentText("");

    const interval = setInterval(() => {
      if (i < line.length) {
        setCurrentText((prev = "") => prev + line[i]);
        i++;
      } else {
        clearInterval(interval);
        setLines((prev) => [...prev, line]);
        setStep((prev) => prev + 1);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [step]);

  // Type first subtext under SIANA
  const typeSubtext = () => {
    setSubtext("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < initialSubtext.length) {
        setSubtext((prev = "") => prev + initialSubtext[i]);
        i++;
      } else {
        clearInterval(interval);
        setTimeout(() => setDeleting(true), 1200);
      }
    }, 30);
  };

  // Delete first subtext
  useEffect(() => {
    if (!deleting) return;

    if (subtext.length > 0) {
      const timeout = setTimeout(() => {
        setSubtext((prev = "") => prev.slice(0, -1));
      }, 20);
      return () => clearTimeout(timeout);
    } else {
      setDeleting(false);
      setTimeout(() => {
        typeFinalSubtext();
      }, 500);
    }
  }, [deleting, subtext]);

  // Type the final subtext
  const typeFinalSubtext = () => {
    setSubtext("");
    let i = 0;
    const interval = setInterval(() => {
      if (i < finalSubtext.length) {
        setSubtext((prev = "") => prev + finalSubtext[i]);
        i++;
      } else {
        clearInterval(interval);
        setFinalMessageShown(true);
        setTimeout(onFinish, 3000);
      }
    }, 40);
  };

  return (
    <div className="loading-screen">
      <div className="terminal-lines">
        {lines.map((line, i) => (
          <div key={i} className="typed-line">{line}</div>
        ))}

        {typeof currentText === "string" && currentText.length > 0 && (
          <div className="typed-line">{currentText}</div>
        )}

        {showTitle && (
          <>
            <h1 className="title">SIANA</h1>
            <div className="typed-line">
              <span>&gt; </span>
              <span>{subtext || ""}</span>
              <span className="cursor" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;

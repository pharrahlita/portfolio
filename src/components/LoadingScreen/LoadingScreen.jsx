import { useEffect, useRef, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onFinish }) => {
  const [lines, setLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [step, setStep] = useState(0);
  const [showTitle, setShowTitle] = useState(false);
  const [subtext, setSubtext] = useState("");
  const [deleting, setDeleting] = useState(false);

  const typingRef = useRef(null);
  const deletingRef = useRef(null);

  const script = [
    ">> siany.dev",
    "> initialising system...",
    "", // triggers the title + subtext
  ];

  const rawInitialSubtext = "was supposed to rest. made a website instead...𓂃 ࣪˖ ִֶָ𐀔";
  const rawFinalSubtext = "welcome to siany.dev...";

  // Boot text typing logic
  useEffect(() => {
    if (step >= script.length) {
      setTimeout(() => {
        setShowTitle(true);
        setTimeout(() => {
          typeSubtext(rawInitialSubtext, () => {
            setTimeout(() => setDeleting(true), 1000);
          });
        }, 800);
      }, 400);
      return;
    }

    const line = script[step];
    let i = 0;

    typingRef.current = setInterval(() => {
      if (i <= line.length) {
        setCurrentText(line.slice(0, i));
        i++;
      } else {
        clearInterval(typingRef.current);
        setLines((prev) => [...prev, line]);
        setCurrentText("");
        setStep((prev) => prev + 1);
      }
    }, 40);

    return () => clearInterval(typingRef.current);
  }, [step]);

  // Generic text typer
  const typeSubtext = (text, callback) => {
    if (typingRef.current) clearInterval(typingRef.current);
    setSubtext("");
    let i = 0;

    typingRef.current = setInterval(() => {
      if (i <= text.length) {
        setSubtext(text.slice(0, i));
        i++;
      } else {
        clearInterval(typingRef.current);
        if (callback) callback();
      }
    }, 30);
  };

  // Deleting logic
  useEffect(() => {
    if (!deleting) return;
    if (typingRef.current) clearInterval(typingRef.current);

    deletingRef.current = setInterval(() => {
      setSubtext((prev) => {
        if (prev.length === 0) {
          clearInterval(deletingRef.current);
          typeSubtext(rawFinalSubtext, () => {
            setTimeout(onFinish, 3000);
          });
          return "";
        } else {
          return prev.slice(0, -1);
        }
      });
    }, 20);

    return () => clearInterval(deletingRef.current);
  }, [deleting]);

  // Clean up
  useEffect(() => {
    return () => {
      if (typingRef.current) clearInterval(typingRef.current);
      if (deletingRef.current) clearInterval(deletingRef.current);
    };
  }, []);

  return (
    <div className="loading-screen">
      <div className="terminal-lines">
        {lines.map((line, i) => (
          <div key={i} className="typed-line">{line}</div>
        ))}

        {currentText && (
          <div className="typed-line">{currentText}</div>
        )}

        {showTitle && (
          <>
            <h1 className="title">SIANA</h1>
            <div className="typed-line">
              <span>&gt; </span>
              <span>{subtext}</span>
              <span className="cursor" />
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default LoadingScreen;

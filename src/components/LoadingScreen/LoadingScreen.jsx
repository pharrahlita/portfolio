import { useEffect, useState } from "react";
import "./LoadingScreen.css";

const LoadingScreen = ({ onFinish }) => {
  const [lines, setLines] = useState([]);
  const [currentText, setCurrentText] = useState("");
  const [step, setStep] = useState(0);
  const [showTitle, setShowTitle] = useState(false);

  const script = [
    ">> siany.dev",
    "> initialising system...",
    "> loading...",
    "", // Title shows here

  ];

  const [subtext, setSubtext] = useState("was supposed to rest. made a website instead...𓂃 ࣪˖ ִֶָ𐀔");
  const [deleting, setDeleting] = useState(false);


  useEffect(() => {
    if (step >= script.length) {
      setTimeout(() => {
        setLines((prev) => [
          ...prev.slice(0, -1),
          "> welcome to siany.dev...",
        ]);
        setTimeout(onFinish, 3000);
      }, 2000);
      return;
    }

    const line = script[step];
    let i = 0;
    setCurrentText("");

    const interval = setInterval(() => {
      if (i < line.length) {
        setCurrentText((prev) => prev + line[i]);
        i++;
      } else {
        clearInterval(interval);
        setLines((prev) => [...prev, line]);
        if (step === 2) setShowTitle(true);
        setStep((prev) => prev + 1);
      }
    }, 40);

    return () => clearInterval(interval);
  }, [step]);

  return (
    <div className="loading-screen">
      {lines.map((line, i) => (
        <div key={i} className="typed-line">{line}</div>
      ))}
      {currentText && <div className="typed-line">{currentText}</div>}
      {showTitle && <h1 className="title">SIANA</h1>}
      <div className="cursor" />
    </div>
  );
};

export default LoadingScreen;

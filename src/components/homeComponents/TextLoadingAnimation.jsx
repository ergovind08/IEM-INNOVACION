import React, { useState, useEffect } from "react";
import "./TextLoadingAnimation.css"; // Make sure to import your component styles

const TypewriterAnimation = () => {
  const text = "Innovacion 2024";
  const [displayText, setDisplayText] = useState("");

  useEffect(() => {
    const intervalId = setInterval(() => {
      setDisplayText((prevText) => {
        const nextChar = text[prevText.length];
        return prevText + (nextChar || "");
      });
    }, 50);

    return () => clearInterval(intervalId); // Cleanup the interval on component unmount
  }, []);

  return (
    <h1 className="text-[45px] flex justify-center sm:text-7xl mt-4 sm:m-0 select-none text-cyan-400 text-bold p-5 text-center">
      <b>{displayText}</b>
    </h1>
  );
};

export default TypewriterAnimation;

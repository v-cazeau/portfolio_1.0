import React, { useEffect, useState } from "react";

export default function TypewriterAboutMe() {
  const [currentPassageIndex, setCurrentPassageIndex] = useState(0);
  const [currentPassage, setCurrentPassage] = useState("");
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const passages = [
      "Appreciative 🤗",
      "Believer 🙏🏽",
      "Caring 🫂",
      "Dedicated 🎯",
      "Explorative 🎒",
      "Full-stack Engineer 👩🏽‍💻"
    ];

    const passage = passages[currentPassageIndex];
    let interval;

    if (index < passage.length) {
      interval = setInterval(() => {
        setCurrentPassage((prevPassage) => prevPassage + passage.charAt(index));
        setIndex((prevIndex) => prevIndex + 1);
      }, 50); // Adjust typing speed here
    } else {
      clearInterval(interval);
      setTimeout(() => {
        setCurrentPassage("");
        setIndex(0);
        setCurrentPassageIndex((prevPassageIndex) => (prevPassageIndex + 1) % passages.length);
      }, 2000); // Adjust delay between passages here
    }

    return () => {
      clearInterval(interval);
    };
  }, [currentPassageIndex, index]);

  return (
    <h3 id="typewriter" style={{ height: "1em" }}>
      {currentPassage}
    </h3>
  );
}

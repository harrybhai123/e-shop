import React, { useState, useEffect } from "react";
import "./SlidingText.scss"; 

const SlidingText = ({ text, duration }) => {
  const [isAnimating, setIsAnimating] = useState(false);
  const [currentPosition, setCurrentPosition] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIsAnimating(true);
      setCurrentPosition((prevPosition) => prevPosition - 1);
    }, duration);

    return () => clearInterval(intervalId);
  }, [duration]);

  const handleTransitionEnd = () => {
    if (currentPosition < -text.length * 15) {
      setCurrentPosition(0);
      setIsAnimating(false);
    }
  };

  return (
    <div className="sliding-text-container">
      <div
        className={`sliding-text ${isAnimating ? "slide" : ""}`}
        style={{ transform: `translateX(${currentPosition}px)` }}
        onTransitionEnd={handleTransitionEnd}
      >
        {text}
      </div>
    </div>
  );
};

export default SlidingText;

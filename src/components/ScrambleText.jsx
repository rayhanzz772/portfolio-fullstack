import React, { useEffect, useState } from 'react';

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

const ScrambleText = ({ text = "", speed = 30, delay = 0, className = "" }) => {
  const [displayedText, setDisplayedText] = useState('');
  
  useEffect(() => {
    let frame = 0;
    let interval;
    const totalFrames = text.length + 10;

    const scramble = () => {
      let output = '';
      for (let i = 0; i < text.length; i++) {
        if (i < frame) {
          output += text[i];
        } else {
          output += letters[Math.floor(Math.random() * letters.length)];
        }
      }
      setDisplayedText(output);

      if (frame < text.length) {
        frame++;
      } else {
        clearInterval(interval);
        setDisplayedText(text); // Final clean text
      }
    };

    const start = () => {
      interval = setInterval(scramble, speed);
    };

    const timeout = setTimeout(start, delay);

    return () => {
      clearInterval(interval);
      clearTimeout(timeout);
    };
  }, [text, speed, delay]);

  return (
    <span className={className}>{displayedText}</span>
  );
};

export default ScrambleText;

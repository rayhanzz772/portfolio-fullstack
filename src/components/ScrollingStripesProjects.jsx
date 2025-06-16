import React, { useEffect, useRef } from "react";

const ScrollingStripesProjects = () => {
  const ref = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollTop = window.scrollY;
      const offset = scrollTop * 0.5; // kecepatan animasi relatif terhadap scroll
      if (ref.current) {
        ref.current.style.backgroundPositionX = `${offset}px`;
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div
      ref={ref}
      className="w-6/6 h-10 bg-repeat bg-[url('photos/stripes2.svg')]"
      style={{
        backgroundSize: "auto 100%",
        backgroundPositionX: "0px",
        backgroundPositionY: "center",
      }}
    />
  );
};

export default ScrollingStripesProjects;

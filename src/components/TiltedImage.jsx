import React, { useRef, useEffect } from "react";
import VanillaTilt from "vanilla-tilt";

const TiltedImage = () => {
  const tiltRef = useRef(null);

  useEffect(() => {
    if (tiltRef.current) {
      VanillaTilt.init(tiltRef.current, {
        max: 15,
        speed: 400,
        glare: true,
        "max-glare": 0.2,
        perspective: 1000,
        scale: 1.05,
        "full-page-listening": false,
        gyroscope: true,
        reset: true,
      });
    }
    return () => tiltRef.current?.vanillaTilt?.destroy();
  }, []);

  return (
    <div
      ref={tiltRef}
      className="w-full md:w-1/2 will-change-transform"
      style={{ transformStyle: "preserve-3d" }}
    >
      <img
        src="/photos/android.jpg"
        alt="Project 1"
        className="rounded-xl shadow-lg w-5/6 h-auto object-cover"
        style={{ transform: "translateZ(20px)" }}
      />
    </div>
  );
};

export default TiltedImage;

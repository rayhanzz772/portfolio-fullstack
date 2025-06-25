// CustomCursor.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

export default function CustomCursor() {
  const cursorRef = useRef(null);
  const followerRef = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      const { clientX, clientY } = e;

      // Cursor utama: langsung ke titik mouse
      gsap.to(cursorRef.current, {
        x: clientX - 7,
        y: clientY - 6,
        duration: 0.5,
        ease: "back.out",
      });

    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <>
      {/* Titik kecil */}
      <div
        ref={cursorRef}
        className="fixed top-0 left-0 z-[9999] w-4 h-4 bg-purple-600 rounded-full pointer-events-none"
      />
    </>
  );
}

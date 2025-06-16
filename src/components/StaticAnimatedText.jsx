import React, { useRef, useLayoutEffect, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import ScrollingStripesProjects from "./ScrollingStripesProjects";

gsap.registerPlugin(ScrollTrigger);

const StaticAnimatedText = ({ texts = [] }) => {
  const containerRef = useRef(null);
  const textRef = useRef(null);
  const [currentText, setCurrentText] = useState(0);
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const scrollStep = 1000; // vh
  const scrollEnd = `${texts.length * scrollStep}vh`;

  useLayoutEffect(() => {
    const ctx = gsap.context(() => {
      if (!texts.length) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: `+=${scrollEnd}`,
          scrub: 1,
          pin: true,
          anticipatePin: 1,
        },
      });

      // Warna background & teks saat scroll
      tl.fromTo(
        containerRef.current,
        { backgroundColor: "#0e0e0e" },
        { backgroundColor: "#facc15", duration: 1.5, ease: "power2.inOut" },
        0
      ).fromTo(
        textRef.current,
        { color: "#ffffff" },
        { color: "#0e0e0e", duration: 1.5, ease: "power2.inOut" },
        0
      );

      texts.forEach((_, i) => {
        tl.call(() => setCurrentText(i), null, tl.duration());
        tl.to({}, { duration: 3 });
      });

      gsap.fromTo(
        textRef.current,
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1.5,
          ease: "power3.out",
          scrollTrigger: {
            trigger: containerRef.current,
            start: "top 90%",
            toggleActions: "play none none none",
          },
        }
      );
    }, containerRef);

    return () => ctx.revert();
  }, [texts]);

  // Handler cursor movement
  const handleMouseMove = (e) => {
    setCursorPos({ x: e.clientX, y: e.clientY });
  };

  return (
    <section
      ref={containerRef}
      className="relative w-full cursor-none h-screen overflow-hidden flex flex-col items-center justify-between bg-[#0e0e0e]"
      style={{ fontFamily: 'Mori, Arial, sans-serif' }}
    >
      <div className="w-full">
        <ScrollingStripesProjects />
      </div>

      <div className="flex-1 flex items-center justify-center w-full">
        <h1
          ref={textRef}
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
          onMouseMove={handleMouseMove}
          className="text-black font-light text-center px-6 py-3 rounded-lg cursor-pointer"
          style={{
            fontFamily: "Mori, sans-serif",
            fontSize: "clamp(2rem, 6vw, 8rem)",
            lineHeight: 1.2,
            display: "inline-block",
            transition: "color 0.3s ease",
          }}
        >
          {texts[currentText]}
        </h1>
      </div>

      <div className="w-full">
        <ScrollingStripesProjects />
      </div>

      {/* Cursor Button */}
      {isHovering && (
        <div
          className="fixed z-50 pointer-events-none transition-all duration-200"
          style={{
            top: cursorPos.y,
            left: cursorPos.x,
            transform: "translate(-50%, -50%)",
          }}
        >
          <button className="bg-black text-white px-4 py-2 rounded-full text-sm shadow-lg">
            View Project
          </button>
        </div>
      )}
    </section>
  );
};

export default StaticAnimatedText;

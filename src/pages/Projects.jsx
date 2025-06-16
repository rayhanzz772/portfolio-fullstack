import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion } from "framer-motion";
import TextReveal from "../components/TextReveal";

// Register ScrollTrigger plugin
gsap.registerPlugin(ScrollTrigger);

const Projects = () => {
  const containerRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      const sections = contentRef.current.querySelectorAll(".project-item");
      const totalWidth = [...sections].reduce((acc, section) => acc + section.offsetWidth, 0);

      gsap.to(contentRef.current, {
        x: () => `-${totalWidth - window.innerWidth + 100}`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${totalWidth}`,
          scrub: true,
          pin: true,
          anticipatePin: 1,
          invalidateOnRefresh: true
        }
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full bg-yellow-400 overflow-hidden"
      style={{ fontFamily: "Mori, Arial, sans-serif" }}
    >
      <div
        ref={contentRef}
        className="absolute top-0 left-0 h-full flex gap-20 px-36 items-center"
      >
        {/* Project 1 */}
        <div className="project-item w-screen flex flex-col md:flex-row items-center gap-8">
        <div className="w-full md:w-1/2">
            <img
              src="/photos/android.jpg"
              alt="Project 1"
              className="rounded-xl shadow-lg w-5/6 h-auto object-cover"
            />
          </div>
          <div className="w-full md:w-1/2">
            <h1 className="text-black text-3xl md:text-5xl font-bold">FloodsenseAI</h1>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <TextReveal className="text-xl max-w-md font-thin mb-4 text-[#9c9c9c]">
             In Android development, I use <span className="text-white font-medium">Flutter</span> as my primary toolkit to build fast, cross-platform mobile apps with clean architecture and smooth UI.
            </TextReveal>
          </motion.div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Projects;

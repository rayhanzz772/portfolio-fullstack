import React, { useRef, useState, useEffect } from "react";
import TextReveal from '../components/TextReveal';
import AnimatedSeparator from '../components/AnimatedSeparator';
import { motion, useScroll, useTransform } from "framer-motion";
import { LayoutGroup } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  // Ambil tinggi layar saat mount
  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);


  // Parallax dimulai saat user scroll ke layar kedua

  return (
    <motion.section
      ref={containerRef}
      className="relative z-10 bg-[#0e0e0e] text-white"
    >
      <article className="w-[98vw] bg-[#0e0e0e] snap">
        <LayoutGroup>

        <div className="min-h-screen bg-[#0e0e0e] max-w-screen-xl mx-auto items-center justify-center p-4">
  <div className="w-full h-full rounded-[32px] border border-[#d1d1d1] overflow-hidden shadow-md">
    <main
      className="bg-[#0e0e0e] flex flex-col justify-center items-center p-8 text-white w-full h-full"
      style={{ fontFamily: 'Poppins, Arial, sans-serif' }}
    >

<div className="max-w-7xl w-full mx-auto grid grid-rows-2 divide-y divide-[#2f2f2f]">
  {/* Row 1 */}
  <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-8 items-center py-8">
    <div className="text-left">
      <TextReveal className="text-4xl font mb-4 md:text-5xl">
        Hello! I’m Rayhan,
        a multidisciplinary Developer
        with one years of experience
        in the creative industry.
      </TextReveal>
    </div>

    <div className="flex justify-center md:justify-end">

    </div>
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
    <div className="text-left">
      <TextReveal className="text-4xl font-bold mb-4 md:text-5xl">
        About me.
      </TextReveal>
      <TextReveal className="text-xl font-thin mb-4 text-[#9c9c9c]">
        With a strong background in design and
        development, I collaborate remotely with
        cross-functional teams to craft compelling
        experiences that drive meaningful engagement.
        Want to know more about me? click the link below
      </TextReveal>
    </div>

    <div className="flex justify-center md:justify-end">
      <img
        className="w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
        src="/photos/saya.jpeg"
        alt="About me again"
      />
    </div>
  </div>
</div>


    </main>
  </div>
</div>


        </LayoutGroup>
      </article>
    </motion.section>
  );
};

export default About;

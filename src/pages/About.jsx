import React, { useRef, useState, useEffect } from "react";
import TextReveal from '../components/TextReveal';
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
      
      <article className="w-full bg-[#0e0e0e] snap">
        <LayoutGroup>

        <div className="min-h-screen bg-[#0e0e0e] w-full max-w-screen-xl mx-auto items-center justify-center p-4 pt-20">
  <div className="w-full h-full rounded-[32px] border border-[#d1d1d1] overflow-hidden shadow-md">
    <main
      className="bg-[#0e0e0e] flex flex-col justify-center items-center py-4 px-4 md:p-10 text-white w-full h-full"
      style={{ fontFamily: 'Mori, Arial, sans-serif' }}
    >

<div className="max-w-7xl w-full mx-auto grid divide-y divide-[#2f2f2f]">
  {/* Row 1 */}
  <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-8 items-center pt-8 md:py-12">
    <div className="text-left">
      <div className="text-2xl font-thin mb-4 md:text-5xl leading-snug">
        <TextReveal>
          <span className="text-4xl md:text-5xl"><span></span>Hello! <span className="inline-block bg-none text-white px-1 rounded">I’m Rayhan</span></span>

          <span className="sr-only md:not-sr-only">, </span>
          <span className="text-[#9c9c9c] sm:text-[#9c9c9c] lg:text-white">
          student at Politeknik Negeri Semarang with 1+ years of
          experience in developing scalable web and mobile apps.
          </span>
        </TextReveal>
      </div>
    </div>
    <div className="flex justify-center md:justify-end">
    </div>
  </div>

  {/* Row 2 */}
  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
    <div className="text-left">
      
      <TextReveal className="text-4xl font-bold mb-4 md:text-5xl">
        <span className="inline bg-yellow-400 text-black font-extralight px-1 rounded-sm">About</span> me.
      </TextReveal>

      
      <TextReveal className="text-xl hover-target font-thin mb-4 text-[#9c9c9c]">
        With a strong background in design and
        development, I collaborate remotely with
        cross-functional teams to craft compelling
        experiences that drive meaningful engagement.
        Want to know more about me? click the link below
      </TextReveal>
    </div>

    <div className="flex justify-center md:justify-end">
                <motion.div
                  initial={{ opacity: 0, x: 40 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.6 }}
                  className="order-2 md:order-1 flex justify-center md:justify-end"
                >
      <img
        className="w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
        src="./photos/saya.jpeg"
        alt="About me again"
      />
      </motion.div>
    </div>
  </div>
</div>


    </main>
  </div>

    {/* Running text here */}


</div>


        </LayoutGroup>

      </article>

    </motion.section>
  );
};

export default About;

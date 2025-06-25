import React, { useRef, useState, useEffect } from "react";
import TextReveal from '../components/TextReveal';
import { motion } from "framer-motion";
import { LayoutGroup } from "framer-motion";

const About = () => {
  const containerRef = useRef(null);
  const [viewportHeight, setViewportHeight] = useState(0);

  useEffect(() => {
    setViewportHeight(window.innerHeight);
  }, []);

  return (
<motion.section
  ref={containerRef}
  // initial={{ backgroundColor: "#ffffff", color: "#000000" }}
  // whileInView={{ backgroundColor: "#0e0e0e", color: "#ffffff" }}
  transition={{ duration: 0.8, ease: "easeInOut" }}
  viewport={{ once: false, amount: 0.5 }} // <= ini biar bisa terus menerus
  className="relative z-10 min-h-screen bg-[#0e0e0e]"
>
      <article className="w-full snap">
        <LayoutGroup>
          <div className="min-h-screen w-full mx-auto px-4 md:px-32 flex items-center justify-center py-20">
            <div className="w-full rounded-[32px] border border-[#d1d1d1] overflow-hidden shadow-md">
              <main
                className="flex flex-col justify-center items-center py-6 md:py-10 w-full h-full"
                style={{ fontFamily: 'Mori, Arial, sans-serif' }}
              >
                <div className="max-w-7xl w-full mx-auto grid divide-y px-4 md:px-12 gap-y-10">
                  
                  {/* Row 1 */}
                  <div className="grid grid-cols-1 md:grid-cols-[4fr_1fr] gap-8 items-center pt-4 md:pt-8">
                    <div className="text-left">
                      <div className="text-2xl font-thin mb-4 md:text-5xl leading-snug">
                        <TextReveal>
                          <span className="text-4xl text-white md:text-5xl">
                            Hello!{" "}
                            <span className="inline-block px-1 text-white rounded">
                              I’m Rayhan
                            </span>
                          </span>
                          <span className="sr-only md:not-sr-only">, </span>
                          <span className="text-white">
                            student at Politeknik Negeri Semarang with 1+ years of
                            experience in developing scalable web and mobile apps.
                          </span>
                        </TextReveal>
                      </div>
                    </div>
                    <div className="flex justify-center md:justify-end" />
                  </div>

                  {/* Row 2 */}
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-4 md:py-10">
                    <div className="text-left">
                      <TextReveal className="text-4xl font-bold text-white mb-4 md:text-5xl">
                        <span className="inline bg-yellow-400 text-black font-extralight px-1 rounded-sm">
                          About
                        </span>{" "}
                        me.
                      </TextReveal>

                      <TextReveal className="text-lg md:text-xl font-thin mb-4 text-[#9c9c9c]">
                        With a strong background in design and development, I
                        collaborate remotely with cross-functional teams to craft
                        compelling experiences that drive meaningful engagement.
                        Want to know more about me? click the link below
                      </TextReveal>
                    </div>

                    <motion.div
                      initial={{ opacity: 0, x: 40 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      transition={{ duration: 0.6 }}
                      className="flex justify-center md:justify-end"
                    >
                      <img
                        className="w-2/3 md:w-1/2 lg:w-1/3 rounded-lg shadow-lg"
                        src="./photos/saya.jpeg"
                        alt="About me again"
                      />
                    </motion.div>
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

import React, { useRef } from 'react';
import { TypeAnimation } from 'react-type-animation';
import ButtonProjects from '../components/ButtonProjects';
import { motion, useScroll, useTransform } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import AnimatedBackground from '../components/AnimatedBackground';
import TextReveal from '../components/TextReveal';
import Header from './Header';
import { Link } from "react-router-dom";

function Hero() {
  const sectionRef = useRef(null);
  const { scrollY } = useScroll();

  // Parallax transform
  const yParallax = useTransform(scrollY, [10, 800], [0, 200]);

  // Intersection observer
  const { ref: inViewRef, inView } = useInView({
    triggerOnce: false, // supaya bisa toggle warnanya saat scroll
    threshold: 0.1,
  });

  // Background color logic — ditempatkan SETELAH inView terdefinisi
  const backgroundColor = inView ? "#fffbee" : "#000000";
  const textColor = inView ? "#000000" : "#fffbee";

  // Gabungkan kedua ref
  const setRefs = (el) => {
    sectionRef.current = el;
    inViewRef(el);
  };

  return (
    <>

    <motion.div
      style={{
        position: 'sticky',
        backgroundColor,
        color: textColor,
        transition: "background-color 1s ease, color 1s ease",
      }}
      className="sticky top-0 z-0 sm:px-4 font-helvetica w-full flex flex-col justify-start items-start"
    >
      
    <Header theme="light" />
      
      <main
        ref={setRefs}
        className="relative min-h-screen w-full flex flex-col justify-start items-start pt-28 z-0"
      >
        {/* Section dengan efek parallax */}
        <motion.div
          style={{ y: yParallax }}
          className="z-0 flex flex-col justify-start py-2 md:py-10 md:pt-15 md:px-6 w-full"
        >
          <div className="flex flex-col justify-start items-start gap-2 lg:px-5 px-5">
            {inView && (
              <>
                <h1 className="pb-0 font-medium text-black 
                text-[2rem] 
                sm:text-[3.5rem] 
                md:text-[4rem] 
                lg:text-[5rem] 
                xl:text-[6.5rem] leading-[0.99] md:leading-[0.95] max-w-[750px] md:max-w-[1300px]">
                  Hello, I'm Rayhan, a
                </h1>
                <h1 className="pb-0 font-medium text-black 
                 text-[3.5rem] 
                 sm:text-[3.5rem] 
                 md:text-[4rem] 
                 lg:text-[5rem] 
                 xl:text-[6.5rem] leading-[0.99] md:leading-[0.95] max-w-[750px] md:max-w-[1300px]">
                  Software Developer.
                </h1>
                
                <Link to="/portfolio">
                  <div className="mt-2 inline-block text-lg font-medium relative group">
                    <span className="text-black transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                      See Projects →
                    </span>
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </div>
                </Link>
              </>
            )}
          </div>
        </motion.div>

       {/* Section Contact fix di bawah */}
        <div className="grid grid-cols-1 md:grid-cols-1 gap-6 md:gap-6 mt-auto w-full md:px-10 px-5 pb-24 lg:pb-16">
          {/* Kolom kiri tetap */}
          <h1 className="text-black font-medium text-lg md:text-2xl">
            More Information:
          </h1>

          {/* Kolom kanan (tumpuk di mobile, sejajar di desktop) */}
          <div className="flex flex-col md:flex-row md:justify-between gap-4 md:gap-6 w-full">
            <div>
              <p className="text-gray-800 font-semibold">Availability:</p>
              <p>Anytime</p>
            </div>

            <div>
              <p className="text-gray-800 font-semibold">Contact:</p>
              <p>rayhanzz772@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-800 font-semibold">Current location:</p>
              <p>Semarang, Indonesia</p>
            </div>

            <div>
              <p className="text-gray-800 font-semibold">Phone:</p>
              <p>+62 89652616158</p>
            </div>
          </div>
        </div>
      </main>

    </motion.div>
    </>
  );
}

export default Hero;

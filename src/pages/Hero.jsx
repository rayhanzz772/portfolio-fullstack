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
          className="z-0 flex flex-col justify-start py-10 md:pt-15 md:px-10 w-full"
        >
          <div className="flex flex-col justify-start items-start gap-2 lg:pl-0">
            {inView && (
              <>
                <h1 className="pb-0 font-medium text-black text-[3rem] xs:text-[1.5rem] md:text-[5rem] lg:text-[7rem] leading-[0.99] md:leading-[0.95] max-w-[350px] md:max-w-[1300px]">
                  Hello, I'm Rayhan a
                </h1>
                <h1 className="pb-0 font-medium text-black text-[3rem] xs:text-[1.5rem] md:text-[5rem] lg:text-[7rem] leading-[0.99] md:leading-[0.95] max-w-[350px] md:max-w-[1300px]">
                  Software Developer.
                </h1>
                
                <Link to="/projects">
                  <div className="mt-2 inline-block text-lg font-medium relative group">
                    <span className="text-black transition-transform duration-300 ease-in-out group-hover:translate-x-1">
                      See Project →
                    </span>
                    <span className="absolute left-0 -bottom-0.5 h-[2px] w-0 bg-black transition-all duration-300 ease-in-out group-hover:w-full"></span>
                  </div>
                </Link>
              </>
            )}
          </div>
        </motion.div>

        {/* Section Contact fix di bawah */}
        <div className="grid grid-cols-2 gap-6 mt-auto w-full pl-10 pb-16">
          {/* Kolom kiri tetap */}
          <h1 className="text-black font-medium text-lg md:text-2xl col-span-1">
            More Information:
          </h1>

          {/* Kolom kanan (dibungkus dan digeser ke kanan) */}
          <div className="col-span-4 flex justify-between w-full pr-10 ml-auto">
            <div>
              <p className="text-gray-800 font-semibold">Availability:</p>
              <p>Every Time</p>
            </div>

            <div>
              <p className="text-gray-800 font-semibold">Contact:</p>
              <p>rayhanzz772@gmail.com</p>
            </div>

            <div>
              <p className="text-gray-800 font-semibold">Current location:</p>
              <p>Banyumanik, Semarang</p>
            </div>

            <div>
              <p className="text-gray-800 font-semibold">Copyright:</p>
              <p>©2025 Rayhan Maulana</p>
            </div>
          </div>
        </div>

      </main>

    </motion.div>
    </>
  );
}

export default Hero;

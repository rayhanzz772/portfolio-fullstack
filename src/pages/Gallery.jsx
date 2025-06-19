import React, { useRef } from "react";
import { motion } from "framer-motion";
import AnimatedSeparator from "../components/AnimatedSeparator";
import TextReveal from '../components/TextReveal';
import RunningLogos from '../components/RunningLogos'; // tambahkan di atas
import ScrollingStripes from "../components/ScrollingStripes";
import Button2 from "../components/Button2";

const Gallery = () => {
  const containerRef = useRef(null);

  return (
    <motion.section
      ref={containerRef}
      className="relative z-10 bg-[#0e0e0e] text-white flex items-start justify-end pt-20"
      style={{ fontFamily: 'Mori, Arial, sans-serif' }}
    >
      <article className="w-[98vw] min-h-screen max-w-screen-xl p-4 mx-auto flex-col justify-start">
        <TextReveal className="text-4xl md:text-6xl font-light text-right mt-20 mb-10">
          <span className="font-bold text-yellow-400">Design</span> services & more.
        </TextReveal>

      <div className="flex justify-end mb-10 items-end">
        <ScrollingStripes/>
      </div>

      {/* Project Android */}
      <section className="py-20 bg-[#0e0e0e] text-white">
        <TextReveal className="text-4xl md:text-5xl font-light text-left">
          <span className="font-bold text-yellow-400">*</span> Android Development
        </TextReveal>

        <AnimatedSeparator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
          >
            <TextReveal className="text-xl font-thin mb-4 text-[#9c9c9c]">
              In Android development, I use <span className="text-white font-medium">Flutter</span> as my primary toolkit to build fast, cross-platform mobile apps with clean architecture and smooth UI.
            </TextReveal>
          </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-end"
            >
              <a
                href="https://rayhanportfolio.super.site/android-projects" // Ganti dengan link proyek sebenarnya
                target='_blank'
                className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src="./photos/floodsense.png" // Ganti dengan path gambar proyek
                  alt="Project Preview"
                  className="w-84 h-60 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold tracking-wide">See Project</span>
                </div>
              </a>
            </motion.div>
        </div>
      </section>

      {/* Project Website */}
      <section className="py-20 text-white">
        <TextReveal className="text-4xl md:text-5xl font-light text-left">
          <span className="font-bold text-yellow-400">*</span> Website Development
        </TextReveal>
        <AnimatedSeparator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-start"
            >
              <a
                href="https://rayhanportfolio.super.site/web-projects" // Ganti dengan link proyek sebenarnya
                target='_blank'
                className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src="./photos/web.png" // Ganti dengan path gambar proyek
                  alt="Project Preview"
                  className="w-84 h-60 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold tracking-wide">See Project</span>
                </div>
              </a>
            </motion.div>

          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 2 }}
            className="order-1 md:order-2"
          >
            <TextReveal className="text-xl font-thin mb-4 text-[#9c9c9c]">
              For web development, I specialize in <span className="text-white font-medium">Laravel</span> and <span className="text-white font-medium">React</span> to deliver modern, scalable websites.
            </TextReveal>
          </motion.div>
        </div>
      </section>

      {/* Project UI/UX */}
      <section className="py-20 text-white">
        <TextReveal className="text-4xl md:text-5xl font-light text-left">
          <span className="font-bold text-yellow-400">*</span> UI/UX Design
        </TextReveal>
        <AnimatedSeparator />

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-center py-8">
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 1 }}
          >
            <TextReveal className="text-xl font-thin mb-4 text-[#9c9c9c]">
              I focus on <span className="text-white font-medium">UI/UX design</span> to ensure every interface is intuitive and delightful. From wireframes to hi-fi prototypes, I care about every pixel.
            </TextReveal>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            className="flex justify-center md:justify-end"
          >
            <motion.div
              initial={{ opacity: 0, x: 40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex justify-center md:justify-end"
            >
              <a
                href="https://rayhanportfolio.super.site/uiux-projects" // Ganti dengan link proyek sebenarnya
                target='_blank'
                className="relative group rounded-lg overflow-hidden shadow-lg transition-transform transform hover:scale-105"
              >
                <img
                  src="./photos/ui ux.png" // Ganti dengan path gambar proyek
                  alt="Project Preview"
                  className="w-84 h-60 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  <span className="text-white font-semibold tracking-wide">See Project</span>
                </div>
              </a>
            </motion.div>

          </motion.div>
        </div>
          <div className="flex justify-start mt-10 items-start">
          </div>
      </section>


      </article>
    </motion.section>
  );
};

export default Gallery;

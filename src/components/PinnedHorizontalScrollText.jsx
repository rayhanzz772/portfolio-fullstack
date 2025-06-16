// PinnedHorizontalScrollText.jsx
import React, { useRef, useEffect, useLayoutEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


gsap.registerPlugin(ScrollTrigger);

const PinnedHorizontalScrollText = ({ text }) => {
          const containerRef = useRef(null);
          const textRef = useRef(null);

          // useLayoutEffect digunakan untuk pengukuran dan animasi agar tidak ada "flicker"
          useLayoutEffect(() => {
            const ctx = gsap.context(() => {
                
              const textWidth = textRef.current.offsetWidth;
              const scrollDistance = textWidth - window.innerWidth;

              // Timeline utama untuk semua animasi di komponen ini
              const masterTimeline = gsap.timeline({
                scrollTrigger: {
                  trigger: containerRef.current,
                  start: "top top",
                  end: () => `+=${textWidth * 1.5}`, // Memberi ruang lebih untuk scroll
                  scrub: 1, // scrub yang lebih halus
                  pin: true,
                  invalidateOnRefresh: true,
                }
              });

              // Animasi pergantian warna (background dan teks)
              masterTimeline
              // 1. Hitam ke Kuning (awal)
              .fromTo(containerRef.current,
                { backgroundColor: "#0e0e0e" },
                { backgroundColor: "#facc15", ease: "power2.inOut" },
                0
              )

              // 2. Kuning ke Hitam (setelah setengah durasi)
              .to(containerRef.current,
                { backgroundColor: "#0e0e0e", ease: "power2.inOut" },
                0.6 // kamu bisa ubah waktu ini agar timing perubahan lebih natural
              )

              // 3. Teks putih ke hitam (sinkron dengan perubahan pertama)
              .fromTo(textRef.current,
                { color: "#ffffff" },
                { color: "#0e0e0e", ease: "power2.inOut" },
                0
              )

              // 4. Teks hitam kembali ke putih (sinkron dengan perubahan ke hitam)
              .to(textRef.current,
                { color: "#ffffff", ease: "power2.inOut" },
                0.6
              )

              // 5. Teks geser horizontal tetap
              .to(textRef.current, {
                x: -scrollDistance,
                ease: "none"
              }, 0.2);

              // Animasi reveal teks saat pertama kali masuk viewport
              gsap.from(textRef.current, {
                  y: 100,
                  opacity: 0,
                  duration: 1.5,
                  ease: "power3.out",
                  scrollTrigger: {
                      trigger: containerRef.current,
                      start: "top 80%",
                      toggleActions: "play none none none"
                  }
              });

            }, containerRef);

            return () => ctx.revert();
          }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full h-screen overflow-hidden flex items-center justify-center bg-[#0e0e0e]"
    >
      <h1
        ref={textRef}
        className="text-white text-5xl md:text-8xl font-thin whitespace-nowrap"
        style={{ fontFamily: "Mori, sans-serif" }}
      >
        {text}
      </h1>
    </section>
  );
};

export default PinnedHorizontalScrollText;

// components/AnimatedSeparator.jsx
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

export default function AnimatedSeparator() {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

    useEffect(() => {
    if (inView) {
        controls.start({ width: "100%", opacity: 0.5 });
    } else {
        controls.start({ width: 0, opacity: 0 }); // Kembali ke awal saat keluar dari viewport
    }
    }, [controls, inView]);
    
  return (
    <motion.div
      ref={ref}
      initial={{ width: 0, opacity: 0 }}
      animate={controls}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className="h-px bg-white rounded-full my-12"
    />
  );
}

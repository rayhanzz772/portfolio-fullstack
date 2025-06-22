import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

// Tailwind spacing map
const spacingMap = {
  0: "0", 0.5: "0.5", 1: "1", 2: "2", 3: "3",
  4: "4", 5: "5", 6: "6", 7: "7", 8: "8", 9: "9", 10: "10"
};

export default function CustomAnimatedSeparator({
  h,
  mb = 0,
  my = 0,
  mx = 0,
  className = ""
}) {
  const controls = useAnimation();
  const [ref, inView] = useInView({ triggerOnce: false });

  useEffect(() => {
    if (inView) {
      controls.start({ width: "100%", opacity: 1 });
    } else {
      controls.start({ width: 0, opacity: 0 });
    }
  }, [controls, inView]);

  const myClass = `my-${spacingMap[my] || my}`;
  const mxClass = `mx-${spacingMap[mx] || mx}`;
  const mbClass = `mb-${spacingMap[mb] || mb}`;
  const heightClass = h === undefined ? "h-px" : `h-${spacingMap[h] || h}`; // ✅ default h-px

  return (
    <motion.div
      ref={ref}
      initial={{ width: 0, opacity: 0 }}
      animate={controls}
      transition={{ duration: 1.2, ease: "easeOut" }}
      className={`bg-black rounded-full ${heightClass} ${myClass} ${mbClass} ${mxClass} ${className}`}
    />
  );
}

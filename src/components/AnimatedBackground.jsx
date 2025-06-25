// import React, { useEffect, useRef } from 'react';

// const AnimatedBackground = () => {
//   const videoRef = useRef(null);

//   useEffect(() => {
//     const handleScroll = () => {
//       const scrollY = window.scrollY;
//       const video = videoRef.current;

//       if (video) {
//         if (scrollY > 200) {
//           video.pause();
//         } else {
//           video.play();
//         }
//       }
//     };

//     window.addEventListener('scroll', handleScroll);
//     return () => window.removeEventListener('scroll', handleScroll);
//   }, []);

//   return (
//     <video
//       ref={videoRef}
//       className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover -z-10 opacity-25"
//       src={`${import.meta.env.BASE_URL}videos/3.mp4`}
//       autoPlay
//       muted
//       loop
//       playsInline
//     />
//   );
// };

// export default AnimatedBackground;

import React from "react";

const AnimatedBackground = () => {
  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      <svg
        viewBox="0 0 1440 320"
        preserveAspectRatio="none"
        className="w-[200%] h-full animate-wave"
      >
        <defs>
          <mask id="mask-wave">
            <rect width="100%" height="100%" fill="white" />
            <path
              fill="black"
              d="M0,160 C360,320 1080,0 1440,160 L1440,320 L0,320 Z"
            />
          </mask>
        </defs>

        {/* Rectangle yang termask */}
        <rect
          width="100%"
          height="100%"
          fill="white"
          mask="url(#mask-wave)"
        />
      </svg>
    </div>
  );
};

export default AnimatedBackground;



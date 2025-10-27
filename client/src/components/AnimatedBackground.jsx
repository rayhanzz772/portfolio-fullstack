import React, { useEffect, useRef } from 'react';

const AnimatedBackground = () => {
  const videoRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const video = videoRef.current;

      if (video) {
        if (scrollY > 200) {
          video.pause();
        } else {
          video.play();
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <video
      ref={videoRef}
      className="fixed top-0 left-0 w-[100vw] h-[100vh] object-cover -z-10 opacity-25"
      src={`${import.meta.env.BASE_URL}videos/3.mp4`}
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default AnimatedBackground;



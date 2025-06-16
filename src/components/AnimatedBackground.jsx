import React from 'react';

const AnimatedBackground = () => {
  return (
    <video
      className="fixed top-0 left-0 w-full h-full object-cover -z-10"
      src="./videos/3.mp4"
      autoPlay
      muted
      loop
      playsInline
    />
  );
};

export default AnimatedBackground;

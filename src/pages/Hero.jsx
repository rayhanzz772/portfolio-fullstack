import React from 'react';
import { TypeAnimation } from 'react-type-animation';
import Button from '../components/ScrollDownButton'; // section baru

function Hero() {
  const scrollToNextSection = () => {
    const nextSection = document.getElementById('projects');
    if (nextSection) {
      nextSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <main className="h-screen pt-0 bg-black pb-16 md:pb-24">
      <div className="container mx-auto px-6 h-full flex flex-col justify-center">
        <div className="flex flex-col gap-6 md:gap-9 lg:pl-0">
          <h1 className="pb-3 text-white text-[3.3rem] xs:text-[3rem] md:text-[5.1rem] lg:text-[5.5rem] font-geist font-thin leading-[0.99] md:leading-[0.95] max-w-[350px] md:max-w-[800px]">
            <TypeAnimation
              sequence={[
                "Hi, I'm Rayhan — a Software Developer.",
              ]}
              wrapper="span"
              speed={50}
              repeat={1}
            />
          </h1>

          {/* Tombol Scroll ke Bawah */}
        <Button/>
        </div>
      </div>
    </main>
  );
}

export default Hero;

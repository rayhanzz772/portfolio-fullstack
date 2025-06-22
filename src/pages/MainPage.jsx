// src/pages/MainPage.jsx
import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Gallery from './Gallery';
import About from './About';
import StaticAnimatedText from '../components/StaticAnimatedText';
import { useLenis } from '../hooks/useLenis';
import CustomCursor from '../components/CustomCursor';
import LoadingScreen from '../components/LoadingScreen';
import { motion } from 'framer-motion';

const TOTAL_LOADING_TIME = 3000;
const FADE_OUT_DURATION = 1000;

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useLenis();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
        setIsContentVisible(true);
      }, FADE_OUT_DURATION);
    }, TOTAL_LOADING_TIME);

    return () => clearTimeout(timeout);
  }, []);

  if (isLoading) {
    return <LoadingScreen isExiting={isExiting} />;
  }

  return (
    <>
      <CustomCursor />
      <motion.div
        initial={{ opacity: 0 }}
        animate={isContentVisible ? { opacity: 1 } : {}}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className="relative cursor-none bg-black overflow-x-hidden"
      >
        <Header />
        <Hero />
        <About />
        <Gallery />
      </motion.div>
      <StaticAnimatedText texts={[
        "Our creative journey",
        "Driven by innovation",
        "Bringing ideas to life",
        "Click here for more."
      ]} />
    </>
  );
}

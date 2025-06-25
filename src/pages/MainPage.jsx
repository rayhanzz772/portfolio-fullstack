import React, { useState, useEffect } from 'react';
import Header from './Header';
import Hero from './Hero';
import Gallery from './Gallery';
import { motion } from 'framer-motion';
import CustomCursor from '../components/CustomCursor';
import LoadingScreen from '../components/LoadingScreen';
import CurtainOpening from '../components/CurtainOpening'; // NEW
import { useLenis } from '../hooks/useLenis';

const TOTAL_LOADING_TIME = 3000;
const FADE_OUT_DURATION = 200;

export default function MainPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [isExiting, setIsExiting] = useState(false);
  const [isCurtainDone, setIsCurtainDone] = useState(false);
  const [isContentVisible, setIsContentVisible] = useState(false);

  useLenis();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsExiting(true);
      setTimeout(() => {
        setIsLoading(false);
      }, FADE_OUT_DURATION);
    }, TOTAL_LOADING_TIME);

    return () => clearTimeout(timeout);
  }, []);

  useEffect(() => {
    if (!isLoading && isCurtainDone) {
      setIsContentVisible(true);
    }
  }, [isLoading, isCurtainDone]);

  if (isLoading) {
    return <LoadingScreen isExiting={isExiting} />;
  }

  return (
    <>
      <CustomCursor />
      {!isCurtainDone && <CurtainOpening onFinish={() => setIsCurtainDone(true)} />}
      <div className="relative bg-black overflow-x-hidden">
        <Hero />
        <Gallery />
      </div>
    </>
  );
}

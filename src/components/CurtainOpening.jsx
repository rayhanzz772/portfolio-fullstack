import React, { useEffect, useState } from 'react';
import './CurtainOpening.css'; // CSS-nya dipisah agar rapi

const CurtainOpening = ({ onFinish }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const openTimeout = setTimeout(() => {
      setIsOpen(true);
    }, 500); // jeda sebelum membuka tirai

    const finishTimeout = setTimeout(() => {
      onFinish(); // notifikasi ke parent bahwa animasi selesai
    }, 3000); // total waktu animasi

    return () => {
      clearTimeout(openTimeout);
      clearTimeout(finishTimeout);
    };
  }, [onFinish]);

  return (
    <div className="curtain-wrapper">
      <div className={`curtain left ${isOpen ? 'open' : ''}`} />
      <div className={`curtain right ${isOpen ? 'open' : ''}`} />
    </div>
  );
};

export default CurtainOpening;

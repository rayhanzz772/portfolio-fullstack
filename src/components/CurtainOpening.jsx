import React, { useEffect, useState } from 'react';
import './CurtainOpening.css';

const CurtainOpening = ({ onFinish }) => {
  const [openColumns, setOpenColumns] = useState([false, false, false, false]);

  useEffect(() => {
    // Staggered opening dengan interval
    openColumns.forEach((_, index) => {
      setTimeout(() => {
        setOpenColumns(prev => {
          const updated = [...prev];
          updated[index] = true;
          return updated;
        });
      }, 300 * index); // delay antar kolom
    });

    // Trigger callback setelah semua tirai terbuka
    const totalDuration = 300 * openColumns.length + 1000;
    const finishTimeout = setTimeout(() => {
      onFinish();
    }, totalDuration);

    return () => clearTimeout(finishTimeout);
  }, [onFinish]);

  return (
    <div className="curtain-wrapper">
      {[0, 1, 2, 3].map((i) => (
        <div
          key={i}
          className={`curtain column-${i + 1} ${openColumns[i] ? 'open' : ''}`}
        />
      ))}
    </div>
  );
};

export default CurtainOpening;

import React, { useEffect, useState } from 'react';
import './CurtainOpening.css';

const CurtainTransition = ({ isOpening, onComplete }) => {
  const [openColumns, setOpenColumns] = useState([false, false, false, false]);

  useEffect(() => {
    if (isOpening) {
      // Buka bertahap
      [0, 1, 2, 3].forEach((i) =>
        setTimeout(() => {
          setOpenColumns((prev) => {
            const updated = [...prev];
            updated[i] = true;
            return updated;
          });
        }, 300 * i)
      );
    } else {
      // Tutup semua langsung
      setOpenColumns([false, false, false, false]);
    }

    const total = isOpening ? 300 * 4 + 1000 : 1000;
    const timeout = setTimeout(() => {
      onComplete?.();
    }, total);

    return () => clearTimeout(timeout);
  }, [isOpening]);

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

export default CurtainTransition;

import React, { useState, useEffect } from 'react';

// === Komponen Kursor Kustom ===
// Komponen ini bertanggung jawab untuk merender dan mengelola logika kursor.
export default function CustomCursor () {
  // State untuk menyimpan posisi kursor (x, y)
  const [position, setPosition] = useState({ x: 0, y: 0 });
  // State untuk mendeteksi apakah kursor sedang berada di atas elemen yang bisa di-hover
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Fungsi untuk memperbarui posisi kursor
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });

      // Mendeteksi elemen target di bawah kursor
      const target = e.target;

      // Memeriksa apakah target atau parent-nya adalah elemen yang diinginkan
      // (a, button, p, h1, etc.) untuk memicu efek hover
      if (
        target.closest('a') ||
        target.closest('button') ||
        target.closest('h1') ||
        target.closest('h2') ||
        target.closest('p') ||
        target.closest('li') ||
        target.closest('span')
      ) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    // Menambahkan event listener saat komponen dimuat
    window.addEventListener('mousemove', handleMouseMove);

    // Membersihkan event listener saat komponen di-unmount
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []); // Array dependensi kosong agar efek ini hanya berjalan sekali

  // Menentukan kelas CSS berdasarkan state isHovering
  const cursorClasses = `custom-cursor ${isHovering ? 'hovering' : ''}`;

  return (
    <div
      className={cursorClasses}
      style={{
        // Menggunakan transform untuk performa yang lebih baik daripada 'top' dan 'left'
        transform: `translate3d(${position.x}px, ${position.y}px, 0)`,
      }}
    />
  );
};
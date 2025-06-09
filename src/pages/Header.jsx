import React, { useState } from 'react';
import Button from '../components/NavbarButton'; // section baru

// Definisikan kedua ikon di sini
const MenuIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="3" y1="12" x2="21" y2="12"></line>
    <line x1="3" y1="6" x2="21" y2="6"></line>
    <line x1="3" y1="18" x2="21" y2="18"></line>
  </svg>
);

// Saya tambahkan komponen XIcon yang sepertinya hilang dari kode Anda
const XIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <line x1="18" y1="6" x2="6" y2="18"></line>
    <line x1="6" y1="6" x2="18" y2="18"></line>
  </svg>
);

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="sticky top-10 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div>
            {/* Pastikan path ke logo.png benar dari direktori public */}
            <img src="/logo.png" alt="Logo" className='h-7' />
          </div>
            <Button/>
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-600 focus:outline-none">
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </button>
          </div>
        </div>
        
        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="md:hidden mt-4">
            <nav className="flex flex-col space-y-4">
              <a href="#features" className="text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Features</a>
              <a href="#testimonials" className="text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Testimonials</a>
              <a href="#contact" className="text-gray-600 hover:text-indigo-600" onClick={() => setIsMenuOpen(false)}>Contact</a>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}

export default Header;
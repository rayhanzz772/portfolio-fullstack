import React, { useState } from 'react';
import NavbarButton from '../components/NavbarButton'; // section baru


function Header() {

  return (
    <header className="sticky top-10 z-50">
      <div className="px-4 sm:px-6 md:px-8 max-w-screen-xl mx-auto py-2">
        <div className="flex items-center justify-between">
          <div>
            <img src="./logo.png" alt="Logo" className="h-7" />
          </div>
          <NavbarButton />
        </div>
      </div>
    </header>
  );
}

export default Header;
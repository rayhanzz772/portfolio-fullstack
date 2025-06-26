import React, { useEffect, useState } from "react";
import NavbarButton from '../components/NavbarButton'; // section baru
import { Link } from 'react-router-dom';
import logo from '/logo.png';

function Header({ theme = "dark" }) {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        // Scroll ke bawah
        setIsVisible(false);
      } else {
        // Scroll ke atas
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

return (
  <header
    className={`fixed left-0 right-0 z-50 transition-transform duration-300 ${
      isVisible ? "translate-y-10" : "-translate-y-full"
    }`}
  >
    <div className="px-4 sm:px-6 md:px-14 mx-auto py-2">
      <div className="flex items-center justify-between">
        <div>
          <Link to="/portfolio">
            <img
              src={logo}
              alt="logo"
              className="h-7"
            />
          </Link>
        </div>
        <NavbarButton $theme={theme} />
      </div>
    </div>
  </header>
);

}

export default Header;
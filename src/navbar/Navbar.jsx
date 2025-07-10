import { NavLink } from "react-router-dom";
import { useEffect, useState } from "react";
import logo from '../assets/L.png';

function Navbar() {
  const [showNavbar, setShowNavbar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);
  const [scrollThreshold, setScrollThreshold] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (Math.abs(currentScrollY - lastScrollY) < 10) return; // ignore small movements

      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling down & passed 100px
        setShowNavbar(false);
      } else if (currentScrollY < lastScrollY) {
        // scrolling up
        setShowNavbar(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-transform duration-500 ${
        showNavbar ? "translate-y-0" : "-translate-y-24"
      } bg-gray-200 shadow-md`}
    >
      <div className="max-w-7xl mx-auto px-4 py-2 flex items-center justify-between">
        {/* Logo */}
        <div className="flex items-center space-x-2">
       <img
  src={logo}
  alt="Logo"
  className="max-h-14 object-contain"
/>

          <span className="text-xl font-bold text-gray-800">My Logo</span>
        </div>

        {/* Links */}
        <div className="flex space-x-8">
          <NavLink to="/React" className="hover:text-gray-600 font-medium">
            React
          </NavLink>
        
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

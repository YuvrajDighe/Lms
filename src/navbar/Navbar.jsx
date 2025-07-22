import { NavLink } from "react-router-dom";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "../assets/B  02 (1).png";

function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="fixed top-0 w-full z-50 bg-[#3A3A4B] shadow-md text-white">
      <div className="w-full px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3 min-w-0 flex-shrink-0">
          <img
            src={logo}
            alt="Logo"
            className="h-10 w-auto object-contain"
          />
          <span className="text-xl font-bold text-white whitespace-nowrap">
            My Logo
          </span>
        </div>

        {/* Desktop Links */}
        <div className="hidden md:flex space-x-8">
          <NavLink to="/React" className="hover:text-gray-300 font-medium">
            React
          </NavLink>
        </div>

        {/* Hamburger Icon (Mobile) */}
        <div className="md:hidden">
          <button onClick={toggleMenu}>
            {menuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="md:hidden bg-[#3A3A4B] px-4 pb-4">
          <NavLink
            to="/React"
            className="block py-2 text-white hover:text-gray-300 font-medium"
            onClick={() => setMenuOpen(false)}
          >
            React
          </NavLink>
        </div>
      )}
    </nav>
  );
}

export default Navbar;

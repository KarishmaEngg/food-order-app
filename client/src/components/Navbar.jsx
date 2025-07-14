import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const linkClasses = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-600 px-3 py-2 rounded-md font-semibold"
      : "text-gray-200 hover:text-white px-3 py-2 rounded-md";

  return (
    <nav className="bg-gradient-to-r from-blue-600 to-purple-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white font-bold text-xl">
              FoodieZone
            </Link>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:block">
            <div className="ml-10 flex items-baseline space-x-4">
              <NavLink to="/" className={linkClasses}>Home</NavLink>
              <NavLink to="/menu" className={linkClasses}>Menu</NavLink>
              <NavLink to="/popular" className={linkClasses}>Popular</NavLink>
              <NavLink to="/cart" className={linkClasses}>Cart</NavLink>
              <NavLink to="/signin" className={linkClasses}>Sign In</NavLink>
              <NavLink to="/signup" className={linkClasses}>Sign Up</NavLink>
              <NavLink to="/feedback" className={linkClasses}>Feedback</NavLink>
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="md:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-200 hover:text-white focus:outline-none focus:text-white"
            >
              <svg
                className="h-6 w-6 fill-current"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    fillRule="evenodd"
                    clipRule="evenodd"
                    d="M18.3 5.71L12 12.01 5.71 5.71 4.29 7.12 10.59 13.41 4.29 19.71 5.71 21.12 12 14.83 18.3 21.12 19.71 19.71 13.41 13.41 19.71 7.12z"
                  />
                ) : (
                  <path
                    fillRule="evenodd"
                    d="M4 5h16v2H4V5zm0 6h16v2H4v-2zm0 6h16v2H4v-2z"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden px-2 pt-2 pb-3 space-y-1 bg-blue-500">
          <NavLink to="/" className={linkClasses} onClick={toggleMenu}>Home</NavLink>
          <NavLink to="/menu" className={linkClasses} onClick={toggleMenu}>Menu</NavLink>
          <NavLink to="/popular" className={linkClasses} onClick={toggleMenu}>Popular</NavLink>
          <NavLink to="/cart" className={linkClasses} onClick={toggleMenu}>Cart</NavLink>
          <NavLink to="/signin" className={linkClasses} onClick={toggleMenu}>Sign In</NavLink>
          <NavLink to="/signup" className={linkClasses} onClick={toggleMenu}>Sign Up</NavLink>
          <NavLink to="/feedback" className={linkClasses} onClick={toggleMenu}>Feedback</NavLink>
        </div>
      )}
    </nav>
  );
};

export default Navbar;

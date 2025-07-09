import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-green-700 text-white px-6 py-4 flex flex-col md:flex-row md:justify-between md:items-center">
      <Link to="/" className="text-3xl font-bold mb-2 md:mb-0">TastyBites</Link>
      <div className="flex flex-col md:flex-row md:space-x-6 space-y-2 md:space-y-0">
        <Link to="/menu" className="hover:text-green-300">Menu</Link>
        <Link to="/popular" className="hover:text-green-300">Popular</Link>
        <Link to="/cart" className="hover:text-green-300">Cart</Link>
      </div>
    </nav>
  );
};

export default Navbar;

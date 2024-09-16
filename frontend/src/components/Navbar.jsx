// src/components/Navbar.js
import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <header className="bg-orange-500 w-full fixed top-0 h-max shadow-md z-50">
      <div className="flex-col container mx-auto px-4 py-0">
        <h1 className="text-center font-semibold text-4xl">
          <Link to="/">Eventify</Link>
        </h1>
        <div className="flex justify-between items-center">
          <nav>
            <ul className="flex space-x-4">
              <li><Link to="/" className="text-gray-200 hover:text-gray-300">Home</Link></li>
              <li><Link to="/events" className="text-gray-200 hover:text-gray-300">Events</Link></li>
              <li><Link to="/about" className="text-gray-200 hover:text-gray-300">About Us</Link></li>
              <li><Link to="/ContactUs" className="text-gray-200 hover:text-gray-300">ContactUs</Link></li>
            </ul>
          </nav>
          <div className="space-x-4">
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              <Link to="/login">Log In</Link>
            </button>
            <button className="bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              <Link to="/signup">Sign Up</Link>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;

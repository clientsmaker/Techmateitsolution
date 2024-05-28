import React, { useState } from 'react';
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import logo from '../assets/Techmate New Logo-2024.jpg';

const variants = {
  open: { opacity: 1, y: 0 },
  closed: { opacity: 0, y: "-100%" },
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="bg-white fixed top-0 left-0 w-full z-50">
      <header className="py-4 shadow-md">
        <nav className="flex justify-between items-center max-w-7xl mx-auto px-4">
          <div className="flex items-center">
            {/* <img src={logo} className="w-44 h-16" alt="Logo" /> */}
             <h3 className="ml-10 block font-extrabold text-black  text-xl ">
      <h1 className="text-2xl font-extrabold sm:text-5xl" style={{ fontFamily: 'Signika, serif', lineHeight: '1.2' }}>
  Tech<span className="text-red-700">Mate</span>

</h1>

  <p className="text-sm font-medium text-black text-center" style={{ fontSize: '10px', marginTop: '-8px' }}>    INNOVATE.  INTEGRATE.   INSPIRE </p>
</h3>
          </div>
          <ul className="hidden lg:flex flex-1 justify-center items-center gap-8">
            <li className="font-bold text-lg text-black hover:scale-110 transition-all ease-in-out">
              <Link to="/">Home</Link>
            </li>
            <li className="font-bold text-lg text-black hover:scale-110 transition-all ease-in-out">
              <Link to="/about">About</Link>
            </li>
            <li className="font-bold text-lg text-black hover:scale-110 transition-all ease-in-out">
              <Link to="/service">Services</Link>
            </li>
            <li className="font-bold text-lg text-black hover:scale-110 transition-all ease-in-out">
              <Link to="/contact">Contact</Link>
            </li>
          </ul>

          <div className="lg:hidden relative mr-">
            <motion.button
              className="w-24 h-10 bg-white rounded-full flex justify-center items-center"
              onClick={toggleMenu}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6 text-gray-700"
              >
                {isOpen ? (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                ) : (
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                )}
              </svg>
            </motion.button>
            <motion.ul
              className={`absolute top-full left-0 right-0 rounded-xl bg-white shadow-lg ${isOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'}`}
              animate={isOpen ? "open" : "closed"}
              variants={variants}
            >
              <li className="text-lg p-4">
                <Link to="/" onClick={toggleMenu}>Home</Link>
              </li>
              <li className="text-lg p-4">
                <Link to="/about" onClick={toggleMenu}>About</Link>
              </li>
              <li className="text-lg p-4">
                <Link to="/service" onClick={toggleMenu}>Services</Link>
              </li>
              <li className="text-lg p-4">
                <Link to="/contact" onClick={toggleMenu}>Contact</Link>
              </li>
            </motion.ul>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Navbar;

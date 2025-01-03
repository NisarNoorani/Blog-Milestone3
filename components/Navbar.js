'use client'
import React, { useState } from 'react';
import Link from 'next/link'



const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

    return (
        <nav className="bg-[#171717] shadow-lg p-4 fixed w-full z-10">
        <div className="container mx-auto flex flex-col lg:flex-row justify-between items-center">
          {/* Logo / Title */}
          <div className="text-white font-bold text-3xl mb-4 lg:mb-0 hover:text-yellow-400 cursor-pointer">
            BlogSphere
          </div>
  
          {/* Hamburger Menu for Small Screens */}
          <div className="lg:hidden">
            <button onClick={toggleMenu} className="text-white focus:outline-none">
              <svg
                className="h-6 w-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16m-7 6h7"
                />
              </svg>
            </button>
          </div>
  
          {/* Navigation Links */}
          <div
            className={`${
              isOpen ? "block" : "hidden"
            } lg:flex flex-col lg:flex-row lg:space-x-6 flex items-center text-lg`}
          >
            <Link
              href="/"
              className="text-white px-4 py-2 hover:text-yellow-400 transition-all duration-300"
            >
              Home
            </Link>
            <Link
              href="#Projects"
              className="text-white px-4 py-2 hover:text-yellow-400 transition-all duration-300"
            >
              Projects
            </Link>
            <Link
              href="/about"
              className="text-white px-4 py-2 hover:text-yellow-400 transition-all duration-300"
            >
              About
            </Link>
            <Link
              href="/contact"
              className="text-white px-4 py-2 hover:text-yellow-400 transition-all duration-300"
            >
              Contact
            </Link>
          </div>
        </div>
      </nav>
      
    );
};

export default Navbar;

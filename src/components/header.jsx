import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 shadow-lg py-4">
      <div className="container mx-auto flex justify-between items-center px-10">
        <h2 className="text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-yellow-400 via-green-500 to-blue-500 animate-text">
          Bushra's Portfolio
        </h2>
        <nav>
          <ul className="flex space-x-6 text-lg font-medium">
            <Link 
              to="/" 
              className="relative group text-white transition duration-300">
              Home
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/about" 
              className="relative group text-white transition duration-300">
              About
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/contact" 
              className="relative group text-white transition duration-300">
              Contact Me
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/skills" 
              className="relative group text-white transition duration-300">
              Skills
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/certificate" 
              className="relative group text-white transition duration-300">
              Certificates
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/resume" 
              className="relative group text-white transition duration-300">
              Resume
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
            <Link 
              to="/work" 
              className="relative group text-white transition duration-300">
              Work
              <span className="absolute bottom-0 left-0 w-0 h-[2px] bg-white group-hover:w-full transition-all duration-300"></span>
            </Link>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;


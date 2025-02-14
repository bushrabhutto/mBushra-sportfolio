import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-500 to-red-500 py-4 text-white">
      <div className="container mx-auto flex justify-center items-center">
        <p className="text-sm font-medium">
          &copy; {new Date().getFullYear()} Bushra's Portfolio. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

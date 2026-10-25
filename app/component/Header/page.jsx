import React from "react";

export default function Header() {
  return (
    <div>
      <div className="flex justify-between items-center px-10 py-4 bg-gradient-to-r from-blue-500 via-indigo-600 to-purple-700 shadow-lg backdrop-blur-md">
        {/* Logo */}
        <div className="text-3xl font-bold tracking-wide text-amber-300 hover:scale-105 transition-transform duration-300">
          Spriengge<span className="text-white">.Shop</span>
        </div>

        {/* Links */}
        <div className="flex gap-8 text-lg font-medium text-white">
          <a
            href="#"
            className="hover:text-amber-300 transition-colors duration-300"
          >
            Home
          </a>
          <a
            href="#"
            className="hover:text-amber-300 transition-colors duration-300"
          >
            Products
          </a>
          <a
            href="#"
            className="hover:text-amber-300 transition-colors duration-300"
          >
            About
          </a>
          <a
            href="#"
            className="hover:text-amber-300 transition-colors duration-300"
          >
            Contact
          </a>
        </div>
      </div>
    </div>
  );
}

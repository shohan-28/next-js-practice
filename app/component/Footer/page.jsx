import React from "react";

export default function Footer() {
  return (
    <div>
      <div className="bg-gradient-to-r from-gray-900 via-indigo-900 to-purple-900 text-gray-300 py-10 px-10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Brand */}
          <div>
            <h1 className="text-2xl font-bold text-amber-400">
              Spriengge.Shop
            </h1>
            <p className="mt-3 text-sm text-gray-400">
              Premium products, crafted with passion and elegance.
            </p>
          </div>

          {/* Links */}
          <div className="flex flex-col gap-2">
            <h2 className="text-lg font-semibold text-white">Quick Links</h2>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Home
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Products
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              About
            </a>
            <a
              href="#"
              className="hover:text-amber-400 transition-colors duration-300"
            >
              Contact
            </a>
          </div>

          {/* Socials */}
          <div>
            <h2 className="text-lg font-semibold text-white">Follow Us</h2>
            <div className="flex gap-5 mt-3">
              <a
                href="#"
                className="hover:text-blue-400 transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="hover:text-pink-400 transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="hover:text-sky-400 transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-10 border-t border-gray-700 pt-5 text-center text-sm text-gray-500">
          © 2026 Spriengge.Shop — All Rights Reserved.
        </div>
      </div>
    </div>
  );
}

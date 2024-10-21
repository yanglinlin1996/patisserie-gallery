import React from "react";

const Header = () => (
  <header className="bg-amber-800 text-amber-50 py-6 shadow-lg">
    <div className="container mx-auto px-4">
      <h1 className="text-4xl font-bold font-serif">Sweet Creations Bakery</h1>
      <nav className="mt-4">
        <ul className="flex space-x-6 text-lg">
          <li>
            <a href="#" className="hover:text-amber-300 transition-colors">
              Home
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-300 transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="#" className="hover:text-amber-300 transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </nav>
    </div>
  </header>
);

export default Header;

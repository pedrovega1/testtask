import React, { useState } from "react";
import logo from "../images/logo.png";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header className="bg-[#121212]">
      <div className="container mx-auto py-5 px-4">
        <nav className="flex items-center justify-between">
          <div className="flex items-center">
            <img
              src={logo}
              alt="Realmusic Logo"
              className="w-10 h-10"
            />
            <h1 className="text-xl font-semibold text-white ml-2">
              Realmusic
            </h1>
          </div>
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-white text-xl focus:outline-none"
            >
              &#9776;
            </button>
          </div>
        </nav>
      </div>
      {/* Боковое меню */}
      <div
        className={`fixed inset-y-0 left-0 w-64 bg-[#121212] transform transition-transform ease-in-out duration-300 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } lg:translate-x-0 lg:relative lg:static lg:w-auto lg:bg-transparent lg:transition-none`}
      >
        <ul className="pt-10 ">
          <li>
            <a href="#" className="block text-white p-4">Music</a>
          </li>
          <li>
            <a href="#" className="block text-white p-4">Video</a>
          </li>
          <li>
            <a href="#" className="block text-white p-4">Merch</a>
          </li>
          <li>
            <a href="#" className="block text-white p-4">Tour</a>
          </li>
          <li>
            <a href="#" className="block text-white p-4">FAQs</a>
          </li>
          <li>
            <a href="#" className="block text-white p-4">Account</a>
          </li>
          <li>
            <a href="#" className="block text-white p-4">Cart (0)</a>
          </li>
        </ul>
      </div>
      {/* Подложка для закрытия бокового меню при клике вне него */}
      {menuOpen && (
        <div
          className="fixed inset-0 bg-black opacity-50"
          onClick={toggleMenu}
        ></div>
      )}
    </header>
  );
}

export default Header;

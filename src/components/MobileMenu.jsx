// src/components/MobileMenu.js
import React from "react";

const MobileMenu = ({ isOpen, toggleMenu, toggleTheme, isDarkMode }) => {
  return (
    <div
      className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleMenu}
    >
      <div className="absolute top-0 left-0 w-64 bg-gray-900 h-full p-4">
        <ul>
          <li className="py-2 hover:bg-gray-700 rounded">Saved Messages</li>
          <li className="py-2 hover:bg-gray-700 rounded">Contacts</li>
          <li className="py-2 hover:bg-gray-700 rounded">My Stories</li>
          <li className="py-2 hover:bg-gray-700 rounded">Settings</li>
          <li className="py-2 hover:bg-gray-700 rounded">
            <span>Night Mode</span>
            <button onClick={toggleTheme} className="ml-2">
              {isDarkMode ? "🌜" : "🌞"}
            </button>
          </li>
          <li className="py-2 hover:bg-gray-700 rounded">Animations</li>
          <li className="py-2 hover:bg-gray-700 rounded">Telegram Features</li>
          <li className="py-2 hover:bg-gray-700 rounded">Report a Bug</li>
          <li className="py-2 hover:bg-gray-700 rounded">
            Switch to K Version
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

// src/components/Menu.js
import React from "react";

const Menu = ({ toggleTheme, isDarkMode }) => {
  return (
    <div className="p-4 bg-gray-800 text-white rounded-lg shadow-lg absolute top-12 right-0 w-64">
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
        <li className="py-2 hover:bg-gray-700 rounded">Switch to K Version</li>
      </ul>
    </div>
  );
};

export default Menu;

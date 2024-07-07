// src/components/Sidebar.js
import React, { useState } from "react";
import ChatList from "./ChatList";
import MobileMenu from "./MobileMenu";

const Sidebar = ({
  toggleMobileMenu,
  isMobileMenuOpen,
  toggleTheme,
  isDarkMode,
  onSelectChat,
}) => {
  return (
    <div className="fixed  top-0 left-0 w-full h-full bg-gray-800 text-white md:w-1/3 md:static">
      <div className="p-4 flex items-center">
        <button onClick={toggleMobileMenu} className="text-white mr-4">
          <svg
            className="w-6 h-6"
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
            ></path>
          </svg>
        </button>
        <input
          type="text"
          placeholder="Search"
          className="p-2 w-full rounded bg-gray-700 border border-gray-600"
        />
      </div>
      <ChatList onSelectChat={onSelectChat} />
      <MobileMenu
        isOpen={isMobileMenuOpen}
        toggleMenu={toggleMobileMenu}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
      />
    </div>
  );
};

export default Sidebar;

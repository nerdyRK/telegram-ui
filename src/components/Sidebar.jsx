import React, { useState } from "react";
import ChatList from "./ChatList";
import MobileMenu from "./MobileMenu";
import { IoSearch } from "react-icons/io5";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = ({
  toggleMobileMenu,
  isMobileMenuOpen,
  toggleTheme,
  isDarkMode,
  onSelectChat,
}) => {
  return (
    <div
      className={`fixed top-0 left-0 w-full border-r border-gray-700 ${
        isDarkMode ? "bg-[#212121] text-white" : "bg-gray-100 text-black"
      }  md:w-1/4 md:static`}
    >
      <div className="p-4 flex items-center">
        <button onClick={toggleMobileMenu} className="text-white mr-4">
          <GiHamburgerMenu className="text-2xl text-gray-500" />
        </button>
        <input
          type="text"
          placeholder="Search"
          className={`p-2 py-3 pl-10 w-full rounded-3xl ${
            isDarkMode
              ? "bg-[#2c2c2c] text-white focus:outline-blue-600 focus:outline-none"
              : "bg-gray-300 text-black focus:outline-blue-600 focus:outline-none"
          }`}
        />

        <IoSearch className="text-gray-500 text-2xl ml-4 absolute left-12" />
      </div>
      <ChatList isDarkMode={isDarkMode} onSelectChat={onSelectChat} />
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

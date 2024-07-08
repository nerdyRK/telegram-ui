import React from "react";
import { CiBookmark, CiCirclePlus } from "react-icons/ci";
import { IoIosContact, IoIosSettings } from "react-icons/io";
import { MdAnimation, MdOutlineFeaturedPlayList } from "react-icons/md";
import { TbVersions } from "react-icons/tb";
import { FaBug } from "react-icons/fa";

const MobileMenu = ({ isOpen, toggleMenu, toggleTheme, isDarkMode }) => {
  return (
    <div
      className={`fixed inset-0 z-50 transition-opacity duration-300 ${
        isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
      onClick={toggleMenu}
    >
      <div
        className={`absolute ${
          window.innerWidth >= 1024
            ? "bg-opacity-75"
            : isDarkMode
            ? "bg-gray-800"
            : "bg-gray-200"
        } z-40`}
      />
      <div
        className={`absolute top-0 left-0 max-w-[400px] min-w-[250px] w-[74%] sm:w-[80%] md:w-[60%] lg:w-[50%] xl:w-[25%] h-full z-50 ${
          isDarkMode ? "bg-[#171e28]" : "bg-white"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <header
          className={`flex items-center justify-between p-4 rounded-md ${
            isDarkMode ? "bg-[#1c2834]" : "bg-gray-100"
          }`}
        >
          <div className="flex flex-col">
            <img
              src="https://images.unsplash.com/photo-1491013516836-7db643ee125a?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="Profile"
              className="w-12 h-12 rounded-full mb-2"
            />
            <span
              className={`${isDarkMode ? "text-gray-300" : "text-gray-800"}`}
            >
              BeyondChats
            </span>
            <span
              className={`${isDarkMode ? "text-gray-400" : "text-gray-600"}`}
            >
              +91 9752669856
            </span>
          </div>
          <button
            onClick={toggleTheme}
            className={`ml-2 text-xl duration-100 ${
              isDarkMode ? "text-gray-400" : "text-gray-800"
            }`}
            style={{ marginRight: "0rem", marginTop: "-19%" }}
          >
            {!isDarkMode ? "🌜" : "🌞"}
          </button>
        </header>
        <ul className="space-y-2">
          <li
            className={`py-3 px-4 rounded flex items-center hover:bg-${
              isDarkMode ? "gray-700" : "gray-200"
            }`}
          >
            <CiBookmark className="mr-4 text-xl" /> Saved Messages
          </li>
          <li
            className={`py-3 px-4 rounded flex items-center hover:bg-${
              isDarkMode ? "gray-700" : "gray-200"
            }`}
          >
            <IoIosContact className="mr-4 text-xl" /> Contacts
          </li>
          <li
            className={`py-3 px-4 rounded flex items-center hover:bg-${
              isDarkMode ? "gray-700" : "gray-200"
            }`}
          >
            <CiCirclePlus className="mr-4 text-xl" /> My Stories
          </li>
          <li
            className={`py-3 px-4 rounded flex items-center hover:bg-${
              isDarkMode ? "gray-700" : "gray-200"
            }`}
          >
            <IoIosSettings className="mr-4 text-xl" /> Settings
          </li>
          <li
            className={`py-3 px-4 rounded flex items-center hover:bg-${
              isDarkMode ? "gray-700" : "gray-200"
            }`}
          >
            <MdAnimation className="mr-4 text-xl" /> Animations
          </li>
          <li
            className={`py-3 px-4 rounded flex items-center hover:bg-${
              isDarkMode ? "gray-700" : "gray-200"
            }`}
          >
            <MdOutlineFeaturedPlayList className="mr-4 text-xl" /> Telegram
            Features
          </li>
          <li
            className={`py-3 px-4 rounded flex items-center hover:bg-${
              isDarkMode ? "gray-700" : "gray-200"
            }`}
          >
            <FaBug className="mr-4 text-xl" /> Report a Bug
          </li>
          <li
            className={`py-3 px-4 rounded flex items-center hover:bg-${
              isDarkMode ? "gray-700" : "gray-200"
            }`}
          >
            <TbVersions className="mr-4 text-xl" /> Switch to K Version
          </li>
        </ul>
      </div>
    </div>
  );
};

export default MobileMenu;

// src/pages/Chat.js
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import Menu from "../components/Menu";
import { IoCallOutline } from "react-icons/io5";
import { IoSearch } from "react-icons/io5";
import { HiDotsVertical } from "react-icons/hi";
import { FaArrowLeft } from "react-icons/fa";

import { sampleChats } from "../utils/sampleChats";

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [selectedChat, setSelectedChat] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleChatSelect = (chatId) => setSelectedChatId(chatId);

  const defaultUser = {
    name: "Default User",
    lastSeen: "Last seen recently",
  };

  useEffect(() => {
    if (selectedChatId) {
      const chatMessages =
        sampleChats?.find((chat) => chat.id === selectedChatId)?.messages || [];
      setMessages(chatMessages);

      // Use default user info if no messages exist
      setSelectedChat(
        chatMessages.length ? chatMessages[0].sender : defaultUser
      );
    }
  }, [selectedChatId]);

  return (
    <div
      className={`flex max-h-screen overflow-hidden ${
        isDarkMode ? "bg-gray-900 text-white" : "bg-gray-100 text-black"
      }`}
    >
      <Sidebar
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        onSelectChat={(chatId) => {
          handleChatSelect(chatId);
          setIsMobileMenuOpen(false); // Close the mobile menu when a chat is selected
        }}
      />
      <div
        className={`flex-1 flex flex-col overflow-hidden transition-transform duration-300 transform ${
          selectedChatId ? "translate-x-0" : "translate-x-full md:translate-x-0"
        }`}
      >
        <header
          className={`${
            isDarkMode ? "bg-[#212121] text-white" : "bg-gray-200 text-black"
          } py-2 px-4 height-[8vh] sticky top-0 flex items-center justify-between`}
        >
          {selectedChatId ? (
            <>
              <div className="flex items-center">
                <button
                  className="mr-4 md:hidden px-2 py-1 rounded"
                  onClick={() => setSelectedChatId(null)}
                >
                  <FaArrowLeft />
                </button>
                <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white mr-4">
                  NA
                </div>
                <div>
                  <h2 className="text-lg">{selectedChat?.name || "User"}</h2>
                  <p className="text-sm text-gray-400 mt-[-4px]">
                    {selectedChat?.lastSeen || "Last seen recently"}
                  </p>
                </div>
              </div>
              <div className="flex sm:space-x-4 text-2xl">
                <button className="p-2 hidden sm:block rounded-full hover:bg-gray-700">
                  <IoSearch />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700">
                  <IoCallOutline />
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700">
                  <HiDotsVertical />
                </button>
              </div>
            </>
          ) : (
            <h2 className="text-xl">Telegram</h2>
          )}
        </header>
        <div
          className={`${
            isDarkMode ? "bg-[#1a1a1b]" : "bg-gray-100"
          } flex flex-1 chat-window bg-fixed max-h-[92dvh] min-h-[92dvh] overflow-x-hidden overflow-y-auto`}
        >
          <div className="w-full">
            {selectedChatId ? (
              <ChatWindow
                isDarkMode={isDarkMode}
                msgs={messages}
                chatId={selectedChatId}
              />
            ) : (
              <div className="flex items-center justify-center text-gray-500">
                Select a chat to view messages
              </div>
            )}
          </div>
        </div>
        {isMenuOpen && (
          <Menu toggleTheme={toggleTheme} isDarkMode={isDarkMode} />
        )}
      </div>
    </div>
  );
};

export default Chat;

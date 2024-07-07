// src/pages/Chat.js
import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import Menu from "../components/Menu";
import ChatList from "../components/ChatList";

const Chat = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);
  const [selectedChatId, setSelectedChatId] = useState(null);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const toggleMobileMenu = () => setIsMobileMenuOpen(!isMobileMenuOpen);
  const toggleTheme = () => setIsDarkMode(!isDarkMode);
  const handleChatSelect = (chatId) => setSelectedChatId(chatId);

  const userId = 3828;

  return (
    <div
      className={`flex max-h-screen overflow-hidden ${
        isDarkMode ? "transparent text-white" : "bg-transparent text-black"
      }`}
    >
      <Sidebar
        toggleMobileMenu={toggleMobileMenu}
        isMobileMenuOpen={isMobileMenuOpen}
        toggleTheme={toggleTheme}
        isDarkMode={isDarkMode}
        onSelectChat={handleChatSelect}
      />
      <div className="flex-1 flex flex-col overflow-hidden">
        <header className="p-4 bg-[#2c2c2c] border-slate-700 border-2 flex items-center justify-between">
          <h2 className="text-xl">Telegram</h2>
        </header>
        <div className="flex flex-1 chat-window bg-fixed min-h-screen overflow-x-hidden overflow-y-auto">
          <div className="w-full border-l border-gray-700">
            {selectedChatId ? (
              <ChatWindow chatId={selectedChatId} userId={userId} />
            ) : (
              <div className=" flex items-center justify-center text-gray-500">
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

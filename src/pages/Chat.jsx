// src/pages/Chat.js
import React, { useState, useEffect } from "react";
import Sidebar from "../components/Sidebar";
import ChatWindow from "../components/ChatWindow";
import Menu from "../components/Menu";
import ChatList from "../components/ChatList";
import axios from "axios";

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

  const userId = 3828;

  useEffect(() => {
    if (selectedChatId) {
      const fetchChatDetails = async () => {
        const response = await axios.get(
          `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${selectedChatId}`
        );
        const chatData = response.data.data;
        setMessages(response.data.data); // Adjust based on API response structure

        setSelectedChat(chatData.length ? chatData[0].sender : null);
      };
      fetchChatDetails();
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
        <header className="p-4 bg-[#2c2c2c] border-slate-700 border-2 flex items-center justify-between">
          {selectedChat ? (
            <>
              <div className="flex items-center">
                <button
                  className="mr-4 md:hidden border px-2 py-1 rounded"
                  onClick={() => setSelectedChatId(null)}
                >
                  Back
                </button>
                <div className="w-10 h-10 bg-gray-500 rounded-full flex items-center justify-center text-white mr-4">
                  {selectedChat.name
                    ? selectedChat.name
                        .split(" ")
                        .map((n) => n[0])
                        .join("")
                    : "NA"}
                </div>
                <div>
                  <h2 className="text-lg">{selectedChat.name || "User"}</h2>
                  <p className="text-sm text-gray-400">Last seen recently</p>
                </div>
              </div>
              <div className="flex space-x-4">
                <button className="p-2 rounded-full hover:bg-gray-700">
                  <i className="fas fa-phone"></i>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700">
                  <i className="fas fa-video"></i>
                </button>
                <button className="p-2 rounded-full hover:bg-gray-700">
                  <i className="fas fa-ellipsis-v"></i>
                </button>
              </div>
            </>
          ) : (
            <h2 className="text-xl">Telegram</h2>
          )}
        </header>
        <div className="flex flex-1 chat-window bg-fixed min-h-screen overflow-x-hidden overflow-y-auto">
          <div className="w-full border-l border-gray-700">
            {selectedChatId ? (
              <ChatWindow msgs={messages} chatId={selectedChatId} userId={userId} />
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

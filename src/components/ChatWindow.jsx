// src/components/ChatWindow.js
import React, { useEffect, useState } from "react";
import axios from "axios";

const ChatWindow = ({ chatId, userId }) => {
  const [messages, setMessages] = useState([]);

  useEffect(() => {
    const fetchMessages = async () => {
      const response = await axios.get(
        `https://devapi.beyondchats.com/api/get_chat_messages?chat_id=${chatId}`
      );
      setMessages(response.data.data); // Adjust based on API response structure
    };

    fetchMessages();
  }, [chatId]);

  return (
    <div className="px-10 py-4 h-full w-full max-h-screen bg-slate-50">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`mb-4 flex ${
            message.sender.name === "BeyondChat"
              ? "justify-end"
              : "justify-start"
          }`}
        >
          <div
            className={`p-4 rounded-lg max-w-xs ${
              message.sender.name === "BeyondChat"
                ? "bg-[#8775da] text-white"
                : "bg-gray-200 text-black"
            }`}
          >
            <div className="font-bold">{message.sender.name}</div>
            <div>{message.message}</div>
            <div className="text-gray-400 text-sm text-right">
              {new Date(message.created_at).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ChatWindow;

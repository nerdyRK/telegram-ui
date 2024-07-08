// src/components/ChatWindow.js
import React, { useEffect, useState } from "react";
import axios from "axios";
import MessageInput from "./MessageInput";

const ChatWindow = ({ chatId, msgs, onSendMessage }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-10 pt-4 pb-4 w-full">
        {msgs.map((message) => (
          <div
            key={message.id}
            className={`mb-4 flex ${
              message.sender.name === "BeyondChat"
                ? "justify-end"
                : "justify-start"
            }`}
          >
            <div
              className={`px-4 pt-2 pb-4 rounded-lg relative max-w-lg ${
                message.sender.name === "BeyondChat"
                  ? "bg-[#8775da] text-white"
                  : "bg-[#212121] text-white"
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
      <MessageInput onSendMessage={onSendMessage} />
    </div>
  );
};

export default ChatWindow;

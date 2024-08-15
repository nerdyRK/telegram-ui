// src/components/ChatWindow.js
import React from "react";
import { LiaCheckDoubleSolid } from "react-icons/lia";
import { sampleChats } from "../utils/sampleChats";
import MessageInput from "./MessageInput";

const ChatWindow = ({ isDarkMode }) => {
  return (
    <div className="flex flex-col h-full">
      <div className="flex-1 overflow-y-auto px-4 sm:px-10 pt-4 pb-44 w-full">
        {sampleChats.map((message, i) => (
          <div
            key={i}
            className={`mb-4 flex ${
              message.sender.id === 0 ? "justify-end" : "justify-start"
            }`}
          >
            <div
              className={`px-4 pt-2 pb-1 rounded-lg flex flex-col relative max-w-[80%] md:max-w-[70%] ${
                message.sender.id === 0
                  ? "bg-[#8775da] text-white"
                  : "bg-[#636262] text-white"
              }`}
            >
              <div className="pr-2">{message.message}</div>
              <div className="text-slate-300 items-end self-end ml-8 text-sm text-right">
                {new Date(message.created_at).toLocaleTimeString([], {
                  hour: "2-digit",
                  minute: "2-digit",
                })}
                {message.sender.id === 0 && (
                  <LiaCheckDoubleSolid className="ml-2 text-lg inline-block" />
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
      <MessageInput isDarkMode={isDarkMode} />
    </div>
  );
};

export default ChatWindow;

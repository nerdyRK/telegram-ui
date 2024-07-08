// src/components/ChatItem.js
import React from "react";

const getInitials = (name) => {
  const names = name.split(" ");
  const initials = names.map((n) => n[0]).join("");
  return initials.toUpperCase();
};

const getRandomColor = () => {
  const colors = [
    "#f56565",
    "#ed8936",
    "#f6ad55",
    "#48bb78",
    "#38b2ac",
    "#4299e1",
    "#667eea",
    "#9f7aea",
    "#ed64a6",
  ];
  return colors[Math.floor(Math.random() * colors.length)];
};

const ChatItem = ({ chat, onSelect, isDarkMode }) => {
  const { id, creator, msg_count, updated_at } = chat;
  const lastMessageTime = new Date(updated_at).toLocaleTimeString([], {
    hour: "2-digit",
    minute: "2-digit",
  });
  const initials = creator.name ? getInitials(creator.name) : "U";
  const bgColor = getRandomColor();

  return (
    <div
      className={`py-2 px-4 ${
        isDarkMode ? "hover:bg-[#1c2834]" : "hover:bg-gray-300"
      } hover:bg-gray-700 cursor-pointer flex items-center`}
      onClick={() => onSelect(id)}
    >
      <div
        className="w-10 h-10 rounded-full flex items-center justify-center text-white font-bold mr-3"
        style={{ backgroundColor: bgColor }}
      >
        {initials}
      </div>
      <div className="flex-1">
        <h3 className="text-lg font-bold">{creator.name || "Unknown User"}</h3>
        <p className="text-gray-400">{`${msg_count} messages`}</p>
      </div>
      <div className="text-gray-400 text-sm">{lastMessageTime}</div>
    </div>
  );
};

export default ChatItem;

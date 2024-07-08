// src/components/MessageInput.js
import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { BsEmojiSmile } from "react-icons/bs";
import { GrAttachment } from "react-icons/gr";
import { IoMdMic } from "react-icons/io";

const MessageInput = ({ isDarkMode }) => {
  const [message, setMessage] = useState("");

  return (
    <div
      className={`${
        isDarkMode ? "bg-[#1a1a1b]" : "bg-gray-100"
      } absolute z-10 chat-window bottom-0 left-0 w-full flex items-center p-4`}
    >
      <input
        type="text"
        value={message}
        onChange={(e) => setMessage(e.target.value)}
        placeholder="Message"
        className={`${
          isDarkMode ? "bg-[#2c2c2c] text-white" : "bg-gray-300 text-black"
        } flex-1 p-4 pl-10  rounded-lg focus:outline-none`}
      />
      <BsEmojiSmile className="text-2xl cursor-pointer hover:text-[#766ac8] left-6 absolute" />
      <button
        className={`${
          isDarkMode ? "bg-[#2c2c2c] text-white" : "bg-gray-400 text-gray-500"
        } ml-4 p-3  rounded-full text-white hover:bg-[#766ac8]`}
      >
        <IoMdMic className="text-3xl" />
      </button>

      <GrAttachment className="text-2xl right-24 hover:text-[#766ac8] cursor-pointer absolute" />
    </div>
  );
};

export default MessageInput;

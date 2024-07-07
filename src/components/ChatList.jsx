// src/components/ChatList.js
import { useEffect, useState } from "react";
import axios from "axios";
import ChatItem from "./ChatItem";

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);

  useEffect(() => {
    const fetchChats = async () => {
      const response = await axios.get(
        "https://devapi.beyondchats.com/api/get_all_chats?page=1"
      );
      setChats(response.data.data.data); // Adjust based on API response structure
    };

    fetchChats();
  }, []);

  return (
    <div className="overflow-y-auto max-h-screen h-full">
      {chats?.map((chat) => (
        <ChatItem key={chat.id} chat={chat} onSelect={onSelectChat} />
      ))}
    </div>
  );
};

export default ChatList;

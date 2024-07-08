import { useEffect, useState } from "react";
import axios from "axios";
import ChatItem from "./ChatItem";
import { FaPen } from "react-icons/fa";

const ChatList = ({ onSelectChat }) => {
  const [chats, setChats] = useState([]);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    const fetchChats = async () => {
      try {
        const response1 = axios.get(
          "https://devapi.beyondchats.com/api/get_all_chats?page=1"
        );
        const response2 = axios.get(
          "https://devapi.beyondchats.com/api/get_all_chats?page=2"
        );

        const [result1, result2] = await Promise.all([response1, response2]);

        // Combine data from both pages
        const combinedChats = [
          ...result1.data.data.data,
          ...result2.data.data.data,
        ];

        setChats(combinedChats); // Set combined data into state
      } catch (error) {
        console.error("Error fetching chats:", error);
      }
    };

    fetchChats();
  }, []);

  return (
    <div
      className="relative max-h-screen h-full pb-4 overflow-y-auto"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div
        className={`${
          isHovered ? "scale-100 opacity-100" : "scale-0 opacity-0"
        } fixed top-[85vh] md:left-[300px] left-[370px] duration-100 bg-blue-500 p-6 md:p-4 rounded-full`}
      >
        <FaPen className="text-white text-2xl" />
      </div>

      {chats.map((chat) => (
        <ChatItem key={chat.id} chat={chat} onSelect={onSelectChat} />
      ))}
    </div>
  );
};

export default ChatList;

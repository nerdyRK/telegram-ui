import axios from "axios";

const API_BASE_URL = "https://devapi.beyondchats.com/api";

export const getAllChats = (page = 1) => {
  return axios.get(`${API_BASE_URL}/get_all_chats?page=${page}`);
};

export const getChatMessages = (chat_id) => {
  return axios.get(`${API_BASE_URL}/get_chat_messages?chat_id=${chat_id}`);
};

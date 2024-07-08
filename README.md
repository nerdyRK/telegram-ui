# BeyondChat Telegram UI

## Deployed Application

You can access the live version of the BeyondChat application [here](https://rk-telegram.netlify.app/).

## Table of Contents

- [Project Overview](#project-overview)
- [Features](#features)
- [Installation](#installation)
- [Dependencies](#dependencies)
- [API Endpoints](#api-endpoints)

## Project Overview

This is a Telegram web UI having the menu of telgram APP and it fetches data from 2 API's. First for showing the users in sidebar and other for getting the chats of a particular user.

## Features

- Dark/light mode support
- Responsive design for mobile and desktop views
- Fetch messages from multiple pages and APis
- User and message time display

## Installation

### Prerequisites

- Node.js and npm installed on your machine

### Steps

1. **Clone the repository:**
   ```bash
   git clone https://github.com/your-username/beyondchat.git
   cd beyondchat
   ```
2. **Install Dependencies:**
   ```bash
   npm install
   ```
3. **Start the application:**
   ```bash
   npm run dev
   ```

## Dependencies

1. React
2. React-DOM
3. axios
4. react-icons
5. tailwindcss

## API endpoints

1. https://devapi.beyondchats.com/api/get_all_chats?page=1
2. https://devapi.beyondchats.com/api/get_chat_messages?chat_id=3888

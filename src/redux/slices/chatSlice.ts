import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { type Message } from "ai/react";

type ChatState = {
  isOpen: boolean;
  messages: (Message)[];
}

const initialState: ChatState = {
  isOpen: false,
  messages: [
    {
      id: 'pre-prompt',
      content: `You are an AI chatbot`,
      role: 'system',
    }
  ],
}

const chatSlice = createSlice({
  name: 'chatSlice',
  initialState,
  reducers: {
    setMessages: (state, action: PayloadAction<Message[]>) => {
      state.messages = action.payload;
    },    
    clearMessages: (state) => {
      state.messages = [state.messages[0]];
    },
    toggleChat: (state) => {
      state.isOpen = !state.isOpen
    }
  },
});

export const { setMessages, clearMessages, toggleChat } = chatSlice.actions;

export default chatSlice.reducer;
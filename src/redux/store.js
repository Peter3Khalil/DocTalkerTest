// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import toggleReducer from './slices/toggleSlice';
import themeReducer from './slices/themeSlice';
import currentChatReducer from './slices/currentChatSlice';
import typingDoneReducer from './slices/typingDone';
export const store = configureStore({
  reducer: {
    toggle: toggleReducer,
    theme: themeReducer,
    currentChat:currentChatReducer,
    typingDone:typingDoneReducer
  },
});

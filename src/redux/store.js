// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import isSidebarOpenedReducer from './slices/isSidebarOpened';
import currentChatReducer from './slices/currentChatSlice';
import typingDoneReducer from './slices/typingDone';
import isLoadingReducer from './slices/isLoading';
import isDocumentOpenedReducer from './slices/isDocumentOpened';
export const store = configureStore({
  reducer: {
    isSidebarOpened: isSidebarOpenedReducer,
    theme: themeReducer,
    currentChat:currentChatReducer,
    typingDone:typingDoneReducer,
    isLoading:isLoadingReducer,
    isDocumentOpened: isDocumentOpenedReducer,
  },
});

// src/store.js
import { configureStore } from '@reduxjs/toolkit';
import themeReducer from './slices/themeSlice';
import modalReducer from './slices/modalSlice';
import isSidebarOpenedReducer from './slices/isSidebarOpened';
import isLoadingReducer from './slices/isLoading';
import isDocumentOpenedReducer from './slices/isDocumentOpened';
export const store = configureStore({
  reducer: {
    isSidebarOpened: isSidebarOpenedReducer,
    theme: themeReducer,
    isLoading:isLoadingReducer,
    isDocumentOpened: isDocumentOpenedReducer,
    modal:modalReducer
  },
});

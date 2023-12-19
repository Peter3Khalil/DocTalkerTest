import { configureStore } from '@reduxjs/toolkit';

import sidebarReducer from './slices/sidebar';
import themeReducer from './slices/theme';
import modalReducer from './slices/modal';

export default configureStore({
    reducer: {
        sidebar: sidebarReducer,
        theme: themeReducer,
        modal: modalReducer,
    },
});
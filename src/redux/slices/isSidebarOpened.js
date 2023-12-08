import { createSlice } from "@reduxjs/toolkit";

const isSidebarOpenedSlice = createSlice({
    name: "isSidebarOpened",
    initialState: {
        isSidebarOpened: true
    },
    reducers: {
        close: (state) => {
            state.isSidebarOpened = false;
        },
        open: (state) => {
            state.isSidebarOpened = true;
        },
    }
});

export const { open,close } = isSidebarOpenedSlice.actions;
export default isSidebarOpenedSlice.reducer;
import { createSlice } from "@reduxjs/toolkit";

const toggleSlice = createSlice({
    name: "toggle",
    initialState: {
        isOpen: false
    },
    reducers: {
        close: (state) => {
            state.isOpen = false;
        },
        open: (state) => {
            state.isOpen = true;
        },
    }
});

export const { open,close } = toggleSlice.actions;
export default toggleSlice.reducer;
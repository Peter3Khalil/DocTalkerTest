import { createSlice } from "@reduxjs/toolkit";

const modalSlice = createSlice({
    name: "modal",
    initialState: {
       isModalOpened:false
    },
    reducers: {
        openModal: (state) => {
            state.isModalOpened = true;
        },
        closeModal: (state) => {
            state.isModalOpened = false;
        },
    }
});

export const {  closeModal,openModal} = modalSlice.actions;
export default modalSlice.reducer;
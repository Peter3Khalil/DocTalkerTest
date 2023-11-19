import { createSlice } from "@reduxjs/toolkit";

const currentChatSlice = createSlice({
    name: "currentChat",
    initialState: {
       currentChat:null
    },
    reducers: {
        setCurrentChat: (state,action) => {
            state.currentChat = action.payload;
        }
    }
});

export const {  setCurrentChat} = currentChatSlice.actions;
export default currentChatSlice.reducer;
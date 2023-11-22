import { createSlice } from "@reduxjs/toolkit";

const typingDoneSlice = createSlice({
    name: "typingDone",
    initialState: {
       isDone:true
    },
    reducers: {
        done: (state) => {
            state.isDone = true;
        },
        notDone: (state) => {
            state.isDone = false;
        }
    }
});

export const {  done,notDone} = typingDoneSlice.actions;
export default typingDoneSlice.reducer;
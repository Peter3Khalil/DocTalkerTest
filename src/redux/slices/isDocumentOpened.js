import { createSlice } from "@reduxjs/toolkit";

const isDocumentOpenedSlice = createSlice({
    name: "isDocumentOpened",
    initialState: {
        isDocumentOpened:true
    },
    reducers: {
        showDocument: (state) => {
            state.isDocumentOpened = true;
        },
        hideDocument: (state) => {
            state.isDocumentOpened = false;
        }
    }
});

export const {  showDocument,hideDocument} = isDocumentOpenedSlice.actions;
export default isDocumentOpenedSlice.reducer;
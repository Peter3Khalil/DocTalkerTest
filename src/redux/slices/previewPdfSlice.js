import { createSlice } from "@reduxjs/toolkit";

const previewPdfSlice = createSlice({
    name: "previewPdf",
    initialState: {
         previewPdf:false
    },
    reducers: {
        showPdf: (state) => {
            state.previewPdf = true;
        },
        hidePdf: (state) => {
            state.previewPdf = false;
        }
    }
});

export const {  hidePdf,showPdf} = previewPdfSlice.actions;
export default previewPdfSlice.reducer;
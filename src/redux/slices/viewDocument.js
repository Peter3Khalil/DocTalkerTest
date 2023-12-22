import { createSlice } from "@reduxjs/toolkit"

const documentSlice = createSlice({
  name: "document",
  initialState: {
   isOpen:false,
  },
  reducers: {
    toggleDocument: (state) => {
      state.isOpen = !state.isOpen 
    },
  },
})

export const { toggleDocument } = documentSlice.actions

export default documentSlice.reducer

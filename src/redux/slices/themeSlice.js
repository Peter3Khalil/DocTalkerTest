import { createSlice } from "@reduxjs/toolkit";

const themeSlice = createSlice({
  name: "theme",
  initialState: {
    mode: "light",
  },
  reducers: {
    light: (state) => {
      state.mode = "light";
    },
    dark: (state) => {
      state.mode = "dark";
    },
  },
});

export const { light,dark } = themeSlice.actions;
export default themeSlice.reducer;

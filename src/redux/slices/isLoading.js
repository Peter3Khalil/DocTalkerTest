import { createSlice } from "@reduxjs/toolkit";

const isLoadingSlice = createSlice({
  name: "isLoading",
  initialState: {
    isLoading: false,
  },
  reducers: {
    loading: (state, action) => {
      state.isLoading = action.payload;
    },
  },
});

export const { loading } = isLoadingSlice.actions;
export default isLoadingSlice.reducer;

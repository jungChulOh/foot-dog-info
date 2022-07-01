import { createSlice } from "@reduxjs/toolkit";

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    loading: false,
    items: [],
    maxResults: 5,
    error: "",
    massage: "",
  },
  reducers: {
    updateState(state, action) {
      Object.keys(action.payload).map((key) => {
        state[key] = action.payload[key];
      });
    },
  },
});

export const { updateState } = youtubeSlice.actions;
export default youtubeSlice.reducer;

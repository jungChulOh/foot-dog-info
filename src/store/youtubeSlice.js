import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchYoutubes = createAsyncThunk(
  "youtubes/fetchYoutubes",
  async (payload) => {
    console.log(payload);
    const response = await axios.get("/api/yplaylist");
    return response.data;
  }
);

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
  extraReducers: (builder) => {
    builder
      .addCase(fetchYoutubes.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchYoutubes.fulfilled, (state, action) => {
        const { items } = action.payload;
        state.items = items;
        state.loading = false;
      });
  },
});

export const { updateState } = youtubeSlice.actions;
export default youtubeSlice.reducer;

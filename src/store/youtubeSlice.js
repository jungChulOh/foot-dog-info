import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchYoutubes = createAsyncThunk(
  "youtubes/fetchYoutubes",
  async (payload, apps) => {
    const { maxResults } = apps.getState().youtubes;
    const url = maxResults
      ? `/api/yplaylist?maxResults=${maxResults}`
      : `/api/yplaylist`;
    try {
      const response = await axios.get(url);
      return { status: 200, data: response.data, statusText: "OK" };
    } catch (error) {
      const { status, statusText } = error;
      return { status, statusText, data: {} };
    }
  }
);

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    loading: false,
    items: [],
    maxResults: 6,
    error: "",
    massage: "",
    pageInfo: {},
    nextPageToken: "",
    prevPageToken: "",
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
        const { status, statusText, data } = action.payload;

        if (status !== 200) {
          state.items = [];
          state.massage = statusText;
          state.error = status;
        } else {
          const { items, pageInfo, nextPageToken, prevPageToken } = data;
          if (prevPageToken) state.prevPageToken = prevPageToken;
          state.nextPageToken = nextPageToken;
          state.pageInfo = pageInfo;
          state.items = items;
          state.massage = statusText;
          state.error = "";
        }

        state.loading = false;
      });
  },
});

export const { updateState } = youtubeSlice.actions;
export default youtubeSlice.reducer;

import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchYoutubes = createAsyncThunk(
  "youtubes/fetchYoutubes",
  async (payload, apps) => {
    const { maxResults } = apps.getState().youtubes;
    const url = maxResults
      ? `/api/yplaylist?maxResults=${maxResults}`
      : `/api/yplaylist`;

    const response = await axios.get(url);
    return { status: 200, data: response.data, statusText: "OK" };
  }
);

const youtubeSlice = createSlice({
  name: "youtube",
  initialState: {
    loading: false,
    items: [],
    maxResults: 6,
    statusCode: 200,
    message: "",
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
        const { items, pageInfo, nextPageToken, prevPageToken } = data;
        state.loading = false;

        if (status !== 200) {
          state.items = [];
          state.message = statusText;
          state.statusCode = status;
          return;
        }

        if (prevPageToken) state.prevPageToken = prevPageToken;
        state.nextPageToken = nextPageToken;
        state.pageInfo = pageInfo;
        state.items = items;
        state.message = statusText;
        state.statusCode = 200;
      })
      .addCase(fetchYoutubes.rejected, (state, action) => {
        const { error } = action;
        state.prevPageToken = "";
        state.nextPageToken = "";
        state.items = [];
        state.message = error.message;
        state.statusCode = 400;
      });
  },
});

export const { updateState } = youtubeSlice.actions;
export default youtubeSlice.reducer;

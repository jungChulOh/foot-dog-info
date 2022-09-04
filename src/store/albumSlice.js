import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbums = createAsyncThunk("albums/fetchAlbums", async () => {
  const url = `/api/album`;

  const response = await axios.get(url);
  const { result_code, result_data } = response.data;

  if (result_code !== 1) {
    return { status: result_code, statusText: result_data.message, data: {} };
  }

  return { status: 200, statusText: "OK", data: result_data };
});

const albumSlice = createSlice({
  name: "album",
  initialState: {
    loading: false,
    items: [],
    resultCode: 0,
    resultData: {},
    message: "",
    paging: {},
    totalCount: 0,
    statusCode: 200,
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
      .addCase(fetchAlbums.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchAlbums.fulfilled, (state, action) => {
        const { status, statusText, data } = action.payload;
        const { items, totalCount, paging } = data;
        state.loading = false;

        if (statusText !== "OK") {
          state.items = [];
          state.message = statusText;
          state.statusCode = status;
          return;
        }

        state.items = items;
        state.totalCount = totalCount;
        state.paging = paging;
        state.message = statusText;
        state.statusCode = 200;
      })
      .addCase(fetchAlbums.rejected, (state, action) => {
        state.loading = false;
        const { error } = action;
        state.message = error.message;
        state.statusCode = 400;
      });
  },
});

export const { updateState } = albumSlice.actions;
export default albumSlice.reducer;

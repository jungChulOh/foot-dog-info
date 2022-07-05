import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

export const fetchAlbums = createAsyncThunk("albums/fetchAlbums", async () => {
  const url = `/api/album`;

  try {
    const response = await axios.get(url);
    const { result_code, result_data } = response.data;

    if (result_code !== 1) {
      return { status: result_code, statusText: result_data.message, data: {} };
    }

    return { status: 200, statusText: "OK", data: result_data };
  } catch (error) {
    return { status: 400, statusText: "album api Error", data: {} };
  }
});

const albumSlice = createSlice({
  name: "album",
  initialState: {
    loading: false,
    items: [],
    resultCode: 0,
    resultData: {},
    massage: "",
    paging: {},
    totalCount: 0,
    error: "",
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

        if (status !== 200) {
          state.items = [];
          state.massage = statusText;
          state.error = status;
        } else {
          const { items, totalCount, paging } = data;
          state.items = items;
          state.totalCount = totalCount;
          state.paging = paging;
          state.massage = statusText;
          state.error = "";
        }

        state.loading = false;
      });
  },
});

export const { updateState } = albumSlice.actions;
export default albumSlice.reducer;

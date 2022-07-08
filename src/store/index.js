import { configureStore } from "@reduxjs/toolkit";
import albumSlice from "./albumSlice";
import youtubeSlice from "./youtubeSlice";

export default configureStore({
  reducer: {
    youtubes: youtubeSlice,
    albums: albumSlice,
  },
  devTools: process.env.NODE_ENV !== "production",
});

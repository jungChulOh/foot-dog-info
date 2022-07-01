import { configureStore } from "@reduxjs/toolkit";
import youtubeSlice from "./youtubeSlice";

export default configureStore({
  reducer: {
    youtubes: youtubeSlice,
  },
});

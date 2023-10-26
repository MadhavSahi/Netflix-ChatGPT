import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./moviesSlice";

const reduxStore = configureStore({
  reducer: {
    user:userSliceReducer,
    movies:moviesSliceReducer,
  },
});

export default reduxStore;

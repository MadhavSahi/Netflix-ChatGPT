import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import moviesSliceReducer from "./moviesSlice";
import gptSliceReducer from "./gptSlice";
import languageSliceReducer from "./languageSlice";

const reduxStore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: moviesSliceReducer,
    gpt: gptSliceReducer,
    language:languageSliceReducer,
  },
});

export default reduxStore;

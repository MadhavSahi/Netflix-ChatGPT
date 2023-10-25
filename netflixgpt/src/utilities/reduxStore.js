import {configureStore} from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";


const reduxStore = configureStore({
  reducer: {
    user:userSliceReducer,
  },
});

export default reduxStore;

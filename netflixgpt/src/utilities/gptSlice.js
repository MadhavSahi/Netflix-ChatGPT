import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    gptBtnState: false,
    gptSearchQueryByUser:null,
    gptResultMovies:null,
    gptFinalMoviesArrayofObj:null,
  },
  reducers: {
    gptBtnToggle: (state, action) => {
      state.gptBtnState = !state.gptBtnState;
    },
    gptSearchQueryByUserFxn:(state, action)=>{
        state.gptSearchQueryByUser=action.payload;
    },
    gptMoviesAdd:(state,action)=>{
      state.gptResultMovies=action.payload
    },
    gptFinalMoviesArrayofObj:(state,action)=>{
      state.gptFinalMoviesArrayofObj=action.payload;
    }
  },
});

export const {gptBtnToggle,gptSearchQueryByUserFxn,gptMoviesAdd,gptFinalMoviesArrayofObj}=gptSlice.actions;
export default gptSlice.reducer;

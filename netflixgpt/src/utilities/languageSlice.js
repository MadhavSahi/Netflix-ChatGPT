import { createSlice } from "@reduxjs/toolkit";

const languageSlice=createSlice({
    name:"language",
    initialState:{
        languageSelect:"english"
    },
    reducers:{
        languageSelectFxn:(state,action)=>{
            state.languageSelect=action.payload;
        },
    }
})

export const {languageSelectFxn} = languageSlice.actions;
export default languageSlice.reducer;
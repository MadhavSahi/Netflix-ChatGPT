import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
  name: "user",
  initialState: null,
  reducers: {
    addUser: (state, action) => {
      // In a Redux reducer, the return value of the reducer function is the new value for the state. When you return a new value from the reducer, Redux updates the state with that new value. This is how Redux handles state changes and maintains the state of your application.
      return action.payload;
    },
    removeUser: (state, action) => {
      return null;
    },
  },
});
export const { addUser, removeUser } = userSlice.actions;
export default userSlice.reducer;

import { createSlice } from "@reduxjs/toolkit";


const authSlice = createSlice({
  name: 'auth',
  initialState: {
    isAuthLogin: false,
  },
  reducers: {
    login (state) {
      state.isAuthLogin = true;
    },
    logout (state) {
      state.isAuthLogin = false;
    },
  },
});

export const authActions = authSlice.actions;

export default authSlice;
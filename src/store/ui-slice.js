import { createSlice } from "@reduxjs/toolkit";

const uiSlice = createSlice({
  name: 'ui',
  initialState: {notification: null},
  reducers: {
    showNotification(state, action) {
      state.notification = {
        ...action.payload
      }
    }
  }
});

export const uiActions = uiSlice.actions;

export default uiSlice;

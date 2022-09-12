import { createSlice } from "@reduxjs/toolkit";

const initialState = { notification: null, showModal: false };
const uiSlice = createSlice({
  name: "error",
  initialState,
  reducers: {
    showNotification(state, action) {
      state.notification = {
        title: action.payload.title,
        message: action.payload.message,
        status: action.payload.status,
      };
    },
    closeNotification(state) {
      state.notification = null;
    },
    showModal(state) {
      state.showModal = !state.showModal;
    },
  },
});

export const uiActions = uiSlice.actions;

export default uiSlice;

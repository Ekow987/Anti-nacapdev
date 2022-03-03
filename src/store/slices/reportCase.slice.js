import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  case: {}
};

export const reportSlice = createSlice({
  name: "reportCase",
  initialState,
  reducers: {
    reportCase: (state, action) => {
      state.case = action.payload;
    },
    clearCase: (state) => {
      state.case = {};
    }
  }
});

export const { reportCase, clearCase } = reportSlice.actions;

export default reportSlice.reducer;

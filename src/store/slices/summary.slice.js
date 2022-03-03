import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  all: {}
};

export const reportSlice = createSlice({
  name: "summary",
  initialState,
  reducers: {
    setSummary: (state, action) => {
      state.all = action.payload;
    }
  }
});

export const { setSummary } = reportSlice.actions;

export default reportSlice.reducer;

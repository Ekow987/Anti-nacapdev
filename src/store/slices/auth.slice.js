import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  staff: {}
};

export const authSlice = createSlice({
  name: "Auth",
  initialState,
  reducers: {
    login: (state, action) => {
      state.staff = action.payload;
    },
    logout: (state) => {
      state.staff = {};
    }
  }
});

export const { login, logout } = authSlice.actions;

export default authSlice.reducer;

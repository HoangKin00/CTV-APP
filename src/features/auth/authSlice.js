import { createSlice } from "@reduxjs/toolkit";
import { login } from "./authApi";

const initialState = {
  loaded: false,
  loading: false,
  currentUser: null
};
const authSlice = createSlice({
  name: "auth",
  initialState,
  extraReducers: (builder) => {
    builder
      .addCase(login.pending, (state, action) => {
        state.loading = true;
      })
      .addCase(login.fulfilled, (state, action) => {
        console.log("action: ", action.payload);
        state.loading = false;
        state.loaded = true;
        state.currentUser = action.payload;
        localStorage.setItem("token", action.payload.token);
      })
      .addCase(login.rejected, (state, action) => {
        state.loading = false;
        state.loaded = false;
        state.currentUser = action.error;
      });
  }
});
export default authSlice;

export const loadingAuthSelector = (state) => state.auth.loading;
export const loadedAuthSelector = (state) => state.auth.loaded;
export const currentUserSelector = (state) => state.auth.currentUser;

import { configureStore } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import authSlice from "../features/auth/authSlice";

const rootReducer = combineReducers({
  auth: authSlice.reducer
});
const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false })
});
export default store;

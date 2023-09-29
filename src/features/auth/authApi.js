import { createAsyncThunk } from "@reduxjs/toolkit";
const data = [
  { email: "hau@sci.com", password: "12345", token: "123", role: "admin" },
  { email: "duc@sci.com", password: "123456aA", token: "456", role: "ctv" },
  { email: "quang@sci.com", password: "12345", token: "789", role: "giamdoc" }
];
export const login = createAsyncThunk("auth/login", async (body) => {
  return data.find((item) => item.email === body.email);
});

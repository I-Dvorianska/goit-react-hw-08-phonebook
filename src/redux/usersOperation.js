import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
// import { postNewUser } from "../contactsApi";

const token = {
  set(token) {
    axios.defaults.headers.common.Autorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Autorization = "";
  },
};

export const registerNewUser = createAsyncThunk(
  "/user/register",
  async ({ userName, userEmail, userPassword }, { rejectWithValue }) => {
    console.log(userName, userEmail, userPassword);
    try {
      const { data } = await axios.post("/users/signup", {
        name: userName,
        email: userEmail,
        password: userPassword,
      });
      // const { data } = await postNewUser(userData);
      token.set(data.token);
      console.log(data);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

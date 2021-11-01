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
  async (userObj, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/users/signup",
        data: userObj,
      });
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios({
        method: "post",
        url: "/users/login",
        data: userData,
      });
      token.set(data.token);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import toast from "react-hot-toast";

axios.defaults.baseURL = "https://connections-api.herokuapp.com";

const token = {
  set(token) {
    axios.defaults.headers.common.Authorization = `Bearer ${token}`;
  },
  unset() {
    axios.defaults.headers.common.Authorization = "";
  },
};

export const registerNewUser = createAsyncThunk(
  "user/register",
  async (userObj, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/signup", userObj);
      token.set(data.token);
      return data;
    } catch (error) {
      if (error.response.data.name === "MongoError") {
        toast.error("This email address is already being used");
      }
      return rejectWithValue(error.message);
    }
  }
);

export const loginUser = createAsyncThunk(
  "user/login",
  async (userData, { rejectWithValue }) => {
    try {
      const { data } = await axios.post("/users/login", userData);
      token.set(data.token);
      return data;
    } catch (error) {
      toast.error("Invalid email or password");
      return rejectWithValue(error.message);
    }
  }
);

export const logout = createAsyncThunk(
  "user/logout",
  async (_, { rejectWithValue }) => {
    try {
      await axios.post("/users/logout");
      token.unset();
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const fetchCurrentUser = createAsyncThunk(
  "user/refresh",
  async (_, thunkAPI) => {
    const state = thunkAPI.getState();
    const persistedToken = await state.auth.token;

    if (persistedToken === null) {
      return thunkAPI.rejectWithValue();
    } else {
      token.set(persistedToken);
      try {
        const { data } = await axios.get("/users/current");
        return data;
      } catch (error) {
        return thunkAPI.rejectWithValue(error.message);
      }
    }
  }
);

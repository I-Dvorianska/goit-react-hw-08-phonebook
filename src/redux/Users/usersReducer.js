import { createReducer, combineReducers } from "@reduxjs/toolkit";
import {
  registerNewUser,
  loginUser,
  logout,
  fetchCurrentUser,
} from "./usersOperation";

const userReducer = createReducer(
  { name: "", email: "" },
  {
    [registerNewUser.fulfilled]: (_, action) => ({
      name: action.payload.user.name,
      email: action.payload.user.email,
    }),
    [loginUser.fulfilled]: (_, action) => ({
      name: action.payload.user.name,
      email: action.payload.user.email,
    }),
    [logout.fulfilled]: () => ({ name: "", email: "" }),
    [fetchCurrentUser.fulfilled]: (_, action) => ({
      name: action.payload.name,
      email: action.payload.email,
    }),
  }
);

const token = createReducer(null, {
  [registerNewUser.fulfilled]: (_, action) => action.payload.token,
  [loginUser.fulfilled]: (_, action) => action.payload.token,
  [logout.fulfilled]: () => null,
});

const isLoggedIn = createReducer(false, {
  [registerNewUser.fulfilled]: () => true,
  [loginUser.fulfilled]: () => true,
  [logout.fulfilled]: () => false,
  [fetchCurrentUser.fulfilled]: () => true,
});

const isUserFetched = createReducer(false, {
  [fetchCurrentUser.rejected]: () => false,
  [fetchCurrentUser.fulfilled]: () => false,
  [fetchCurrentUser.pending]: () => true,
});

const auth = combineReducers({
  user: userReducer,
  token,
  isLoggedIn,
  isUserFetched,
});
export default auth;

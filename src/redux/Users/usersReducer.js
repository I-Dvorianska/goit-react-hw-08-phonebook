import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { registerNewUser, loginUser, logout } from "./usersOperation";

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
  }
);

const token = createReducer("", {
  [registerNewUser.fulfilled]: (_, action) => action.payload.token,
  [loginUser.fulfilled]: (_, action) => action.payload.token,
  [logout.fulfilled]: () => "",
});

const isLoggedIn = createReducer(false, {
  [registerNewUser.fulfilled]: () => true,
  [loginUser.fulfilled]: () => true,
  [logout.fulfilled]: () => false,
});

const auth = combineReducers({
  user: userReducer,
  token,
  isLoggedIn,
});
export default auth;

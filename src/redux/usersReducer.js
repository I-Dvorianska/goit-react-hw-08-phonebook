import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { registerNewUser, loginUser } from "./usersOperation";

const userReducer = createReducer(
  {},
  {
    [registerNewUser.fulfilled]: (_, action) => ({
      name: action.payload.user.name,
      email: action.payload.user.email,
    }),
    [loginUser.fulfilled]: (_, action) => ({
      name: action.payload.user.name,
      email: action.payload.user.email,
    }),
  }
);

const token = createReducer("", {
  [registerNewUser.fulfilled]: (_, action) => action.payload.token,
  [loginUser.fulfilled]: (_, action) => action.payload.token,
});

const isLoggedIn = createReducer(false, {
  [registerNewUser.fulfilled]: () => true,
  [registerNewUser.rejected]: () => false,
  [loginUser.fulfilled]: () => true,
  [loginUser.rejected]: () => false,
});

const auth = combineReducers({
  user: userReducer,
  token,
  isLoggedIn,
});
export default auth;

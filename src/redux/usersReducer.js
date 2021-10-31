import { createReducer, combineReducers } from "@reduxjs/toolkit";
import { registerNewUser } from "./usersOperation";

const userReducer = createReducer(
  {},
  {
    [registerNewUser.fulfilled]: (_, action) => ({
      name: action.payload.name,
      email: action.payload.email,
    }),
  }
);

const isLoggedIn = createReducer(false, {
  [registerNewUser.fulfilled]: true,
  [registerNewUser.rejected]: false,
});

const authReducers = combineReducers({
  user: userReducer,
  isLoggedIn,
});
export default authReducers;

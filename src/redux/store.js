import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";
import authReducers from "./usersReducer";

const rootReducer = combineReducers({
  contacts: contactsReducer,
  auth: authReducers,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

export { store };

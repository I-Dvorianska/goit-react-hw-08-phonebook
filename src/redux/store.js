import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "./contactsReducer";
import auth from "./usersReducer";

const rootReducer = combineReducers({
  auth,
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

export { store };

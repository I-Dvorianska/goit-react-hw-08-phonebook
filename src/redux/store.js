import { configureStore, combineReducers } from "@reduxjs/toolkit";
import contactsReducer from "../redux/Contacts/contactsReducer";
import auth from "../redux/Users/usersReducer";

const rootReducer = combineReducers({
  auth,
  contacts: contactsReducer,
});

const store = configureStore({
  reducer: rootReducer,
  devTools: process.env.NODE_ENV === "development",
});

export { store };

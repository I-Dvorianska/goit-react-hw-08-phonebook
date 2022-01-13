import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import { getFilterName } from "../Contacts/actions";
import {
  fetchContacts,
  addNewContact,
  deleteContact,
} from "./contactsOperation";

const itemReducer = createReducer([], {
  [fetchContacts.fulfilled]: (_, action) => action.payload,
  [addNewContact.fulfilled]: (state, action) => [action.payload, ...state],
  [deleteContact.fulfilled]: (state, action) =>
    state.filter(({ id }) => id !== action.payload),
});

const filterReducer = createReducer("", {
  [getFilterName]: (state, action) => (state = action.payload),
});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
});

export default contactsReducer;

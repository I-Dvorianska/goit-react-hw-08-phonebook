import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import {
  getFilterName,
  incrementPageNumber,
  resetPage,
} from "../Contacts/actions";
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

const pageReducer = createReducer(0, {
  [incrementPageNumber]: (state, action) => (state = state + action.payload),
  [resetPage]: (state, action) => (state = action.payload),
});

const contactsReducer = combineReducers({
  items: itemReducer,
  filter: filterReducer,
  page: pageReducer,
});

export default contactsReducer;

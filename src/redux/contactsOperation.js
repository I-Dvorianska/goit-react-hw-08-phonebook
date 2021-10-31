import { createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAllContacts,
  postContact,
  deleteContactById,
} from "../contactsApi";

export const fetchContacts = createAsyncThunk(
  "contacts/fetchContacts",
  async (_, { rejectWithValue }) => {
    try {
      const contacts = await fetchAllContacts();
      console.log(contacts.data);
      return contacts.data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const addNewContact = createAsyncThunk(
  "contacts/postContact",
  async (contactObj, { rejectWithValue }) => {
    try {
      const { data } = await postContact(contactObj);
      return data;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

export const deleteContact = createAsyncThunk(
  "contacts/deleteContact",
  async (contactId, { rejectWithValue }) => {
    try {
      await deleteContactById(contactId);
      return contactId;
    } catch (error) {
      return rejectWithValue(error.message);
    }
  }
);

import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;
export const getPage = (state) => state.contacts.page;

export const visibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    if (contacts !== []) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return contacts;
  }
);

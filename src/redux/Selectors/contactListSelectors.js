import { createSelector } from "@reduxjs/toolkit";

export const getFilter = (state) => state.contacts.filter;
export const getContacts = (state) => state.contacts.items;

export const visibleContacts = createSelector(
  [getFilter, getContacts],
  (filter, contacts) => {
    // console.log(contacts);

    if (contacts !== []) {
      return contacts.filter((contact) =>
        contact.name.toLowerCase().includes(filter)
      );
    }
    return contacts;
  }
);

// export const visibleContacts = createSelector(
//   [getContacts, getFilter],
//   (contacts, userName) => {
//     if (contacts) {
//       return contacts.filter((item) =>
//         item.name.toLowerCase().includes(userName.toLowerCase())
//       );
//     }
//   }
// );

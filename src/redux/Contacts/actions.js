import { createAction } from "@reduxjs/toolkit";

export const getFilterName = createAction("contact/filterContacts");
export const incrementPageNumber = createAction("contact/incrementPageNumber");
export const resetPage = createAction("contact/resetPage");

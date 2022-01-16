import { createAction } from "@reduxjs/toolkit";

export const getFilterName = createAction("contact/filterContacts");
export const getPageNumber = createAction("contact/pageNumber");
export const resetPage = createAction("contact/resetPage");

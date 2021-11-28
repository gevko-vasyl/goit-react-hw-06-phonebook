import { createAction } from "@reduxjs/toolkit";
// import { v4 as uuid } from 'uuid';
// const contactId = uuid();
import { nanoid } from "nanoid";

export const addContacts = createAction("contacts/add", (name, number) => ({
  payload: {
    id: nanoid(),
    name,
    number,
  },
}));
export const deleteContacts = createAction("contacts/delete");
export const changeFilter = createAction("filter/value");

import { nanoid } from "nanoid";

export const addContact = ({ name, number }) => {
  return {
    type: "contacts/addContact",
    payload: {
      id: nanoid(6),
      name,
      number,
    },
  };
};

export const deleteContact = contactId => {
  return {
    type: "contacts/deleteContact",
    payload: contactId,
  };
};


export const findContact = value => {
  return {
    type: "filter/findContact",
    payload: value,
  };
};
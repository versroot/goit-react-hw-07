import { createSlice, nanoid } from "@reduxjs/toolkit";
// slice is a substore, that handles specific part -> contacts in this case
// reducer is a function state -> action -> newState
// action is an object with type and payload. Type - description, payload - data
const contactsSlice = createSlice({
  name: "contacts",
  initialState: {
    items: [],
  },
  reducers: {
    addContact: {
      reducer(state, action) {
        state.items.push(action.payload);
      },
      prepare(name, number) {
        return {
          payload: {
            id: nanoid(),
            name,
            number,
          },
        };
      },
    },
    deleteContact(state, action) {
      state.items = state.items.filter(
        (contact) => contact.id !== action.payload // filter all contacts and return where id !== action.payload (id of contact to delete)
      );
    },
  },
});

export const { addContact, deleteContact } = contactsSlice.actions;
export default contactsSlice.reducer;

import { createSlice } from '@reduxjs/toolkit';
import {
  fetchContacts,
  addContact,
  updateContact,
  deleteContact,
} from './contactsThunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
};

const initialState = {
  contacts: {
    items: [],
    isLoading: false,
    error: null,
  },
  filter: '',
};

export const contactsSlice = createSlice({
  name: 'contactsState',
  initialState,
  reducers: {
    addFilteredContact: (state, action) => {
      state.filter = state.contacts.items.filter(el =>
        el.name.toLowerCase().includes(action.payload.toLowerCase().trim())
      );

      if (action.payload === '') {
        state.filter = '';
      }
    },

    deleteFilteredContact: (state, action) => {
      if (state.filter) {
        const index = state.filter.findIndex(el => el.id === action.payload);
        state.filter.splice(index, 1);
      }
    },
  },
  extraReducers: {
    [fetchContacts.pending]: handlePending,
    [fetchContacts.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      state.contacts.items = action.payload;
    },
    [fetchContacts.rejected]: handleRejected,

    [addContact.pending]: handlePending,
    [addContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;

      state.contacts.items.push(action.payload);
    },
    [addContact.rejected]: handleRejected,

    [updateContact.pending]: handlePending,
    [updateContact.fulfilled](state, action) {
      console.log(action.payload);
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.items.findIndex(
        el => el.id === action.payload.id
      );
      state.contacts.items.splice(index, 1, action.payload);
    },
    [updateContact.rejected]: handleRejected,

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.items.findIndex(
        el => el.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { addFilteredContact, deleteFilteredContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;

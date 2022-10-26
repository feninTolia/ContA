import { createSlice } from '@reduxjs/toolkit';
import { fetchContacts, addContact, deleteContact } from './contactsThunks';

const handlePending = state => {
  state.isLoading = true;
};

const handleRejected = (state, action) => {
  state.isLoading = false;
  state.error = action.payload;
  console.log(state.error);
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

    [deleteContact.pending]: handlePending,
    [deleteContact.fulfilled](state, action) {
      state.isLoading = false;
      state.error = null;
      const index = state.contacts.items.findIndex(
        task => task.id === action.payload.id
      );
      state.contacts.items.splice(index, 1);
    },
    [deleteContact.rejected]: handleRejected,
  },
});

export const { addFilteredContact, deleteFilteredContact } =
  contactsSlice.actions;

export default contactsSlice.reducer;

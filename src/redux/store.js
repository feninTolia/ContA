import { configureStore } from '@reduxjs/toolkit';
import contactsReducer from '../redux/contactsSlice';

export const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  devTools: process.env.NODE_ENV === 'development',
});

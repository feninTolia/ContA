import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { fetchContacts, addContact } from 'redux/contactsThunks';
import { selectContacts, selectContactsItems } from 'redux/selectors';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContactForm = newContact => {
    if (contacts && contacts.some(el => el.phone === newContact.phone)) {
      window.alert(`${newContact.phone} is already exist in your phonebook`);
      return;
    }

    if (contacts && contacts.some(el => el.name === newContact.name)) {
      window.alert(`${newContact.name} is already exist in your phonebook`);
      return;
    }

    dispatch(addContact(newContact));
  };

  return (
    <>
      <h1 className="title">Phonebook</h1>
      {isLoading && (
        <img
          src="https://img.icons8.com/color/48/000000/iphone-spinner--v1.png"
          alt=""
          className="rotate"
        />
      )}
      <ContactForm onAddContact={handleAddContactForm} />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 0 && <Filter />}
      <ContactList />
      {error && <h2>Oooops, smth went wrong (×﹏×)</h2>}
    </>
  );
};

export default App;

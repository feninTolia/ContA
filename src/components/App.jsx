import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ContactForm from './ContactForm/ContactForm';
import Filter from './Filter/Filter';
import ContactList from './ContactList/ContactList';
import { fetchContacts, addContact } from 'redux/contactsThunks';
import { selectContacts, selectContactsItems } from 'redux/selectors';
import { logIn, logOut, refreshUser } from 'redux/auth/authThunks';
import SignInForm from './SignInForm/SignInForm';
import LogInForm from './LogInForm/LogInForm';

const App = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const userEmail = useSelector(state => state.auth.user.email);
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(refreshUser());
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleLogin = () => {
    dispatch(
      logIn({
        email: 'email112adfva3123@mail.com',
        password: 'ytrewq12csdc3456456123123',
      })
    );
  };

  const handleLogOut = () => {
    dispatch(logOut());
  };

  const handleAddContactForm = newContact => {
    if (contacts && contacts.some(el => el.number === newContact.number)) {
      window.alert(`${newContact.number} is already exist in your phonebook`);
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
      <button onClick={handleLogOut}>Log out</button>
      <p>🙋‍♀️: {userEmail} </p>

      <h1 className="title">Phonebook</h1>
      {isLoading && (
        <img
          src="https://img.icons8.com/color/48/000000/iphone-spinner--v1.png"
          alt="🐡"
          className="rotate"
        />
      )}

      <br />
      <SignInForm />
      <LogInForm />
      <br></br>

      <ContactForm onAddContact={handleAddContactForm} />
      {contacts.length > 0 && <h2>Contacts</h2>}
      {contacts.length > 0 && <Filter />}
      <ContactList />
      {error && <h2>Oooops, smth went wrong (×﹏×)</h2>}
    </>
  );
};

export default App;

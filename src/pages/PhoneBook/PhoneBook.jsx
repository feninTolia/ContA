import { useEffect, useState } from 'react';

import { useSelector, useDispatch } from 'react-redux';
import { selectContacts, selectContactsItems } from 'redux/selectors';
import { fetchContacts, addContact } from 'redux/contactsThunks';

import ContactForm from 'components/ContactForm/ContactForm';
import Filter from 'components/Filter/Filter';
import ContactList from 'components/ContactList/ContactList';

import css from 'pages/PhoneBook/PhoneBook.module.css';

const PhoneBook = () => {
  const [isSucceed, setIsSucceed] = useState(false);
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const { isLoading, error } = useSelector(selectContacts);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  const handleAddContactForm = newContact => {
    if (contacts && contacts.some(el => el.number === newContact.number)) {
      window.alert(`${newContact.number} is already exist in your phonebook`);
      return;
    }

    if (contacts && contacts.some(el => el.name === newContact.name)) {
      window.alert(`${newContact.name} is already exist in your phonebook`);
      return;
    }

    setIsSucceed(false);

    dispatch(addContact(newContact))
      .unwrap()
      .then(() => {
        setIsSucceed(true);
        setTimeout(() => setIsSucceed(false), 1900);
      });
  };

  return (
    <div className={css.wrapper}>
      <h1 className={css.title}>Phonebook</h1>
      {isSucceed && (
        <img
          src="https://img.icons8.com/color/48/000000/checkmark--v1.png"
          alt="done"
          className={css.done}
        ></img>
      )}
      {isLoading && (
        <img
          src="https://img.icons8.com/color/48/000000/iphone-spinner--v1.png"
          alt="🐡"
          className="rotate"
        />
      )}

      <div className={css.contentWrapper}>
        <ContactForm onAddContact={handleAddContactForm} />

        <div className={css.contactsListWrapper}>
          {contacts.length > 0 && (
            <>
              <h2>Contacts</h2>
              <Filter />
            </>
          )}
          <ContactList />
          {error && <h2>`Oooops, smth went wrong (×﹏×)`</h2>}
        </div>
      </div>
    </div>
  );
};

export default PhoneBook;

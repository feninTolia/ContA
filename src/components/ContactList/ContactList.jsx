import { useSelector, useDispatch } from 'react-redux';
import ContactItem from './ContactItem';
import { deleteFilteredContact } from 'redux/contactsSlice';
import { deleteContact } from 'redux/contactsThunks';
import { selectContactsItems, selectFilterdContacts } from 'redux/selectors';

const ContactList = () => {
  const dispatch = useDispatch();
  const contacts = useSelector(selectContactsItems);
  const filter = useSelector(selectFilterdContacts);

  const handleDeleteContact = userId => {
    dispatch(deleteContact(userId));
    dispatch(deleteFilteredContact(userId));
  };

  return (
    <ul>
      {(filter || contacts)?.map(({ id, name, phone }) => (
        <ContactItem
          key={id}
          name={name}
          number={phone}
          onDeleteContact={handleDeleteContact}
          id={id}
        />
      ))}
    </ul>
  );
};

export default ContactList;

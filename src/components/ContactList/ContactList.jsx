import { useSelector, useDispatch } from 'react-redux';
import { deleteFilteredContact } from 'redux/contactsSlice';
import { deleteContact } from 'redux/contactsThunks';
import { selectContactsItems, selectFilterdContacts } from 'redux/selectors';

import ContactItem from './ContactItem';

import PropTypes from 'prop-types';

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
      {(filter || contacts)?.map(({ id, name, number }) => (
        <ContactItem
          key={id}
          name={name}
          number={number}
          onDeleteContact={handleDeleteContact}
          id={id}
        />
      ))}
    </ul>
  );
};

ContactList.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default ContactList;

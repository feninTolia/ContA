import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import UpdateContact from 'components/UpdateContact/UpdateContact';

import PropTypes from 'prop-types';

import css from 'components/ContactList/ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  const { isLoading } = useSelector(selectContacts);

  return (
    <li className={css.contactItem}>
      <a href={`tel:${number}`}>
        <img
          src="https://img.icons8.com/sf-ultralight/50/40C057/phone.png"
          alt="call"
          width="32px"
          className={css.phoneBtn}
        />
      </a>
      <span className={css.name}>{name} </span>
      <span>{number} </span>
      <UpdateContact id={id} name={name} number={number} />
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={isLoading && true}
        className={css.deleteBtn}
      >
        <img
          src="https://img.icons8.com/windows/32/FA5252/multiply.png"
          alt="delete"
          className={css.deleteIcon}
        />
      </button>
    </li>
  );
};

ContactItem.propTypes = {
  id: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  number: PropTypes.string.isRequired,
  onDeleteContact: PropTypes.func.isRequired,
};

export default ContactItem;

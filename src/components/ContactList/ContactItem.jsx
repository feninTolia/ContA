import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';
import css from 'components/ContactList/ContactItem.module.css';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  const { isLoading } = useSelector(selectContacts);

  return (
    <li className={css.contactItem}>
      <span></span>
      <span>{name} </span>
      <span>{number} </span>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={isLoading && true}
        className={css.deleteBtn}
      >
        ❌
      </button>
    </li>
  );
};

export default ContactItem;

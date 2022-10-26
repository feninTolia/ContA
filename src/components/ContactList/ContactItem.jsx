import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

const ContactItem = ({ id, name, number, onDeleteContact }) => {
  const { isLoading } = useSelector(selectContacts);

  return (
    <li>
      <span>{name} </span>
      <span>{number} </span>
      <button
        type="button"
        onClick={() => onDeleteContact(id)}
        disabled={isLoading && true}
      >
        dELeTe 🗑️
      </button>
    </li>
  );
};

export default ContactItem;

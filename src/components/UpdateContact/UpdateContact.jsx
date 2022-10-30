import { useState } from 'react';

import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contactsThunks';
import { selectIsLoading } from 'redux/selectors';

import PropTypes from 'prop-types';

import css from 'components/UpdateContact/UpdateContact.module.css';

const UpdateContact = ({ id, name, number }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [formData, setFormData] = useState({ name: '', number: '' });
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleInfoBtnClick = () => {
    setFormData({ name, number });
    setIsFormOpen(true);
  };

  const handleCloseBtnClick = () => {
    setIsFormOpen(false);
  };

  const handleInputsChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleUpdateContact = userId => e => {
    if (
      e.target.form[0].value.trim() === '' ||
      e.target.form[1].value.trim() === ''
    ) {
      setIsFormOpen(false);
      return;
    }

    dispatch(
      updateContact({ userId, name: formData.name, number: formData.number })
    )
      .unwrap()
      .then(() => setIsFormOpen(false));
  };

  return (
    <div>
      <button
        type="button"
        onClick={handleInfoBtnClick}
        className={css.updateBtn}
      >
        <img
          src="https://img.icons8.com/android/24/228BE6/info.png"
          alt="info"
          width="20px"
          className={css.updateIcon}
        />
      </button>
      {isFormOpen && (
        <div className={css.backdrop}>
          <img
            src="https://img.icons8.com/windows/32/FA5252/multiply.png"
            alt="close"
            className={css.closeBtn}
            onClick={handleCloseBtnClick}
          />
          <form className={css.updateForm}>
            <label className={css.label}>
              Updated name
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleInputsChange}
                className={css.input}
              />
            </label>
            <label className={css.label}>
              Updated number
              <input
                type="tel"
                name="number"
                value={formData.number}
                onChange={handleInputsChange}
                className={css.input}
              />
            </label>
            <button
              type="button"
              onClick={handleUpdateContact(id)}
              className={css.button}
            >
              {isLoading ? ' Updating... ' : 'Update contact'}
            </button>
          </form>
        </div>
      )}
    </div>
  );
};

UpdateContact.propTypes = {
  id: PropTypes.string,
  name: PropTypes.string,
  number: PropTypes.string,
};

export default UpdateContact;

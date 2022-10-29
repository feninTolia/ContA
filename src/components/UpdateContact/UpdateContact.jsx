import { useState } from 'react';
import css from 'components/UpdateContact/UpdateContact.module.css';
import { useDispatch, useSelector } from 'react-redux';
import { updateContact } from 'redux/contactsThunks';
import { selectIsLoading } from 'redux/selectors';

const UpdateContact = ({ id }) => {
  const [isFormOpen, setIsFormOpen] = useState(false);
  const dispatch = useDispatch();
  const isLoading = useSelector(selectIsLoading);

  const handleInfoBtnClick = () => {
    setIsFormOpen(true);
  };

  const handleCloseBtnClick = () => {
    setIsFormOpen(false);
  };

  const handleUpdateContact = userId => () => {
    console.log(userId);
    dispatch(updateContact({ userId, name: 'test2', number: '0100000101' }))
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
              Updated phone
              <input
                type="text"
                name=""
                // value={'1'}
                // onChange={'1'}
                className={css.input}
              />
            </label>
            <label className={css.label}>
              Updated number
              <input
                type="text"
                name=""
                // value={'1'}
                // onChange={'2'}
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

export default UpdateContact;

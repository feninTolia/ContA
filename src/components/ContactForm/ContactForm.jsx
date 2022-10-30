import { useSelector } from 'react-redux';
import { selectContacts } from 'redux/selectors';

import { Formik } from 'formik';
import { DisplayingErrorMessagesSchema } from './yupValidation';

import PropTypes from 'prop-types';

import {
  AddContactForm,
  Input,
  AddContactBtn,
  ErrorMesage,
} from './ContactForm.styled';

const ContactForm = ({ onAddContact }) => {
  const { isLoading } = useSelector(selectContacts);

  return (
    <Formik
      initialValues={{ name: '', number: '' }}
      validationSchema={DisplayingErrorMessagesSchema}
      onSubmit={(values, actions) => {
        actions.resetForm();
        onAddContact(values);
      }}
    >
      {({ errors, touched }) => (
        <AddContactForm noValidate>
          <label htmlFor="name">
            Name
            <Input type="text" name="name" id="name" required />
            {touched.name && errors.name && (
              <ErrorMesage>{errors.name}</ErrorMesage>
            )}
          </label>

          <label htmlFor="number">
            Number
            <Input type="tel" name="number" id="number" required />
            {touched.number && errors.number && (
              <ErrorMesage>{errors.number}</ErrorMesage>
            )}
          </label>

          <AddContactBtn type="submit" disabled={isLoading && true}>
            Add contact
          </AddContactBtn>
        </AddContactForm>
      )}
    </Formik>
  );
};

ContactForm.propTypes = {
  onAddContact: PropTypes.func.isRequired,
};

export default ContactForm;

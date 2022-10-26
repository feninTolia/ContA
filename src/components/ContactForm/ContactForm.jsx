import { Formik } from 'formik';
import { useSelector } from 'react-redux';
import * as Yup from 'yup';
import {
  AddContactForm,
  Input,
  AddContactBtn,
  ErrorMesage,
} from './ContactForm.styled';
import { selectContacts } from 'redux/selectors';

const DisplayingErrorMessagesSchema = Yup.object().shape({
  name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .required('Please enter the required field')
    .matches(/^[aA-zZ\s]+$/, 'Only alphabets are allowed for this field '),
  number: Yup.string()
    .matches(
      /^(?:\+38)?(0\d{9})$/,
      'Phone number is not valid. For example 0XXXXXXXXX'
    )
    .required('Please enter the required field'),
});

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

export default ContactForm;

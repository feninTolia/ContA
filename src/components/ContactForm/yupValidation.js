import * as Yup from 'yup';

export const DisplayingErrorMessagesSchema = Yup.object().shape({
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

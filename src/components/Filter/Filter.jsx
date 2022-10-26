import { Formik, Form } from 'formik';
import { Input, FilterLabel } from './Filter.styled';
import { useDispatch } from 'react-redux';
import { addFilteredContact } from 'redux/contactsSlice';

const Filter = () => {
  const dispatch = useDispatch();

  return (
    <Formik
      initialValues={{ filter: '' }}
      onSubmit={actions => {
        actions.resetForm();
      }}
    >
      {({ handleChange }) => (
        <Form>
          <FilterLabel htmlFor="filter">
            Find contacts by the name
            <Input
              name="filter"
              id="filter"
              type="text"
              onChange={e => {
                dispatch(addFilteredContact(e.target.value));
                handleChange(e);
              }}
            />
          </FilterLabel>
        </Form>
      )}
    </Formik>
  );
};

export default Filter;

import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
  width: 30vw;

  font-size: 28px;
  box-sizing: border-box;
  margin-top: 10px;
  border-radius: 10px;
  border: none;
  background-color: #999;
  padding: 5px 10px;
  color: white;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

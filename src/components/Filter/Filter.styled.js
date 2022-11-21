import styled from 'styled-components';
import { Field } from 'formik';

export const Input = styled(Field)`
  font-size: 24px;
  padding: 10px 20px;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 28px;
  border: none;
  background-color: rgba(235, 228, 232, 0.85);
  -webkit-backdrop-filter: blur(15px) saturate(86%);
  backdrop-filter: blur(15px) saturate(86%);
  color: #000;
`;

export const FilterLabel = styled.label`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

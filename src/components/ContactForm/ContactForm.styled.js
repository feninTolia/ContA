import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 600px;
  margin: 0px auto;
  padding: 20px;
  margin-bottom: 30px;

  font-size: 24px;
  color: #c9d1d9;
  border-radius: 10px;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  font-size: 24px;
  padding: 10px 20px;
  margin-top: 10px;
  margin-bottom: 20px;
  border-radius: 10px;
  font-size: 28px;
  border: none;
  background-color: #999;

  color: #2c2c2c;
`;

export const AddContactBtn = styled.button`
  width: 50%;
  margin-top: 20px;
  padding: 10px 20px;
  align-self: center;

  font-size: 24px;
  font-weight: lighter;
  color: black;
  border-radius: 10px;
  border: none;
  transition: 150ms linear;
  background-color: #6a8623;

  :hover {
    background-color: #566d1c;
  }
`;

export const ErrorMesage = styled.div`
  padding-left: 10px;
  font-size: 18px;
  color: #bb0f0f;
`;

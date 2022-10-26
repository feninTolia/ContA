import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 50vw;
  margin: 15px auto;
  padding: 20px;
  margin-bottom: 30px;

  font-family: monospace;
  color: white;
  /* font-size: 32px; */
  background-color: #444;
  border-radius: 15px;
`;

export const Input = styled(Field)`
  box-sizing: border-box;
  width: 100%;
  margin-top: 10px;
  border-radius: 10px;
  font-size: 28px;
  border: none;
  background-color: #999;
  padding: 5px 10px;
  color: white;
`;

export const AddContactBtn = styled.button`
  width: 50%;
  padding: 10px 20px;
  align-self: center;

  font-family: monospace;
  font-size: 28px;
  color: black;
  border-radius: 10px;
  border: none;
  transition: 250ms linear;

  :hover {
    box-shadow: 0 0 10px 2px white;
    color: #555;
  }
`;

export const ErrorMesage = styled.div`
  margin-top: 10px;
  padding-left: 10px;
  font-size: 18px;
  color: red;
`;

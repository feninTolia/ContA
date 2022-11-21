import styled from 'styled-components';
import { Form, Field } from 'formik';

export const AddContactForm = styled(Form)`
  display: flex;
  flex-direction: column;
  gap: 20px;

  width: 400px;
  /* margin: 0px auto; */
  padding: 20px;
  margin-bottom: 30px;

  background-color: #fff;

  font-size: 24px;
  color: #000;
  border-radius: 10px;

  box-shadow: rgba(173, 173, 208, 0.2) 0px 7px 29px 0px;
  transition: 250ms;

  &:hover {
    box-shadow: rgba(92, 92, 211, 0.2) 0px 7px 29px 0px;
    scale: 1.02;
  }
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
  background-color: rgba(235, 228, 232, 0.85);
  backdrop-filter: blur(15px) saturate(86%);

  color: #000;
`;

export const AddContactBtn = styled.button`
  width: 50%;
  margin-bottom: 10px;
  padding: 10px 20px;
  align-self: center;

  font-size: 24px;
  font-weight: lighter;
  color: #fff;
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

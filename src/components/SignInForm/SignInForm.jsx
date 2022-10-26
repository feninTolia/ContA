import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunks';

const SignInForm = () => {
  const [signInData, setSignInData] = useState({
    name: '',
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleRegisterBtnClicK = e => {
    e.preventDefault();
    console.log(signInData);
    dispatch(register(signInData));
  };

  const handleInputsChange = e => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3>Sign in form</h3>
      <form>
        <label>
          Name
          <input
            type="text"
            name="name"
            onChange={handleInputsChange}
            value={signInData.name}
          />
        </label>
        <br />
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={handleInputsChange}
            value={signInData.email}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={handleInputsChange}
            value={signInData.password}
          />
        </label>
        <br />
        <button type="button" onClick={handleRegisterBtnClicK}>
          Sign in
        </button>
      </form>
    </>
  );
};

export default SignInForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authThunks';

const LogInForm = () => {
  const [logInData, setLogInData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleLogInBtnClicK = e => {
    e.preventDefault();
    console.log(logInData);
    dispatch(logIn(logInData));
  };

  const handleInputsChange = e => {
    setLogInData({ ...logInData, [e.target.name]: e.target.value });
  };

  return (
    <>
      <h3>Log in</h3>
      <form>
        <label>
          Email
          <input
            type="email"
            name="email"
            onChange={handleInputsChange}
            value={logInData.email}
          />
        </label>
        <br />
        <label>
          Password
          <input
            type="password"
            name="password"
            onChange={handleInputsChange}
            value={logInData.password}
          />
        </label>
        <br />
        <button type="button" onClick={handleLogInBtnClicK}>
          Log in
        </button>
      </form>
    </>
  );
};

export default LogInForm;

import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunks';
import css from 'components/SignInForm/SignInForm.module.css';

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
    <div className={css.wrapper}>
      <span className={css.logo}>🧚🏻‍♀️</span>
      <h3 className={css.title}>Sign in to ContA</h3>
      <form className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            onChange={handleInputsChange}
            value={signInData.name}
            className={css.input}
          />
        </label>
        <br />
        <label className={css.label}>
          Email
          <input
            type="email"
            name="email"
            onChange={handleInputsChange}
            value={signInData.email}
            className={css.input}
          />
        </label>
        <br />
        <label className={css.label}>
          Password
          <input
            type="password"
            name="password"
            onChange={handleInputsChange}
            value={signInData.password}
            className={css.input}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={handleRegisterBtnClicK}
          className={css.button}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignInForm;

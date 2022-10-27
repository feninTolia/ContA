import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { logIn } from 'redux/auth/authThunks';
import css from 'pages/SignIn/SignIn.module.css';

//log in

const SignIn = () => {
  const initialState = {
    email: '',
    password: '',
  };
  const [signInData, setSignInData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSignInSubmit = e => {
    e.preventDefault();
    dispatch(logIn(signInData)).then(() => navigate('/PhoneBook'));

    setSignInData(initialState);
  };

  const handleInputsChange = e => {
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  return (
    <div className={css.wrapper}>
      <Link to={'/'} className={css.backLink}>
        ⬅
      </Link>
      <span className={css.logo}>🧚🏻‍♀️</span>
      <h1 className={css.title}>Sign in to ContA</h1>
      <form className={css.form}>
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
          onClick={handleSignInSubmit}
          className={css.button}
        >
          Sign in
        </button>
      </form>
    </div>
  );
};

export default SignIn;

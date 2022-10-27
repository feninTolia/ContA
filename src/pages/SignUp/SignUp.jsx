import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link, useNavigate } from 'react-router-dom';
import { register } from 'redux/auth/authThunks';
import css from 'pages/SignUp/SignUp.module.css';

//register
const SignUpPage = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };
  const navigate = useNavigate();
  const [signUpData, setSignUpData] = useState(initialState);
  const dispatch = useDispatch();
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleSigUpSubmit = e => {
    e.preventDefault();
    dispatch(register(signUpData)).then(() => isLoggedIn && navigate('/'));
    setSignUpData(initialState);
  };

  const handleInputsChange = e => {
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  return (
    <div className={css.wrapper}>
      <Link to={'/'} className={css.backLink}>
        ⬅
      </Link>
      <span className={css.logo}>🧚🏻‍♀️</span>
      <h3 className={css.title}>Sign up to ContA</h3>
      <form className={css.form}>
        <label className={css.label}>
          Name
          <input
            type="text"
            name="name"
            onChange={handleInputsChange}
            value={signUpData.name}
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
            value={signUpData.email}
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
            value={signUpData.password}
            className={css.input}
          />
        </label>
        <br />
        <button
          type="button"
          onClick={handleSigUpSubmit}
          className={css.button}
        >
          Sign up
        </button>
      </form>
    </div>
  );
};

export default SignUpPage;
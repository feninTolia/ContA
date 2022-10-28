import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
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
  const isRefreshing = useSelector(state => state.auth.isRefreshing);
  const token = useSelector(state => state.auth.token);

  const handleSignInSubmit = e => {
    e.preventDefault();
    if ((signInData.email && signInData.password) === '') {
      return;
    }
    dispatch(logIn(signInData)).then(() => token && navigate('/contacts'));
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
            minLength={4}
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
            required
            type="password"
            name="password"
            onChange={handleInputsChange}
            value={signInData.password}
            className={css.input}
          />
        </label>
        <br />
        <button
          type="submit"
          onClick={handleSignInSubmit}
          className={css.button}
        >
          Sign in
        </button>
      </form>
      <div className={css.signInSpiner}>
        {isRefreshing && (
          <img
            src="https://img.icons8.com/color/48/000000/iphone-spinner--v1.png"
            alt="🐡"
            className="rotate"
          />
        )}
      </div>
    </div>
  );
};

export default SignIn;

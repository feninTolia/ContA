import { useState } from 'react';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { register } from 'redux/auth/authThunks';
import { selectIsRefreshing } from 'redux/auth/selectors.auth';

import css from 'pages/SignUp/SignUp.module.css';

const SignUpPage = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [signUpData, setSignUpData] = useState(initialState);
  const [error, setError] = useState({ error: null });
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const isRefreshing = useSelector(selectIsRefreshing);

  const handleSigUpSubmit = e => {
    e.preventDefault();
    if ((signUpData.name && signUpData.email && signUpData.password) === '') {
      return;
    }
    dispatch(register(signUpData))
      .unwrap()
      .then(() => navigate('/'))
      .catch(err => setError({ error: err }));
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
      <div className={css.signInSpiner}>
        {isRefreshing && (
          <img
            src="https://img.icons8.com/color/48/000000/iphone-spinner--v1.png"
            alt="🐡"
            className="rotate"
          />
        )}
      </div>
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
      <div className={css.messageToast}>
        Already have an account?{' '}
        <Link to={'/login'} className={css.link}>
          Sign in →
        </Link>
      </div>
      <>
        {error.error && (
          <div className={css.erorToast}>
            This email address is already in use.
          </div>
        )}
      </>
    </div>
  );
};

export default SignUpPage;

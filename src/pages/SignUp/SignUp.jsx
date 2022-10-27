import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { register } from 'redux/auth/authThunks';
import css from 'pages/SignUp/SignUp.module.css';

//register
const SignUpPage = () => {
  const initialState = {
    name: '',
    email: '',
    password: '',
  };

  const [signUpData, setSignUpData] = useState(initialState);
  const dispatch = useDispatch();

  const handleSigUpSubmit = e => {
    e.preventDefault();
    console.log(signUpData);
    dispatch(register(signUpData));
    setSignUpData(initialState);
  };

  const handleInputsChange = e => {
    //! set prev ??????????????????????????????????????????
    setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
  };

  return (
    <div className={css.wrapper}>
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
          //! change on onSubmit???????????????????????
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

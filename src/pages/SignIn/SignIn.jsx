import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/authThunks';

//log in

const SignIn = () => {
  const [signInData, setSignInData] = useState({
    email: '',
    password: '',
  });
  const dispatch = useDispatch();

  const handleSignInSubmit = e => {
    e.preventDefault();
    console.log(signInData);
    dispatch(logIn(signInData));
  };

  const handleInputsChange = e => {
    //!set prev ????????????????????????????????
    setSignInData({ ...signInData, [e.target.name]: e.target.value });
  };

  //! onSubmit ?????????????????????????
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
        <button type="button" onClick={handleSignInSubmit}>
          Log in
        </button>
      </form>
    </>
  );
};

export default SignIn;

import { useEffect } from 'react';
import { Routes, Route, NavLink } from 'react-router-dom';
import HomePage from 'pages/HomePage/HomePage';
import SignUpPage from 'pages/SignUp/SignUp';
import SignIn from 'pages/SignIn/SignIn';
import PhoneBook from 'pages/PhoneBook/PhoneBook';
import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authThunks';
import SharedLayout from 'pages/SharedLayout/SharedLayout';

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <NavLink to="/">Home</NavLink>

      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/PhoneBook" element={<PhoneBook />} />
        </Route>
        <Route path="/SignUp" element={<SignUpPage />} />
        <Route path="/SignIn" element={<SignIn />} />
      </Routes>
    </>
  );
};

export default App;

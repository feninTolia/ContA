import { lazy, Suspense, useEffect } from 'react';

import { Routes, Route, Navigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { refreshUser } from 'redux/auth/authThunks';

import SharedLayout from 'pages/SharedLayout/SharedLayout';
import PrivatRoute from 'routes/PrivatRoute/PrivatRoute';
import PublicRoute from 'routes/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUp/SignUp'));
const SignIn = lazy(() => import('pages/SignIn/SignIn'));
const PhoneBook = lazy(() => import('pages/PhoneBook/PhoneBook'));

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <>
            <Route
              index
              element={
                <Suspense fallback={<div>...</div>}>
                  <HomePage />
                </Suspense>
              }
            />
            <Route element={<PrivatRoute />}>
              <Route
                path="/contacts"
                element={
                  <Suspense fallback={<div>...</div>}>
                    <PhoneBook />
                  </Suspense>
                }
              />
            </Route>
          </>
        </Route>

        <Route element={<PublicRoute />}>
          <Route
            path="/register"
            element={
              <Suspense fallback={<div>...</div>}>
                <SignUpPage />
              </Suspense>
            }
          />
          <Route
            path="/login"
            element={
              <Suspense fallback={<div>...</div>}>
                <SignIn />
              </Suspense>
            }
          />
        </Route>
        <Route path="*" element={<Navigate to="/" replace={true} />} />
      </Routes>
    </>
  );
};

export default App;

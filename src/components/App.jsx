import { lazy, Suspense, useEffect } from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { refreshUser } from 'redux/auth/authThunks';
import SharedLayout from 'pages/SharedLayout/SharedLayout';
import PrivatRoute from 'components/PrivatRoute/PrivatRoute';
import PublicRoute from 'components/PublicRoute/PublicRoute';

const HomePage = lazy(() => import('pages/HomePage/HomePage'));
const SignUpPage = lazy(() => import('pages/SignUp/SignUp'));
const SignIn = lazy(() => import('pages/SignIn/SignIn'));
const PhoneBook = lazy(() => import('pages/PhoneBook/PhoneBook'));

const App = () => {
  const dispatch = useDispatch();
  const isRefreshing = useSelector(state => state.auth.isRefreshing);

  useEffect(() => {
    dispatch(refreshUser());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          {!isRefreshing && (
            <>
              <Route
                index
                element={
                  <Suspense fallback={<div>Loading...</div>}>
                    <HomePage />
                  </Suspense>
                }
              />
              <Route element={<PrivatRoute />}>
                <Route
                  path="/PhoneBook"
                  element={
                    <Suspense fallback={<div>Loading...</div>}>
                      <PhoneBook />
                    </Suspense>
                  }
                />
              </Route>
            </>
          )}
        </Route>

        <Route element={<PublicRoute />}>
          <Route
            path="/SignUp"
            element={
              <Suspense fallback={<div>Loading...</div>}>
                <SignUpPage />
              </Suspense>
            }
          />
          <Route
            path="/SignIn"
            element={
              <Suspense fallback={<div>Loading...</div>}>
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

import { Outlet, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { logOut } from 'redux/auth/authThunks';
import css from 'pages/SharedLayout/SharedLayout.module.css';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(state => state.auth.user.email);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogOut = () => {
    dispatch(logOut()).then(() => navigate('/'));
  };
  return (
    <>
      <div className={css.wrapper}>
        <div>
          <NavLink to="/" end className={css.navItem}>
            Home
          </NavLink>
          <NavLink to="/PhoneBook" className={css.navItem}>
            PhoneBook
          </NavLink>
        </div>

        <div>
          {isLoggedIn ? (
            <>
              <span className={css.user}>🙋‍♀️ {userEmail} </span>
              <button onClick={handleLogOut} className={css.navItemMarked}>
                Log out
              </button>
            </>
          ) : (
            <>
              <NavLink to="/SignUp" className={css.navItem}>
                Sign Up
              </NavLink>
              <NavLink to="/SignIn" className={css.navItemMarked}>
                Sign In
              </NavLink>
            </>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};

export default SharedLayout;

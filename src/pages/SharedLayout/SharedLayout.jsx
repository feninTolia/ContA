import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import css from 'pages/SharedLayout/SharedLayout.module.css';

const SharedLayout = () => {
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

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
            <UserMenu />
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

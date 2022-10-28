import { Outlet, NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import UserMenu from 'components/UserMenu/UserMenu';
import css from 'pages/SharedLayout/SharedLayout.module.css';
import { selectToken } from 'redux/auth/selectors.auth';

const SharedLayout = () => {
  const isToken = useSelector(selectToken);

  return (
    <>
      <div className={css.wrapper}>
        <div>
          <NavLink to="/" end className={css.navItem}>
            Home
          </NavLink>
          <NavLink to="/contacts" className={css.navItem}>
            PhoneBook
          </NavLink>
        </div>

        <div>
          {isToken ? (
            <UserMenu />
          ) : (
            <>
              <NavLink to="/register" className={css.navItem}>
                Sign Up
              </NavLink>
              <NavLink to="/login" className={css.navItemMarked}>
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

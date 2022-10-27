import { Outlet, NavLink } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/authThunks';

const SharedLayout = () => {
  const dispatch = useDispatch();
  const userEmail = useSelector(state => state.auth.user.email);

  const handleLogOut = () => {
    dispatch(logOut());
  };
  return (
    <div>
      <NavLink to="/SignUp">Sign up link</NavLink>
      <br />
      <NavLink to="/SignIn">Sign in link</NavLink>
      <br />
      <NavLink to="/PhoneBook">PhoneBook link</NavLink>
      <p> Shared layout</p>
      <p>🙋‍♀️: {userEmail} </p>
      <button onClick={handleLogOut}>Log out</button>

      <Outlet />
    </div>
  );
};

export default SharedLayout;

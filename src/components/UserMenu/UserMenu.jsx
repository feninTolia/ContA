import { useDispatch, useSelector } from 'react-redux';
import { logOut } from 'redux/auth/authThunks';
import { useNavigate } from 'react-router-dom';
import css from 'components/UserMenu/UserMenu.module.css';

const UserMenu = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const userEmail = useSelector(state => state.auth.user.email);
  const isLoggedIn = useSelector(state => state.auth.isLoggedIn);

  const handleLogOut = () => {
    dispatch(logOut()).then(() => navigate('/'));
  };
  return (
    <div>
      <span className={css.user}>{userEmail && isLoggedIn && userEmail}</span>
      <span className={css.userAvatar}>🙋‍♀️</span>
      <button onClick={handleLogOut} className={css.navItemMarked}>
        Log out
      </button>
    </div>
  );
};

export default UserMenu;

import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import css from './AppBar.module.css';
import { Avatar } from '@mui/material';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Logout } from '../../images/logout.svg';
import { ReactComponent as Divider } from '../../images/divider.svg';

import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
export const AppBar = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width:767.98px)');
  const isTablet = useMediaQuery('(min-width:768px)');

  return (
    <>
      {!isLoggedIn && (
        <header className={css.header}>
          <Link to="/" className={css.logo}>
            <Logo />
          </Link>
        </header>
      )}
      {isLoggedIn && (
        <header className={css.header}>
          <Link to="/" className={css.logo}>
            <Logo />
          </Link>
          <div className={css.user}>
            <Avatar>{user.email.charAt(0).toUpperCase()}</Avatar>
            {isTablet && <div className={css.username}>{user.email}</div>}
            {isMobile && (
              <Link to="/login" onClick={() => dispatch(logOut())}>
                <Logout className={css.logout} />
              </Link>
            )}
            {isTablet && (
              <>
                <Divider className={css.divider} />
                <Link
                  to="/login"
                  className={css.exit}
                  onClick={() => dispatch(logOut())}
                >
                  Exit
                </Link>
              </>
            )}
            {isModal && <Quit />}
          </div>
        </header>
      )}
    </>
  );
};

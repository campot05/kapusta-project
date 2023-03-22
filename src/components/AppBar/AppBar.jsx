import { useAuth } from 'hooks';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import css from './AppBar.module.css';
import { Avatar } from '@mui/material';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { divider } from '../../images/images';
import { Link } from 'react-router-dom';
import { isRejected } from '@reduxjs/toolkit';
export const AppBar = () => {
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();
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
            <div className={css.username}>{user.email}</div>
            <img src={divider} alt="logo" className={css.divider} />
            <Link to="/login" onClick={() => dispatch(logOut())}>
              Exit
            </Link>
          </div>
        </header>
      )}
    </>
  );
};

import { useAuth } from 'hooks';
import { useState, useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { logOut } from 'redux/auth/auth-operations';
import css from './AppBar.module.css';
import { Avatar } from '@mui/material';
import { ReactComponent as Logo } from '../../images/logo.svg';
import { ReactComponent as Logout } from '../../images/logout.svg';
import { ReactComponent as Divider } from '../../images/divider.svg';
import Quit from 'components/Quit/Quit';
import { Link } from 'react-router-dom';
import useMediaQuery from '@mui/material/useMediaQuery';
export const AppBar = () => {
  const [showModal, setShowModal] = useState(false);
  const { isLoggedIn, user } = useAuth();
  const dispatch = useDispatch();

  const isMobile = useMediaQuery('(max-width:767.98px)');
  const isTablet = useMediaQuery('(min-width:768px)');

  useEffect(() => {
    if (showModal) {
      window.addEventListener('keydown', handleKeyDown);
      document.addEventListener('click', handleClickOutside);
    }

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.removeEventListener('click', handleClickOutside);
    };
    // eslint-disable-next-line
  }, [showModal]);
  const handleKeyDown = e => {
    if (e.code === 'Escape') {
      closeModal();
    }
  };
  const handleClickOutside = e => {
    if (e.target.className.includes('Modal_overlay')) {
      closeModal();
    }
  };

  const closeModal = () => {
    setShowModal(false);
  };

  const handleClick = () => {
    setShowModal(true);
  };

  const handleLogOut = () => {
    dispatch(logOut());
    closeModal();
  };

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
              <Link to="/login" onClick={handleClick}>
                <Logout className={css.logout} />
              </Link>
            )}
            {isTablet && (
              <>
                <Divider className={css.divider} />

                <Link to="/login" className={css.exit} onClick={handleClick}>
                  Exit
                </Link>
              </>
            )}
            {showModal && (
              <Quit
                onClick={closeModal}
                handleConfirm={handleLogOut}
                handleCancel={() => setShowModal(prevState => !prevState)}
              />
            )}
          </div>
        </header>
      )}
    </>
  );
};

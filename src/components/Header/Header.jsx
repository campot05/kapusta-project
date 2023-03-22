import { Avatar } from '@mui/material';
import useMediaQuery from '@material-ui/core/useMediaQuery';
import { logo, logout } from '../../images/images';
import { divider } from '../../images/images';
import style from '../Header/Header.module.css';
const Header = () => {
  // потім міняємо на const isUserLogin = useSelector();
  const isUserLogin = true;

  // потім міняємо на імʼя з авторизації
  const user = {
    name: 'John',
    surname: 'Deere',
  };

  const isMobile = useMediaQuery('(max-width:767.98px)');
  const isTablet = useMediaQuery('(min-width:768px)');
  console.log('isMobile ', isMobile);
  console.log('isTablet ', isTablet);

  const avatarStyle = {
    color: '#52555F',
    fontSize: '12px',
    fontWeight: '700',
    backgroundColor: '#F5F6FA',
    width: '32px',
    height: '32px',
  };

  return (
    <>
      {!isUserLogin && (
        <header className={style.header}>
          <img src={logo} alt="logo" className={style.logo}></img>
        </header>
      )}
      {isUserLogin && (
        <header className={style.header}>
          <img src={logo} alt="logo" className={style.logo}></img>
          <div className={style.user}>
            <Avatar sx={avatarStyle}>
              {user.name.charAt(0).toUpperCase()}
            </Avatar>
            {isTablet && (
              <div className={style.username}>
                {user.name + ' ' + user.surname}
              </div>
            )}

            {isMobile && (
              <a href="\" alt="logo" className={style.exit}>
                <img src={logout} alt="logout" className={style.logout}></img>
              </a>
            )}

            {isTablet && (
              <>
                <img src={divider} alt="logo" className={style.divider}></img>
                <a href="\" className={style.exit}>
                  Exit
                </a>
              </>
            )}
          </div>
        </header>
      )}
    </>
  );
};

export default Header;

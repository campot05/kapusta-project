import { useAuth } from 'hooks';
import css from './AppBar.module.css';

export const AppBar = () => {
  const { isLoggedIn } = useAuth();
  return (
    <header className={css.header}>
      <p className={css.logo}>LOGO</p>
      {isLoggedIn ? (
        <div className={css.user}>
          <p>USERINFO</p>
          <p>EXIT</p>
        </div>
      ) : null}
    </header>
  );
};

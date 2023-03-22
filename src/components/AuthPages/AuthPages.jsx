import Background from 'components/Background/Background';
import { AuthForm } from 'components/AuthForm/AuthForm';

import css from './AuthPages.module.css';

const AuthPage = () => {
  return (
    <Background type="Primary">
      <div className={css.container}>
        <div className={css.title}></div>
        <AuthForm></AuthForm>
      </div>
      <div></div>
    </Background>
  );
};

export default AuthPage;

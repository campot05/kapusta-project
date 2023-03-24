import { AuthForm } from 'components/AuthForm/AuthForm';
import Background from 'components/Background/Background';
import css from './AuthPage.module.css';
export default function Home() {
  return (
    <Background type="Login">
      <div className={css.container}>
        <div className={css.title}></div>
        <AuthForm></AuthForm>
      </div>
      <div></div>
    </Background>
  );
}

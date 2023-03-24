import { AuthForm } from 'components/AuthForm/AuthForm';
import Background from 'components/Background/Background';
import { Title, Container } from './AuthPage.styled';
// import css from './AuthPage.module.css';
export default function Home() {
  return (
    <Background type="Login">
      <Container>
        <Title />
        <AuthForm></AuthForm>
      </Container>
      <div></div>
    </Background>
  );
}

import { useForm } from 'react-hook-form';
import {
  Form,
  FormContainer,
  Text,
  Link,
  Button,
  Error,
} from './AuthForm.styled.jsx';
import { useDispatch } from 'react-redux';
import { registerUser, logIn } from 'redux/auth/auth-operations.js';
import { ReactComponent as Google } from '../../images/google.svg';

export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    mode: 'onChange',
  });
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    const buttonName = e.nativeEvent.submitter.name;
    if (buttonName === 'registration') {
      dispatch(registerUser(data));
      reset();
    }
    if (buttonName === 'login') {
      dispatch(logIn(data));
      reset();
    }
  };

  return (
    <FormContainer>
      <Text>You can log in with your Google Account:</Text>
      <Link href="https://google.com" target="_blank">
        <Google style={{ marginRight: 10 }} />
        Google
      </Link>
      <Text>Or log in using an email and password, after registering:</Text>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email:
          <input
            type="email"
            {...register('email', {
              required: 'This is a required field',
              pattern: {
                value:
                  /^([a-z0-9_-]+\.)*[a-z0-9_-]+@[a-z0-9_-]+(\.[a-z0-9_-]+)*\.[a-z]{1,6}$/,
                message: 'Please enter valid email!',
              },
            })}
            placeholder="your@email.com"
          />
          {errors?.email && <Error>{errors.email.message}</Error>}
        </label>
        <label>
          Password:
          <input
            type="password"
            {...register('password', {
              required: 'This is a required field',
              pattern: {
                value: /^[a-zA-Z\d\W]{6,}$/,
                message: 'Password must include at least 6 characters',
              },
            })}
            placeholder="Password"
          />
          {errors?.password && <Error>{errors.password.message}</Error>}
        </label>

        <div>
          <Button type="submit" name="login" login>
            Log In
          </Button>
          <Button type="submit" name="registration">
            registration
          </Button>
        </div>
      </Form>
    </FormContainer>
  );
};

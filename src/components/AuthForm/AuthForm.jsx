import { useForm } from 'react-hook-form';
import { Form, FormContainer } from './AuthForm.styled.jsx';
import { useDispatch } from 'react-redux';
import { registerUser, logIn } from 'redux/auth/auth-operations.js';
export const AuthForm = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const dispatch = useDispatch();

  const onSubmit = (data, e) => {
    const buttonName = e.nativeEvent.submitter.name;
    if (buttonName === 'registration') {
      dispatch(registerUser(data));
    }
    if (buttonName === 'login') {
      dispatch(logIn(data));
    }
  };

  return (
    <FormContainer>
      <Form onSubmit={handleSubmit(onSubmit)}>
        <label>
          Email:
          <input
            type="email"
            {...register('email', {
              required: 'This is a required field',
            })}
          />
          {errors?.email && <div>{errors.email.message}</div>}
        </label>
        <label>
          Password:
          <input
            type="password"
            {...register('password', {
              required: 'This is a required field',
            })}
          />
        </label>

        <button type="submit" name="login">
          Log In
        </button>
        <button type="submit" name="registration">
          registration
        </button>
      </Form>
    </FormContainer>
  );
};

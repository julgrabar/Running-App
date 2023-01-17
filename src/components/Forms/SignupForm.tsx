import { useForm } from 'react-hook-form';
import { ISignupCridentials } from 'types/types';
import { Form } from './Form.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from 'redux/typedHooks';
import { signup } from 'redux/auth/authOperations';
import { getIsAuthLoading } from 'redux/auth/authSelectors';
import { Loader } from 'styles/Loader.styled';
import { Button } from 'components/Button/Button';

export const SignupForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsAuthLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISignupCridentials>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: ISignupCridentials) => {
    dispatch(signup(data));
  };

  return (
    <Form onSubmit={handleSubmit(onSubmit)}>
      {errors.username?.message && <p>{errors.username?.message}</p>}
      <input
        {...register('username')}
        placeholder="User name"
        type="text"
        autoComplete="off"
      />
      {errors.password?.message && <p>{errors.password?.message}</p>}
      <input {...register('password')} placeholder="Password" type="password" />
      {errors.password2?.message && <p>{errors.password2?.message}</p>}
      <input
        {...register('password2')}
        placeholder="Repeate the password"
        type="password"
        autoComplete="off"
      />
      {errors.email?.message && <p>{errors.email?.message}</p>}
      <input
        {...register('email')}
        placeholder="E-mail"
        type="email"
        autoComplete="off"
      />
      {isLoading ? (
        <Loader />
      ) : (
        <Button primary title="Sign up" type="submit" />
      )}
    </Form>
  );
};

const validationSchema = Yup.object().shape({
  username: Yup.string()
    .required('Field is required')
    .max(150, 'Username must be less, than 150 characters'),
  password: Yup.string()
    .required('Field is required')
    .min(9, 'Password must be at least 9 characters'),
  password2: Yup.string()
    .required('Confirm Password is required')
    .oneOf([Yup.ref('password')], 'Passwords must match'),
  email: Yup.string().required('Field is required').email('Enter valid e-mail'),
});

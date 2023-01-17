import { useForm } from 'react-hook-form';
import { ILoginCridentials } from 'types/types';
import { Form } from './Form.styled';
import { yupResolver } from '@hookform/resolvers/yup';
import * as Yup from 'yup';
import { useAppDispatch, useAppSelector } from 'redux/typedHooks';
import { login } from 'redux/auth/authOperations';
import { getIsAuthLoading } from 'redux/auth/authSelectors';
import { Loader } from 'styles/Loader.styled';
import { Button } from 'components/Button/Button';

export const LoginForm = () => {
  const dispatch = useAppDispatch();
  const isLoading = useAppSelector(getIsAuthLoading);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ILoginCridentials>({
    resolver: yupResolver(validationSchema),
    reValidateMode: 'onChange',
  });

  const onSubmit = (data: ILoginCridentials) => {
    dispatch(login(data));
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
      {isLoading ? (
        <Loader />
      ) : (
        <Button primary title="Sign in" type="submit" />
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
});

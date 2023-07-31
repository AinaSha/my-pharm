import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, store } from '../../store';
import { RegisterUser, LoginUser } from '../../store/authUserReducer';
import { RegistrationForm } from '../../types/apiTypes';
import './LogIn.scss';

export const LogIn: FC = () => {
  const { registration } = useSelector((state: RootState) => state.AuthReducer);
  const [userData, setUserData] = useState({
    email: '',
    username: '',
    password: '',
  });
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<RegistrationForm>();

  const onSubmit: SubmitHandler<RegistrationForm> = (data) => {
    setUserData({ email: data.email, username: data.username, password: data.password1 });

    store.dispatch(RegisterUser(data));
    reset();
  };

  useEffect(() => {
    if (registration) {
      store.dispatch(
        LoginUser({
          email: userData.email,
          username: userData.username,
          password: userData.password,
        })
      );
    }
  }, [registration]);

  return (
    <form className="content-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item">
        <label>Имя:</label>
        <input
          type="text"
          {...register('username', {
            required: '* Поле обьязательно к заполнению',
            minLength: {
              value: 4,
              message: 'Минимум 4 символов',
            },
          })}
        />
        <div>{errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}</div>
      </div>
      <div className="form-item">
        <label>Адрес эл.почты</label>
        <input
          type="email"
          className="email-login"
          {...register('email', {
            required: '* Поле обьязательно к заполнению',
            pattern: {
              value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
              message: 'Неверный адрес электронной почты',
            },
          })}
        />
        <div>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>
      </div>
      <div className="form-item">
        <label>Номер телефона:</label>
        <input
          type="tel"
          placeholder="996"
          {...register('phone_number', {
            required: '* Поле обьязательно к заполнению',
            minLength: {
              value: 12,
              message: 'Номер телефона должен быть не менее 12 номеров',
            },
            maxLength: {
              value: 12,
              message: 'Номер телефона должен быть не более 12 номеров',
            },
          })}
        />
        <div>{errors?.phone_number && <p>{errors?.phone_number?.message || 'Error!'}</p>}</div>
      </div>
      <div className="form-item">
        <label>Адрес:</label>
        <input
          type="text"
          {...register('address', {
            minLength: {
              value: 3,
              message: 'Минимум 3 символов',
            },
          })}
        />
        <div>{errors?.address && <p>{errors?.address?.message || 'Error!'}</p>}</div>
      </div>
      <div className="form-item">
        <label>
          Вы пенсионер:
          <input type="checkbox" {...register('is_pensioner')} />
        </label>
        <label>
          Вы beneficiaries:
          <input type="checkbox" {...register('is_privileged')} />
        </label>
      </div>
      <div className="form-item">
        <label>Пароль</label>
        <input
          type="password"
          {...register('password1', {
            required: 'Вы должны указать пароль',
            minLength: {
              value: 8,
              message: 'Пароль должен содержать не менее 8 символов',
            },
          })}
        />
        <div>{errors?.password1 && <p>{errors?.password1?.message || 'Error!'}</p>}</div>
      </div>
      <div className="form-item">
        <label>Повторите пароль</label>
        <input
          type="password"
          {...register('password2', {
            required: 'Повторите пароль',
            validate: (val: string) => {
              if (watch('password2') !== val) {
                return 'Пароли не совпадают';
              }
            },
          })}
        />
        <div>{errors?.password2 && <p>{errors?.password2?.message || 'Error!'}</p>}</div>
      </div>
      <div className="confidentiality">
        <input type="checkbox" />
        <label>
          Принимаю{' '}
          <Link className="confidentiality__link" to="/confidentiality">
            пользовательское соглашение
          </Link>
        </label>
      </div>
      <button className="submit" type="submit">
        Зарегистрироваться
      </button>
    </form>
  );
};

/* eslint-disable react/no-unknown-property */
import { FC, useEffect, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';
import { store } from '../../store';
import { LoginUser } from '../../store/authUserReducer';
import useModal from '../userHook/useModal';
import { LoginForm } from '../../types/apiTypes';

export type Props = {
  active: boolean;
  setActive: () => void;
};

export const EnterForm: FC<Props> = (props: Props) => {
  const [correct, setCorrect] = useState(false);
  const { modalActive, setActive } = useModal();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<LoginForm>();
  const onSubmit: SubmitHandler<LoginForm> = (data) => {
    if (data.email && data.password && data.username) setCorrect(true);
    store.dispatch(LoginUser(data));
    reset();
  };

  const handleEnterClick = () => {
    if (correct) {
      setCorrect(false);
    }
  };

  useEffect(() => {
    if (correct) {
      props.setActive();
    }
  }, [correct]);

  return (
    <>
      <h2>Вход в личный кабинет</h2>
      <form className="modal__content-form" onSubmit={handleSubmit(onSubmit)}>
        <label>
          Адрес эл.почты
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
        </label>
        <div>{errors?.email && <p>{errors?.email?.message || 'Error!'}</p>}</div>
        <label>
          Имя:
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
        </label>
        <div>{errors?.username && <p>{errors?.username?.message || 'Error!'}</p>}</div>
        <label>
          Пароль
          <input
            type="password"
            className="password"
            {...register('password', {
              required: '* Поле обьязательно к заполнению',
              minLength: {
                value: 8,
                message: 'Пароль должен быть больше 8 символов',
              },
            })}
          />
        </label>
        <div>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}</div>
        <div className="auth-block">
          <label className="checkbox">
            <input type="checkbox" />
            Запомнить меня
          </label>
          <Link className="auth-block__link" to="/forgottenPassword" onClick={props.setActive}>
            Забыли пароль?
          </Link>
        </div>
        <button className="submit" type="submit" onClick={handleEnterClick}>
          Войти
        </button>
      </form>
      <Link to="/registration" className="registr-link" onClick={props.setActive}>
        Зарегистрироваться
      </Link>
    </>
  );
};

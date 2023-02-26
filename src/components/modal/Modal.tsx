/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, store } from '../../store';
import { SiginInUser } from '../../store/authUserReducer';
import { setActiveModalSiginIn } from '../../store/burgerStyleReducer';

import './modal.scss';

export type Props = {
  active: boolean;
  setActive: any;
};

interface ISignInform {
  email: string;
  password: string;
}

export const Modal: FC = () => {
  const { activeSiginIn } = useSelector((state: RootState) => state.BurgerReducer);
  const dispatch = useDispatch();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignInform>();
  const onSubmit: SubmitHandler<ISignInform> = (data) => {
    store.dispatch(SiginInUser(data));
    reset();
  };

  const handleModalClick = () => {
    dispatch(setActiveModalSiginIn(false));
  };

  return (
    <div className={activeSiginIn ? 'modal active' : 'modal'} onClick={handleModalClick}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
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
            <Link className="auth-block__link" to="/forgottenPassword" onClick={handleModalClick}>
              Забыли пароль?
            </Link>
          </div>
          <button className="submit" type="submit">
            Войти
          </button>
        </form>
        <Link to="/registration" className="registr-link" onClick={handleModalClick}>
          Зарегистрироваться
        </Link>
      </div>
    </div>
  );
};

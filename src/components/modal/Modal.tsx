/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import './modal.scss';

interface ISignInform {
  email: string;
  password: string;
}

type Props = {
  active: boolean;
  setActive: any;
};

export const Modal: FC<Props> = ({ active, setActive }) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignInform>();
  const onSubmit: SubmitHandler<ISignInform> = (data) => {
    console.log(data);
    reset();
  };
  return (
    <div className={active ? 'modal active' : 'modal'} onClick={() => setActive(false)}>
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
            <button type="submit">Получить код</button>
          </div>
          <button className="submit" type="submit">
            Войти
          </button>
        </form>
        <a className="registr-link">Зарегистрироваться</a>
      </div>
    </div>
  );
};

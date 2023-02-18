import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { Link } from 'react-router-dom';

import './LogIn.scss';

interface ILogInform {
  firstName: string;
  lastName: string;
  mobileNumber: number;
  email: string;
  password: string;
  confirmPassword: string;
}

export const LogIn: FC = () => {
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ILogInform>();
  const onSubmit: SubmitHandler<ILogInform> = (data) => {
    console.log(data);
    reset();
  };

  return (
    <form className="content-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item">
        <label>Имя:</label>
        <input
          type="text"
          {...register('firstName', {
            required: '* Поле обьязательно к заполнению',
            minLength: {
              value: 4,
              message: 'Минимум 4 символов',
            },
          })}
        />
        <div>{errors?.firstName && <p>{errors?.firstName?.message || 'Error!'}</p>}</div>
      </div>
      <div className="form-item">
        <label>Фамилия:</label>
        <input
          type="text"
          {...register('lastName', {
            required: '* Поле обьязательно к заполнению',
            minLength: {
              value: 3,
              message: 'Минимум 3 символов',
            },
          })}
        />
        <div>{errors?.lastName && <p>{errors?.lastName?.message || 'Error!'}</p>}</div>
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
          {...register('mobileNumber', {
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
        <div>{errors?.mobileNumber && <p>{errors?.mobileNumber?.message || 'Error!'}</p>}</div>
      </div>
      <div className="form-item">
        <label>Пароль</label>
        <input
          type="password"
          {...register('password', {
            required: 'Вы должны указать пароль',
            minLength: {
              value: 8,
              message: 'Пароль должен содержать не менее 8 символов',
            },
          })}
        />
        <div>{errors?.password && <p>{errors?.password?.message || 'Error!'}</p>}</div>
      </div>
      <div className="form-item">
        <label>Повторите пароль</label>
        <input
          type="password"
          {...register('confirmPassword', {
            required: 'Повторите пароль',
            validate: (val: string) => {
              if (watch('password') !== val) {
                return 'Пароли не совпадают';
              }
            },
          })}
        />
        <div>
          {errors?.confirmPassword && <p>{errors?.confirmPassword?.message || 'Error!'}</p>}
        </div>
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

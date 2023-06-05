import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, store } from '../../store';
import { CreateUser, SiginInUser } from '../../store/authUserReducer';
import { ILogInform } from '../../types/Types';

import './LogIn.scss';

export const LogIn: FC = () => {
  const { registration } = useSelector((state: RootState) => state.AuthReducer);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<ILogInform>();
  const onSubmit: SubmitHandler<ILogInform> = (data) => {
    console.log(data);
    store.dispatch(CreateUser(data));
    reset();
    store.dispatch(SiginInUser({ email: data.email, password: data.password }));
  };

  return (
    <form className="content-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="form-item">
        <label>Имя:</label>
        <input
          type="text"
          {...register('first_name', {
            required: '* Поле обьязательно к заполнению',
            minLength: {
              value: 4,
              message: 'Минимум 4 символов',
            },
          })}
        />
        <div>{errors?.first_name && <p>{errors?.first_name?.message || 'Error!'}</p>}</div>
      </div>
      {/* <div className="form-item">
        <label>Фамилия:</label>
        <input
          type="text"
          {...register('last_name', {
            required: '* Поле обьязательно к заполнению',
            minLength: {
              value: 3,
              message: 'Минимум 3 символов',
            },
          })}
        />
        <div>{errors?.last_name && <p>{errors?.last_name?.message || 'Error!'}</p>}</div>
      </div> */}
      {/* <div className="form-item">
        <label>Отчество:</label>
        <input
          type="text"
          {...register('sur_name', {
            required: '* Поле обьязательно к заполнению',
            minLength: {
              value: 3,
              message: 'Минимум 3 символов',
            },
          })}
        />
        <div>{errors?.sur_name && <p>{errors?.sur_name?.message || 'Error!'}</p>}</div>
      </div> */}
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
      {/* <div className="form-item">
        <label>Номер телефона:</label>
        <input
          type="tel"
          placeholder="996"
          {...register('phone', {
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
        <div>{errors?.phone && <p>{errors?.phone?.message || 'Error!'}</p>}</div>
      </div> */}
      {/* <div className="form-item">
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
      </div> */}
      {/* <div className="form-item">
        <label>Выберите пол:</label>
        <select {...register('gender')}>
          <option value=""></option>
          <option value="women">women</option>
          <option value="men">men</option>
        </select>
      </div> */}
      {/* <div className="form-item">
        <label>
          Вы пенсионер:
          <input type="checkbox" {...register('is_pensioner')} />
        </label>
        <label>
          Вы beneficiaries:
          <input type="checkbox" {...register('is_beneficiaries')} />
        </label>
      </div> */}
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
          {...register('password_confirm', {
            required: 'Повторите пароль',
            validate: (val: string) => {
              if (watch('password') !== val) {
                return 'Пароли не совпадают';
              }
            },
          })}
        />
        <div>
          {errors?.password_confirm && <p>{errors?.password_confirm?.message || 'Error!'}</p>}
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

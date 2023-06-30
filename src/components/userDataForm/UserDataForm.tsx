import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { IcreateUser } from '../../types/Types';
import { UserEdit } from '../../store/authUserReducer';

export const UserDataForm: FC = () => {
  const { dataUser } = useSelector((state: RootState) => state.AuthReducer);
  const {
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors },
  } = useForm<IcreateUser>();
  const onSubmit: SubmitHandler<IcreateUser> = (data) => {
    store.dispatch(UserEdit(data));
    reset();
  };

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
            value: dataUser.username,
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
            value: dataUser.email,
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
            value: dataUser.phone_number,
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
            value: dataUser.address,
          })}
        />
        <div>{errors?.address && <p>{errors?.address?.message || 'Error!'}</p>}</div>
      </div>
      <div className="form-item">
        <label>
          Вы пенсионер:
          <input type="checkbox" {...register('is_pensioner')} checked={dataUser.is_pensioner} />
        </label>
        <label>
          Вы beneficiaries:
          <input type="checkbox" {...register('is_privileged')} checked={dataUser.is_privileged} />
        </label>
      </div>
      <button className="submit" type="submit">
        Cохранить
      </button>
    </form>
  );
};

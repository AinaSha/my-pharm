import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
// import { CreateUser, SiginInUser } from '../../store/authUserReducer';
import { IcreateUser } from '../../types/Types';

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
    console.log(data);
    // store.dispatch(CreateUser(data));
    reset();
    // store.dispatch(SiginInUser({ email: data.email, password: data.password }));
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

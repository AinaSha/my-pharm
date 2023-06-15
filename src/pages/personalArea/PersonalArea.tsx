import { FC, useState } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { api } from '../../api/api';
import { RootState, store } from '../../store';
import { exit, GetUserMe, RefreshToken, siginin } from '../../store/authUserReducer';
import { ILogInform } from '../../types/Types';
import { deleteCookie, getCookiFile, removeLocalStorage } from '../../utils/utilsForm';
import './personalArea.scss';

export const PersonalArea: FC = () => {
  const { dataUser, exp } = useSelector((state: RootState) => state.AuthReducer);
  const dispatch = useDispatch();
  const [change, setChange] = useState(false);
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm<ILogInform>();

  const onSubmit: SubmitHandler<ILogInform> = (data) => {
    // store.dispatch(UpdateUserMe(data));
    setChange(!change);
  };

  const setValueForm = () => {
    setValue('first_name', `${dataUser.first_name}`, {
      shouldValidate: true,
      shouldDirty: true,
    });
    // setValue('last_name', `${dataUser.last_name}`, {
    //   shouldValidate: true,
    //   shouldDirty: true,
    // });
    // setValue('sur_name', `${dataUser.sur_name}`, {
    //   shouldValidate: true,
    //   shouldDirty: true,
    // });
    // setValue('email', `${dataUser.email}`, {
    //   shouldValidate: true,
    //   shouldDirty: true,
    // });
    // setValue('phone', Number(dataUser.phone), {
    //   shouldValidate: true,
    //   shouldDirty: true,
    // });
    // setValue('address', `${dataUser.address}`, {
    //   shouldValidate: true,
    //   shouldDirty: true,
    // });
    // setValue('gender', `${dataUser.gender}`, {
    //   shouldValidate: true,
    //   shouldDirty: true,
    // });
  };

  const handleChange = () => {
    setChange(!change);
    setValueForm();
  };

  const isValidToken = () => {
    const refresh = getCookiFile('refreshToken');
    if (!refresh) {
      removeLocalStorage('__token');
      removeLocalStorage('__userIsAuth');
      removeLocalStorage('__userId');
      dispatch(exit());
      dispatch(siginin());
    }
    store.dispatch(RefreshToken(refresh!));
  };

  if (exp < Math.ceil(new Date().getTime() / 1000) && localStorage.getItem('__userIsAuth')) {
    isValidToken();
    setTimeout(() => {
      store.dispatch(GetUserMe());
    }, 700);
  }

  const deletUser = () => {
    api.DeleteUserMe();
    removeLocalStorage('__token');
    removeLocalStorage('__userIsAuth');
    removeLocalStorage('__userId');
    deleteCookie('refreshToken');
    dispatch(exit());
    dispatch(siginin());
  };

  const handleDelete = () => {
    if (exp < Math.ceil(new Date().getTime() / 1000) && localStorage.getItem('__userIsAuth')) {
      isValidToken();
      console.log('handleDelete2');
      setTimeout(() => {
        console.log('handleDelete3');
        deletUser();
      }, 400);
    } else {
      deletUser();
    }
  };

  return (
    <div className="container" onSubmit={handleSubmit(onSubmit)}>
      <div>
        <form className="content-form">
          <div className="form-item">
            <label>Имя:</label>
            {!change ? (
              <p className={change ? 'hiden' : 'person_data'}>{dataUser.first_name}</p>
            ) : (
              <>
                <input
                  className={change ? '' : 'hiden'}
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
              </>
            )}
          </div>
          <div className="form-item">
            <label>Фамилия:</label>
            {/* {!change ? (
              <p className={change ? 'hiden' : 'person_data'}>{dataUser.last_name}</p>
            ) : (
              <>
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
              </>
            )} */}
          </div>
          <div className="form-item">
            <label>Отчество:</label>
            {/* {!change ? (
              <p className={change ? 'hiden' : 'person_data'}>{dataUser.sur_name}</p>
            ) : (
              <>
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
              </>
            )} */}
          </div>
          <div className="form-item">
            <label>Адрес эл.почты</label>
            {!change ? (
              <p className={change ? 'hiden' : 'person_data'}>{dataUser.email}</p>
            ) : (
              <>
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
              </>
            )}
          </div>
          <div className="form-item">
            <label>Номер телефона:</label>
            {/* {!change ? (
              <p className={change ? 'hiden' : 'person_data'}>{dataUser.phone}</p>
            ) : (
              <>
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
              </>
            )} */}
          </div>
          <div className="form-item">
            <label>Адрес:</label>
            {/* {!change ? (
              <p className={change ? 'hiden' : 'person_data'}>{dataUser.address}</p>
            ) : (
              <>
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
              </>
            )} */}
          </div>
          <div className="form-item">
            <label>Выберите пол:</label>
            {/* {!change ? (
              <p className={change ? 'hiden' : 'person_data'}>{dataUser.gender}</p>
            ) : (
              <>
                <select {...register('gender')}>
                  <option value=""></option>
                  <option value="women">women</option>
                  <option value="men">men</option>
                </select>
              </>
            )} */}
          </div>
          <div className="form-item">
            <label>
              Вы пенсионер:
              {/* {!change ? (
                <p className={change ? 'hiden' : 'person_data'}>
                  {dataUser.is_pensioner ? 'да' : 'нет'}
                </p>
              ) : (
                <>
                  <input type="checkbox" {...register('is_pensioner')} />
                </>
              )} */}
            </label>
            <label>
              Вы beneficiaries:
              {/* {!change ? (
                <p className={change ? 'hiden' : 'person_data'}>
                  {dataUser.is_beneficiaries ? 'льготник' : 'не льготник'}
                </p>
              ) : (
                <>
                  <input type="checkbox" {...register('is_beneficiaries')} />
                </>
              )} */}
            </label>
          </div>
          {!change ? (
            <button onClick={handleChange}>Изменить</button>
          ) : (
            <div className="person_btns">
              <button className="submit" type="submit">
                Изменить данные
              </button>
              <button onClick={() => setChange(!change)}>Отменить</button>
            </div>
          )}
        </form>
        <button id="person_delete" onClick={handleDelete}>
          Удалиться из приложения
        </button>
      </div>
    </div>
  );
};

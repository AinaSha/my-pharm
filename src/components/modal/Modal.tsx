/* eslint-disable @typescript-eslint/no-explicit-any */
import { FC, useEffect } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState, store } from '../../store';
import { GetUserMe, SiginInUser } from '../../store/authUserReducer';
import { setActiveModalSiginIn } from '../../store/burgerStyleReducer';

import './modal.scss';

export type Props = {
  active: boolean;
  setActive: any;
  children: React.ReactNode;
};

interface ISignInform {
  email: string;
  password: string;
}

export const Modal: FC<Props> = ({ children }) => {
  const { activeSiginIn } = useSelector((state: RootState) => state.BurgerReducer);
  const { exp } = useSelector((state: RootState) => state.AuthReducer);
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

  useEffect(() => {
    store.dispatch(GetUserMe());
  }, [exp]);

  const handleModalClick = () => {
    dispatch(setActiveModalSiginIn(false));
  };

  return (
    <div className={activeSiginIn ? 'modal active' : 'modal'} onClick={handleModalClick}>
      <div className="modal__content" onClick={(e) => e.stopPropagation()}>
        {children}
        {/* <h2>Вход в личный кабинет</h2>
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
        </Link> */}
      </div>
    </div>
  );
};

// import { FC, useState } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState } from '../../store';
// import { setActiveModalSiginIn } from '../../store/burgerStyleReducer';

// import './modal.scss';

// export type Props = {
//   isActive: boolean;
//   setActive: () => void;
//   children: React.ReactNode;
// };

// export const Modal: FC<Props> = ({ isActive, setActive, children }) => {
//   const [modalActive, setModalActive] = useState(false);
//   // const { activeSiginIn } = useSelector((state: RootState) => state.BurgerReducer);
//   // const dispatch = useDispatch();
//   const closeModal = () => {
//     setModalActive(!isActive);
//     setActive();
//   };

//   if (!modalActive) {
//     return null;
//   }

//   return (
//     <div className={isActive ? 'modal active' : 'modal'}>
//       <div className="modal__content" onClick={(e) => e.stopPropagation()}>
//         {children}
//       </div>
//     </div>
//   );
// };

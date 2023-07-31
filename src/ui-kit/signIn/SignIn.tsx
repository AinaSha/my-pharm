import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { Modal } from '../../components/modal/Modal';
import { EnterForm } from '../../components/enterForm/EnterForm';
import useModal from '../../components/userHook/useModal';
import { setActiveModalSiginIn } from '../../store/burgerStyleReducer';
import { UserNavList } from '../userList/UserNavList';
import './SignIn.scss';
import { setUser } from '../../store/authUserReducer';

export const SignIn: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { isAuth, siginIn, dataUser } = useSelector((state: RootState) => state.AuthReducer);
  const { modalActive, setActive } = useModal();
  const dispatch = useDispatch();
  const [show, setShow] = useState(false);

  useEffect(() => {
    if (!dataUser.username && localStorage.getItem('__userIsAuth')) {
      const user = JSON.parse(localStorage.getItem('__userData') as string);
      dispatch(setUser(user));
    }
  }, [dataUser]);

  useEffect(() => {
    dispatch(setActiveModalSiginIn(false));
  }, [isAuth]);

  useEffect(() => {
    dispatch(setActiveModalSiginIn(siginIn));
  }, [siginIn]);

  const handleName = () => {
    setShow(!show);
  };

  const handleList = () => {
    setShow(false);
  };

  return (
    <>
      <Modal active={modalActive} setActive={setActive}>
        <EnterForm active={modalActive} setActive={setActive} />
      </Modal>
      <button className={isAuth ? 'sign-btn hiden' : 'sign-btn'} onClick={setActive}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.828 23.7387C9.62589 22.1572 12.7861 21.3285 16 21.3333C19.3333 21.3333 22.4627 22.2067 25.172 23.7387M20 13.3333C20 14.3942 19.5786 15.4116 18.8284 16.1618C18.0783 16.9119 17.0609 17.3333 16 17.3333C14.9391 17.3333 13.9217 16.9119 13.1716 16.1618C12.4214 15.4116 12 14.3942 12 13.3333C12 12.2725 12.4214 11.2551 13.1716 10.5049C13.9217 9.75476 14.9391 9.33333 16 9.33333C17.0609 9.33333 18.0783 9.75476 18.8284 10.5049C19.5786 11.2551 20 12.2725 20 13.3333ZM28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
            stroke="#003838"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {translate.join}
      </button>
      <button className={isAuth ? 'sign-btn' : 'sign-btn hiden'} onClick={handleName}>
        <svg
          width="32"
          height="32"
          viewBox="0 0 32 32"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M6.828 23.7387C9.62589 22.1572 12.7861 21.3285 16 21.3333C19.3333 21.3333 22.4627 22.2067 25.172 23.7387M20 13.3333C20 14.3942 19.5786 15.4116 18.8284 16.1618C18.0783 16.9119 17.0609 17.3333 16 17.3333C14.9391 17.3333 13.9217 16.9119 13.1716 16.1618C12.4214 15.4116 12 14.3942 12 13.3333C12 12.2725 12.4214 11.2551 13.1716 10.5049C13.9217 9.75476 14.9391 9.33333 16 9.33333C17.0609 9.33333 18.0783 9.75476 18.8284 10.5049C19.5786 11.2551 20 12.2725 20 13.3333ZM28 16C28 17.5759 27.6896 19.1363 27.0866 20.5922C26.4835 22.0481 25.5996 23.371 24.4853 24.4853C23.371 25.5996 22.0481 26.4835 20.5922 27.0866C19.1363 27.6896 17.5759 28 16 28C14.4241 28 12.8637 27.6896 11.4078 27.0866C9.95189 26.4835 8.62902 25.5996 7.51472 24.4853C6.40042 23.371 5.5165 22.0481 4.91345 20.5922C4.31039 19.1363 4 17.5759 4 16C4 12.8174 5.26428 9.76516 7.51472 7.51472C9.76516 5.26428 12.8174 4 16 4C19.1826 4 22.2348 5.26428 24.4853 7.51472C26.7357 9.76516 28 12.8174 28 16Z"
            stroke="#003838"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        {dataUser.username}
        <section onClick={handleList} className={show ? 'show-nav-list' : 'hiden'}>
          <UserNavList />
        </section>
      </button>
    </>
  );
};

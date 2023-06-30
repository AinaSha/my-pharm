import { FC } from 'react';
import { UserNavList } from '../../ui-kit/userList/UserNavList';
import { Modal } from '../modal/Modal';
import { UserDataForm } from '../userDataForm/UserDataForm';
import './userData.scss';
import userAvatar from '../../assets/images/Avatar-icon.png';
import useModal from '../userHook/useModal';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export type Props = {
  active: boolean;
  setActive: () => void;
  children: React.ReactNode;
};

export const UserData: FC = () => {
  const { dataUser } = useSelector((state: RootState) => state.AuthReducer);
  const { modalActive, setActive } = useModal();

  const handleEditeForm = () => {
    setActive();
  };

  return (
    <>
      <Modal active={modalActive} setActive={setActive}>
        <UserDataForm />
      </Modal>
      <div className="user-data container">
        <div className="user-name-block">
          <img className="user-name-img" src={userAvatar} alt="User avavtar icon" />
          <h3>{dataUser.username}</h3>
        </div>
        <div className="user-data__inner">
          <UserNavList />
          <div className="user-data__form">
            <div className="user-data__head">
              <h4>Мои персональные данные :</h4>
              <span>
                <button onClick={handleEditeForm}>
                  <svg
                    width="25"
                    height="25"
                    viewBox="0 0 32 32"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M30.828 6.83006L27.85 9.80806L22.106 4.24006L25.172 1.17406C26.732 -0.387937 29.266 -0.387937 30.828 1.17406C32.39 2.73406 32.39 5.26606 30.828 6.83006ZM26.106 11.5501L7.796 29.8601L0 32.0321L2.138 24.2061L20.38 5.96406L26.106 11.5501Z"
                      fill="#003838"
                    />
                  </svg>
                </button>
              </span>
            </div>
            <div className="user-data">
              <div className="user-data__contact-block">
                <div className="user-data__item">
                  <h5>Имя:</h5>
                  <p>{dataUser.username}</p>
                </div>
                <div className="user-data__item">
                  <h5>Фамилия:</h5>
                  <p></p>
                </div>
              </div>
              <div className="user-data__item">
                <h5>Пенсионер:</h5>
                <p>{dataUser.is_pensioner ? 'да' : 'нет'}</p>
              </div>
              <div className="user-data__item">
                <h5>Льготник:</h5>
                <p>{dataUser.is_privileged ? 'да' : 'нет'}</p>
              </div>
              <div className="user-data__contact-block">
                <div className="user-data__item">
                  <h5>Почта:</h5>
                  <p>{dataUser.email}</p>
                </div>
                <div className="user-data__item">
                  <h5>Телефон:</h5>
                  <p>{dataUser.phone_number}</p>
                </div>
              </div>
              <div className="user-data__item">
                <h5>Адрес:</h5>
                <p>{dataUser.address}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

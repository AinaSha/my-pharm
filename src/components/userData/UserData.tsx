import { FC } from 'react';

import './userData.scss';

export const UserData: FC = () => {
  return (
    <div className="user-data">
      <div className="user-data__inner">
        <div className="user-data__head">
          <h3>Мои данные :</h3>
          <button>
            <svg
              width="32"
              height="32"
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
        </div>
        <div className="user-data">
          <div className="user-data__item">
            <h3>Имя:</h3>
            <p>Асель</p>
          </div>
          <div className="user-data__item">
            <h3>Фамилия:</h3>
            <p>Алымбаева</p>
          </div>
          <div className="user-data__item">
            <h3>Отчество:</h3>
            <p>Кадырбековна</p>
          </div>
          <div className="user-data__item">
            <h3>Почта:</h3>
            <p>asel@mail.ru</p>
          </div>
          <div className="user-data__item">
            <h3>Телефон:</h3>
            <p>1234567890</p>
          </div>
          <div className="user-data__item">
            <h3>Гендер:</h3>
            <p>женщина</p>
          </div>
          <div className="user-data__item">
            <h3>Пенсионер:</h3>
            <p>нет</p>
          </div>
          <div className="user-data__item">
            <h3>Льготник:</h3>
            <p>нет</p>
          </div>
          <div className="user-data__item">
            <h3>Адрес:</h3>
            <p>Токтогула 24</p>
          </div>
        </div>
      </div>
    </div>
  );
};

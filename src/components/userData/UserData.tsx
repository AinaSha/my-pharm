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
        <div className="user-avatar">
          <div className="user-avatar__img-block">
            <svg
              width="77"
              height="74"
              viewBox="0 0 77 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M10.1241 60.216C18.7801 55.4717 28.557 52.9854 38.5 53C48.8125 53 58.4939 55.62 66.8759 60.216M50.875 29C50.875 32.1826 49.5712 35.2348 47.2504 37.4853C44.9297 39.7357 41.7821 41 38.5 41C35.2179 41 32.0703 39.7357 29.7496 37.4853C27.4288 35.2348 26.125 32.1826 26.125 29C26.125 25.8174 27.4288 22.7652 29.7496 20.5147C32.0703 18.2643 35.2179 17 38.5 17C41.7821 17 44.9297 18.2643 47.2504 20.5147C49.5712 22.7652 50.875 25.8174 50.875 29ZM75.625 37C75.625 41.7276 74.6647 46.4089 72.799 50.7766C70.9333 55.1443 68.1987 59.1129 64.7513 62.4558C61.304 65.7988 57.2113 68.4505 52.7071 70.2597C48.2029 72.0688 43.3753 73 38.5 73C33.6247 73 28.7971 72.0688 24.2929 70.2597C19.7887 68.4505 15.696 65.7988 12.2487 62.4558C8.80128 59.1129 6.06668 55.1443 4.20097 50.7766C2.33527 46.4089 1.375 41.7276 1.375 37C1.375 27.4522 5.28637 18.2955 12.2487 11.5442C19.2109 4.79285 28.6538 1 38.5 1C48.3462 1 57.789 4.79285 64.7513 11.5442C71.7136 18.2955 75.625 27.4522 75.625 37Z"
                stroke="#003838"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
          <button className="photo-camera">
            <svg
              width="40"
              height="40"
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <rect width="40" height="40" fill="url(#pattern0)" />
              <defs>
                <pattern id="pattern0" patternContentUnits="objectBoundingBox" width="1" height="1">
                  <use xlinkHref="#image0_702_1163" transform="scale(0.0111111)" />
                </pattern>
                <image
                  id="image0_702_1163"
                  width="90"
                  height="90"
                  xlinkHref="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAFoAAABaCAYAAAA4qEECAAAACXBIWXMAAAsTAAALEwEAmpwYAAAFP0lEQVR4nO2cy48VRRTGW8RnolFUfK5MXKAu1LgTDC7xgS/iRtcQCWI0yLAan6Og6L8hbo1LlYCiogTHCTtGExHMjDPJdH1fdbi4sMzx9nUmk67u2/f2e86XVDLpO12n6td1T52qOn2DQKVSqVQqlUqlUqlUKpVKVaistbeTfB/AGQAXSbpxitQhdZGcstbepo8rCAKSj5FcHBduSpG6t65p2GEY3s2+XMnFGmPuCdoq59yVJA8B+HPVV/cCyYPyedr9AL6qAPKgTV8GbZXAzOjgwZR7t1YFeUVppwuJR27aKLqQdJ9z7jKSx2oAfUxsB2tFAF6uAfLg4e8K1oJIvlRECDcGaLH9YtBFRVF0hzHmCZJf1AV4Fex/SH5urd0mbQuaIOfc1SRfJXlSwqS6IbE5RVj8QHKvc+6qsSBHUXQXgF8a0CnX5AJgWliNPJIVMnPBHmlkx+6izlHSA3AUwCSAZwBsCsPwRufcFbIQkr8B3Bt/Nhn/b6/m0f3KKKBP1gT4NICdS0tLN+Rtcwx/l9RRE+jvRwHNigFPSxRQxIJC6pAoB8BMxaAxCugq49rXnHPrxwWcAHy9tXZfXpcC4BKA/RL6SQEwIdeGubepoM9aax8ISpa19kGSszlAT6yuQ661EjSAn0huDCpSGIYbxIcO0zY5iFh9vxwgtA40gB8XFhauy2qDc+5yAI8C+FggAZgH8Hdc5uNrhwFskf/Nqk9sAjiV1b6k1aJcaxvoswBuyQB8DYADJP/K8fDkIeyXezP6tZHkryO4jgOtAQ3gYpZPJvkCgPNj2DgHYEeaDWvtQ2kTZDwZTrR5MnzdZ885t47kBwVuGk1JnT57xpg3yuhj7aDRX6ImhnACBMBnJdg84oMtK8wy4uzaQVtrt6XYKmQke8p7PrvGmKc6BRrAad+KT3xyiZD/cyMAnk+yLW2Sb1qXQO9MiS7OlQk6tn/eOXdtUhsA7O4EaJndlzwbRMOGTEUUmfx8C5lhI4qmg/46qX5ZYOSJkwtox5xvUUPyeBdATybVLyu+qiCvaMtmT1/f6gLopz2gP6kB9EeetjzXBdCbPPUPtcFTcDnhact9rQdtjLnJU39l/nnFQ59LaguAm1sP2pfoiAJn+hyge0ltkUNVBU0Fra6D7ZgMv6vadZD8trOTYUp4d7gG0Ie6HN5Nejq3pWrQAB7x9PXtLoA+mnIeOF/xEnxdl5fgPckgSrIhZ3xVgZb8jqQ2SJwvh72tB52WZe/6iZS/VzCa//Ad2nZmmzRr4x/AjviMr8yN/2fXxMY/+1/dx1NsTZU4ot/x2TXGbC/aXu2gAcxkHM4eKcHmpxmHs2c6B5opE9IAtozsItxIXMe7aekGw+bStRI0gJ4kr6TZlYPUcc4RZXL1+eSBoih6uKyk9UaAZr/MZiU3SjQiZ3wS++YAPCffGLk3o1+3kvytrP41CbSTTNIhkxzFd2+WkxHZtBeYcbrWpfghnCD5oaz40tzEQIuLi9cPk+TYGdDswz5VZdqujOSyITcSNPtlNstnFyHxyWW6izaAdjIpiT+WcKtowHEIN1Hl21qNBc1l4DPGmCcLfFloexlxcutBcxn4tPz6gWQQ5W1zvEG0u+hldSdBcxm4HN4eB/BmvDF/v4CUw14p8rdciz+TBJhvityFqxJ0pe8ZshvFtObNWba7jPTm7N4GNNy1rOzJDVqSSuqcVNiyAuDnrF9Fy/q9DoXNbMhRFN05EuSVI1t+HiFOStQJkv8DZpybsmfkkaxSqVQqlUqlUqlUKpVKpVKpVCqVSqUK/PoXbG0YmVih/YkAAAAASUVORK5CYII="
                />
              </defs>
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

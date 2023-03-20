import { FC } from 'react';
import lec1 from '../../assets/imeges/lec1.png';
import './productCards.scss';

export const ProductCards: FC = () => {
  return (
    <div className="container">
      <h2 className="product-cards-title">Алмагель, суспензия для приема внутрь 170 мл </h2>
      <div className="main-info">
        <div className="image">
          <img src={lec1} alt="" />
        </div>
        <div className="main-info__short">
          <div className="main-info__choose">
            <span>300 сом</span>
            <button className="favorite">
              <svg width="22" height="26" viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg">
                <path
                  d="M2.4477 1.78105C1.94761 2.28115 1.66666 2.95942 1.66666 3.66667V25L11 20.3333L20.3333 25V3.66667C20.3333 2.95942 20.0524 2.28115 19.5523 1.78105C19.0522 1.28095 18.3739 1 17.6667 1H4.33332C3.62608 1 2.9478 1.28095 2.4477 1.78105Z"
                  stroke=""
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
            <div className="card__btns__choose">
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 12H6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span>1</span>
              <button>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V12M12 12V18M12 12H18M12 12H6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <button className="main-info__pay">В корзину</button>
            <button className="main-info__pay white-btn">Купить сейчас</button>
          </div>
          <div>
            <p>
              <span>Производитель</span> Балканфарма - Троян АД, Болгария
            </p>
            <p>Арт. 205124</p>
          </div>
          <p>Название аптеки</p>
        </div>
      </div>
      <div className="instruction">
        <p>Инструкция по медицинскому применению лекарственного препарата</p>
        <p className="title">Алмагель, суспензия для приема внутрь 170 мл </p>
        <ul>
          <li>
            <span>Торговое наименование</span>
            <p>Алмагель</p>
          </li>
          <li>
            <span>Международное непатентованное название</span>
            <p>Алмагель</p>
          </li>
          <li>
            <span>Лекарственная форма</span>
            <p>Сироп</p>
          </li>
          <li>
            <span>Описание</span>
            <p></p>
          </li>
          <li>
            <span>Состав</span>
            <p></p>
          </li>
          <li>
            <span>Фармакотерапевтическая группа</span>
            <p></p>
          </li>
          <li>
            <span>Фармакологические свойства</span>
            <p></p>
          </li>
          <li>
            <span>Фармакодинамика</span>
            <p></p>
          </li>
          <li>
            <span>Фармакокинетика</span>
            <p></p>
          </li>
          <li>
            <span>Показания к применению</span>
            <p></p>
          </li>
          <li>
            <span>Противопоказания</span>
            <p></p>
          </li>
          <li>
            <span>Рекомендации по применению</span>
            <p></p>
          </li>
          <li>
            <span>Режим дозирования</span>
            <p></p>
          </li>
          <li>
            <span>Метод и путь введения</span>
            <p></p>
          </li>
          <li>
            <span>Частота применения с указанием времени приема</span>
            <p></p>
          </li>
          <li>
            <span>Длительность лечения</span>
            <p></p>
          </li>
          <li>
            <span>
              Описание нежелательных реакций, которые проявляются при стандартном применении ЛП и
              меры, которые следует принять в этом случае{' '}
            </span>
            <p></p>
          </li>
          <li>
            <span>Сообщение о нежелательных реакциях</span>
            <p></p>
          </li>
          <li>
            <span>Необходимые меры предосторожности при применении</span>
            <p></p>
          </li>
          <li>
            <span>Меры, которые необходимо принять в случае передозировки</span>
            <p></p>
          </li>
          <li>
            <span>Взаимодействия с другими лекарственными препаратами</span>
            <p></p>
          </li>
          <li>
            <span>Срок хранения</span>
            <p></p>
          </li>
          <li>
            <span>Условия хранения</span>
            <p></p>
          </li>
          <li>
            <span>Условия отпуска из аптек</span>
            <p></p>
          </li>
          <li>
            <span>Сведения о производителе</span>
            <p></p>
          </li>
        </ul>
      </div>
      <div className="similar-products">
        <p>Похожие товары</p>
      </div>
    </div>
  );
};

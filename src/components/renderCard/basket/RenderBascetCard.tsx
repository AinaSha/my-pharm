import { FC, useEffect } from 'react';
import lec22 from '../../../assets/imeges/lec22.png';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../../store';
import { GetProductsPart } from '../../../store/BascketFavoriteReducer';
import { IProduct } from '../../../types/Types';
import './renderBascetCard.scss';

export const RenderBascetCard: FC<IProduct> = ({
  id,
  name,
  manufacturer,
  price,
  favorites,
  page,
  discount_price,
  image,
  rating,
  characteristics,
}) => {
  return (
    <div className="product-card">
      <div className="product-card__inner">
        <div className="product-card__img">
          <img src={lec22} alt="" />
        </div>
        <div className="product-card__info">
          <div className="product-card__text">
            <h3>Алмагель, суспензия для приема внутрь 170 мл</h3>
            <p>Аптека НЭМАН</p>
          </div>
          <div className="product-card__price-block">
            <div className="price-for-one">
              <p>Цена</p>
              <p></p>
              <p>
                <span>159</span> сом/шт.
              </p>
            </div>
            <div className="product-card__count">
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
            <div className="product-card__pay">
              <p>
                <span>159</span> сом/шт.
              </p>
            </div>
          </div>
        </div>
        <div className="product-card__delete">
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33398 11.6667V19.6667M14.6673 11.6667V19.6667M1.33398 6.33333H22.6673M21.334 6.33333L20.178 22.5227C20.1301 23.1954 19.829 23.8251 19.3355 24.2848C18.8419 24.7444 18.1925 25 17.518 25H6.48332C5.80884 25 5.15941 24.7444 4.66583 24.2848C4.17226 23.8251 3.87121 23.1954 3.82332 22.5227L2.66732 6.33333H21.334ZM16.0007 6.33333V2.33333C16.0007 1.97971 15.8602 1.64057 15.6101 1.39052C15.3601 1.14048 15.0209 1 14.6673 1H9.33398C8.98036 1 8.64122 1.14048 8.39118 1.39052C8.14113 1.64057 8.00065 1.97971 8.00065 2.33333V6.33333H16.0007Z"
              stroke="#8B8989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

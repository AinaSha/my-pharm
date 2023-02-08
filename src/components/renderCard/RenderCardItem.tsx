import { FC, useState } from 'react';
import { useSelector } from 'react-redux';
import lec22 from '../../assets/imeges/lec22.png';
import { RootState } from '../../store';
import './renderCardItem.scss';

interface Card {
  id: string;
  image: string;
  title: string;
  manufacturer: string;
  price: string;
  vendorСode: string;
  recipe: boolean;
}

export const RenderCardItem: FC<Card> = ({
  id,
  image,
  title,
  manufacturer,
  price,
  vendorСode,
  recipe,
}: Card) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const [chooseCard, setChooseCard] = useState(false);

  const handleChooseCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    if (e.currentTarget.classList.contains('card-like')) setChooseCard(!chooseCard);
  };
  return (
    <div id={id} className="card">
      <div className="card__header">
        <div className={recipe ? 'recipe' : 'recipe opacity'}>
          <svg
            width="21"
            height="21"
            viewBox="0 0 21 21"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.375 14H10.5V10.5H9.625M10.5 7H10.5088M18.375 10.5C18.375 11.5342 18.1713 12.5582 17.7756 13.5136C17.3798 14.4691 16.7997 15.3372 16.0685 16.0685C15.3372 16.7997 14.4691 17.3798 13.5136 17.7756C12.5582 18.1713 11.5342 18.375 10.5 18.375C9.46584 18.375 8.44181 18.1713 7.48637 17.7756C6.53093 17.3798 5.6628 16.7997 4.93153 16.0685C4.20027 15.3372 3.6202 14.4691 3.22445 13.5136C2.82869 12.5582 2.625 11.5342 2.625 10.5C2.625 8.41142 3.45469 6.40838 4.93153 4.93153C6.40838 3.45469 8.41142 2.625 10.5 2.625C12.5886 2.625 14.5916 3.45469 16.0685 4.93153C17.5453 6.40838 18.375 8.41142 18.375 10.5Z"
              stroke="#8B8989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <p>{translate.prescription}</p>
        </div>
        <div onClick={handleChooseCard} className={chooseCard ? 'choose card-like' : 'card-like'}>
          <svg width="22" height="26" viewBox="0 0 22 26" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M2.4477 1.78105C1.94761 2.28115 1.66666 2.95942 1.66666 3.66667V25L11 20.3333L20.3333 25V3.66667C20.3333 2.95942 20.0524 2.28115 19.5523 1.78105C19.0522 1.28095 18.3739 1 17.6667 1H4.33332C3.62608 1 2.9478 1.28095 2.4477 1.78105Z"
              stroke=""
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
      <div className="card__img">
        <img src={lec22} alt={image} />
      </div>
      <div className="card__text">
        <h6>{title}</h6>
        <div className="card__manufacturer">
          <p>{translate.manifacturer}:</p>
          <span>{manufacturer}</span>
        </div>
        <p className="card__vendorСode">{vendorСode}</p>
        <h6>
          {translate.price} {price} сом.
        </h6>
      </div>
      <div className="card__btns">
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
        <button className="add-basket">{translate.basket}</button>
      </div>
    </div>
  );
};

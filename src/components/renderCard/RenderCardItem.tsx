import { FC, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { IProduct } from '../../types/Types';
import { setLocalStorage, getFromLocalStorage } from '../../utils/utilsForm';
import {
  addBascket,
  changeFavorite,
  setBascketLS,
  setFavoritesLS,
} from '../../store/BascketFavoriteReducer';
import './renderCardItem.scss';
import { Link } from 'react-router-dom';

export const RenderCardItem: FC<IProduct> = ({
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
}: IProduct) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { bascketLS, favoritesLS } = useSelector(
    (state: RootState) => state.BascketFavoriteReducer
  );
  const dispatch = useDispatch();

  const [chooseCard, setChooseCard] = useState(favorites);
  const [change, setChange] = useState(bascketLS ? bascketLS.hasOwnProperty(id) : false);
  const [countProduct, setCountProduct] = useState(change ? Number(bascketLS[Number(id)]) : 0);

  const handleChooseCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetCard = e.currentTarget as HTMLElement;

    if (targetCard.classList.contains('card-like')) setChooseCard(!chooseCard);

    const idCard = targetCard.parentElement?.parentElement?.id;
    const favoritesArr = getFromLocalStorage('favorites');

    if (favoritesArr) {
      const favArr = JSON.parse(favoritesArr!);
      if (favArr.indexOf(idCard) === -1) {
        setLocalStorage('favorites', JSON.stringify([...favArr, idCard]));
        dispatch(changeFavorite(favArr.length + 1));
        dispatch(setFavoritesLS([...favArr, idCard].join()));
      } else {
        favArr.splice(favArr.indexOf(idCard), 1);
        setLocalStorage('favorites', JSON.stringify(favArr));
        dispatch(changeFavorite(favArr.length));
        dispatch(setFavoritesLS(favArr.join()));
      }
    } else {
      setLocalStorage('favorites', JSON.stringify([idCard]));
      dispatch(changeFavorite(1));
    }
  };

  const handleChooseCardDelete = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const idCard = (e.currentTarget as HTMLElement).dataset.id as string;
    const arr = favoritesLS.split(',');
    const index = arr.indexOf(idCard);
    if (index !== -1) {
      arr.splice(index, 1);
      dispatch(setFavoritesLS(arr.join()));
      dispatch(changeFavorite(arr.length));
      setLocalStorage('favorites', JSON.stringify(arr));
    }
  };

  const handleAddBascket = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const targetCard = e.currentTarget as HTMLElement;
    const idCard = targetCard.parentElement?.dataset.id as string;

    if (countProduct === 0) setCountProduct(1);
    const count = countProduct === 0 ? 1 : countProduct;
    if (bascketLS) {
      const obj = { ...bascketLS, [idCard]: count };
      setLocalStorage('bascket', JSON.stringify(obj));
      const objKeys = Object.keys(bascketLS);
      let allProducts = count;
      objKeys.forEach((el: string) => {
        if (!(el === idCard)) allProducts += Number(bascketLS[Number(el)]);
      });
      dispatch(addBascket(allProducts));
      dispatch(setBascketLS(obj));
    } else {
      const obj = { [idCard]: count };
      setLocalStorage('bascket', JSON.stringify(obj));
      dispatch(addBascket(count));
      dispatch(setBascketLS(obj));
    }
    setChange(true);
  };

  const handleCountProductMin = () => {
    if (countProduct > 1) setCountProduct(countProduct - 1);
  };

  const handleCountProductPlus = () => {
    if (countProduct < 10) setCountProduct(countProduct + 1);
  };

  const handleCard = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetCard = e.currentTarget as HTMLElement;
    const idCard = targetCard.parentElement?.id as string;
    console.log(idCard);
  };

  return (
    <div id={String(id)} className="card">
      <div className="card__header">
        <div className={characteristics?.on_prescription === 'true' ? 'recipe' : 'recipe opacity'}>
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
        {page !== 'favorite' && (
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
        )}
        {page === 'favorite' && (
          <div data-id={id} onClick={handleChooseCardDelete} className="delete">
            <svg
              enableBackground="new 0 0 40 40"
              version="1.1"
              viewBox="0 0 40 40"
              xmlSpace="preserve"
              xmlns="http://www.w3.org/2000/svg"
              xmlnsXlink="http://www.w3.org/1999/xlink"
            >
              <g>
                <path d="M28,40H11.8c-3.3,0-5.9-2.7-5.9-5.9V16c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1c0,2.2,1.8,3.9,3.9,3.9H28c2.2,0,3.9-1.8,3.9-3.9V16   c0-0.6,0.4-1,1-1s1,0.4,1,1v18.1C33.9,37.3,31.2,40,28,40z" />
              </g>
              <g>
                <path d="M33.3,4.9h-7.6C25.2,2.1,22.8,0,19.9,0s-5.3,2.1-5.8,4.9H6.5c-2.3,0-4.1,1.8-4.1,4.1S4.2,13,6.5,13h26.9   c2.3,0,4.1-1.8,4.1-4.1S35.6,4.9,33.3,4.9z M19.9,2c1.8,0,3.3,1.2,3.7,2.9h-7.5C16.6,3.2,18.1,2,19.9,2z M33.3,11H6.5   c-1.1,0-2.1-0.9-2.1-2.1c0-1.1,0.9-2.1,2.1-2.1h26.9c1.1,0,2.1,0.9,2.1,2.1C35.4,10.1,34.5,11,33.3,11z" />
              </g>
              <g>
                <path d="M12.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C13.9,34.6,13.4,35.1,12.9,35.1z" />
              </g>
              <g>
                <path d="M26.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C27.9,34.6,27.4,35.1,26.9,35.1z" />
              </g>
              <g>
                <path d="M19.9,35.1c-0.6,0-1-0.4-1-1V17.4c0-0.6,0.4-1,1-1s1,0.4,1,1v16.7C20.9,34.6,20.4,35.1,19.9,35.1z" />
              </g>
            </svg>
          </div>
        )}
      </div>
      <Link to={`/products/${name}__${id}`}>
        <div className="card__img">
          <img src={image} alt={name} />
        </div>
        <div className="card__text">
          <h6>{name.length > 70 ? name.slice(0, 70).padEnd(73, '...') : name}</h6>
          <div className="card__manufacturer">
            <p>{translate.manifacturer}:</p>
            <span>{manufacturer?.name}</span>
          </div>
          <h6>
            {translate.price} <span className={discount_price && 'line-through'}>{price}</span>{' '}
            <span className={discount_price && 'sell'}>{discount_price}</span> сом.
          </h6>
        </div>
      </Link>
      <div data-id={id} className="card__btns">
        <div className="card__btns__choose">
          <button onClick={handleCountProductMin}>
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
          <span>{countProduct}</span>
          <button onClick={handleCountProductPlus}>
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
        <button onClick={handleAddBascket} className="add-basket">
          {change ? 'изменить' : translate.basket}
        </button>
      </div>
    </div>
  );
};

import { FC, useEffect, useState } from 'react';
import './productCards.scss';
import { getFromLocalStorage, setLocalStorage } from '../../utils/utilsForm';
import {
  addBascket,
  changeFavorite,
  setBascketLS,
  setFavoritesLS,
} from '../../store/BascketFavoriteReducer';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { IProduct } from '../../types/Types';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';
import { getProductsInPharmacies, setActiveCoordinate } from '../../store/productsReducer';
import MapYandex from '../../ui-kit/mapYandex/MapYandex';
import ListCoordinat from '../../ui-kit/mapYandex/ListCoordinat';

export const ProductCards: FC = () => {
  const id = window.location.pathname.split('__')[1];
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { products, inPharmacies } = useSelector((state: RootState) => state.ProductsReducer);
  const { bascketLS, favoritesLS } = useSelector(
    (state: RootState) => state.BascketFavoriteReducer
  );
  const dispatch = useDispatch();

  const [product, setProduct] = useState<IProduct>({
    category: {
      id: 0,
      ru: '',
      kg: '',
      en: '',
    },
    characteristics: {
      on_prescription: '',
      before_date: '',
      compound: '',
      package: '',
      purpose: '',
      release_form: '',
    },
    description: '',
    discount_price: '',
    image: '',
    in_stock: false,
    manufacturer: {
      id: 0,
      name: '',
    },
    name: '',
    price: 0,
    rating: 0,
    id: '',
    favorites: false,
  });
  const [chooseCard, setChooseCard] = useState(favoritesLS.indexOf(id) !== -1 ? true : false);
  const [change, setChange] = useState(bascketLS ? bascketLS.hasOwnProperty(id) : false);
  const [countProduct, setCountProduct] = useState(change ? Number(bascketLS[Number(id)]) : 0);

  useEffect(() => {
    products.map((el: IProduct) => {
      if (String(el.id) === id) {
        setProduct(el);
        if (!inPharmacies[0].name) store.dispatch(getProductsInPharmacies(id));
      }
    });
  }, []);

  useEffect(() => {
    const arr = [];
    if (!inPharmacies[0].name) {
      arr.push(Number(inPharmacies[0].latitude));
      arr.push(Number(inPharmacies[0].longitude));
      dispatch(setActiveCoordinate(arr));
    }
  }, [inPharmacies]);

  const handleChooseCard = () => {
    setChooseCard(!chooseCard);

    const favoritesArr = getFromLocalStorage('favorites');

    if (favoritesArr) {
      const favArr = JSON.parse(favoritesArr!);
      if (favArr.indexOf(id) === -1) {
        setLocalStorage('favorites', JSON.stringify([...favArr, id]));
        dispatch(changeFavorite(favArr.length + 1));
        dispatch(setFavoritesLS([...favArr, id].join()));
      } else {
        favArr.splice(favArr.indexOf(id), 1);
        setLocalStorage('favorites', JSON.stringify(favArr));
        dispatch(changeFavorite(favArr.length));
        dispatch(setFavoritesLS(favArr.join()));
      }
    } else {
      setLocalStorage('favorites', JSON.stringify([id]));
      dispatch(changeFavorite(1));
    }
  };

  const handleAddBascket = () => {
    if (countProduct === 0) setCountProduct(1);
    const count = countProduct === 0 ? 1 : countProduct;
    if (bascketLS) {
      const obj = { ...bascketLS, [id]: count };
      setLocalStorage('bascket', JSON.stringify(obj));
      const objKeys = Object.keys(bascketLS);
      let allProducts = count;
      objKeys.forEach((el: string) => {
        if (!(el === id)) allProducts += Number(bascketLS[Number(el)]);
      });
      dispatch(addBascket(allProducts));
      dispatch(setBascketLS(obj));
    } else {
      const obj = { [id]: count };
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

  return (
    <div className="container">
      <Breadcrumbs homeLabel="home" name={product.name} />
      <h2 className="product-cards-title">{product.name}</h2>
      <div className="main-info">
        <div className="image">
          <button
            onClick={handleChooseCard}
            className={chooseCard ? 'choose favorite' : 'favorite'}
          >
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
          <img src={product.image} alt="" />
        </div>
        <div className="main-info__short">
          <div>
            <p>
              <span>{translate.manifacturer}</span> {product.characteristics?.release_form}
            </p>
            <p>
              <span>{translate.accordingReleaseForm}:</span> {product.characteristics?.package}
            </p>
            <p>
              <span>{translate.country.toLocaleUpperCase()}:</span> {product.in_stock}
            </p>
            <p>
              <span>{translate.vacationOrder}:</span> {product.characteristics?.package}
            </p>
            <p>
              <span>{translate.article}:</span> {product.characteristics?.package}
            </p>
          </div>
          <div className="main-info__choose">
            <p>
              {translate.price}:{' '}
              <span>{product.discount_price ? product.discount_price : product.price} сом</span>
            </p>
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
            <button onClick={handleAddBascket} className="main-info__pay">
              {change ? translate.change : translate.basket}
            </button>
            <button className="main-info__pay white-btn">{translate.buyNow}</button>
          </div>
          <p>{translate.pharmacyName}</p>
        </div>
      </div>
      <section>
        <MapYandex />
        <ListCoordinat />
      </section>
      <div className="instruction">
        <p>Характеристики</p>
        <p className="title">Алмагель, суспензия для приема внутрь 170 мл </p>
        <ul>
          <li>
            <span>Торговое наименование</span>
            <p>{product.name}</p>
          </li>
          <li>
            <span>Лекарственная форма:</span>
            <p>{product.name}</p>
          </li>
          <li>
            <span>Нозологическая классификация МКБ-10 (название)</span>
            <p>{product.name}</p>
          </li>
          <li>
            <span>Состав</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Побочное действие:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Способ применения и дозы:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Передозировка:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Противопоказания</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Особые указания:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Применение при беременности и в период лактации:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Показания к применению:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Фармакокинетика:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Фармакологическое действие:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Описание товара:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Срок годности базовый (в месяцах):</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Термолабильный препарат:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Условия хранения:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Заболевания:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Содержание действующего вещества (мг):</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Целевой возраст:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Показания к применению:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Симптомы:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Органы и системы:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Производитель:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
          <li>
            <span>Вид упаковки:</span>
            <p>{product.characteristics?.compound}</p>
          </li>
        </ul>
      </div>
      <div className="similar-products">
        <p>{translate.similarProducts}</p>
      </div>
    </div>
  );
};

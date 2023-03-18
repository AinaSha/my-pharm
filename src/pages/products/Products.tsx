import { FC, useState } from 'react';
import { Pagination } from '../../components/pagination/Pagination';
import { RenderCardItem } from '../../components/renderCard/RenderCardItem';
import { CatalogList } from '../../ui-kit/catalog/CatalogList';
import './products.scss';

interface Card {
  id: string;
  image: string;
  title: string;
  manufacturer: string;
  price: string;
  vendorСode: string;
  recipe: boolean;
  favorites: boolean;
}

const cardL = [
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: false,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: false,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: false,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: false,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: false,
  },
];

export const Products: FC = () => {
  const [showCategore, setShowCategore] = useState(false);
  const [showForm, setShowForm] = useState(false);
  const [showAppointments, setshowAppointments] = useState(false);
  const [showСountry, setshowСountry] = useState(false);

  const renderCardItems = () => {
    return cardL.map((el: Card, id: number) => {
      return (
        <RenderCardItem
          key={id}
          id={el.id}
          title={el.title}
          image={el.image}
          manufacturer={el.manufacturer}
          price={el.price}
          vendorСode={el.vendorСode}
          recipe={el.recipe}
          favorites={el.favorites}
        />
      );
    });
  };

  return (
    <div className="container">
      <div className="filter-input">
        <label className="select-ctigory" htmlFor="">
          <input type="text" placeholder="Категории товаров" />
          <button onClick={() => setShowCategore(!showCategore)}>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3334 12L16.0001 21.3333L6.66675 12"
                stroke="#003838"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
          <div>{showCategore && <CatalogList prop="catalog-menu" />}</div>
        </label>
        <label className="select-pharmacies" htmlFor="">
          <input type="text" placeholder="Адрес аптек" />
          <button>
            <svg
              width="32"
              height="32"
              viewBox="0 0 32 32"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M25.3334 12L16.0001 21.3333L6.66675 12"
                stroke="#003838"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </button>
        </label>
      </div>
      <div className="main-page">
        <div className="filter-select">
          <div className="release-form">
            <label className="select-pharmacies" htmlFor="">
              <input type="text" placeholder="По форма выпуска" />
              <button onClick={() => setShowForm(!showForm)}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div>
                {showForm && (
                  <ul>
                    <li>таблетки</li>
                    <li>порошок</li>
                    <li>капсула</li>
                    <li>сироп</li>
                    <li>ампула</li>
                    <li>спрей</li>
                    <li>мазь</li>
                  </ul>
                )}
              </div>
            </label>
            <label className="select-pharmacies" htmlFor="">
              <input type="text" placeholder="Назначения" />
              <button onClick={() => setshowAppointments(!showAppointments)}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div>
                {showAppointments && (
                  <ul>
                    <li>взрослый</li>
                    <li>детский</li>
                    <li>Беременным и кормящим</li>
                  </ul>
                )}
              </div>
            </label>
            <label className="select-pharmacies" htmlFor="">
              <input type="text" placeholder="Страна" />
              <button onClick={() => setshowСountry(!showСountry)}>
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M25.3334 12L16.0001 21.3333L6.66675 12"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <div>
                {showСountry && (
                  <ul>
                    <li>Россия</li>
                    <li>Кыргызстан</li>
                    <li>Германия</li>
                    <li>Франция</li>
                    <li>Индия</li>
                  </ul>
                )}
              </div>
            </label>
          </div>
        </div>
        <div className="catalog-page">{renderCardItems()}</div>
      </div>
      <Pagination />
    </div>
  );
};

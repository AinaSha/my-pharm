import { FC } from 'react';
import { RenderCardItem } from '../renderCard/RenderCardItem';
import { RenderCatalog } from './RenderCatalog';
import './mainPageCatalog.scss';

interface Card {
  id: string;
  image: string;
  title: string;
  manufacturer: string;
  price: string;
  vendorСode: string;
  recipe: boolean;
}

const list = [
  {
    item: 'Гигиена',
    link: '#',
  },
  {
    item: 'Витаминыи БАДы',
    link: '#',
  },
  {
    item: 'Косметика',
    link: '#',
  },
  {
    item: 'Для мамы',
    link: '#',
  },
  {
    item: 'Для детей',
    link: '#',
  },
  {
    item: 'Здоровое питание',
    link: '#',
  },
  {
    item: 'Медицинские изделия',
    link: '#',
  },
  {
    item: 'Ортопедия',
    link: '#',
  },
  {
    item: 'Все продукты',
    link: '#',
  },
];

const cardL = [
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
  },
];

export const MainPageCatalog: FC = () => {
  const renderCatItems = () => {
    return list.map((el: { item: string; link: string }, id: number) => {
      return <RenderCatalog key={id} catalogItem={el} />;
    });
  };

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
        />
      );
    });
  };

  return (
    <section className="catalog-block">
      <div className="container">
        <h2>Каталог</h2>
        <div className="catalog-list">
          <ul>{renderCatItems()}</ul>
        </div>
        <div className="cards-block">{renderCardItems()}</div>
        <button className="catalog-block__btn">
          <a href="">Перейти в каталог</a>
        </button>
      </div>
    </section>
  );
};

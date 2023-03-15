import { FC } from 'react';
import { LinkButtons } from '../../components/linkButtons/LinkButtons';
import { RenderCardItem } from '../../components/renderCard/RenderCardItem';
import './favorites.scss';

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
    favorites: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: true,
  },
  {
    id: 'qqqqqqq',
    image: '',
    title: 'Ринофлуимуцил, спрей назальный 10 мл 1 шт',
    manufacturer: 'Ниармедик Фарма, Россия',
    price: '400',
    vendorСode: 'Арт. 31378',
    recipe: true,
    favorites: true,
  },
];

export const Favorites: FC = () => {
  const show = {
    basket: true,
    favorites: false,
    delivery: true,
    exit: false,
    window: false,
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
          favorites={el.favorites}
        />
      );
    });
  };

  return (
    <>
      <div className="container">
        <div className="link-buttons-favorit">
          <LinkButtons show={show} />
        </div>
      </div>
      <div className="container cards-block-favorite">{renderCardItems()}</div>
    </>
  );
};

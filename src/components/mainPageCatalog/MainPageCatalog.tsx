import { FC } from 'react';
import { RenderCardItem } from '../renderCard/RenderCardItem';
import './mainPageCatalog.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { CatalogList } from '../../ui-kit/catalog/CatalogList';

interface Card {
  id: string;
  image: string;
  title: string;
  manufacturer: string;
  price: string;
  vendorСode: string;
  recipe: boolean;
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
  const { translate } = useSelector((state: RootState) => state.languageReducer);

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
    <section className="catalog-block-main">
      <div className="container">
        <h2>{translate.catalog}</h2>
        <div className="catalog-list">
          <CatalogList prop="catalog_list" />
        </div>
        <div className="cards-block">{renderCardItems()}</div>
        <button className="catalog-block-main__btn">
          <a href="">{translate.catalogButton}</a>
        </button>
      </div>
    </section>
  );
};

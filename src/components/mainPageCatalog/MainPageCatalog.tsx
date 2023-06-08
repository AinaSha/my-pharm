import { FC, useEffect } from 'react';
import { RenderCardItem } from '../renderCard/RenderCardItem';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { CatalogList } from '../../ui-kit/catalog/CatalogList';
import { getProduct } from '../../store/productsReducer';
import { IProduct } from '../../types/Types';
import { NavLink } from 'react-router-dom';
import './mainPageCatalog.scss';

export const MainPageCatalog: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { products } = useSelector((state: RootState) => state.ProductsReducer);
  const favirutesProduct = localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') as string)
    : [];
  useEffect(() => {
    store.dispatch(getProduct());
  }, []);

  const renderCardItems = () => {
    return products.map((el: IProduct, id: number) => {
      if (el.in_stock && id < 9) {
        return (
          <RenderCardItem
            key={el.id}
            id={el.id}
            name={el.name}
            manufacturer={el.manufacturer}
            price={el.price}
            favorites={favirutesProduct.includes(String(el.id))}
            page="main"
            discount_price={el.discount_price}
            image={el.image}
            rating={el.rating}
            characteristics={el.characteristics}
          />
        );
      }
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
          <NavLink to="/products">{translate.catalogButton}</NavLink>
        </button>
      </div>
    </section>
  );
};

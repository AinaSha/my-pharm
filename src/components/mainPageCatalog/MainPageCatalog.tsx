import { FC, useEffect } from 'react';
import { RenderCardItem } from '../renderCard/RenderCardItem';
import './mainPageCatalog.scss';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { CatalogList } from '../../ui-kit/catalog/CatalogList';
import { getProduct } from '../../store/productsReducer';
import { IProduct } from '../../types/Types';
import { NavLink } from 'react-router-dom';

export const MainPageCatalog: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { products } = useSelector((state: RootState) => state.ProductsReducer);

  useEffect(() => {
    store.dispatch(getProduct());
  }, []);

  const renderCardItems = () => {
    return products.map((el: IProduct, id: number) => {
      return (
        <RenderCardItem
          key={id}
          id={el.id}
          title={el.title}
          thumbnail={el.thumbnail}
          manufacturer="{el.manufacturer}"
          price={el.price}
          is_req_prescription={el.is_req_prescription}
          favorites=""
          catalog={0}
          discount_price={''}
          sale={''}
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
          <NavLink to="/products">{translate.catalogButton}</NavLink>
        </button>
      </div>
    </section>
  );
};

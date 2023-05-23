import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { IProduct } from '../../types/Types';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';
import { Pagination } from '../../components/pagination/Pagination';
import { Pharmacies } from '../../components/pharmacies/Pharmacies';

import './promotion.scss';

export const Promotion: FC = () => {
  const { products } = useSelector((state: RootState) => state.ProductsReducer);
  console.log(products);
  const renderCardItems = () => {
    return products.map((el: IProduct) => {
      if (el.in_stock && el.discount_price) {
        return (
          <Link
            to={`/products/${el.name}__${el.id}`}
            key={el.id}
            className="promotion-gallery__card"
          >
            <div className="promotion-gallery__card-inner">
              <img src={el.image} alt="discount ites" />
              <p className="promotion-date">до 31 мая</p>
              <p className="promotion-price">
                {el.discount_price} сом<span>{el.price} сом</span>
              </p>
              <p className="promotion-desc">{el.name}</p>
            </div>
          </Link>
        );
      }
    });
  };

  return (
    <div>
      <div className="container">
        <Breadcrumbs homeLabel="Home" />
        <h3>Акции и предложения</h3>
        <div className="promotion-gallery">
          <div className="promotion-gallery__inner">{renderCardItems()}</div>
        </div>
        {/* <Pagination /> */}
        <Pharmacies />
      </div>
    </div>
  );
};

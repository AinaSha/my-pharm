import { FC } from 'react';
import { useSelector } from 'react-redux';
import { LinkButtons } from '../../components/linkButtons/LinkButtons';
import { RenderCardItem } from '../../components/renderCard/RenderCardItem';
import { RootState } from '../../store';
import { IProduct } from '../../types/Types';
import './favorites.scss';

export const Favorites: FC = () => {
  const show = {
    basket: true,
    favorites: false,
    delivery: true,
    exit: false,
    window: false,
  };

  const { products } = useSelector((state: RootState) => state.ProductsReducer);

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
          favorites="false"
          catalog={0}
          discount_price={''}
          sale={''}
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

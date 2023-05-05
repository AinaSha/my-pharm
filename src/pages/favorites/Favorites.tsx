import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RenderCardItem } from '../../components/renderCard/RenderCardItem';
import { RootState } from '../../store';
import { IProduct } from '../../types/Types';
import './favorites.scss';
import { UserNavList } from '../../ui-kit/userList/UserNavList';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';

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
          id={el.name}
          name={el.name}
          manufacturer={el.manufacturer}
          price={el.price}
          favorites={false}
          discount_price={el.discount_price}
          image={el.image}
        />
      );
    });
  };

  return (
    <>
      <div className="favorite container">
        <Breadcrumbs homeLabel="Home" />
        <div className="favorite__inner">
          <UserNavList />
          <div className="favorite__info-block">
            <h3>Избранное</h3>
            <div className="cards-block-favorite">
              {renderCardItems()}
              {renderCardItems()}
              {renderCardItems()}
            </div>
            <div className="empty-basket__info">
              <p>На данный момент вы еще не добавили товаров</p>
              <a className="empty-basket__info-btn" href="#">
                На главную страницу
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

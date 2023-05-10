import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RenderCardItem } from '../../components/renderCard/RenderCardItem';
import { RootState, store } from '../../store';
import { IProduct } from '../../types/Types';
import './favorites.scss';
import { UserNavList } from '../../ui-kit/userList/UserNavList';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';
import { Link } from 'react-router-dom';
import { GetProductsPart } from '../../store/BascketFavoriteReducer';

export const Favorites: FC = () => {
  const { countFavorite, favoritesLS, bascketProducts } = useSelector(
    (state: RootState) => state.BascketFavoriteReducer
  );

  useEffect(() => {
    store.dispatch(GetProductsPart(favoritesLS));
  }, [countFavorite, favoritesLS]);

  const renderCardItems = () => {
    return bascketProducts.map((el: IProduct) => {
      if (el.in_stock && countFavorite) {
        return (
          <RenderCardItem
            key={el.id}
            id={el.id}
            name={el.name}
            manufacturer={el.manufacturer}
            price={el.discount_price ? Number(el.discount_price) : el.price}
            discount_price={el.discount_price}
            image={el.image}
            rating={el.rating}
            characteristics={el.characteristics}
            page="favorite"
            favorites={true}
          />
        );
      }
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
            {countFavorite && <div className="cards-block-favorite">{renderCardItems()}</div>}
            {!countFavorite && (
              <div className="empty-basket__info">
                <p>На данный момент вы еще не добавили товаров</p>
                <Link className="empty-basket__info-btn" to="/">
                  На главную страницу
                </Link>
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

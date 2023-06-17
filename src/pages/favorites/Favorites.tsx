import { FC, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { RenderCardItem } from '../../components/renderCard/RenderCardItem';
import { RootState, store } from '../../store';
import { IProduct } from '../../types/Types';
import './favorites.scss';
import { UserNavList } from '../../ui-kit/userList/UserNavList';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';
import { GetProductsPart } from '../../store/BascketFavoriteReducer';
import { Empty } from '../../components/empty/Empty';

export const Favorites: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { countFavorite, favoritesLS, bascketProducts } = useSelector(
    (state: RootState) => state.BascketFavoriteReducer
  );

  useEffect(() => {
    if (favoritesLS) store.dispatch(GetProductsPart(favoritesLS));
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
        <Breadcrumbs homeLabel="home" name="" />
        <div className="favorite__inner">
          <UserNavList />
          <div className="favorite__info-block">
            <h3>{translate.favorites}</h3>
            {countFavorite && <div className="cards-block-favorite">{renderCardItems()}</div>}
            <Empty prop={''} />
            {/* {!countFavorite && <Empty prop={translate.notAddedMail} />} */}
          </div>
        </div>
      </div>
    </>
  );
};

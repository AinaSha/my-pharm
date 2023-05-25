import { FC, useEffect } from 'react';
import { RenderBascetCard } from '../../components/renderCard/basket/RenderBascetCard';
import { UserNavList } from '../../ui-kit/userList/UserNavList';
import { GetProductsPart, addBascket, setBascketLS } from '../../store/BascketFavoriteReducer';
import { RootState, store } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import './basket.scss';
import { IProduct } from '../../types/Types';
import { Empty } from '../../components/empty/Empty';

export const Basket: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { bascketLS, bascketProducts, countBascket } = useSelector(
    (state: RootState) => state.BascketFavoriteReducer
  );
  const dispatch = useDispatch();

  const productsID = Object.keys(bascketLS).join();
  let countProductsSum = 0;

  useEffect(() => {
    store.dispatch(GetProductsPart(productsID));
  }, [countBascket]);

  const renderCardItems = () => {
    return bascketProducts.map((el: IProduct) => {
      if (el.in_stock && countBascket) {
        if (bascketLS[el.id])
          countProductsSum += el.discount_price
            ? Number(bascketLS[el.id]) * Number(el.discount_price)
            : Number(bascketLS[el.id]) * el.price;
        return (
          <RenderBascetCard
            key={el.id}
            id={el.id}
            name={el.name}
            manufacturer={el.manufacturer}
            price={el.discount_price ? Number(el.discount_price) : el.price}
            favorites={false}
            page=""
            discount_price={el.discount_price}
            image={el.image}
            rating={el.rating}
            characteristics={el.characteristics}
          />
        );
      }
    });
  };

  const clear = () => {
    localStorage.removeItem('bascket');
    dispatch(addBascket(0));
    dispatch(setBascketLS({}));
  };

  return (
    <>
      <div className="container">
        {countBascket && (
          <div className="basket-wrapper">
            <div className="basket-info">
              <p className="basket-info__count">
                {translate.basketOne}: <span>{countBascket}</span> {translate.goods}
              </p>
              <button onClick={clear} className="basket-info__delete-btn">
                {translate.emptyTrash}
              </button>
            </div>
            <div className="basket-card-block">
              <div className="basket-cards-gallery">{renderCardItems()}</div>
              <div className="order-info">
                <div className="order-info__inner">
                  <div className="basket-pay">
                    <div className="basket-pay__inner">
                      <h3>{translate.informationOrder}:</h3>
                      <table>
                        <tbody>
                          <tr>
                            <td>{translate.goods2}</td>
                            <td></td>
                            <td>
                              <span>{countBascket}</span> шт
                            </td>
                          </tr>
                        </tbody>
                        <tfoot>
                          <tr>
                            <td>{translate.outcome}</td>
                            <td></td>
                            <td>
                              <span>{countProductsSum}</span>
                              сом
                            </td>
                          </tr>
                        </tfoot>
                      </table>
                    </div>
                  </div>
                  <div className="basket-pay__btn">
                    <button className="basket-pay__btn-order">{translate.orderProducts}</button>
                    <button className="basket-pay__btn-pay">{translate.paymentMethod}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}
        {!countBascket && (
          <div className="empty-basket">
            <UserNavList />
            <Empty prop={translate.basketEmpty} />
          </div>
        )}
      </div>
    </>
  );
};

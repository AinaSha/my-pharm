import { FC, useEffect } from 'react';
import { RenderBascetCard } from '../../components/renderCard/basket/RenderBascetCard';
import { UserNavList } from '../../ui-kit/userList/UserNavList';
import {
  GetProductsPart,
  OrdersCreate,
  addBascket,
  setBascketLS,
  setMyOrderfulfilled,
} from '../../store/BascketFavoriteReducer';
import { RootState, store } from '../../store';
import { useDispatch, useSelector } from 'react-redux';
import './basket.scss';
import { IProduct, TBuyProduct } from '../../types/Types';
import { Empty } from '../../components/empty/Empty';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';

export const Basket: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { bascketLS, bascketProducts, countBascket, myOrderfulfilled } = useSelector(
    (state: RootState) => state.BascketFavoriteReducer
  );
  const dispatch = useDispatch();

  const productsID = bascketLS ? Object.keys(bascketLS) : null;
  let countProductsSum = 0;

  useEffect(() => {
    if (productsID?.length) store.dispatch(GetProductsPart(productsID.join()));
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

  const handleSendOrde = () => {
    const arr: TBuyProduct[] = [];
    productsID?.map((el) => {
      arr.push({
        product_id: +el,
        quantity: bascketLS[el],
      });
    });

    if (arr.length) store.dispatch(OrdersCreate(arr));
  };

  useEffect(() => {
    if (myOrderfulfilled) {
      clear();
      setTimeout(() => dispatch(setMyOrderfulfilled()), 300);
    }
  }, [myOrderfulfilled]);

  return (
    <>
      <div className="container">
        <Breadcrumbs homeLabel="home" name="" />
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
                    {/* <Link to="/payment">
                      <button className="basket-pay__btn-order">{translate.orderProducts}</button>
                    </Link> */}
                    <button className="basket-pay__btn-order" onClick={handleSendOrde}>
                      {translate.orderProducts}
                    </button>
                    {/* <button className="basket-pay__btn-pay">{translate.paymentMethod}</button> */}
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

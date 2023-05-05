import { FC, useEffect } from 'react';
import { RenderBascetCard } from '../../components/renderCard/basket/RenderBascetCard';
import { UserNavList } from '../../ui-kit/userList/UserNavList';
import { GetProductsPart } from '../../store/BascketFavoriteReducer';
import { RootState, store } from '../../store';
import { useSelector } from 'react-redux';
import './basket.scss';
import { IProduct } from '../../types/Types';

export const Basket: FC = () => {
  const { bascketLS, bascketProducts } = useSelector(
    (state: RootState) => state.BascketFavoriteReducer
  );

  const productsID = Object.keys(bascketLS).join();

  useEffect(() => {
    store.dispatch(GetProductsPart(productsID));
  }, []);

  console.log(bascketProducts);
  const show = {
    basket: false,
    favorites: true,
    delivery: true,
    exit: false,
    window: false,
  };

  const renderCardItems = () => {
    return bascketProducts.map((el: IProduct) => {
      if (el.in_stock) {
        return (
          <RenderBascetCard
            key={el.id}
            id={el.id}
            name={el.name}
            manufacturer={el.manufacturer}
            price={el.price}
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

  return (
    <>
      <div className="container">
        <div className="basket-wrapper">
          <div className="basket-info">
            <p className="basket-info__count">
              Корзина: <span>3</span> товара
            </p>
            <button className="basket-info__delete-btn">Очистить корзину</button>
          </div>
          <div className="basket-card-block">
            {/* <RenderBascetCard /> */}
            {renderCardItems()}
            <div className="order-info">
              <div className="order-info__inner">
                <div className="basket-pay">
                  <div className="basket-pay__inner">
                    <h3>Информация о заказе:</h3>
                    <table>
                      <tbody>
                        <tr>
                          <td>Товары</td>
                          <td></td>
                          <td>
                            <span>3</span> шт
                          </td>
                        </tr>
                      </tbody>
                      <tfoot>
                        <tr>
                          <td>Итог</td>
                          <td></td>
                          <td>
                            <span>1896</span>
                            сом
                          </td>
                        </tr>
                      </tfoot>
                    </table>
                  </div>
                </div>
                <div className="basket-pay__btn">
                  <button className="basket-pay__btn-order">Заказать</button>
                  <button className="basket-pay__btn-pay">Способ оплаты</button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="empty-basket">
          <UserNavList />
          <div className="empty-basket__info">
            <h2>Ваша корзина пуста</h2>
            <p>Начните поиск и добавьте товар в корзину.</p>
            <a className="empty-basket__info-btn" href="#">
              На главную страницу
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

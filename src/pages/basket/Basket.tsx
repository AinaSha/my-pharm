import { FC } from 'react';
import { LinkButtons } from '../../components/linkButtons/LinkButtons';
import { RenderBascetCard } from '../../components/renderCard/basket/RenderBascetCard';
import './basket.scss';

export const Basket: FC = () => {
  const show = {
    basket: false,
    favorites: true,
    delivery: true,
    exit: false,
    window: false,
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
            <RenderBascetCard />
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
          <ul className="aside-nav-list">
            <li>
              <a href="#">Мои заказы</a>
            </li>
            <li>
              <a href="#">Личные данные</a>
            </li>
            <li>
              <a href="#">Избранное</a>
            </li>
            <li className="active">
              <a href="#">Корзина</a>
            </li>
            <li>
              <a href="#">Выйти</a>
            </li>
          </ul>
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

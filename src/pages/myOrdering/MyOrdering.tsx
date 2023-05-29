import { FC } from 'react';

import './MyOrdering.scss';
import { UserNavList } from '../../ui-kit/userList/UserNavList';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';

export const MyOrdering: FC = () => {
  return (
    <div className="my-ordering container">
      <Breadcrumbs homeLabel="home" name="" />
      <div className="my-ordering__inner">
        <UserNavList />
        <div className="list-order-side">
          <h3>Мои заказы</h3>
          <table>
            <thead>
              <tr>
                <th>№ заказа</th>
                <th>Дата заказа</th>
                <th>Количество</th>
                <th>Общ.сумма</th>
                <th>Оплата заказа</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td data-label="№ заказа">128596</td>
                <td data-label="Дата заказа">04/20/2023</td>
                <td data-label="Количество">3 шт.</td>
                <td data-label="Общ.сумма">1896 сом.</td>
                <td data-label="Оплата заказа">Оплачен</td>
              </tr>
              <tr>
                <td data-label="№ заказа">128596</td>
                <td data-label="Дата заказа">04/20/2023</td>
                <td data-label="Количество">3 шт.</td>
                <td data-label="Общ.сумма">1896 сом.</td>
                <td data-label="Оплата заказа">Оплачен</td>
              </tr>
              <tr>
                <td data-label="№ заказа">128596</td>
                <td data-label="Дата заказа">04/20/2023</td>
                <td data-label="Количество">3 шт.</td>
                <td data-label="Общ.сумма">1896 сом.</td>
                <td data-label="Оплата заказа">Оплачен</td>
              </tr>
            </tbody>
          </table>
        </div>
        {/* <div className="empty-basket__info">
          <p>Начните поиск и добавьте товар в корзину.</p>
          <a className="empty-basket__info-btn" href="#">
            На главную страницу
          </a>
        </div> */}
      </div>
    </div>
  );
};

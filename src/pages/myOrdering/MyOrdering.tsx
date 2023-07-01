import { FC, useEffect } from 'react';
import { UserNavList } from '../../ui-kit/userList/UserNavList';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';
import { RootState, store } from '../../store';
import { useSelector } from 'react-redux';
import './MyOrdering.scss';
import { TOrderItem, TOrderProdect } from '../../types/Types';
import { getMyOrders } from '../../store/BascketFavoriteReducer';

export const MyOrdering: FC = () => {
  const { myOrders, ordersCreate } = useSelector(
    (state: RootState) => state.BascketFavoriteReducer
  );

  useEffect(() => {
    if (ordersCreate) {
      store.dispatch(getMyOrders());
    }
  }, [ordersCreate]);

  const createInnerTable = (items: TOrderProdect[], allPay: (summa: number) => number) => {
    let sum = 0;
    return items.map((el, id) => {
      const pay = el.discount_price ? el.discount_price * el.quantity : el.price * el.quantity;
      sum += pay;

      if (id === items.length - 1) allPay(sum);

      return (
        <ul className="order-list" key={el.id}>
          <li data-label="Имя">
            <p>{el.name.length > 10 ? el.name.slice(0, 10).padEnd(13, '...') : el.name}</p>
          </li>
          <li data-label="Количество">{el.quantity}</li>
          <li className="order-list_price" data-label="Общ.сумма">
            {pay} сом
          </li>
        </ul>
      );
    });
  };

  const createTable = () => {
    return myOrders.map((el: TOrderItem, id) => {
      let allSum = 0;
      const allPay = (summa: number) => (allSum = summa);
      return (
        <tr key={id + 'key'}>
          <td data-label="№ заказа">128596</td>
          <td data-label="Дата заказа">{el.created_at.slice(0, 10)}</td>
          <td>{createInnerTable(el.items, allPay)}</td>
          <td data-label="Общ.сумма">{allSum} сом</td>
          <td data-label="Оплата заказа">{el.is_complete ? 'завершен' : 'в процессе'}</td>
        </tr>
      );
    });
  };

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
                <th>Статус заказа</th>
              </tr>
            </thead>
            <tbody>
              {createTable()}
              {/* <tr>
                <td data-label="№ заказа">128596</td>
                <td data-label="Дата заказа">04/20/2023</td>
                <td data-label="Количество">3 шт.</td>
                <td data-label="Общ.сумма">1896 сом.</td>
                <td data-label="Оплата заказа">Оплачен</td>
              </tr> */}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

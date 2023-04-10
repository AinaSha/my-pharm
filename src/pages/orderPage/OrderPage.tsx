import { FC } from 'react';
import { OrderingForm } from '../../components/orderingForm/OrderingForm';
import './orderPage.scss';
import { ListOrder } from '../../components/listOrder/ListOrder';

export const OrderPage: FC = () => {
  return (
    <div>
      <div className="ordering container">
        <h2>Оформление заказа</h2>
        <div className="order-wrapper">
          <OrderingForm />
          <ListOrder />
        </div>
      </div>
    </div>
  );
};

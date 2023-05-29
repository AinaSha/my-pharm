import { FC } from 'react';
import './orderingForm.scss';

export const OrderingForm: FC = () => {
  return (
    <div className="form-side">
      <h3>Оплата и доставка</h3>
      <form className="order-form">
        <div className="user-name">
          <div className="form-item user-name__form-item">
            <label htmlFor="">Имя:</label>
            <input className="user-name__input" type="text" />
          </div>
          <div className="form-item user-name__form-item last-name-form">
            <label htmlFor="">Фамилия:</label>
            <input className="user-name__input" type="text" />
          </div>
        </div>
        <div className="country">
          <label>Страна</label>
          <span>Кыргызстан</span>
        </div>
        <div className="form-item">
          <label htmlFor="">Город:</label>
          <input type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="">Адрес:</label>
          <input type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="">Телефон:</label>
          <input type="text" />
        </div>
        <div className="form-item">
          <label htmlFor="">Электронная почта:</label>
          <input type="text" />
        </div>
        <div className="delivery-details">
          <h3>Детали</h3>
          <p>Примечание к заказу (необязательно)</p>
          <textarea
            name=""
            id=""
            cols={30}
            rows={10}
            placeholder="Примечание к вашему заказу, например, особые пожелания отделу доставки"
          ></textarea>
        </div>
      </form>
    </div>
  );
};

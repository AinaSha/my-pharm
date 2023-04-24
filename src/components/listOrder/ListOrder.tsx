import { FC } from 'react';
import './ListOrder.scss';

export const ListOrder: FC = () => {
  return (
    <div className="order-right-side">
      <div className="order-right-side__inner">
        <h3>Ваш заказ</h3>
        <table className="order-table">
          <thead>
            <tr>
              <th>Товар</th>
              <th>Итого</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                Алмагель, суспензия для приема внутрь 170 мл
                <span>*</span>
                <span>1</span>
              </td>
              <td>
                280
                <span>сом</span>
              </td>
            </tr>
            <tr>
              <td>
                Кагоцел, таблетки 12 мг 20 шт
                <span>*</span>
                <span>1</span>
              </td>
              <td>
                502
                <span>сом</span>
              </td>
            </tr>
          </tbody>
          <tfoot>
            <tr>
              <th>Итого</th>
              <td>
                782
                <span>сом</span>
              </td>
            </tr>
          </tfoot>
        </table>
        <h5>Оплата при доставке</h5>
        <div className="">
          <p className="pay-conditions">Оплата наличными при доставке заказа</p>
          <p>
            Ваши личные данные будут использоваться для упрощения вашей работы с сайтом, управления
            доступом к вашей учётной записи и для других целей.
          </p>
          <div className="conditions">
            <input type="checkbox" />
            <p>
              Я прочитал(а) и соглашаюсь с правилами сайта
              <a href="#"> правила и условия *</a>
            </p>
          </div>
        </div>
        <button className="order-confirm-btn" type="submit">
          Подтвердить заказ
        </button>
      </div>
    </div>
  );
};

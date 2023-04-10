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
        <div className="link-buttons-block">
          <LinkButtons show={show} />
        </div>
      </div>
      <RenderBascetCard />
      <div className="container">
        <div className="basket-pay">
          <div>
            <p>Количество товаров:</p>
            <span>1</span>
            <p>шт</p>
          </div>
          <div>
            <p>Стоимость товаров:</p>
            <span>166</span>
            <p>сом</p>
          </div>
        </div>
        <div className="basket-pay__btn">
          <button className="basket-pay__btn-pay">Способ оплаты</button>
          <button className="basket-pay__btn-order">Заказать</button>
        </div>
      </div>
    </>
  );
};

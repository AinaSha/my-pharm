import { FC } from 'react';

import mbank from '../../assets/images/mbank-logo.svg';
import megapay from '../../assets/images/logo-megapay.svg';
import elsom from '../../assets/images/logo-Elsom.png';
import balance from '../../assets/images/balance-logo.svg';
import oDengi from '../../assets/images/odengi-logo.svg';
import whatsApp from '../../assets/images/whatsapp.png';

import './paymentMethods.scss';

export const PaymentMethods: FC = () => {
  return (
    <>
      <div className="container">
        <h3>Cпособы оплаты</h3>
        <div className="payment-gallery">
          <div className="payment-gallery__card">
            <div className="card-inner">
              <a className="">
                <div className="whatsapp-img-block">
                  <img src={whatsApp} alt="Whatsapp logo" />
                </div>
                <p className="payment-descr">Обсудить по Watsapp</p>
              </a>
            </div>
          </div>
          <div className="payment-gallery__card">
            <div className="card-inner">
              <div className="logo-img-block">
                <img src={mbank} alt="Mbank logo" />
              </div>
              <p className="payment-number">0 777 22 22 22</p>
            </div>
          </div>
          <div className="payment-gallery__card">
            <div className="logo-img-block">
              <img src={oDengi} alt="O dengi logo" />
            </div>
            <p className="payment-number">0 777 22 22 22</p>
          </div>
          <div className="payment-gallery__card">
            <div className="logo-img-block">
              <img src={megapay} alt="Mgapay logo" />
            </div>
            <p className="payment-number">0 777 22 22 22</p>
          </div>
          <div className="payment-gallery__card">
            <div className="logo-img-block">
              <img src={balance} alt="Balance logo" />
            </div>
            <p className="payment-number">0 777 22 22 22</p>
          </div>
          <div className="payment-gallery__card">
            <div className="logo-img-block">
              <img src={elsom} alt="Elsom logo" />
            </div>
            <p className="payment-number">0 777 22 22 22</p>
          </div>
        </div>
      </div>
    </>
  );
};

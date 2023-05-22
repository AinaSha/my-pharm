import { FC } from 'react';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';
import { Pagination } from '../../components/pagination/Pagination';
import { Pharmacies } from '../../components/pharmacies/Pharmacies';

import promoImg1 from '../../assets/images/promotion_1.png';
import promoImg2 from '../../assets/images/promotion_2.png';
import './promotion.scss';

export const Promotion: FC = () => {
  return (
    <div>
      <div className="container">
        <Breadcrumbs homeLabel="Home" />
        <h3>Акции и предложения</h3>
        <div className="promotion-gallery">
          <div className="promotion-gallery__inner">
            <div className="promotion-gallery__card">
              <div className="promotion-gallery__card-inner">
                <img src={promoImg1} alt="" />
                <p className="promotion-date">до 31 мая</p>
                <p className="promotion-desc">
                  Скидка до 15% на товары для диагностики и лечения диабета
                </p>
              </div>
            </div>
            <div className="promotion-gallery__card">
              <div className="promotion-gallery__card-inner">
                <img src={promoImg2} alt="" />
                <p className="promotion-date">01 мая 2023 - 15 мая 2023</p>
                <p className="promotion-desc">
                  Специальные цены на новую линейку средств по уходу за телом BIO от NATURA SIBERICA
                </p>
              </div>
            </div>
            <div className="promotion-gallery__card">
              <div className="promotion-gallery__card-inner">
                <img src={promoImg1} alt="" />
                <p className="promotion-date">С 1 по 31 мая</p>
                <p className="promotion-desc">Специальная цена на хиты для ухода ICON SKIN</p>
              </div>
            </div>
            <div className="promotion-gallery__card">
              <div className="promotion-gallery__card-inner">
                <img src={promoImg2} alt="" />
                <p className="promotion-date">С 1 по 31 мая</p>
                <p className="promotion-desc">Специальная цена на хиты для ухода ICON SKIN</p>
              </div>
            </div>
            <div className="promotion-gallery__card">
              <div className="promotion-gallery__card-inner">
                <img src={promoImg1} alt="" />
                <p className="promotion-date">до 31 мая</p>
                <p className="promotion-desc">
                  Скидка до 15% на товары для диагностики и лечения диабета
                </p>
              </div>
            </div>
            <div className="promotion-gallery__card">
              <div className="promotion-gallery__card-inner">
                <img src={promoImg2} alt="" />
                <p className="promotion-date">01 мая 2023 - 15 мая 2023</p>
                <p className="promotion-desc">
                  Специальные цены на новую линейку средств по уходу за телом BIO от NATURA SIBERICA
                </p>
              </div>
            </div>
            <div className="promotion-gallery__card">
              <div className="promotion-gallery__card-inner">
                <img src={promoImg1} alt="" />
                <p className="promotion-date">С 1 по 31 мая</p>
                <p className="promotion-desc">Специальная цена на хиты для ухода ICON SKIN</p>
              </div>
            </div>
            <div className="promotion-gallery__card">
              <div className="promotion-gallery__card-inner">
                <img src={promoImg2} alt="" />
                <p className="promotion-date">С 1 по 31 мая</p>
                <p className="promotion-desc">Специальная цена на хиты для ухода ICON SKIN</p>
              </div>
            </div>
          </div>
        </div>
        {/* <Pagination /> */}
        <Pharmacies />
      </div>
    </div>
  );
};

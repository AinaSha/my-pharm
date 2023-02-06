import { FC } from 'react';

import neman from '../../assets/imeges/neman.png';
import bimed from '../../assets/imeges/bimed.png';
import lekar from '../../assets/imeges/lekar.png';
import pharmService from '../../assets/imeges/farm-service.png';

import './Pharmacies.scss';

export const Pharmacies: FC = () => {
  return (
    <section className="pharmacies">
      <div className="container">
        <h2>Фармацевтические компании</h2>
        <div className="pharmacies__gallery">
          <div className="pharmacies__gallery-inner">
            <div className="pharmacy-item">
              <a href="#">
                <img src={neman} alt="Neman logotype" />
              </a>
            </div>
            <div className="pharmacy-item">
              <a href="#">
                <img src={bimed} alt="Bimed logotype" />
              </a>
            </div>
            <div className="pharmacy-item">
              <a href="#">
                <img src={lekar} alt="Lekar logotype" />
              </a>
            </div>
            <div className="pharmacy-item">
              <a href="#">
                <img src={pharmService} alt="PharmService logotype" />
              </a>
            </div>
            <div className="pharmacy-item">
              <a href="#">
                <img src={neman} alt="Neman logotype" />
              </a>
            </div>
            <div className="pharmacy-item">
              <a href="#">
                <img src={bimed} alt="Bimed logotype" />
              </a>
            </div>
            <div className="pharmacy-item">
              <a href="#">
                <img src={lekar} alt="Lekar logotype" />
              </a>
            </div>
            <div className="pharmacy-item">
              <a href="#">
                <img src={pharmService} alt="PharmService logotype" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

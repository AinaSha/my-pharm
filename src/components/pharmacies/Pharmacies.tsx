import { FC } from 'react';

import neman from '../../assets/imeges/neman.png';
import bimed from '../../assets/imeges/bimed.png';
import lekar from '../../assets/imeges/lekar.png';
import pharmService from '../../assets/imeges/farm-service.png';

import './Pharmacies.scss';

export const Phramacies: FC = () => {
  return (
    <section className="pharmacies">
      <div className="container">
        <h2>Фармацевтические компании</h2>
        <div className="pharmacies__gallery">
          <div className="pharmacy-item">
            <img src={neman} alt="Neman logotype" />
          </div>
          <div className="pharmacy-item">
            <img src={bimed} alt="Bimed logotype" />
          </div>
          <div className="pharmacy-item">
            <img src={lekar} alt="Lekar logotype" />
          </div>
          <div className="pharmacy-item">
            <img src={pharmService} alt="PharmService logotype" />
          </div>
          <div className="pharmacy-item">
            <img src={neman} alt="Neman logotype" />
          </div>
          <div className="pharmacy-item">
            <img src={bimed} alt="Bimed logotype" />
          </div>
          <div className="pharmacy-item">
            <img src={lekar} alt="Lekar logotype" />
          </div>
          <div className="pharmacy-item">
            <img src={pharmService} alt="PharmService logotype" />
          </div>
        </div>
      </div>
    </section>
  );
};

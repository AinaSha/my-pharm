import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

import neman from '../../assets/images/neman.png';
import bimed from '../../assets/images/bimed.png';
import lekar from '../../assets/images/lekar.png';
import pharmService from '../../assets/images/farm-service.png';

import './Pharmacies.scss';

export const Pharmacies: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  return (
    <section className="pharmacies">
      <div className="container">
        <h2>{translate.sectionTitle_3}</h2>
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

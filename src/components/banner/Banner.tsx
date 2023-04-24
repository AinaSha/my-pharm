import { FC, useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './banner.scss';
import { NavLink } from 'react-router-dom';

export const Banner: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(slide === 2 ? 1 : 2);
    }, 15000);

    return () => clearInterval(timer);
  });

  return (
    <section className="bunner">
      <div className="bunner__slide">
        <div
          className={slide === 1 ? 'show_slide bunner__slide-1' : 'bunner__slide-1 none_slide'}
        ></div>
        <div
          className={slide === 2 ? 'show_slide bunner__slide-3' : 'bunner__slide-3 none_slide'}
        ></div>
      </div>
      <div className="bunner__text">
        <h1>{translate.heroTitle}</h1>
        <p>{translate.heroSubTitle}</p>
        <button>
          <p>
            <NavLink to="/products">{translate.catalog}</NavLink>
          </p>
        </button>
      </div>
    </section>
  );
};

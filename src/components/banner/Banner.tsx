import { FC, useEffect, useState } from 'react';
import './banner.scss';

export const Banner: FC = () => {
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
        <h1>MyPharm - онлайн аптека</h1>
        <p>
          Интернет-аптека MyPharm предоставляет множество возможностей для поиска и заказа нужных
          лекарств
        </p>
        <button>
          <p>Каталог</p>
        </button>
      </div>
    </section>
  );
};

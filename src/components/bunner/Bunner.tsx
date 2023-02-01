import { FC, useEffect, useState } from 'react';
import image1 from '../../assets/imeges/image1.jpg';
import image2 from '../../assets/imeges/image2.jpg';
import image3 from '../../assets/imeges/image3.jpg';
import './bunner.scss';

export const Bunner: FC = () => {
  const [slide, setSlide] = useState(1);

  useEffect(() => {
    const timer = setInterval(() => {
      setSlide(slide === 3 ? 1 : slide + 1);
    }, 15000);

    return () => clearInterval(timer);
  });

  return (
    <section className="bunner">
      <div className="bunner__slide">
        <img className={slide === 1 ? 'show_slide' : ''} src={image1} alt="image for banner" />
        <img className={slide === 2 ? 'show_slide' : ''} src={image2} alt="image for banner" />
        <img className={slide === 3 ? 'show_slide' : ''} src={image3} alt="image for banner" />
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

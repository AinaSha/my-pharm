import { FC, useEffect, useRef, useState } from 'react';
import sell5 from '../../assets/imeges/sell5.jpg';
import './sellSlide.scss';

export const SellSlide: FC = () => {
  const containerWidth = useRef<HTMLDivElement>(null);
  const cardWidth = useRef<HTMLDivElement>(null);
  const [widthSlideList, setWidthSlideList] = useState(0);
  const [moveSlideItem, setWidthSlideListItem] = useState(0);
  const [slideItemWidth, setSlideItemWidth] = useState(0);
  const [clickRight, setClickRight] = useState(true);
  const [clickLeft, setClickLeft] = useState(false);

  useEffect(() => {
    const widthSlide = containerWidth.current
      ? (window.outerWidth - containerWidth.current.offsetWidth) / 2 +
        containerWidth.current.offsetWidth
      : 0;
    const cardWidthMar = cardWidth.current
      ? cardWidth.current.offsetWidth + 16
      : cardWidth.current!.offsetWidth + 16;
    setSlideItemWidth(cardWidthMar);
    setWidthSlideList(widthSlide);
  }, [containerWidth.current, cardWidth.current]);

  const handleClickLeft = () => {
    if (clickLeft) {
      setWidthSlideListItem(moveSlideItem + slideItemWidth);
      if (Math.abs(moveSlideItem) === slideItemWidth) setClickLeft(false);
      if (!clickRight) setClickRight(true);
    }
  };
  const handleClickRight = () => {
    if (clickRight) {
      setWidthSlideListItem(moveSlideItem - slideItemWidth);
      if (Math.abs(moveSlideItem) >= slideItemWidth * 3) setClickRight(false);
      if (!clickLeft) setClickLeft(true);
    }
  };

  return (
    <section>
      <div ref={containerWidth} className="container">
        <div className="sell">
          <div className="sell__title">
            <h5>Акции и предложения</h5>
            <div className="sell__title-btns">
              <button onClick={handleClickLeft} disabled={clickLeft ? false : true}>
                <svg
                  width="13"
                  height="23"
                  viewBox="0 0 13 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M11.7566 21.8198L1.09092 11.5917L11.7566 1.36365"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <button onClick={handleClickRight} disabled={clickRight ? false : true}>
                <svg
                  width="13"
                  height="21"
                  viewBox="0 0 13 21"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M1.85014 1.276L11.3262 10.5909L1.85014 19.9058"
                    stroke="#003838"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
          </div>
          <div className="sell__slider-block">
            <div style={{ width: `${widthSlideList}px` }} className="sell__slide">
              <div style={{ left: `${moveSlideItem}px` }} className="sell__slide-list">
                <div ref={cardWidth} className="sell__slide-item">
                  <a href="#">
                    <img src={sell5} alt="discount items" />
                  </a>
                </div>
                <div ref={cardWidth} className="sell__slide-item">
                  <a href="#">
                    <img src={sell5} alt="discount items" />
                  </a>
                </div>
                <div ref={cardWidth} className="sell__slide-item">
                  <a href="#">
                    <img src={sell5} alt="discount items" />
                  </a>
                </div>
                <div ref={cardWidth} className="sell__slide-item">
                  <a href="#">
                    <img src={sell5} alt="discount items" />
                  </a>
                </div>
                <div ref={cardWidth} className="sell__slide-item">
                  <a href="#">
                    <img src={sell5} alt="discount items" />
                  </a>
                </div>
                <div ref={cardWidth} className="sell__slide-item">
                  <a href="#">
                    <img src={sell5} alt="discount items" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

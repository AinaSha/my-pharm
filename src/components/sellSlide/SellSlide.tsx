import { FC, useEffect, useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './sellSlide.scss';
import { IProduct } from '../../types/Types';
import { Link } from 'react-router-dom';

export const SellSlide: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { windowWidth } = useSelector((state: RootState) => state.windowWidthReducer);
  const { products } = useSelector((state: RootState) => state.ProductsReducer);
  const containerWidth = useRef<HTMLDivElement>(null);
  const cardWidth = useRef<HTMLDivElement>(null);
  const [widthSlideList, setWidthSlideList] = useState(0);
  const [moveSlideItem, setWidthSlideListItem] = useState(0);
  const [slideItemWidth, setSlideItemWidth] = useState(0);
  const [clickRight, setClickRight] = useState(true);
  const [clickLeft, setClickLeft] = useState(false);

  const renderCardItems = () => {
    return products.map((el: IProduct) => {
      if (el.in_stock && el.discount_price) {
        return (
          <div key={el.id} ref={cardWidth} className="sell__slide-item">
            <Link to={`/products/${el.name}__${el.id}`}>
              <img src={el.image} alt="discount items" />
              <div className="sell-info">
                <p className="title">{el.name}</p>
                <p>
                  {el.discount_price} сом
                  <span className="line-through">{el.price}сом</span>
                </p>
              </div>
            </Link>
          </div>
        );
      }
    });
  };

  useEffect(() => {
    const widthSlide = containerWidth.current
      ? (windowWidth - containerWidth.current.offsetWidth) / 2 +
        containerWidth.current.offsetWidth -
        5
      : 0;
    const cardWidthMar = cardWidth.current
      ? cardWidth.current!.offsetWidth + 16
      : cardWidth.current!.offsetWidth + 16;
    setSlideItemWidth(cardWidthMar);
    setWidthSlideList(widthSlide);
  }, [containerWidth.current, cardWidth.current, windowWidth]);

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
            <h2>{translate.sectionTitle_1}</h2>
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
                {renderCardItems()}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

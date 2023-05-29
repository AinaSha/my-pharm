import { FC, useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { IProduct } from '../../types/Types';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';
import { Pagination } from '../../components/pagination/Pagination';
import { Pharmacies } from '../../components/pharmacies/Pharmacies';

import './promotion.scss';

export const Promotion: FC = () => {
  const { products } = useSelector((state: RootState) => state.ProductsReducer);
  const cardsOnPage = 2;
  const [allCards, setAllCards] = useState<IProduct[]>([]);
  const [curentPage, setCurentPage] = useState('1');
  const allPageNumbers = Math.ceil(allCards.length / cardsOnPage);
  const [cards, setCards] = useState<IProduct[]>(allCards.slice(0, cardsOnPage));
  // console.log(products);

  const renderCard = (el: IProduct) => {
    return (
      <Link to={`/products/${el.name}__${el.id}`} key={el.id} className="promotion-gallery__card">
        <div className="promotion-gallery__card-inner">
          <img src={el.image} alt="discount ites" />
          <p className="promotion-date">до 31 мая</p>
          <p className="promotion-price">
            {el.discount_price} сом<span>{el.price} сом</span>
          </p>
          <p className="promotion-desc">{el.name}</p>
        </div>
      </Link>
    );
  };

  useEffect(() => {
    const allCard: IProduct[] = [];
    products.map((el: IProduct) => {
      if (el.in_stock && el.discount_price) {
        allCard.push(el);
      }
    });
    setAllCards(allCard);
    setCards(allCard.slice(0, cardsOnPage));
  }, [products]);

  const paginate = (
    pageNumber: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    btnChilde: ChildNode | null | undefined
  ) => {
    let btn: HTMLButtonElement;
    if (!!e) btn = e.currentTarget as HTMLButtonElement;
    const buttons: ChildNode | NodeListOf<ChildNode> | undefined = btnChilde
      ? btnChilde.childNodes
      : btn!.parentElement?.childNodes;
    if (!buttons) return;
    buttons.forEach((el: ChildNode) => {
      const btn = el as HTMLButtonElement;
      btn.classList.remove('active-btn');

      if (btn.textContent === String(pageNumber)) btn.classList.add('active-btn');
    });

    const start = (pageNumber - 1) * cardsOnPage;
    const end = start + cardsOnPage;
    setCurentPage(String(pageNumber));
    setCards(allCards.slice(start, end));
  };

  return (
    <div>
      <div className="container">
        <Breadcrumbs homeLabel="home" name="" />
        <h3>Акции и предложения</h3>
        <div className="promotion-gallery">
          <div className="promotion-gallery__inner">
            {cards.map((el) => {
              return renderCard(el);
            })}
          </div>
        </div>
        {allPageNumbers > 1 && (
          <Pagination allPageNumbers={allPageNumbers} paginate={paginate} curentPage={curentPage} />
        )}
        <Pharmacies />
      </div>
    </div>
  );
};

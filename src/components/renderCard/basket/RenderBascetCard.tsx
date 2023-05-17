import { FC, useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../../store';
import { addBascket, setBascketLS } from '../../../store/BascketFavoriteReducer';
import { IProduct } from '../../../types/Types';
import { setLocalStorage } from '../../../utils/utilsForm';
import './renderBascetCard.scss';

export const RenderBascetCard: FC<IProduct> = ({ id, name, price, image }) => {
  const { bascketLS, countBascket } = useSelector(
    (state: RootState) => state.BascketFavoriteReducer
  );
  const dispatch = useDispatch();

  const [countProduct, setCountProduct] = useState(Number(bascketLS[id]));
  const [productPrices, setProductPrices] = useState(countProduct * price);

  const changeProductCount = (idCard: string, count: number) => {
    const obj = { ...bascketLS, [idCard]: count };
    setLocalStorage('bascket', JSON.stringify(obj));
    const objKeys = Object.keys(bascketLS);
    let allProducts = count;
    objKeys.forEach((el: string) => {
      if (!(el === idCard) && bascketLS[el]) allProducts += Number(bascketLS[el]);
    });
    dispatch(addBascket(allProducts));
    dispatch(setBascketLS(obj));
  };

  const handleCountProductMin = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const targetCard = e.currentTarget as HTMLElement;
    const idCard = targetCard.parentElement?.dataset.id as string;
    if (countProduct > 1) {
      setCountProduct(countProduct - 1);
      changeProductCount(idCard, countProduct - 1);
    }
  };

  const handleCountProductPlus = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const targetCard = e.currentTarget as HTMLElement;
    const idCard = targetCard.parentElement?.dataset.id as string;
    if (countProduct < 10) {
      setCountProduct(countProduct + 1);
      changeProductCount(idCard, countProduct + 1);
    }
  };

  useEffect(() => {
    setProductPrices(countProduct * price);
  }, [countProduct, countBascket]);

  const deleteProduct = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const targetCard = e.currentTarget as HTMLElement;
    const idCard = targetCard.dataset.id as string;

    dispatch(addBascket(countBascket - bascketLS[idCard]));
    const { [idCard]: foo, ...rest } = bascketLS;
    setLocalStorage('bascket', JSON.stringify(rest));
    dispatch(setBascketLS(rest));
  };

  return (
    <div className="product-card">
      <div className="product-card__inner">
        <div className="product-card__img">
          <img src={image} alt={id} />
        </div>
        <div className="product-card__info">
          <div className="product-card__text">
            <h3>{name}</h3>
            <p>Аптека НЭМАН</p>
          </div>
          <div className="product-card__price-block">
            <div className="price-for-one">
              <p>{id}</p>
              <p></p>
              <p>
                <span>{price}</span> сом/шт.
              </p>
            </div>
            <div data-id={id} className="product-card__count">
              <button onClick={handleCountProductMin}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M18 12H6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
              <span>{countProduct}</span>
              <button onClick={handleCountProductPlus}>
                <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 6V12M12 12V18M12 12H18M12 12H6"
                    stroke="black"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </button>
            </div>
            <div className="product-card__pay">
              <p>
                <span>{productPrices}</span> сом/шт.
              </p>
            </div>
          </div>
        </div>
        <div data-id={id} className="product-card__delete" onClick={deleteProduct}>
          <svg
            width="24"
            height="26"
            viewBox="0 0 24 26"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M9.33398 11.6667V19.6667M14.6673 11.6667V19.6667M1.33398 6.33333H22.6673M21.334 6.33333L20.178 22.5227C20.1301 23.1954 19.829 23.8251 19.3355 24.2848C18.8419 24.7444 18.1925 25 17.518 25H6.48332C5.80884 25 5.15941 24.7444 4.66583 24.2848C4.17226 23.8251 3.87121 23.1954 3.82332 22.5227L2.66732 6.33333H21.334ZM16.0007 6.33333V2.33333C16.0007 1.97971 15.8602 1.64057 15.6101 1.39052C15.3601 1.14048 15.0209 1 14.6673 1H9.33398C8.98036 1 8.64122 1.14048 8.39118 1.39052C8.14113 1.64057 8.00065 1.97971 8.00065 2.33333V6.33333H16.0007Z"
              stroke="#8B8989"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

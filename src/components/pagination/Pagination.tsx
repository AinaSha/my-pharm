import { FC, useState } from 'react';
import { IPagination } from '../../types/Types';
import './paginations.scss';

export const Pagination: FC<IPagination> = ({
  allPageNumbers,
  paginate,
  curentPage,
}: IPagination) => {
  const [disBtnLeft, setDisBtnLeft] = useState(true);
  const [disBtnRight, setDisBtnRight] = useState(false);
  const pages: number[] = [];

  for (let i = 0; i < allPageNumbers; i++) {
    pages.push(i);
  }

  const handlePagination = (
    num: number,
    e: React.MouseEvent<HTMLButtonElement, MouseEvent> | null,
    btnChilde: ChildNode | null | undefined
  ) => {
    paginate(num, e, btnChilde);
    if (num === allPageNumbers) {
      setDisBtnRight(true);
      setDisBtnLeft(false);
    }
    if (num === 1) {
      setDisBtnRight(false);
      setDisBtnLeft(true);
    }
    if (num !== allPageNumbers) {
      setDisBtnRight(false);
    }
    if (num !== 1) {
      setDisBtnLeft(false);
    }
  };

  const handleClickRight = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const elem = e.currentTarget.previousElementSibling as HTMLButtonElement;
    if (Number(curentPage) === 1) {
      elem.disabled = false;
      setDisBtnLeft(false);
    }
    if (Number(curentPage) === allPageNumbers - 1) {
      elem.disabled = true;
    }
    if (Number(curentPage) < allPageNumbers) handlePagination(Number(curentPage) + 1, null, elem);
  };

  const handleClickLeft = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    const elem = e.currentTarget.nextElementSibling as HTMLButtonElement;
    if (Number(curentPage) === allPageNumbers) {
      elem.disabled = false;
      setDisBtnRight(false);
    }

    if (Number(curentPage) === 2) {
      setDisBtnLeft(true);
    }
    if (Number(curentPage) > 1) handlePagination(Number(curentPage) - 1, null, elem);
  };

  return (
    <div className="paginations">
      <button className="left-btn" onClick={(e) => handleClickLeft(e)}>
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
        {disBtnLeft && <span></span>}
      </button>
      <div>
        {pages.map((num: number) => {
          if (num === 0) {
            return (
              <button
                key={num}
                className="pagination-btn active-btn"
                id={`${num + 1}`}
                onClick={(e) => handlePagination(num + 1, e, null)}
              >
                {num + 1}
              </button>
            );
          } else {
            return (
              <button
                key={num}
                id={`${num + 1}`}
                className="pagination-btn"
                onClick={(e) => handlePagination(num + 1, e, null)}
              >
                {num + 1}
              </button>
            );
          }
        })}
      </div>
      <button className="right-btn" onClick={(e) => handleClickRight(e)}>
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
        {disBtnRight && <span></span>}
      </button>
    </div>
  );
};

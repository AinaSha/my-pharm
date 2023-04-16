import { FC } from 'react';
import './paginations.scss';

export const Pagination: FC = () => {
  return (
    <div className="paginations">
      <button className="left-btn">
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
        <span className="hiden"></span>
      </button>
      <button className="pagination-btn pagination-btn-active " id="1">
        1
      </button>
      <button className="pagination-btn" id="2">
        2
      </button>
      <button className="pagination-btn" id="3">
        3
      </button>
      <button className="pagination-btn" id="4">
        4
      </button>
      <button className="pagination-btn" id="5">
        5
      </button>
      <button className="pagination-btn" id="6">
        6
      </button>
      <button className="pagination-btn" id="7">
        7
      </button>
      <button className="right-btn">
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
        <span className="hiden"></span>
      </button>
    </div>
  );
};

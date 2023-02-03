import { FC } from 'react';

import './Language.scss';

export const Language: FC = () => {
  return (
    <div className="language">
      <span>KG</span>
      <svg
        width="18"
        height="18"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M25.3333 12L16 21.3333L6.66663 12"
          stroke="#003838"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </div>
  );
};

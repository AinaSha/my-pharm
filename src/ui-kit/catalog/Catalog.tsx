import { FC } from 'react';
import { catalogLinks } from '../../components/link/link';
import './Catalog.scss';

// export interface CatalogProps {
//     children: React.ReactNode,

// }
type CatalogLink = {
  value: string;
  href: string;
};

export const Catalog: FC = () => {
  return (
    <>
      <button className="catalog-btn">
        <svg
          width="17"
          height="17"
          viewBox="0 0 17 17"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path d="M0 0H16.5V2H0V0Z" fill="white" />
          <path d="M0 10H16.5V12H0V10Z" fill="white" />
          <path d="M0 5H12V7H0V5Z" fill="white" />
          <path d="M0 15H8.5V17H0V15Z" fill="white" />
        </svg>
        Каталог
      </button>
      <ul className="catalog-menu">
        {catalogLinks.map((item: CatalogLink) => {
          return (
            <li key={item.href} className="catalog-menu__item">
              <a href={item.href}>{item.value}</a>
            </li>
          );
        })}
      </ul>
    </>
  );
};

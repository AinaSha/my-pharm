import { FC } from 'react';
// import { CatalogListItem } from './CatalogListItem';
import { CatalogItemProps } from '../../types/Types';

interface CatalogListProps {
  list: CatalogItemProps[];
}

export const CatalogList: FC<CatalogListProps> = ({ list }) => {
  return (
    <ul className="catalog-menu">
      {list.map((item) => {
        return (
          <li key={item.link} className="catalog-menu__item">
            <a href={item.link}>{item.value}</a>
          </li>
        );
      })}
    </ul>
  );
};

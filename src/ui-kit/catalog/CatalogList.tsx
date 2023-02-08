import { FC } from 'react';
import { Link, To } from 'react-router-dom';
import { CatalogItemProps } from '../../types/Types';

interface CatalogListProps {
  list: CatalogItemProps[];
  to: To;
}

export const CatalogList: FC<CatalogListProps> = ({ list }) => {
  return (
    <ul className="catalog-menu">
      {list.map((item) => {
        return (
          <li key={item.href} className="catalog-menu__item">
            <Link to={item.href}>{item.value}</Link>
          </li>
        );
      })}
    </ul>
  );
};

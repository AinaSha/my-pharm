import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';

interface CatalogListProps {
  prop: string;
}

export const CatalogList: FC<CatalogListProps> = (prop: CatalogListProps) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);

  const handleCatalog = (e: React.MouseEvent) => {
    const linkCatalog = e.target as HTMLLinkElement;
    console.log(e.target);
    console.log(linkCatalog.id);
  };

  return (
    <ul className={prop.prop}>
      {translate.catigoryLists.map((item) => {
        return (
          <li onClick={handleCatalog} key={item.href} className={prop.prop + '__item'}>
            <Link id={item.id} to={item.href}>
              {item.value}
            </Link>
          </li>
        );
      })}
      {prop.prop === 'catalog_list' ? (
        <li key="Все продукты" className={prop.prop + '__item'}>
          <Link to="/">Все продукты</Link>
        </li>
      ) : (
        ''
      )}
    </ul>
  );
};

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';

interface CatalogListProps {
  prop: string;
}

export const CatalogList: FC<CatalogListProps> = (prop: CatalogListProps) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  return (
    <ul className={prop.prop}>
      {translate.catigoryLists.map((item) => {
        return (
          <li key={item.href} className={prop.prop + '__item'}>
            <Link to={item.href}>{item.value}</Link>
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

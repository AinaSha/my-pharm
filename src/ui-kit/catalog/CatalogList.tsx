import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';
import { setActiveBurger } from '../../store/burgerStyleReducer';

interface CatalogListProps {
  prop: string;
}

export const CatalogList: FC<CatalogListProps> = (prop: CatalogListProps) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveBurger(false));
  };

  return (
    <ul className={prop.prop}>
      {translate.catigoryLists.map((item) => {
        return (
          <li key={item.href} className={prop.prop + '__item'} onClick={handleClick}>
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

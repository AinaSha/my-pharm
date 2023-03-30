import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState, store } from '../../store';
import {
  getProductFilter,
  setCatalog,
  setCatalogId,
  setShowCategore,
} from '../../store/productsReducer';
import { useDispatch } from 'react-redux';

interface CatalogListProps {
  prop: string;
}

export const CatalogList: FC<CatalogListProps> = (prop: CatalogListProps) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const dispatch = useDispatch<AppDispatch>();

  const handleCatalog = (e: React.MouseEvent) => {
    const linkCatalog = e.target as HTMLLinkElement;
    const data = {
      id: linkCatalog.id as string,
      form: '',
      appointment: '',
    };
    store.dispatch(getProductFilter(data));
    dispatch(setCatalog(linkCatalog.innerHTML));
    dispatch(setCatalogId(linkCatalog.id));
    dispatch(setShowCategore(false));
  };

  return (
    <ul className={prop.prop}>
      {translate.catigoryLists.map((item) => {
        return (
          <li onClick={handleCatalog} key={item.href} className={prop.prop + '__item'}>
            <NavLink id={item.id} to="/products">
              {item.value}
            </NavLink>
          </li>
        );
      })}
      {prop.prop === 'catalog_list' ? (
        <li key="Все продукты" className={prop.prop + '__item'}>
          <NavLink to="/products">Все продукты</NavLink>
        </li>
      ) : (
        ''
      )}
    </ul>
  );
};

import React, { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setCatalog, setShowCategore } from '../../store/productsReducer';
import { useDispatch } from 'react-redux';
import { CatalogListProps } from '../../types/Types';

export const CatalogList: FC<CatalogListProps> = (prop: CatalogListProps) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const dispatch = useDispatch<AppDispatch>();

  const sendcatalog = (linkelement: HTMLLinkElement) => {
    const option = {
      nodLiId: linkelement.id,
      nodeLiText: linkelement.innerHTML,
    };
    dispatch(setCatalog(option));
    dispatch(setShowCategore(false));
  };

  const handleCatalog = (e: React.MouseEvent) => {
    const linkCatalog = e.target as HTMLLinkElement;
    if (linkCatalog.classList.contains('catalog-menu__item')) {
      sendcatalog(linkCatalog.firstChild as HTMLLinkElement);
    } else {
      sendcatalog(linkCatalog);
    }
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
        <li key="Все продукты" className={prop.prop + '__item'} onClick={handleCatalog}>
          <NavLink to="/products">Все продукты</NavLink>
        </li>
      ) : (
        ''
      )}
    </ul>
  );
};

import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './UserNavList.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';

export const UserNavList: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  return (
    <>
      <ul className="aside-nav-list">
        <li className="aside-nav-list-item">
          <NavLink to="/myOrdering">{translate.myOrders}</NavLink>
        </li>
        <li className="aside-nav-list-item">
          <NavLink to="/profileData">{translate.personalData}</NavLink>
        </li>
        <li className="aside-nav-list-item">
          <NavLink to="/favorites">{translate.favorites}</NavLink>
        </li>
        <li className="aside-nav-list-item active">
          <NavLink to="/basket">{translate.basketOne}</NavLink>
        </li>
        <li className="aside-nav-list-item">
          <NavLink to="/">{translate.exit}</NavLink>
        </li>
      </ul>
    </>
  );
};

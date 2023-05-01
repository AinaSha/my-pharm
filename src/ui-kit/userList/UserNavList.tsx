import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './UserNavList.scss';

export const UserNavList: FC = () => {
  return (
    <>
      <ul className="aside-nav-list">
        <li className="aside-nav-list-item">
          <NavLink to="/myOrdering">Мои заказы</NavLink>
        </li>
        <li className="aside-nav-list-item">
          <NavLink to="/profileData">Личные данные</NavLink>
        </li>
        <li className="aside-nav-list-item">
          <NavLink to="/favorites">Избранное</NavLink>
        </li>
        <li className="aside-nav-list-item active">
          <NavLink to="/basket">Корзина</NavLink>
        </li>
        <li className="aside-nav-list-item">
          <NavLink to="/">Выйти</NavLink>
        </li>
      </ul>
    </>
  );
};

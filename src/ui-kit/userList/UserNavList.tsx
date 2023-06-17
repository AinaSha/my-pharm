import { FC } from 'react';
import { NavLink } from 'react-router-dom';

import './UserNavList.scss';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import { useDispatch } from 'react-redux';
import { exit } from '../../store/authUserReducer';

export const UserNavList: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const dispatch = useDispatch();

  const handleExit = () => {
    dispatch(exit());
  };

  return (
    <>
      <ul className="aside-nav-list">
        <li className="aside-nav-list-item">
          <NavLink to="/myOrdering">{translate.myOrders}</NavLink>
        </li>
        <li className="aside-nav-list-item">
          <NavLink to="/userData">{translate.personalData}</NavLink>
        </li>
        <li className="aside-nav-list-item">
          <NavLink to="/favorites">{translate.favorites}</NavLink>
        </li>
        <li className="aside-nav-list-item active">
          <NavLink to="/basket">{translate.basketOne}</NavLink>
        </li>
        <li className="aside-nav-list-item" onClick={handleExit}>
          <NavLink to="/">{translate.exit}</NavLink>
        </li>
      </ul>
    </>
  );
};

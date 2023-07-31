import { FC } from 'react';
import { NavLink } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Navbar.scss';

export const Navbar: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  return (
    <ul className="menu-list">
      <li>
        <NavLink to="/">{translate.main}</NavLink>
      </li>
      <li>
        <NavLink to="/promotion">{translate.promotion}</NavLink>
      </li>
      <li>
        <NavLink to="/contact">{translate.contacts}</NavLink>
      </li>
    </ul>
  );
};

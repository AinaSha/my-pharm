import { FC } from 'react';

import { Language } from '../language/Language';
import { Location } from '../location/Location';
import { PhoneContact } from '../pnoneContact/PhoneContact';
import { SignIn } from '../signIn/SignIn';
import { Catalog } from '../catalog/Catalog';
import { Navbar } from '../../components/navbar/Navbar';

import './BurgerMenu.scss';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from '../../store';
import { setActiveBurger } from '../../store/burgerStyleReducer';

export interface MenuProps {
  isActive: boolean;
  onClick: (event: React.MouseEvent) => void;
}

export const BurgerMenu: FC<MenuProps> = () => {
  const { active } = useSelector((state: RootState) => state.BurgerReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveBurger(false));
  };
  const handleActivMenu = () => {
    dispatch(setActiveBurger(true));
  };

  return (
    <>
      <div className={active ? 'burger active' : 'burger'}>
        <span onClick={handleClick} className={active ? '' : 'hiden'}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M4.29289 4.29289C4.68342 3.90237 5.31658 3.90237 5.70711 4.29289L10 8.58579L14.2929 4.29289C14.6834 3.90237 15.3166 3.90237 15.7071 4.29289C16.0976 4.68342 16.0976 5.31658 15.7071 5.70711L11.4142 10L15.7071 14.2929C16.0976 14.6834 16.0976 15.3166 15.7071 15.7071C15.3166 16.0976 14.6834 16.0976 14.2929 15.7071L10 11.4142L5.70711 15.7071C5.31658 16.0976 4.68342 16.0976 4.29289 15.7071C3.90237 15.3166 3.90237 14.6834 4.29289 14.2929L8.58579 10L4.29289 5.70711C3.90237 5.31658 3.90237 4.68342 4.29289 4.29289Z" />
          </svg>
        </span>
        <span onClick={handleActivMenu} className={active ? 'hiden' : ''}>
          <svg viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
            <path d="M3 5C3 4.44772 3.44772 4 4 4H16C16.5523 4 17 4.44772 17 5C17 5.55228 16.5523 6 16 6H4C3.44772 6 3 5.55228 3 5Z" />
            <path d="M3 10C3 9.44772 3.44772 9 4 9H10C10.5523 9 11 9.44772 11 10C11 10.5523 10.5523 11 10 11H4C3.44772 11 3 10.5523 3 10Z" />
            <path d="M3 15C3 14.4477 3.44772 14 4 14H16C16.5523 14 17 14.4477 17 15C17 15.5523 16.5523 16 16 16H4C3.44772 16 3 15.5523 3 15Z" />
          </svg>
        </span>
      </div>
      <div className={active ? 'burger-menu active' : 'burger-menu'}>
        <div className="first-block" onClick={handleClick}>
          <Location />
          <PhoneContact />
          <SignIn />
        </div>
        <div>
          <Language />
        </div>
        <div className="second-block">
          <Catalog />
          <Navbar />
        </div>
      </div>
    </>
  );
};

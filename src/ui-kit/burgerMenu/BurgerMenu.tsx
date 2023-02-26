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

export const BurgerMenu: FC<MenuProps> = ({ isActive = false, onClick }) => {
  const { active } = useSelector((state: RootState) => state.BurgerReducer);
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setActiveBurger(false));
  };

  return (
    <>
      <div className={active ? 'burger active' : 'burger'} onClick={onClick}>
        <span></span>
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
          <div onClick={handleClick}>
            <Navbar />
          </div>
        </div>
      </div>
    </>
  );
};

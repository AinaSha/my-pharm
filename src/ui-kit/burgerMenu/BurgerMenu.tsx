import { FC } from 'react';

import { Language } from '../language/Language';
import { Location } from '../location/Location';
import { PhoneContact } from '../pnoneContact/PhoneContact';
import { SignIn } from '../signIn/SignIn';
import { Catalog } from '../catalog/Catalog';
import { Navbar } from '../../components/navbar/Navbar';

import './BurgerMenu.scss';

export interface MenuProps {
  // children: React.ReactNode;
  isActive: boolean;
  onClick: (event: React.MouseEvent) => void;
}

export const BurgerMenu: FC<MenuProps> = ({ isActive = false, onClick }) => {
  let classNames = 'burger ';

  if (isActive) {
    classNames += 'active';
  }

  return (
    <>
      <div className={classNames} onClick={onClick}>
        <span></span>
      </div>
      <div className={isActive ? 'burger-menu active' : 'burger-menu'}>
        <div className="first-block">
          <Location />
          <PhoneContact />
          <SignIn />
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

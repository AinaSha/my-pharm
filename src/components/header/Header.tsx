import { FC, useState } from 'react';
import { Link } from 'react-router-dom';

import { BurgerMenu } from '../../ui-kit/burgerMenu/BurgerMenu';
import { Catalog } from '../../ui-kit/catalog/Catalog';
import { Navbar } from '../navbar/Navbar';
import { Language } from '../../ui-kit/language/Language';
import { PhoneContact } from '../../ui-kit/pnoneContact/PhoneContact';
import { Location } from '../../ui-kit/location/Location';
import { SearchForm } from '../../ui-kit/searchForm/SearchForm';
import { SignIn } from '../../ui-kit/signIn/SignIn';

import './Header.scss';

import logo from '../../assets/icones/Logo.svg';
import bookmark from '../../assets/icones/bookmark.svg';
import shopingCard from '../../assets/icones/shopping-cart.svg';

export const Header: FC = () => {
  const [isActive, setActive] = useState(false);

  const handleToggle = () => {
    setActive((prevState) => !prevState);
  };

  return (
    <div className="header">
      <div className="header-inner">
        <div className="top-header">
          <div className="top-header__wrapper container ">
            <div className="left">
              <Location />
              <Navbar />
            </div>
            <div className="right">
              <Language />
              <PhoneContact />
            </div>
          </div>
        </div>
        <div className="bottom-header container">
          <div className="burger-logo-block">
            <BurgerMenu isActive={isActive} onClick={handleToggle} />
            <Link to="/" className="header__logo">
              <img src={logo} alt="logotype" />
            </Link>
          </div>
          <div className="catalog-parent">
            <Catalog />
          </div>
          <SearchForm />
          <div className="user-btns">
            <Link to="/" className="bookmark-btn">
              <img src={bookmark} alt="bookmark icon" />
            </Link>
            <Link to="/" className="basket-btn">
              <img src={shopingCard} alt="basket icon" />
            </Link>
            <SignIn />
          </div>
        </div>
      </div>
    </div>
  );
};

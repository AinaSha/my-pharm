import { FC } from 'react';

// import { links } from './link.json';

import './Header.scss';
import locatotion from '../../assets/icones/location-marker.svg';
import phone from '../../assets/icones/phone-outgoing.svg';
import logo from '../../assets/icones/Logo.svg';
import search from '../../assets/icones/search.svg';
import shopIcon from '../../assets/icones/Shopicon.svg';
import bookmark from '../../assets/icones/bookmark.svg';
import shopingCard from '../../assets/icones/shopping-cart.svg';
import userIcon from '../../assets/icones/user-circle.svg';

export const Header: FC = () => {
  return (
    <div className="header">
      <div className="header-inner">
        <nav className="top-header">
          <div className="top-header__wrapper container ">
            <ul className="menu-list">
              <li className="location">
                <img src={locatotion} alt="location icon" />
                Кыргызстан
              </li>
              <li>
                <a href="#">Главная</a>
              </li>
              <li>
                <a href="#">Акции</a>
              </li>
              <li>
                <a href="#">Контакты</a>
              </li>
            </ul>
            <div className="right">
              <img src={phone} alt="phone" />
              <a href="tel:+996 777 22 22 22">+996 777 22 22 22</a>
            </div>
          </div>
        </nav>
        <div className="bottom-header container">
          <div className="burger">
            <span></span>
          </div>
          <a href="#" className="header__logo">
            <img src={logo} alt="logotype" />
          </a>
          <button className="catalog-btn">
            <img src={shopIcon} alt="burger icon" />
            Каталог
          </button>
          <form className="search-input">
            <img src={search} alt="search icon" />
            <input type="text" className="search-input" />
            <button>Поиск</button>
          </form>
          <div className="user-btns">
            <a href="" className="bookmark-btn">
              <img src={bookmark} alt="bookmark icon" />
            </a>
            <a href="" className="basket-btn">
              <img src={shopingCard} alt="basket icon" />
            </a>
            <a href="" className="sign-btn">
              <img src={userIcon} alt="user icon" />
              Войти
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

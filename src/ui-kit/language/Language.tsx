import { FC, useState, useRef, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { setActiveBurger } from '../../store/burgerStyleReducer';
import { setLanguage, setTranslate } from '../../store/languageReducer';

import './Language.scss';

export const Language: FC = () => {
  const { language } = useSelector((state: RootState) => state.languageReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [open, setOpen] = useState<boolean>(false);
  const [lahguage, setLahguage] = useState<string | null>(language);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const chooseLang = (e: React.MouseEvent<HTMLLIElement, MouseEvent>) => {
    const curentLi = e.currentTarget;
    curentLi.textContent ? setLahguage(curentLi.textContent) : '';
    if (curentLi.textContent) {
      dispatch(setTranslate(curentLi.textContent));
      dispatch(setLanguage(curentLi.textContent));
    }
    setOpen(!open);
  };

  const handleClickOutsideDropDown = (e: MouseEvent) => {
    if (open && !dropDownRef.current?.contains(e.target as Node)) {
      setOpen(false);
    }
  };
  useEffect(() => {
    window.addEventListener('click', handleClickOutsideDropDown);
    return () => {
      window.removeEventListener('click', handleClickOutsideDropDown);
    };
  });

  const handleClick = () => {
    dispatch(setActiveBurger(false));
  };

  return (
    <>
      <div className="language-container" ref={dropDownRef}>
        <button className="language" onClick={() => setOpen(!open)}>
          <span>{lahguage}</span>
          <svg
            className={open ? 'lang-btn-up' : ''}
            width="18"
            height="18"
            viewBox="0 0 32 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M25.3333 12L16 21.3333L6.66663 12"
              stroke="#003838"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </button>
        {open && (
          <ul onClick={handleClick}>
            <li onClick={chooseLang}>KG</li>
            <li onClick={chooseLang}>RU</li>
            <li onClick={chooseLang}>EN</li>
          </ul>
        )}
      </div>
    </>
  );
};

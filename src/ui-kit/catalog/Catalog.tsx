import { FC, useState, useRef, useEffect } from 'react';

import './Catalog.scss';

// export interface CatalogProps {
//     children: React.ReactNode,

// }

export const Catalog: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  // const handleDropDownFocus = (state: boolean) => {
  //   setOpen(!state);
  // };
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
  return (
    <>
      <div className="catalog-block" ref={dropDownRef}>
        <button className="catalog-btn" onClick={() => setOpen(!open)}>
          <svg
            width="17"
            height="17"
            viewBox="0 0 17 17"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M0 0H16.5V2H0V0Z" fill="white" />
            <path d="M0 10H16.5V12H0V10Z" fill="white" />
            <path d="M0 5H12V7H0V5Z" fill="white" />
            <path d="M0 15H8.5V17H0V15Z" fill="white" />
          </svg>
          Каталог
        </button>
        {open && (
          <ul className="catalog-menu">
            {/* {catalogLinks.map((item: CatalogLink) => {
              return (
                <li key={item.href} className="catalog-menu__item">
                  <a href={item.href}>{item.value}</a>
                </li>
              );
            })} */}
          </ul>
        )}
      </div>
    </>
  );
};

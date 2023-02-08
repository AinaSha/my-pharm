import { FC, useState, useRef, useEffect } from 'react';
import { lists } from '../../components/link/link';
import { CatalogList } from './CatalogList';
import { RootState } from '../../store';
import { useSelector } from 'react-redux';
import './Catalog.scss';

export const Catalog: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const [open, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
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
          {translate.catalog}
        </button>
        {open && <CatalogList list={lists} to={''} />}
      </div>
    </>
  );
};

import { FC, useState, useRef, useEffect } from 'react';

import './Language.scss';

export const Language: FC = () => {
  const [open, setOpen] = useState<boolean>(false);
  const dropDownRef = useRef<HTMLDivElement>(null);
  const handleDropDownFocus = (state: boolean) => {
    setOpen(!state);
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

  return (
    <>
      <div className="language-container" ref={dropDownRef}>
        <button className="language" onClick={() => handleDropDownFocus(open)}>
          <span>KG</span>
          <svg
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
          <ul>
            <li>KG</li>
            <li>RU</li>
            <li>ENG</li>
          </ul>
        )}
      </div>
    </>
  );
};

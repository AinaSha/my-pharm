import { FC, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';
import { Link } from 'react-router-dom';
import {
  setAppointment,
  setCatalog,
  setCountry,
  setFormText,
  setResetFilter,
  setSearchName,
} from '../../store/productsReducer';
import './SearchForm.scss';

export const SearchForm: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  const { resetFilter } = useSelector((state: RootState) => state.ProductsReducer);
  const dispatch = useDispatch<AppDispatch>();

  const inputRef = useRef<HTMLInputElement>(null);

  const handleSearch = () => {
    const text = inputRef.current?.value;
    const option = {
      nodLiId: '',
      nodeLiText: '',
    };
    dispatch(setSearchName(text));
    dispatch(setCatalog(option));
    dispatch(setFormText(option));
    dispatch(setCountry(option));
    dispatch(setAppointment(option));
    dispatch(setResetFilter(!resetFilter));
    (inputRef.current as HTMLInputElement).value = '';
  };

  return (
    <div className="search-input">
      <svg
        width="32"
        height="32"
        viewBox="0 0 32 32"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M28 28L20 20M22.6667 13.3333C22.6667 14.559 22.4253 15.7727 21.9562 16.905C21.4872 18.0374 20.7997 19.0663 19.933 19.933C19.0663 20.7997 18.0374 21.4872 16.905 21.9562C15.7727 22.4253 14.559 22.6667 13.3333 22.6667C12.1077 22.6667 10.894 22.4253 9.76162 21.9562C8.62925 21.4872 7.60035 20.7997 6.73367 19.933C5.86699 19.0663 5.1795 18.0374 4.71046 16.905C4.24141 15.7727 4 14.559 4 13.3333C4 10.858 4.98333 8.48401 6.73367 6.73367C8.48401 4.98333 10.858 4 13.3333 4C15.8087 4 18.1827 4.98333 19.933 6.73367C21.6833 8.48401 22.6667 10.858 22.6667 13.3333Z"
          stroke="#8B8989"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      <input type="text" placeholder={translate.placeholder} ref={inputRef} />
      <button type="submit" onClick={handleSearch}>
        <Link to="/products" style={{ color: 'white' }}>
          {translate.search}
        </Link>
      </button>
    </div>
  );
};

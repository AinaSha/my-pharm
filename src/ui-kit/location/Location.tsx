import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../store';
import './Location.scss';

export const Location: FC = () => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  return (
    <a className="location">
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M17.657 16.657L13.414 20.9C13.2284 21.0858 13.0081 21.2331 12.7656 21.3336C12.523 21.4342 12.2631 21.4859 12.0005 21.4859C11.738 21.4859 11.478 21.4342 11.2354 21.3336C10.9929 21.2331 10.7726 21.0858 10.587 20.9L6.343 16.657C5.22422 15.5382 4.46234 14.1127 4.15369 12.5609C3.84504 11.009 4.00349 9.40053 4.60901 7.93874C5.21452 6.47696 6.2399 5.22755 7.55548 4.34852C8.87107 3.46949 10.4178 3.00031 12 3.00031C13.5822 3.00031 15.1289 3.46949 16.4445 4.34852C17.7601 5.22755 18.7855 6.47696 19.391 7.93874C19.9965 9.40053 20.155 11.009 19.8463 12.5609C19.5377 14.1127 18.7758 15.5382 17.657 16.657V16.657Z"
          stroke="#8B8989"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
        <path
          d="M14.1213 13.1213C14.6839 12.5587 15 11.7956 15 11C15 10.2044 14.6839 9.44129 14.1213 8.87868C13.5587 8.31607 12.7956 8 12 8C11.2044 8 10.4413 8.31607 9.87868 8.87868C9.31607 9.44129 9 10.2044 9 11C9 11.7956 9.31607 12.5587 9.87868 13.1213C10.4413 13.6839 11.2044 14 12 14C12.7956 14 13.5587 13.6839 14.1213 13.1213Z"
          stroke="#8B8989"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
      {translate.location}
    </a>
  );
};

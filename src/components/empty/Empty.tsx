import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import { RootState } from '../../store';

interface IMail {
  prop: string;
}

export const Empty: FC<IMail> = ({ prop }: IMail) => {
  const { translate } = useSelector((state: RootState) => state.languageReducer);
  return (
    <div className="empty-basket__info">
      <h2>{prop}</h2>
      <p>{translate.basketEmptyText}.</p>
      <Link className="empty-basket__info-btn" to="/">
        {translate.toHomePage}
      </Link>
    </div>
  );
};

import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { GetUserMe, RefreshToken } from '../../store/authUserReducer';

export const Contact: FC = () => {
  const { exp, refreshToken } = useSelector((state: RootState) => state.AuthReducer);
  const getUserMe = () => {
    console.log(exp);
    const curentTime = Math.ceil(new Date().getTime() / 1000) >= exp - 100;
    if (curentTime && localStorage.getItem('__userIsAuth')) {
      console.log('+++');
      console.log(refreshToken);
      store.dispatch(RefreshToken(refreshToken));
      store.dispatch(GetUserMe());
    }
  };

  return (
    <div>
      <div className="container">
        <h1>Contact page!</h1>
        <button onClick={getUserMe}>users/me</button>
      </div>
    </div>
  );
};

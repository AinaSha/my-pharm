import { FC } from 'react';
import { useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { GetUserMe, RefreshToken } from '../../store/authUserReducer';
import { getCookiFile } from '../../utils/utilsForm';

export const Contact: FC = () => {
  const { exp } = useSelector((state: RootState) => state.AuthReducer);
  const getUserMe = () => {
    console.log(exp);
    const curentTime = Math.ceil(new Date().getTime() / 1000) >= exp;
    if (curentTime && localStorage.getItem('__userIsAuth')) {
      console.log('getUserMe');
      const refresh = getCookiFile('refreshToken');
      store.dispatch(RefreshToken(refresh!));
      setTimeout(() => {
        store.dispatch(GetUserMe());
      }, 700);
    }
    store.dispatch(GetUserMe());
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

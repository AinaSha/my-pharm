import { FC } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { GetUserMe, RefreshToken } from '../../store/authUserReducer';
import { getCookiFile, removeLocalStorage } from '../../utils/utilsForm';
import { siginin, exit } from '../../store/authUserReducer';

export const Contact: FC = () => {
  const { exp } = useSelector((state: RootState) => state.AuthReducer);
  const dispatch = useDispatch();
  const getUserMe = () => {
    const curentTime = Math.ceil(new Date().getTime() / 1000) >= exp;
    if (curentTime && localStorage.getItem('__userIsAuth')) {
      const refresh = getCookiFile('refreshToken');
      if (!refresh) {
        removeLocalStorage('__token');
        removeLocalStorage('__userIsAuth');
        removeLocalStorage('__userId');
        dispatch(exit());
        dispatch(siginin());
      }
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

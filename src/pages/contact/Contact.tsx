import { FC } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import { RootState, store } from '../../store';
// import { GetUserMe, RefreshToken } from '../../store/authUserReducer';
// import { getCookiFile, removeLocalStorage } from '../../utils/utilsForm';
// import { siginin, exit } from '../../store/authUserReducer';
// import { api } from '../../api/api';

export const Contact: FC = () => {
  // const { exp } = useSelector((state: RootState) => state.AuthReducer);
  // const dispatch = useDispatch();
  // const getUserMe = () => {
  // const curentTime = Math.ceil(new Date().getTime() / 1000) >= exp;
  // if (curentTime && localStorage.getItem('__userIsAuth')) {
  //   const refresh = getCookiFile('refreshToken');
  //   if (!refresh) {
  //     removeLocalStorage('__token');
  //     removeLocalStorage('__userIsAuth');
  //     removeLocalStorage('__userId');
  //     dispatch(exit());
  //     dispatch(siginin());
  //   }
  //   store.dispatch(RefreshToken(refresh!));
  //   setTimeout(() => {
  //     store.dispatch(GetUserMe());
  //   }, 700);
  //   }
  //   store.dispatch(GetUserMe());
  // };

  const getCatalog = async () => {
    console.log('click getCatalog');
    // const data = await api.GetCatalogs();
    // const data6 = await api.GetCatalogProducts('2');
    // const data3 = await api.GetCompanies();
    // const data4 = await api.GetCompaniesPharmacies();
    // const data2 = await api.GetPharmacies();
    // const data5 = await api.GetProducts();
    // console.log(data);
    // console.log(data3);
    // console.log(data4);
    // console.log(data2);
    // console.log(data5);
    // console.log(data2);
    // console.log(data6);
  };

  return (
    <div>
      <div className="container">
        <h1>Contact page!</h1>
        <button onClick={getCatalog}>get Catalog</button>
      </div>
    </div>
  );
};

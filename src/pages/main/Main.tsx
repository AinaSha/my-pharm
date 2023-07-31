import { FC, useEffect, useState } from 'react';
import { Banner } from '../../components/banner/Banner';
import { SellSlide } from '../../components/sellSlide/SellSlide';
import { MainPageCatalog } from '../../components/mainPageCatalog/MainPageCatalog';
import { Pharmacies } from '../../components/pharmacies/Pharmacies';
import { WindowWidthChange } from '../../store/windowWidthRedux';
import { useDispatch, useSelector } from 'react-redux';
import { AppDispatch, RootState } from '../../store';

export const Main: FC = () => {
  const { products } = useSelector((state: RootState) => state.ProductsReducer);
  const dispatch = useDispatch<AppDispatch>();
  const [updateSell, setUpdateSell] = useState(false);
  window.addEventListener('resize', () => {
    dispatch(WindowWidthChange());
  });

  useEffect(() => {
    if (products[0].name) {
      setUpdateSell(true);
    }
  }, [products]);

  return (
    <>
      <Banner />
      {updateSell && <SellSlide />}
      <MainPageCatalog />
      <Pharmacies />
    </>
  );
};

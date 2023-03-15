import { FC } from 'react';
// import { Banner } from '../../components/banner/Banner';
// import { SellSlide } from '../../components/sellSlide/SellSlide';
// import { MainPageCatalog } from '../../components/mainPageCatalog/MainPageCatalog';
// import { Pharmacies } from '../../components/pharmacies/Pharmacies';
import { WindowWidthChange } from '../../store/windowWidthRedux';
import { useDispatch } from 'react-redux';
import { AppDispatch } from '../../store';
// import { PersonalArea } from '../personalArea/PersonalArea';
import { Basket } from '../basket/Basket';

export const Main: FC = () => {
  const dispatch = useDispatch<AppDispatch>();
  window.addEventListener('resize', () => {
    dispatch(WindowWidthChange());
  });

  return (
    <>
      <Basket />
      {/* <PersonalArea /> */}
      {/* <Banner /> */}
      {/* <SellSlide />
      <MainPageCatalog />
      <Pharmacies /> */}
    </>
  );
};

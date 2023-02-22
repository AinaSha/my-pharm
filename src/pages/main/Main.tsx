import { FC } from 'react';
import { Banner } from '../../components/banner/Banner';
import { SellSlide } from '../../components/sellSlide/SellSlide';
import { MainPageCatalog } from '../../components/mainPageCatalog/MainPageCatalog';
import { Pharmacies } from '../../components/pharmacies/Pharmacies';

export const Main: FC = () => {
  return (
    <>
      <Banner />
      {/* <SellSlide /> */}
      <MainPageCatalog />
      <Pharmacies />
    </>
  );
};

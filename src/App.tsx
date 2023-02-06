import React from 'react';
import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { Footer } from './components/footer/Footer';
import { MainPageCatalog } from './components/mainPageCatalog/MainPageCatalog';
import { SellSlide } from './components/sellSlide/SellSlide';
import './index.scss';
import { Pharmacies } from './components/pharmacies/Pharmacies';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SellSlide />
      <MainPageCatalog />
      <Pharmacies />
      <Footer />
    </div>
  );
}

export default App;

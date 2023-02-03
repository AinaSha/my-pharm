import React from 'react';
import { Banner } from './components/banner/Banner';
import { MainPageCatalog } from './components/mainPageCatalog/MainPageCatalog';
import { SellSlide } from './components/sellSlide/SellSlide';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Banner />
      <SellSlide />
      <MainPageCatalog />
    </div>
  );
}

export default App;

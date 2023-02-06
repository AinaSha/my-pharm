import React from 'react';
import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { SellSlide } from './components/sellSlide/SellSlide';
import './index.scss';
import { Phramacies } from './components/pharmacies/Pharmacies';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SellSlide />
      <Phramacies />
    </div>
  );
}

export default App;

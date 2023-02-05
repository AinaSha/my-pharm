import React from 'react';
import { Header } from './components/header/Header';
import { Banner } from './components/banner/Banner';
import { SellSlide } from './components/sellSlide/SellSlide';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Header />
      <Banner />
      <SellSlide />
    </div>
  );
}

export default App;

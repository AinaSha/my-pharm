import React from 'react';
import { Banner } from './components/banner/Banner';
import { SellSlide } from './components/sellSlide/SellSlide';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Banner />
      <SellSlide />
    </div>
  );
}

export default App;

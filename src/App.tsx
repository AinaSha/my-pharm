import React from 'react';
import { Bunner } from './components/bunner/Bunner';
import { SellSlide } from './components/sellSlide/SellSlide';
import './index.scss';

function App() {
  return (
    <div className="App">
      <Bunner />
      <SellSlide />
    </div>
  );
}

export default App;

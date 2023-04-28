import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { Header } from './components/header/Header';
import { Footer } from './components/footer/Footer';
import { Main } from './pages/main/Main';
import { Promotion } from './pages/promotion/promotion';
import { Contact } from './pages/contact/Contact';
import { Registration } from './pages/registration/registration';
import { Confidentiality } from './pages/confidentiality/Confidentiality';
import { ForgottenPassword } from './pages/forgottenPassword/ForgottenPassword';
import { ProfileData } from './pages/profileData/ProfileData';
import { OrderPage } from './pages/orderPage/OrderPage';
import { Products } from './pages/products/Products';
import { Basket } from './pages/basket/Basket';
import { Favorites } from './pages/favorites/Favorites';
import { MyOrdering } from './pages/myOrdering/MyOrdering';

import './index.scss';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Routes>
            <Route path="/" element={<Main />} />
            <Route path="/promotion" element={<Promotion />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/registration" element={<Registration />} />
            <Route path="/confidentiality" element={<Confidentiality />} />
            <Route path="/forgottenPassword" element={<ForgottenPassword />} />
            <Route path="/profileData" element={<ProfileData />} />
            <Route path="/orderPage" element={<OrderPage />} />
            <Route path="/products" element={<Products />} />
            <Route path="/basket" element={<Basket />} />
            <Route path="/favorites" element={<Favorites />} />
            <Route path="/myOrdering" element={<MyOrdering />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

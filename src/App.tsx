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
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

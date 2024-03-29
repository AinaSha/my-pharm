import { FC } from 'react';
import { LogIn } from '../../components/logIn/LogIn';
import { LoginWithGoogle } from '../../components/loginWithGoogle/LoginWGoogle';

import './registration.scss';

export const Registration: FC = () => {
  return (
    <div>
      <div className="container">
        <section className="registration">
          <h2>Регистрация</h2>
          <LogIn />
          <LoginWithGoogle />
        </section>
      </div>
    </div>
  );
};

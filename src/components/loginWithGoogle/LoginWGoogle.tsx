import { FC } from 'react';
import { useEffect } from 'react';
import jwt_decode from 'jwt-decode';

import './LoginWGoogle.scss';

export const LoginWithGoogle: FC = () => {
  const handleCallbackResponse = (responce: { credential: string }) => {
    console.log('Encoded JWT ID token: ' + responce.credential);
    const userObject = jwt_decode(responce.credential);
    console.log(userObject);
  };
  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id: '1843938197-30m1hbu7k2o6rp4vbafgkteheftk7qr0.apps.googleusercontent.com',
      callback: handleCallbackResponse,
    });

    const docGetId = document.getElementById('signUpDiv')!;
    google.accounts.id.renderButton(docGetId, {
      theme: 'outline',
      // size: 'large',
      type: 'standard',
      text: 'signup_with',
      // width: '280px',
    });

    google.accounts.id.prompt();
  }, []);
  return (
    <div className="google-block">
      <p>или</p>
      <div id="signUpDiv"></div>
    </div>
  );
};

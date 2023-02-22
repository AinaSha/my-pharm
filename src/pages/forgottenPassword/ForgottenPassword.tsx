import { FC } from 'react';

import './ForgottenPassword.scss';

export const ForgottenPassword: FC = () => {
  return (
    <div>
      <div className="container">
        <div className="forgotten-password">
          <h2>Восстановление пароля</h2>
          <form>
            <input type="email" placeholder="E-mail" />
            <button>Cброс</button>
          </form>
        </div>
      </div>
    </div>
  );
};

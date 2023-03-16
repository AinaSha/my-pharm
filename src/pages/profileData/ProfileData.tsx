import { FC } from 'react';
import { UserData } from '../../components/userData/UserData';

export const ProfileData: FC = () => {
  return (
    <div>
      <div className="container">
        <div className="left-side">
          <UserData />
        </div>
        <div className="right-side"></div>
      </div>
    </div>
  );
};

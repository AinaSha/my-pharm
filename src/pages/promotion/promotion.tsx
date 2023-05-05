import { FC } from 'react';
import { Breadcrumbs } from '../../ui-kit/breadcrumbs/Breadcrumbs';

export const Promotion: FC = () => {
  return (
    <div>
      <div className="container">
        <Breadcrumbs homeLabel="Home" />
        <h1>Promotion page</h1>
      </div>
    </div>
  );
};

import { FC, ReactNode } from 'react';

import './modal.scss';
import ReactDOM from 'react-dom';

export type Props = {
  children?: ReactNode;
  active: boolean;
  setActive: () => void;
};

export const Modal: FC<Props> = (props: Props) => {
  const spopProp = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    e.stopPropagation();
  };

  return ReactDOM.createPortal(
    props.active && (
      <div className="modal active" onClick={props.setActive}>
        <div className="modal__content" onClick={(e) => spopProp(e)}>
          {props.children}
        </div>
      </div>
    ),
    document.body
  );
};

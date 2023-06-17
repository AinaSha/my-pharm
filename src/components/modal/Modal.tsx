import { FC, ReactNode } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';

import './modal.scss';
import ReactDOM from 'react-dom';

export type Props = {
  children?: ReactNode;
  active: boolean;
  setActive: () => void;
};

interface ISignInform {
  email: string;
  password: string;
}

export const Modal: FC<Props> = (props: Props) => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<ISignInform>();
  const onSubmit: SubmitHandler<ISignInform> = (data) => {
    reset();
  };

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

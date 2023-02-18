import { FC } from 'react';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useDispatch, useSelector } from 'react-redux';
import { RootState, store } from '../../store';
import { IInitialAuth, SiginInUser } from '../../store/authUserReducer';
import { TAuthUser } from '../../types/apiTypes';

type Inputs = {
  email: string;
  password: string;
};

export const SgiginIn: FC = () => {
  // const state: IInitialAuth = useSelector((state: RootState) => state.AuthReducer);
  // const dispatch = useDispatch();
  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   formState: { errors },
  // } = useForm<Inputs>();
  // const onSubmit: SubmitHandler<TAuthUser> = (data) => {
  //   console.log(data);
  //   const user = {
  //     email: data.email,
  //     password: data.password,
  //   };
  //   store.dispatch(SiginInUser(user));
  // };

  // console.log(watch('email')); // watch input value by passing the name of it

  return (
    <div>
      {/* <form onSubmit={handleSubmit(onSubmit)}>
        <input defaultValue="test" {...register('email')} />
        <input {...register('password', { required: true })} />

        <input type="submit" />
      </form> */}
    </div>
  );
};

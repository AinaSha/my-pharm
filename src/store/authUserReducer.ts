import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { TAuthUser } from '../types/apiTypes';

export interface IInitialAuth {
  email: string;
  password: string;
  first_name: string;
  last_name: string;
  sur_name: string;
  gender: string;
  phone: string;
  address: string;
  is_pensioner: boolean;
  is_beneficiaries: boolean;
  successReg: boolean;
  isLoading: boolean;
  isAuth: boolean;
}

const initialAuth = {
  email: '',
  password: '',
  first_name: '',
  last_name: '',
  sur_name: '',
  gender: '',
  phone: '',
  address: '',
  is_pensioner: false,
  is_beneficiaries: false,
  successReg: false,
  isLoading: false,
  isAuth: false,
};

export const SiginInUser = createAsyncThunk('Auth/SiginInUser', async (option: TAuthUser) => {
  const data = await api.SiginInUser(option.email, option.password);
  return data;
});

export const authSlice = createSlice({
  name: 'Auth',
  initialState: initialAuth,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(SiginInUser.pending, (state) => {
      state.isLoading = true;
      console.log('SiginInUser.pending');
    }),
      builder.addCase(SiginInUser.fulfilled, (state, action) => {
        state.isAuth = true;
        console.log('SiginInUser.fulfilled', action.payload);
      }),
      builder.addCase(SiginInUser.rejected, (state, action) => {
        console.log('SiginInUser.rejected');
        console.log(action.payload);
      });
  },
});

const { actions, reducer: AuthReducer } = authSlice;

// export const actions;

export default AuthReducer;

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { IToken, TAuthUser } from '../types/apiTypes';
import { setLocalStorage, updateUserIdFromToken } from '../utils/utilsForm';

export interface IInitialAuth {
  id: string;
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
  id: '',
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
    }),
      builder.addCase(SiginInUser.fulfilled, (state, action) => {
        if (action.payload === 403) {
          state.isAuth = false;
          setLocalStorage('__userIsAuth', JSON.stringify(state.isAuth));
        } else {
          state.isAuth = true;
          setLocalStorage('__userIsAuth', JSON.stringify(state.isAuth));
          setLocalStorage('__token', (action.payload as IToken).access);
          state.id = updateUserIdFromToken();
        }
        state.isLoading = true;
      }),
      builder.addCase(SiginInUser.rejected, () => {
        throw new Error('Authorization failed');
      });
  },
});

const { actions, reducer: AuthReducer } = authSlice;

// export const actions;

export default AuthReducer;

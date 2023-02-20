import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { DecodedToken, IToken, TAuthUser } from '../types/apiTypes';
import { createCookiFile, setLocalStorage, updateUserIdFromToken } from '../utils/utilsForm';

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
  siginIn: boolean;
  isAuth: boolean;
  exp: number;
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
  siginIn: false,
  isAuth: localStorage.getItem('__userIsAuth') ? true : false,
  exp: 0,
};

export const SiginInUser = createAsyncThunk('Auth/SiginInUser', async (option: TAuthUser) => {
  const data = await api.SiginInUser(option.email, option.password);
  return data;
});

export const GetUserMe = createAsyncThunk('Auth/GetUserMe', async () => {
  const data = await api.getUserMe();
  return data;
});

export const RefreshToken = createAsyncThunk('Auth/RefreshToken', async (option: string) => {
  const data = await api.RefreshToken(option);
  return data;
});

export const authSlice = createSlice({
  name: 'Auth',
  initialState: initialAuth,
  reducers: {
    exit: (state: IInitialAuth) => {
      state.isAuth = false;
    },
    siginin: (state: IInitialAuth) => {
      state.siginIn = true;
    },
  },
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
          createCookiFile('refreshToken', (action.payload as IToken).refresh, 1);
          const data = updateUserIdFromToken() as DecodedToken;
          state.id = String(data.user_id);
          state.exp = data.exp;
        }
        state.isLoading = true;
      });
    builder.addCase(RefreshToken.pending, (state) => {}),
      builder.addCase(RefreshToken.fulfilled, (state, action) => {
        if (action.payload === 403) {
          state.isAuth = false;
          setLocalStorage('__userIsAuth', JSON.stringify(state.isAuth));
        } else {
          state.isAuth = true;
          setLocalStorage('__userIsAuth', JSON.stringify(state.isAuth));
          setLocalStorage('__token', (action.payload as IToken).access);
          const data = updateUserIdFromToken() as DecodedToken;
          state.id = String(data.user_id);
          state.exp = data.exp;
        }
      });
    builder.addCase(GetUserMe.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetUserMe.fulfilled, (state, action) => {
        state.isLoading = true;
        console.log(action.payload);
      });
  },
});

const { actions: AuthActions, reducer: AuthReducer } = authSlice;

export const { exit, siginin } = AuthActions;

export default AuthReducer;

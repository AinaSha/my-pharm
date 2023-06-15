import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { DecodedToken, IToken, LoginForm, RegistrationForm, TAuthUser } from '../types/apiTypes';
import { IcreateUser, IInitialAuth, ILogInform } from '../types/Types';
import { createCookiFile, setLocalStorage, updateUserIdFromToken } from '../utils/utilsForm';

const initialAuth = {
  dataUser: {
    id: '',
    email: '',
    first_name: '',
    last_name: '',
    sur_name: '',
    gender: '',
    phone: '',
    address: '',
    is_pensioner: false,
    is_beneficiaries: false,
    refresh: '',
    access: '',
  },
  successReg: false,
  isLoading: false,
  siginIn: false,
  isAuth: localStorage.getItem('__userIsAuth') ? true : false,
  exp: 0,
  registration: false,
};

export const RegisterUser = createAsyncThunk(
  'Auth/RegisterUser',
  async (from: RegistrationForm) => {
    const data = await api.registration(from);
    return data;
  }
);

export const LoginUser = createAsyncThunk('Auth/Login', async (form: LoginForm) => {
  const data = await api.login(form);
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
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(LoginUser.fulfilled, (state, action) => {
        if (action.payload === 403) {
          state.isAuth = false;
          setLocalStorage('__userIsAuth', JSON.stringify(state.isAuth));
        } else {
          state.isAuth = true;
          state.registration = true;
          console.log(action.payload);
          console.log(action.type);
          setLocalStorage('__token', action.payload);
          // setLocalStorage('__userIsAuth', JSON.stringify(state.isAuth));
          // setLocalStorage('__token', (action.payload as IToken).access);
          // createCookiFile('refreshToken', (action.payload as IToken).refresh, 1);
          // const data = updateUserIdFromToken() as DecodedToken;
          // state.dataUser.id = String(data.user_id);
          // state.exp = data.exp;
        }
        state.isLoading = true;
      });
    builder.addCase(RegisterUser.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(RegisterUser.fulfilled, (state, action) => {});
    builder.addCase(RefreshToken.pending, () => {}),
      builder.addCase(RefreshToken.fulfilled, (state, action) => {
        if (action.payload === 403) {
          state.isAuth = false;
          setLocalStorage('__userIsAuth', JSON.stringify(state.isAuth));
        } else {
          state.isAuth = true;
          setLocalStorage('__userIsAuth', JSON.stringify(state.isAuth));
          setLocalStorage('__token', (action.payload as IToken).access);
          const data = updateUserIdFromToken() as DecodedToken;
          state.dataUser.id = String(data.user_id);
          state.exp = data.exp;
        }
      });
    builder.addCase(GetUserMe.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(GetUserMe.fulfilled, (state, action) => {
        state.isLoading = true;
        state.dataUser = {
          id: state.dataUser.id,
          ...(action.payload as IcreateUser),
        };
      });
  },
});

const { actions: AuthActions, reducer: AuthReducer } = authSlice;

export const { exit, siginin } = AuthActions;

export default AuthReducer;

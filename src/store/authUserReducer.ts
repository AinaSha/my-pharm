import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { DecodedToken, IToken, TAuthUser } from '../types/apiTypes';
import { IcreateUser, ILogInform } from '../types/Types';
import { createCookiFile, setLocalStorage, updateUserIdFromToken } from '../utils/utilsForm';

export interface IInitialAuth {
  dataUser: IcreateUser;
  successReg: boolean;
  isLoading: boolean;
  siginIn: boolean;
  isAuth: boolean;
  registration: boolean;
  exp: number;
}

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

export const CreateUser = createAsyncThunk('Auth/CreateUser', async (option: ILogInform) => {
  const data = await api.CreateUser(option);
  return data;
});

export const UpdateUserMe = createAsyncThunk('Auth/UpdateUserMe', async (option: ILogInform) => {
  const data = await api.UpdateUserMe(option);
  return data;
});

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
          state.dataUser.id = String(data.user_id);
          state.exp = data.exp;
        }
        state.isLoading = true;
      });
    builder.addCase(CreateUser.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(CreateUser.fulfilled, (state, action) => {
        state.dataUser = {
          id: String((action.payload as IcreateUser).id),
          ...(action.payload as IcreateUser),
          access: '',
          refresh: '',
        };
        setLocalStorage('__token', action.payload.access);
        createCookiFile('refreshToken', action.payload.refresh, 1);
        setLocalStorage('__userIsAuth', JSON.stringify(state.isAuth));
        const data = updateUserIdFromToken() as DecodedToken;
        state.exp = data.exp;
        state.registration = true;
        state.isAuth = true;
      });
    builder.addCase(UpdateUserMe.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UpdateUserMe.fulfilled, (state, action) => {
        if (action.payload === 400) {
        } else {
          state.dataUser = {
            id: state.dataUser.id,
            ...(action.payload as IcreateUser),
          };
        }
      });
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

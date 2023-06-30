import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { LoginForm, RegistrationForm } from '../types/apiTypes';
import { IInitialAuth, IcreateUser } from '../types/Types';

const initialAuth = {
  dataUser: {
    username: '',
    email: '',
    is_pensioner: false,
    is_privileged: false,
    phone_number: '',
    address: '',
    token: '',
  },
  successReg: false,
  isLoading: false,
  siginIn: false,
  isAuth: localStorage.getItem('__userIsAuth') ? true : false,
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

export const UserEdit = createAsyncThunk('Auth/UserEdit', async (form: IcreateUser) => {
  const data = await api.userEdit(form);
  return data;
});

export const authSlice = createSlice({
  name: 'Auth',
  initialState: initialAuth,
  reducers: {
    exit: (state: IInitialAuth) => {
      state.isAuth = false;
      localStorage.removeItem('__token');
      localStorage.removeItem('__userIsAuth');
      localStorage.removeItem('__userData');
    },
    setUser: (state: IInitialAuth, action) => {
      state.dataUser = {
        ...action.payload,
      };
    },
  },
  extraReducers: (builder) => {
    builder.addCase(LoginUser.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(LoginUser.fulfilled, (state, action) => {
        if (action.payload === 403) {
          state.isAuth = false;
          localStorage.setItem('__userIsAuth', JSON.stringify(state.isAuth));
        } else {
          state.isAuth = true;
          state.dataUser = {
            ...action.payload,
          };
          localStorage.setItem('__token', action.payload.token);
          localStorage.setItem('__userIsAuth', JSON.stringify(true));
          localStorage.setItem('__userData', JSON.stringify(state.dataUser));
        }
        state.isLoading = true;
      });
    builder.addCase(RegisterUser.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(RegisterUser.fulfilled, (state, action) => {
        if (action.payload) {
          state.registration = true;
        } else {
          state.registration = false;
        }
      });
    builder.addCase(UserEdit.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(UserEdit.fulfilled, (state, action) => {
        state.dataUser = {
          ...action.payload,
        };
        localStorage.setItem('__userData', JSON.stringify(state.dataUser));
      });
  },
});

const { actions: AuthActions, reducer: AuthReducer } = authSlice;

export const { exit, setUser } = AuthActions;

export default AuthReducer;

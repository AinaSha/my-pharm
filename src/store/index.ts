import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './authUserReducer';
import BurgerReducer from './burgerStyleReducer';
import languageReducer from './languageReducer';
import { windowWidthReducer } from './windowWidthRedux';

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    languageReducer: languageReducer,
    windowWidthReducer: windowWidthReducer,
    BurgerReducer: BurgerReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

import { configureStore } from '@reduxjs/toolkit';
import AuthReducer from './authUserReducer';
import BurgerReducer from './burgerStyleReducer';
import languageReducer from './languageReducer';
import ProductsReducer from './productsReducer';
import { windowWidthReducer } from './windowWidthRedux';

export const store = configureStore({
  reducer: {
    AuthReducer: AuthReducer,
    languageReducer: languageReducer,
    windowWidthReducer: windowWidthReducer,
    BurgerReducer: BurgerReducer,
    ProductsReducer: ProductsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

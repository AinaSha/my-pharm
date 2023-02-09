import { configureStore } from '@reduxjs/toolkit';
import languageReducer from './languageReducer';
import { windowWidthReducer } from './windowWidthRedux';

export const store = configureStore({
  reducer: {
    languageReducer: languageReducer,
    windowWidthReducer: windowWidthReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

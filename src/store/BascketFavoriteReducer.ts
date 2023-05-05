import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../utils/utilsForm';

export interface BascketFavorite {
  countFavorite: number;
  countBascket: number;
  bascketLS: string[];
}

const initialBascketFavorite: BascketFavorite = {
  countFavorite: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') as string).length
    : 0,
  countBascket: localStorage.getItem('allProduct') ? Number(localStorage.getItem('allProduct')) : 0,
  bascketLS: localStorage.getItem('bascket')
    ? JSON.parse(localStorage.getItem('bascket') as string)
    : {},
};

export const bascketFavorite = createSlice({
  name: 'BascketFavorite',
  initialState: initialBascketFavorite,
  reducers: {
    changeFavorite: (state: BascketFavorite, action) => {
      state.countFavorite = action.payload;
    },
    addBascket: (state: BascketFavorite, action) => {
      state.countBascket = action.payload;
      setLocalStorage('allProduct', JSON.stringify(state.countBascket));
    },
    setBascketLS: (state: BascketFavorite, action) => {
      state.bascketLS = action.payload;
    },
  },
});

const { actions, reducer: BascketFavoriteReducer } = bascketFavorite;

export const { changeFavorite, addBascket, setBascketLS } = actions;

export default BascketFavoriteReducer;

import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../utils/utilsForm';

export interface BascketFavorite {
  countFavorite: number;
  countBascket: number;
}

const initialBascketFavorite: BascketFavorite = {
  countFavorite: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') as string).length
    : 0,
  countBascket: localStorage.getItem('allProduct') ? Number(localStorage.getItem('allProduct')) : 0,
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
  },
});

const { actions, reducer: BascketFavoriteReducer } = bascketFavorite;

export const { changeFavorite, addBascket } = actions;

export default BascketFavoriteReducer;

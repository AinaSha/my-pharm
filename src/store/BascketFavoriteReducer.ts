import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../utils/utilsForm';
import { IProduct } from '../types/Types';
import { api } from '../api/api';

type Tobj = {
  [key: string]: number;
};
export interface BascketFavorite {
  countFavorite: number;
  countBascket: number;
  bascketLS: Tobj;
  bascketProducts: IProduct[];
}

const initialBascketFavorite: BascketFavorite = {
  countFavorite: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') as string).length
    : 0,
  countBascket: localStorage.getItem('allProduct') ? Number(localStorage.getItem('allProduct')) : 0,
  bascketLS: localStorage.getItem('bascket')
    ? JSON.parse(localStorage.getItem('bascket') as string)
    : {},
  bascketProducts: [],
};

export const GetProductsPart = createAsyncThunk(
  'BascketFavorite/GetProductsPart',
  async (ids: string) => {
    const data = await api.GetProductsPart(ids);
    return data;
  }
);

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
  extraReducers: (builder) => {
    builder.addCase(GetProductsPart.fulfilled, (state: BascketFavorite, actions) => {
      if (actions.payload) state.bascketProducts = actions.payload;
    });
  },
});

const { actions, reducer: BascketFavoriteReducer } = bascketFavorite;

export const { changeFavorite, addBascket, setBascketLS } = actions;

export default BascketFavoriteReducer;

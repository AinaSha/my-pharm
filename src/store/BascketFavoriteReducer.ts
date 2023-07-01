import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../utils/utilsForm';
import { IProduct, TBuyProduct } from '../types/Types';
import { api } from '../api/api';

type Tobj = {
  [key: string]: number;
};
export interface BascketFavorite {
  countFavorite: number;
  countBascket: number;
  favoritesLS: string;
  bascketLS: Tobj;
  bascketProducts: IProduct[];
  ordersCreate: boolean;
}

const initialBascketFavorite: BascketFavorite = {
  countFavorite: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') as string).length
    : 0,
  countBascket: localStorage.getItem('allProduct') ? Number(localStorage.getItem('allProduct')) : 0,
  favoritesLS: localStorage.getItem('favorites')
    ? JSON.parse(localStorage.getItem('favorites') as string).join()
    : '',
  bascketLS: localStorage.getItem('bascket')
    ? JSON.parse(localStorage.getItem('bascket') as string)
    : {},
  bascketProducts: [],
  ordersCreate: false,
};

export const GetProductsPart = createAsyncThunk(
  'BascketFavorite/GetProductsPart',
  async (ids: string) => {
    const data = await api.GetProductsPart(ids);
    return data;
  }
);

export const OrdersCreate = createAsyncThunk(
  'BascketFavorite/OrdersCreate',
  async (arr: TBuyProduct[]) => {
    const data = await api.OrdersCreate(arr);
    return data;
  }
);

export const getMyOrders = createAsyncThunk('BascketFavorite/getMyOrders', async () => {
  const data = await api.getMyOrders();
  return data;
});

export const bascketFavorite = createSlice({
  name: 'BascketFavorite',
  initialState: initialBascketFavorite,
  reducers: {
    changeFavorite: (state: BascketFavorite, action) => {
      state.countFavorite = action.payload;
    },
    setFavoritesLS: (state: BascketFavorite, action) => {
      state.favoritesLS = action.payload;
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
    builder.addCase(OrdersCreate.fulfilled, (state: BascketFavorite, actions) => {
      actions.payload ? (state.ordersCreate = true) : (state.ordersCreate = false);
    });
    builder.addCase(getMyOrders.fulfilled, (state: BascketFavorite, actions) => {
      console.log('getMyOrders', actions);
    });
  },
});

const { actions, reducer: BascketFavoriteReducer } = bascketFavorite;

export const { changeFavorite, addBascket, setBascketLS, setFavoritesLS } = actions;

export default BascketFavoriteReducer;

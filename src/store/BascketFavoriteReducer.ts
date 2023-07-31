import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { setLocalStorage } from '../utils/utilsForm';
import { IProduct, TBuyProduct, TOrderItem } from '../types/Types';
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
  myOrders: TOrderItem[];
  myOrderfulfilled: boolean;
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
  ordersCreate: localStorage.getItem('ordersCreate') === 'true' ? true : false,
  myOrders: [],
  myOrderfulfilled: false,
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
    setMyOrderfulfilled: (state: BascketFavorite) => {
      state.myOrderfulfilled = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(GetProductsPart.fulfilled, (state: BascketFavorite, actions) => {
      if (actions.payload) state.bascketProducts = actions.payload;
    });
    builder.addCase(OrdersCreate.fulfilled, (state: BascketFavorite, actions) => {
      if (actions.payload) {
        state.ordersCreate = true;
        state.myOrderfulfilled = true;
        localStorage.setItem('ordersCreate', 'true');
      } else {
        state.myOrderfulfilled = false;
      }
    });
    builder.addCase(getMyOrders.fulfilled, (state: BascketFavorite, actions) => {
      state.myOrders = [];
      let elOrd: TOrderItem = {
        created_at: '',
        is_complete: false,
        items: [],
      };
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      actions.payload.map((el: any) => {
        elOrd = {
          created_at: el.created_at,
          is_complete: el.is_complete,
          items: [],
        };

        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        el.items.map((item: any) => {
          const elItem = {
            id: item.product.id,
            name: item.product.name,
            quantity: item.quantity,
            discount_price: item.product.discount_price,
            price: item.product.price,
          };

          elOrd.items.push(elItem);
        });

        state.myOrders.push(elOrd);
      });
    });
  },
});

const { actions, reducer: BascketFavoriteReducer } = bascketFavorite;

export const { changeFavorite, addBascket, setBascketLS, setFavoritesLS, setMyOrderfulfilled } =
  actions;

export default BascketFavoriteReducer;

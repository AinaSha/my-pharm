import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { IProduct } from '../types/Types';

interface IProductsState {
  products: IProduct[];
  isLoading: boolean;
}

const initialProductsState: IProductsState = {
  products: [
    {
      catalog: 0,
      discount_price: '',
      id: 0,
      is_req_prescription: false,
      price: '',
      sale: '',
      thumbnail: '',
      title: '',
    },
  ],
  isLoading: false,
};

export const getProduct = createAsyncThunk('Products/getProduct', async () => {
  const data = await api.GetProducts();
  return data;
});

export const productsSlice = createSlice({
  name: 'Products',
  initialState: initialProductsState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getProduct.fulfilled, (state, actions) => {
        if (actions.payload) {
          state.products = actions.payload;
          console.log(state.products);
        }
      });
  },
});

const { actions, reducer: ProductsReducer } = productsSlice;

export default ProductsReducer;

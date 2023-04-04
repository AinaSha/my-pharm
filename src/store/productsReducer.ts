import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { IProduct, Options } from '../types/Types';

interface IProductsState {
  products: IProduct[];
  catalog: string;
  catalogId: string;
  formText: string;
  form: string;
  appointmentId: string;
  appointmentText: string;
  countryId: string;
  countryText: string;
  showCategore: boolean;
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
  catalog: '',
  catalogId: '',
  formText: '',
  form: '',
  appointmentId: '',
  appointmentText: '',
  countryId: '',
  countryText: '',
  showCategore: false,
  isLoading: false,
};

export const getProduct = createAsyncThunk('Products/getProduct', async () => {
  const data = await api.GetProducts();
  return data;
});

export const getProductFilter = createAsyncThunk(
  'Products/getProductFilter',
  async ({ id, form, appointment }: Options) => {
    const data = await api.GetFilterProducts(id, form, appointment);
    return data;
  }
);

export const productsSlice = createSlice({
  name: 'Products',
  initialState: initialProductsState,
  reducers: {
    setCatalog: (state: IProductsState, action) => {
      state.catalog = action.payload.nodeLiText;
      state.catalogId = action.payload.nodeLiId;
    },
    setShowCategore: (state: IProductsState, action: PayloadAction<boolean>) => {
      state.showCategore = action.payload;
    },
    setFormText: (state: IProductsState, action) => {
      state.formText = action.payload.nodeLiText;
      state.form = action.payload.nodeLiId;
    },
    setAppointment: (state: IProductsState, action) => {
      state.appointmentText = action.payload.nodeLiText;
      state.appointmentId = action.payload.nodeLiId;
    },
    setCountry: (state: IProductsState, action) => {
      state.countryText = action.payload.nodeLiText;
      state.countryId = action.payload.nodeLiId;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getProduct.pending, (state) => {
      state.isLoading = true;
    }),
      builder.addCase(getProduct.fulfilled, (state, actions) => {
        if (actions.payload) {
          state.products = actions.payload;
        }
      }),
      builder.addCase(getProductFilter.pending, (state) => {
        state.isLoading = true;
      }),
      builder.addCase(getProductFilter.fulfilled, (state, actions) => {
        if (actions.payload) {
          state.products = actions.payload;
        }
      });
  },
});

const { actions, reducer: ProductsReducer } = productsSlice;

export const { setCatalog, setShowCategore, setFormText, setAppointment, setCountry } = actions;

export default ProductsReducer;

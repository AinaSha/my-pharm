import { createSlice, createAsyncThunk, PayloadAction } from '@reduxjs/toolkit';
import { api } from '../api/api';
import { IProduct } from '../types/Types';

interface IProductsState {
  products: IProduct[];
  searchName: string;
  catalog: string;
  catalogId: string;
  formText: string;
  form: string;
  appointmentId: string;
  appointmentText: string;
  countryId: number | null;
  countryText: string;
  showCategore: boolean;
  isLoading: boolean;
  resetFilter: boolean;
  favorites: boolean;
}

const initialProductsState: IProductsState = {
  products: [
    {
      category: {
        id: 0,
        ru: '',
        kg: '',
        en: '',
      },
      characteristics: {
        on_prescription: '',
        before_date: '',
        compound: '',
        package: '',
        purpose: '',
        release_form: '',
      },
      description: '',
      discount_price: '',
      image: '',
      in_stock: false,
      manufacturer: {
        id: 0,
        name: '',
      },
      name: '',
      price: 0,
      rating: 0,
      id: '',
      appointment: '',
      form_type: '',
    },
  ],
  searchName: '',
  catalog: '',
  catalogId: '',
  formText: '',
  form: '',
  appointmentId: '',
  appointmentText: '',
  countryId: null,
  countryText: '',
  showCategore: false,
  isLoading: false,
  resetFilter: false,
  favorites: false,
};

export const getProduct = createAsyncThunk('Products/getProduct', async () => {
  const data = await api.GetProducts();
  return data;
});

export const productsSlice = createSlice({
  name: 'Products',
  initialState: initialProductsState,
  reducers: {
    setCatalog: (state: IProductsState, action) => {
      state.catalog = action.payload.nodeLiText;
      state.catalogId = action.payload.nodLiId;
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
      state.countryId = Number(action.payload.nodeLiId);
    },
    setResetFilter: (state: IProductsState, action) => {
      state.resetFilter = action.payload;
    },
    setSearchName: (state: IProductsState, action) => {
      state.searchName = action.payload;
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
      });
  },
});

const { actions, reducer: ProductsReducer } = productsSlice;

export const {
  setCatalog,
  setShowCategore,
  setFormText,
  setAppointment,
  setCountry,
  setResetFilter,
  setSearchName,
} = actions;

export default ProductsReducer;

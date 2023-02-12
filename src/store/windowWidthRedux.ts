import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '.';

type WindowWidthT = {
  windowWidth: number;
};

const WindowWidthState: WindowWidthT = {
  windowWidth: document.documentElement.scrollWidth,
};

export const WindowWidthChange = createAsyncThunk('WindowWidth/WindowWidthChange', () => {
  return document.documentElement.scrollWidth;
});

export const windowWidthSlice = createSlice({
  name: 'WindowWidth',
  initialState: WindowWidthState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(WindowWidthChange.fulfilled, (state, action) => {
      state.windowWidth = action.payload;
    });
  },
});

const { actions, reducer: windowWidthReducer } = windowWidthSlice;

export const getBoardsSelector: TypedUseSelectorHook<RootState> = useSelector;
export const getBoardsState = (state: RootState) => state;

export { windowWidthReducer };

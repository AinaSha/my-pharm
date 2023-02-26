import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface IBurger {
  active: boolean;
  activeSiginIn: boolean;
}

const BurgerInitialState: IBurger = {
  active: false,
  activeSiginIn: false,
};

export const BurgerSlice = createSlice({
  name: 'Burger',
  initialState: BurgerInitialState,
  reducers: {
    setActiveBurger: (state: IBurger, action) => {
      state.active = action.payload;
    },
    setActiveModalSiginIn: (state: IBurger, action) => {
      state.activeSiginIn = action.payload;
    },
  },
});

const { actions, reducer: BurgerReducer } = BurgerSlice;

export const { setActiveBurger, setActiveModalSiginIn } = actions;

export default BurgerReducer;

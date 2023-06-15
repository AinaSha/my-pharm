import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface ButtonState {
  buttonA: boolean;
  buttonB: boolean;
}

const initialState: ButtonState = {
  buttonA: false,
  buttonB: false,
};

const buttonSlice = createSlice({
  name: 'button',
  initialState,
  reducers: {
    setButtonAStatus: (state, action: PayloadAction<boolean>) => {
      state.buttonA = action.payload;
    },
    setButtonBStatus: (state, action: PayloadAction<boolean>) => {
      state.buttonB = action.payload;
    },
  },
});

export const { setButtonAStatus, setButtonBStatus } = buttonSlice.actions;

export default buttonSlice.reducer;

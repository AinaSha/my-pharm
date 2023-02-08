import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { translateLang3 } from '../translate/translate';
import { ITtranslate } from '../types/translate';

export interface IlanguageState {
  language: string | null;
  translate: ITtranslate;
}

const initiallanguageState: IlanguageState = {
  language: localStorage.getItem('language') ? localStorage.getItem('language') : 'RU',
  translate: translateLang3.RU,
};

export const languageSlice = createSlice({
  name: 'Language',
  initialState: initiallanguageState,
  reducers: {
    setLanguage: (state: IlanguageState, action: PayloadAction<string>) => {
      state.language = action.payload;
    },
    setTranslate: (state: IlanguageState, action: PayloadAction<string>) => {
      switch (action.payload) {
        case 'EN':
          state.translate = translateLang3.EN;
          break;
        case 'RU':
          state.translate = translateLang3.RU;
          break;
        case 'KG':
          state.translate = translateLang3.KG;
          break;
        default:
          state.translate = translateLang3.KG;
      }
    },
  },
});

const { actions, reducer: languageReducer } = languageSlice;

export const { setTranslate, setLanguage } = actions;

export default languageReducer;

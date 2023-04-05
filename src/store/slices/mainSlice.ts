import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMenuItem } from '../rtk/menuInterface';


interface MainInitialState {
  selectMenuItem: string | null;
  openMenu: boolean;
  selectProduct: string | null;
}


const initialState: MainInitialState = {
  selectMenuItem: Boolean(localStorage.getItem('category')) ? localStorage.getItem('category') : 'electronics',
  openMenu: false,
  selectProduct: Boolean(localStorage.getItem('product')) ? localStorage.getItem('product') : null,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setMenuItem: (state: MainInitialState, action: PayloadAction<string>) => {
      state.selectMenuItem = action.payload;
    },
    setOpenMenu: (state: MainInitialState, action: PayloadAction<boolean>) => {
      state.openMenu = action.payload;
    },
    setSelectProduct: (state: MainInitialState, action: PayloadAction<string>) => {
      state.selectProduct = action.payload;
    },
  },
});

export const {setMenuItem, setOpenMenu, setSelectProduct} = mainSlice.actions;

export default mainSlice.reducer;
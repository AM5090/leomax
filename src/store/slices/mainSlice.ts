import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMenuItem } from '../rtk/menuInterface';

interface MainInitialState {
  selectMenuItem: string;
  openMenu: boolean;
}

const initialState: MainInitialState = {
  selectMenuItem: 'electronics',
  openMenu: false,
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
  },
});

export const {setMenuItem, setOpenMenu} = mainSlice.actions;

export default mainSlice.reducer;
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMenuItem } from '../rtk/menuInterface';

interface MainInitialState {
  selectMenuItem: string;
}

const initialState: MainInitialState = {
  selectMenuItem: 'electronics',
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setMenuItem: (state: MainInitialState, action: PayloadAction<string>) => {
      state.selectMenuItem = action.payload;
    },
  },
});

export const {setMenuItem} = mainSlice.actions;

export default mainSlice.reducer;
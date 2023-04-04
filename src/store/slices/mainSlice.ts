import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IMenuItem } from '../rtk/menuInterface';

interface MainInitialState {
  selectMenuItem: IMenuItem | null;
}

const initialState: MainInitialState = {
  selectMenuItem: null,
};

export const mainSlice = createSlice({
  name: 'main',
  initialState,
  reducers: {
    setMenuItem: (state: MainInitialState, action: PayloadAction<IMenuItem | null>) => {
      state.selectMenuItem = action.payload;
    },
  },
});

export const {setMenuItem} = mainSlice.actions;

export default mainSlice.reducer;
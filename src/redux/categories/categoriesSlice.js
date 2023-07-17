import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Under construction'],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {
    checkStatus: (state) => state.categories[0],
  },
});

export const { checkStatus } = categoriesSlice.actions;
export default categoriesSlice.reducer;

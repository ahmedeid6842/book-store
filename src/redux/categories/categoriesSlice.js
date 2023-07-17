import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  categories: ['Under construction'],
};

export const categoriesSlice = createSlice({
  name: 'categories',
  initialState,
  reducers: {},
});

export default categoriesSlice.reducer;

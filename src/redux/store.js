import { configureStore } from '@reduxjs/toolkit';
import booksReducer from './books/booksSlice';
import categoriesReducer from './categories/categoriesSlice';

export default configureStore({
  reducer: {
    books: booksReducer,
    categories: categoriesReducer,
  },
});

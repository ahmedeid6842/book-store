import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

const APP_ID = '4deOhm1QNusZzjbWjfZS'; // replace with your app id
const BASE_URL = 'https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi';

export const fetchBooks = createAsyncThunk('books/fetchBooks', async () => {
  const response = await axios.get('https://us-central1-bookstore-api-e63c8.cloudfunctions.net/bookstoreApi/apps/4deOhm1QNusZzjbWjfZS/books');
  return Object.keys(response.data).reduce((acc, key) => {
    const books = response.data[key].map((book) => ({
      item_id: key,
      ...book,
    }));
    return [...acc, ...books];
  }, []);
});

export const addBook = createAsyncThunk('books/addBook', async (book) => {
  await axios.post(`${BASE_URL}/apps/${APP_ID}/books`, { ...book, category: 'under consrtuction' });
  return book;
});

export const removeBook = createAsyncThunk('books/removeBook', async (bookId) => {
  await axios.delete(`${BASE_URL}/apps/${APP_ID}/books/${bookId}`);
  return bookId;
});

const initialState = {
  books: [],
  status: 'idle',
  error: null,
};

export const booksSlice = createSlice({
  name: 'books',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchBooks.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(fetchBooks.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.books = action.payload;
      })
      .addCase(fetchBooks.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message;
      })
      .addCase(addBook.fulfilled, (state, action) => {
        state.books.push(action.payload);
      })
      .addCase(removeBook.fulfilled, (state, action) => {
        state.books = state.books.filter((book) => book.item_id !== action.payload);
      });
  },
});

export default booksSlice.reducer;

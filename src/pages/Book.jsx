import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { addBook, removeBook } from '../redux/books/booksSlice';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Book = () => {
  const books = useSelector((state) => state.books.books);
  const dispatch = useDispatch();

  const handleAddBook = (book) => {
    const newBook = { ...book, item_id: uuidv4() };
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  return (
    <div>
      <h1>Book Page</h1>
      <BookList books={books} deleteBook={handleDeleteBook} />
      <AddBook addBook={handleAddBook} />
    </div>
  );
};

export default Book;

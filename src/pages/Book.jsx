import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { fetchBooks, addBook, removeBook } from '../redux/books/booksSlice';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Book = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchBooks());
  }, []);

  const handleAddBook = (book) => {
    const newBook = { ...book, item_id: uuidv4() };
    dispatch(addBook(newBook));
  };

  const handleDeleteBook = (id) => {
    dispatch(removeBook(id));
  };

  const books = useSelector((state) => state.books.books);

  return (
    <div>
      <h1>Book Page</h1>
      <BookList books={books} deleteBook={handleDeleteBook} />
      <AddBook addBook={handleAddBook} />
    </div>
  );
};

export default Book;

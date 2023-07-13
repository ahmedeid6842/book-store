import React, { useState } from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Book = () => {
  const [books, setBooks] = useState([
    {
      id: 1,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
    },
    {
      id: 2,
      title: '1984',
      author: 'George Orwell',
    },
  ]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  const deleteBook = (id) => {
    setBooks(books.filter((book) => book.id !== id));
  };

  return (
    <div>
      <h1>Book Page</h1>
      <BookList books={books} deleteBook={deleteBook} />
      <AddBook addBook={addBook} />
    </div>
  );
};

export default Book;

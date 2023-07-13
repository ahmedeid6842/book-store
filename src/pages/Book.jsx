import React, { useState } from 'react';
import BookList from '../components/BookList';
import AddBook from '../components/AddBook';

const Book = () => {
  const [books, setBooks] = useState([]);

  const addBook = (book) => {
    setBooks([...books, { ...book, id: books.length + 1 }]);
  };

  return (
    <div>
      <h1>Book Page</h1>
      <BookList books={books} />
      <AddBook addBook={addBook} />
    </div>
  );
};

export default Book;

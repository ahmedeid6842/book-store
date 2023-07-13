import React from 'react';
import BookItem from './BookItem';

const BookList = ({ books }) => {
  return (
    <div>
      <h2>Book List</h2>
      {books.map((book) => (
        <BookItem key={book.id} book={book} />
      ))}
    </div>
  );
};

export default BookList;

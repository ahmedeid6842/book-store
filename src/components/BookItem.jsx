import React from 'react';

const BookItem = ({ book }) => {
  return (
    <div>
      <h3>{book.title}</h3>
      <p>{book.author}</p>
    </div>
  );
};

export default BookItem;
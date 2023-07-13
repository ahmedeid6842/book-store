import React, { useState } from 'react';
import BookList from '../components/BookList';

const Book = () => {
  const [books] = useState([
    {
      id: 1,
      title: 'The Catcher in the Rye',
      author: 'J.D. Salinger',
    },
    {
      id: 2,
      title: 'To Kill a Mockingbird',
      author: 'Harper Lee',
    },
    {
      id: 3,
      title: '1984',
      author: 'George Orwell',
    },
    {
      id: 4,
      title: 'The Great Gatsby',
      author: 'F. Scott Fitzgerald',
    },
    {
      id: 5,
      title: 'One Hundred Years of Solitude',
      author: 'Gabriel García Márquez',
    },
  ]);

  return (
    <div>
      <h1>Book Page</h1>
      <BookList books={books} />
    </div>
  );
};

export default Book;

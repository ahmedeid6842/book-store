import React, { useState } from 'react';
import PropTypes from 'prop-types';
import '../styles/AddBook.css';

const AddBook = ({ addBook }) => {
  const [title, setTitle] = useState('');
  const [author, setAuthor] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    addBook({ title, author });
    setTitle('');
    setAuthor('');
  };

  return (
    <section className="form-section">
      <h2 className="form-title">Add New Book</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          id="title"
          placeholder="Book title"
          className="book-title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <input
          type="text"
          id="author"
          placeholder="Book author"
          className="book-author"
          value={author}
          onChange={(e) => setAuthor(e.target.value)}
        />

        <button type="submit" className="add-btn">
          Add Book
        </button>
      </form>
    </section>
  );
};

AddBook.propTypes = {
  addBook: PropTypes.func.isRequired,
};

export default AddBook;

import React from 'react';
import PropTypes from 'prop-types';

const BookItem = ({ book }) => (
  <div>
    <h3>{book.title}</h3>
    <p>{book.author}</p>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
};

export default BookItem;

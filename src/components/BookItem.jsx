import React from 'react';
import { CircularProgressbar } from 'react-circular-progressbar';
import PropTypes from 'prop-types';
import '../styles/BookCard.css';
import 'react-circular-progressbar/dist/styles.css';

const BookItem = ({ book, deleteBook }) => {
  const progress = Math.floor(Math.random() * 101);

  return (
    <li className="my-5 p-5 border">
      <div className="left-side">
        <h4 className="category">Science Fiction</h4>
        <h3 className="title">{book.title}</h3>
        <h4 className="author">{book.author}</h4>
        <div className="option-buttons">
          <button type="button">comments</button>
          <button type="button" onClick={() => deleteBook(book.item_id)}>
            Remove
          </button>
          <button type="button">Edit</button>
        </div>
      </div>
      <div className="right-side">
        <div className="book-progress">
          <div className="circle">
            <CircularProgressbar
              value={progress}
              styles={{
                path: {
                  stroke: `rgb(2, 144, 255,${progress / 100})`,
                },
              }}
            />
          </div>
          <div className="percentage">
            {`${progress}%`}
            <span className="completed">Completed</span>
          </div>
        </div>

        <div className="book-chapters">
          <h4 className="current-chapter">Current Chapter</h4>
          <h3 className="chapter">Introduction</h3>
          <button type="button" className="progress-btn">
            Update Progress
          </button>
        </div>
      </div>
    </li>
  );
};

BookItem.propTypes = {
  book: PropTypes.shape({
    item_id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookItem;

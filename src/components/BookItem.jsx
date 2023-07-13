import PropTypes from 'prop-types';

const BookItem = ({ book, deleteBook }) => (
  <div>
    <h3>{book.title}</h3>
    <p>
      By
      {book.author}
    </p>
    <button type="button" onClick={() => deleteBook(book.id)}>Delete</button>
  </div>
);

BookItem.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
  }).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookItem;

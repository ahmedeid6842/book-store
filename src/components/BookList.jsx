import PropTypes from 'prop-types';
import BookItem from './BookItem';

const BookList = ({ books, deleteBook }) => (
  <div>
    <h2>Book List</h2>
    {books.map((book) => (
      <BookItem key={book.item_id} book={book} deleteBook={deleteBook} />
    ))}
  </div>
);

BookList.propTypes = {
  books: PropTypes.arrayOf(
    PropTypes.shape({
      item_id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      author: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
  deleteBook: PropTypes.func.isRequired,
};

export default BookList;

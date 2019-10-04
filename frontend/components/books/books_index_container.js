import { connect } from 'react-redux';
import BooksIndex from './books_index';

const msp = state => {
    const { books } = state.entities;
    return { books: books.items };
};

export default connect(msp, null)(BooksIndex);
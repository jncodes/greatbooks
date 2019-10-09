import { connect } from 'react-redux';
import BooksIndex from './books_index';

const msp = state => {
    debugger
    const { books } = state.entities;
    return { 
        bookId: Object.keys(books),
        books: Object.values(books)
     };
};

export default connect(msp, null)(BooksIndex);
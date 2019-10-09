import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { book } from '../../actions/search_actions';
import BooksShow from './books_show';

// add addtoshelf, deletefromshelf

// const msp = state => {
//     const { books } = state.entities;
//     return { books: books.items };
// };

const msp = (state, props) => {
    debugger
    // const book = state.entities.books.items.find(book => {
    //     return props.history.location.pathname.includes(book.id + book.etag)
    // });
    const bookId = props.match.params.bookId;

    debugger
    return { 
        bookId: bookId,
        book: state.entities.books[bookId]
    };
};

const mdp = (dispatch, ownProps) => {
    debugger
    // look at ownProps
    return {
        fetchBook: bookId => dispatch(book(bookId))
    };
};

export default withRouter(connect(msp, mdp)(BooksShow));
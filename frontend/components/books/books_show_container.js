import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { book } from '../../actions/search_actions';
import BooksShow from './books_show';

// add addtoshelf, deletefromshelf

const msp = (state, props) => {
    const bookId = props.match.params.bookId;

    return { 
        bookId: bookId,
        book: state.entities.books[bookId]
    };
};

const mdp = (dispatch, ownProps) => {
    return {
        fetchBook: bookId => dispatch(book(bookId))
    };
};

export default withRouter(connect(msp, mdp)(BooksShow));
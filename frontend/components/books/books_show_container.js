import { connect } from 'react-redux';
import BooksShow from './books_show';
import { withRouter } from 'react-router-dom';

// add addtoshelf, deletefromshelf

const msp = state => {
    const { books } = state.entities;
    return { books: books.items };
    // if (state.entities.books.items) {
    //     book = state.entities.books.items.find(book => {
    //         props.history.location.pathname.includes(book.id + book.etag)
    //     })
    //     return { book: book };
    // } else { return {}; }
};

const mdp = (dispatch, ownProps) => {
    return {
        // search: query => dispatch(search(query))
    };
};

export default withRouter(connect(msp, mdp)(BooksShow));
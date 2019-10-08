import { connect } from 'react-redux';
import BooksShow from './books_show';
// add addtoshelf, deletefromshelf

const msp = state => {
    const { books } = state.entities;
    debugger
    return { books: books.items };
    // debugger
    // if (state.entities.books.items) {
    //     book = state.entities.books.items.find(book => {
    //         debugger
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

export default connect(msp, mdp)(BooksShow);
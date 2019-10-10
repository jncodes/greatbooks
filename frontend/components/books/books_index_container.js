import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { genre } from '../../actions/search_actions';
import BooksIndex from './books_index';

const msp = (state, props) => {
    const { books } = state.entities;
    const subject = props.match.params.subject;
    return { 
        bookId: Object.keys(books),
        books: Object.values(books),
        subject: subject
     };
};

const mdp = (dispatch, ownProps) => {
    return {
        genre: subject => dispatch(genre(subject))
    };
};

export default withRouter(connect(msp, mdp)(BooksIndex));
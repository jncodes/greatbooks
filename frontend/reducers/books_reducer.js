import { BOOK_SEARCH, GENERAL_SEARCH, TITLE_SEARCH, AUTHOR_SEARCH, SUBJECT_SEARCH } from '../actions/search_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    let newState = Object.assign({}, state);
    switch (action.type) {
        case GENERAL_SEARCH:
            action.query.items.map(book => {
                 { newState[book.id] = book.volumeInfo };
            });
            return newState;
        case TITLE_SEARCH:
            action.query.items.map(book => {
                { newState[book.id] = book.volumeInfo };
            });
            return newState;
        case AUTHOR_SEARCH:
            action.query.items.map(book => {
                { newState[book.id] = book.volumeInfo };
            });
            return newState;
        case SUBJECT_SEARCH:
            action.query.items.map(book => {
                { newState[book.id] = book.volumeInfo };
            });
            return newState;
        case BOOK_SEARCH:
            return Object.assign({}, state, { [action.book.id]: action.book.volumeInfo });
        default:
            return state;
    }
};
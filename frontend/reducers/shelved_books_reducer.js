import { ADD_BOOK, REMOVE_BOOK, RECEIVE_ALL_SHELVED_BOOKS } from '../actions/books_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case ADD_BOOK:
            return Object.assign({}, state, 
                { [action.shelved_book.id]: action.shelved_book });
        case REMOVE_BOOK:
            let newState = merge({}, state);
            delete newState[action.id];
            return newState;
        case RECEIVE_ALL_SHELVED_BOOKS:
            return Object.assign({}, state, action.shelved_books)
        default:
            return state;
    }
};
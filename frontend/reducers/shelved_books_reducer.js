import { ADD_BOOK, REMOVE_BOOK, RECEIVE_ALL_SHELVED_BOOKS } from '../actions/books_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    // debugger
    switch (action.type) {
        case ADD_BOOK:
            // debugger

            // return Object.assign({}, state, {
            //     [action.shelf.id]: [].push(action.book)
            // });
            // const newState = Object.assign({}, state);
            // newState[shelvedBookIds].push(action.book.id);
        case REMOVE_BOOK:
            // debugger
            // return ;
        case RECEIVE_ALL_SHELVED_BOOKS:
            return Object.assign({}, state, action.shelved_books)
        default:
            return state;
    }
};
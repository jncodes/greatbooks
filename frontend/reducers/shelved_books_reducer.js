import { ADD_BOOK, REMOVE_BOOK } from '../actions/books_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    debugger
    switch (action.type) {
        case ADD_BOOK:
            debugger
            return Object.assign({}, state, {
                [action.shelf.id]: [].push(action.book)
            });
        case REMOVE_BOOK:
            debugger
            return ;
        default:
            return state;
    }
};
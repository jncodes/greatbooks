import { RECEIVE_ALL_SHELVES, RECEIVE_SHELF, REMOVE_SHELF } from '../actions/shelves_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_ALL_SHELVES:
            return Object.assign({}, state, action.shelves);
        case RECEIVE_SHELF:
            return Object.assign({}, state, { [action.shelf.id]: action.shelf });
        case REMOVE_SHELF:
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};
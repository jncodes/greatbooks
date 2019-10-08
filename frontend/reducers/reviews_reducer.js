import { RECEIVE_REVIEW, REMOVE_REVIEW } from '../actions/reviews_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_REVIEW:
            return Object.assign({}, state, action.review);
        case REMOVE_REVIEW:
            let newState = Object.assign({}, state);
            delete newState[action.id];
            return newState;
        default:
            return state;
    }
};
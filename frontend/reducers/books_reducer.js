import { GENERAL_SEARCH, TITLE_SEARCH, AUTHOR_SEARCH, SUBJECT_SEARCH } from '../actions/search_actions';

export default (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case GENERAL_SEARCH:
            return Object.assign({}, state, action.query );
        case TITLE_SEARCH:
            return Object.assign({}, state, action.query );
        case AUTHOR_SEARCH:
            return Object.assign({}, state, action.query );
        case SUBJECT_SEARCH:
            return Object.assign({}, state, action.query );
        default:
            return state;
    }
};
import { combineReducers } from 'redux';
import usersReducer from './users_reducer';
import booksReducer from './books_reducer';
import shelvedbooksReducer from './shelved_books_reducer';
import shelvesReducer from './shelves_reducer';

const entitiesReducer = combineReducers({
    users: usersReducer,
    books: booksReducer,
    shelvedbooks: shelvedbooksReducer,
    shelves: shelvesReducer
});

export default entitiesReducer;
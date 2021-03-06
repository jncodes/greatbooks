import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";

//test
    // import { signup, login, logout } from './util/session_api_util';
    // import { signup, login, logout } from './actions/session_actions';
    // import * as SearchApi from './util/search_util';
    // import { add_to_shelf, remove_from_shelf, fetchShelvedBooks } from './util/books_api_util';
    // import { add_to_shelf, remove_from_shelf, fetchShelvedBooks } from './actions/books_actions';
    // import { fetchShelves, createShelf, updateShelf, deleteShelf, fetchShelf } from './actions/shelves_actions';
    // import { fetchShelves, createShelf, updateShelf, deleteShelf, fetchShelf } from './util/shelves_api_util';
    // import * as SearchAction from './actions/search_actions';
    // import { book } from './util/search_util';
//test

document.addEventListener('DOMContentLoaded', () => {
    //test

        // window.signup = signup;
        // window.login = login;
        // window.logout = logout;
        
        // const store = configureStore();
        // window.getState = store.getState;
        // window.dispatch = store.dispatch;
        
        // window.signup = signup;
        // window.login = login;
        // window.logout = logout;

    //test
        
    let store;
    if (window.currentUser) {
        const preloadedState = {
            entities: {
                users: { [window.currentUser.id]: window.currentUser }
            },
            session: { id: window.currentUser.id }
        };
        store = configureStore(preloadedState);
        delete window.currentUser;
    } else {
        store = configureStore();
    }
    
    //test
    // window.getState = store.getState;
    // window.dispatch = store.dispatch;
    //test

    //test
    // window.search = SearchApi.search;
    // window.title = SearchApi.title;
    // window.author = SearchApi.author;
    // window.genre = SearchApi.genre;
    // window.book = SearchApi.book;
    // window.actionbook = SearchAction.book;
    // window.book = book
    //test

    //test
    // window.add_to_shelf = add_to_shelf;
    // window.remove_from_shelf = remove_from_shelf;
    // window.fetchShelvedBooks = fetchShelvedBooks;

    // window.fetchShelves = fetchShelves;
    // window.fetchShelf = fetchShelf;
    // window.createShelf = createShelf;
    // window.updateShelf = updateShelf;
    // window.deleteShelf = deleteShelf;
    //test
        
    const root = document.getElementById('root');
    ReactDOM.render(<Root store={store} />, root);
    
    // ReactDOM.render(<h1>Meet your next favorite book.</h1>, root);
});
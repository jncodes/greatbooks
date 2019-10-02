import React from 'react';
import ReactDOM from 'react-dom';
import configureStore from './store/store';
import Root from "./components/root";

//test
    // import { signup, login, logout } from './util/session_api_util';
//test

document.addEventListener('DOMContentLoaded', () => {
    //test

        // window.signup = signup;
        // window.login = login;
        // window.logout = logout;

        // const store = configureStore();
        // window.getState = store.getState;
        // window.dispatch = store.dispatch;

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

    const root = document.getElementById('root');
    // ReactDOM.render(<h1>Meet your next favorite book.</h1>, root);
    ReactDOM.render(<Root store={store} />, root);
});
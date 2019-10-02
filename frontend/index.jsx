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

    const store = configureStore();

    const root = document.getElementById('root');
    // ReactDOM.render(<h1>Meet your next favorite book.</h1>, root);
    ReactDOM.render(<Root store={store} />, root);
});
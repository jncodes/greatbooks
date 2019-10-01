import React from 'react';
import ReactDOM from 'react-dom';

//test
import { signup, login, logout } from './util/session_api_util';
//test

document.addEventListener('DOMContentLoaded', () => {
    //test
    window.signup = signup;
    window.login = login;
    window.logout = logout;
    //test

    // const store = configureStore();

    const root = document.getElementById('root');
    ReactDOM.render(<h1>Meet your next favorite book.</h1>, root);
    // ReactDOM.render(<Root store={store} />, root);
});